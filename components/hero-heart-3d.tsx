"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshTransmissionMaterial, Environment } from "@react-three/drei";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";

// Create a heart shape geometry
function createHeartShape() {
  const shape = new THREE.Shape();
  const x = 0, y = 0;
  
  shape.moveTo(x, y + 0.5);
  shape.bezierCurveTo(x, y + 0.5, x - 0.1, y, x - 0.5, y);
  shape.bezierCurveTo(x - 1, y, x - 1, y + 0.7, x - 1, y + 0.7);
  shape.bezierCurveTo(x - 1, y + 1.1, x - 0.7, y + 1.54, x, y + 1.9);
  shape.bezierCurveTo(x + 0.7, y + 1.54, x + 1, y + 1.1, x + 1, y + 0.7);
  shape.bezierCurveTo(x + 1, y + 0.7, x + 1, y, x + 0.5, y);
  shape.bezierCurveTo(x + 0.1, y, x, y + 0.5, x, y + 0.5);
  
  return shape;
}

// Pulsating heart mesh
function Heart() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const time = useRef(0);
  
  const heartGeometry = useMemo(() => {
    const shape = createHeartShape();
    const extrudeSettings = {
      depth: 0.5,
      bevelEnabled: true,
      bevelSegments: 8,
      steps: 2,
      bevelSize: 0.15,
      bevelThickness: 0.15,
    };
    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  useFrame((state, delta) => {
    time.current += delta;
    
    if (meshRef.current) {
      // Gentle heartbeat pulsation
      const pulse = 1 + Math.sin(time.current * 2.5) * 0.06;
      meshRef.current.scale.setScalar(pulse);
      
      // Subtle rotation
      meshRef.current.rotation.y = Math.sin(time.current * 0.3) * 0.15;
      meshRef.current.rotation.x = Math.PI + Math.sin(time.current * 0.5) * 0.05;
    }
    
    if (glowRef.current) {
      // Glow pulsates with heart
      const glowPulse = 1.1 + Math.sin(time.current * 2.5) * 0.08;
      glowRef.current.scale.setScalar(glowPulse);
      glowRef.current.rotation.y = meshRef.current?.rotation.y || 0;
      glowRef.current.rotation.x = meshRef.current?.rotation.x || Math.PI;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.5}
      floatingRange={[-0.1, 0.1]}
    >
      <group position={[0, 0, 0]}>
        {/* Outer glow */}
        <mesh
          ref={glowRef}
          geometry={heartGeometry}
          position={[0, -1, -0.25]}
          rotation={[Math.PI, 0, 0]}
          scale={1.15}
        >
          <meshBasicMaterial
            color="#27AAE1"
            transparent
            opacity={0.15}
            side={THREE.BackSide}
          />
        </mesh>
        
        {/* Main heart with transmission material for glass effect */}
        <mesh
          ref={meshRef}
          geometry={heartGeometry}
          position={[0, -1, -0.25]}
          rotation={[Math.PI, 0, 0]}
        >
          <MeshTransmissionMaterial
            backside
            samples={8}
            resolution={512}
            transmission={0.95}
            roughness={0.1}
            thickness={0.5}
            ior={1.5}
            chromaticAberration={0.06}
            anisotropy={0.3}
            distortion={0.1}
            distortionScale={0.3}
            temporalDistortion={0.2}
            clearcoat={1}
            attenuationDistance={0.5}
            attenuationColor="#27AAE1"
            color="#27AAE1"
          />
        </mesh>

        {/* Inner core for depth */}
        <mesh
          geometry={heartGeometry}
          position={[0, -1, -0.25]}
          rotation={[Math.PI, 0, 0]}
          scale={0.7}
        >
          <meshStandardMaterial
            color="#2B3990"
            emissive="#2B3990"
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>
      </group>
    </Float>
  );
}

// Floating particles around the heart
function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const count = 50;
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const radius = 2 + Math.random() * 1.5;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) - 0.5;
      positions[i * 3 + 2] = radius * Math.cos(phi);
      scales[i] = Math.random() * 0.5 + 0.5;
    }
    
    return { positions, scales };
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#27AAE1"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Main scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#27AAE1" />
      <pointLight position={[0, 0, 3]} intensity={1} color="#27AAE1" distance={10} />
      
      <Heart />
      <Particles />
      
      <Environment preset="night" />
    </>
  );
}

export function HeroHeart3D() {
  return (
    <div className="absolute right-0 top-0 w-full lg:w-[55%] h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      
      {/* Gradient overlay for blending */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, #0a0a12 0%, transparent 30%, transparent 100%)",
        }}
      />
    </div>
  );
}
