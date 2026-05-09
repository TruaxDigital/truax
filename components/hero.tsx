"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

// Aurora / Northern Lights Background
function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Aurora wave 1 */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(39, 170, 225, 0.03) 30%, rgba(43, 57, 144, 0.08) 50%, rgba(38, 36, 102, 0.05) 70%, transparent 100%)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      


      {/* Gradient overlay for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, transparent 0%, #0a0a12 70%)",
        }}
      />
    </div>
  );
}

// 3D Floating Elements
function FloatingGeometry({ position, color, speed = 1 }: { position: [number, number, number], color: string, speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={2 * speed} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[0.5, 1]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.6}
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function FloatingTorus({ position, color }: { position: [number, number, number], color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[0.6, 0.2, 16, 32]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.5}
          distort={0.2}
          speed={1.5}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
    </Float>
  );
}

function FloatingSphere({ position, color, size = 0.4 }: { position: [number, number, number], color: string, size?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.7}
          distort={0.5}
          speed={3}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
}

function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#27AAE1" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#2B3990" />
      
      {/* Main floating elements */}
      <FloatingGeometry position={[3, 1, -2]} color="#27AAE1" speed={1.2} />
      <FloatingGeometry position={[-3.5, -0.5, -3]} color="#2B3990" speed={0.8} />
      <FloatingTorus position={[4, -1.5, -4]} color="#262466" />
      <FloatingSphere position={[-4, 1.5, -2.5]} color="#27AAE1" size={0.5} />
      <FloatingSphere position={[2, -2, -3]} color="#2B3990" size={0.3} />
      <FloatingGeometry position={[-2, 2, -4]} color="#27AAE1" speed={0.6} />
    </>
  );
}

// Kinetic Typography - Letter by letter animation
function KineticText({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      style={{ display: "flex", flexWrap: "wrap", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: "inline-flex", marginRight: "0.3em" }}>
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={child}
              style={{ 
                display: "inline-block",
                transformOrigin: "bottom",
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}

// Gradient text with shimmer effect
function ShimmerText({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      style={{
        background: "linear-gradient(90deg, #27AAE1 0%, #2B3990 50%, #27AAE1 100%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.span>
  );
}

// Scroll-triggered section wrapper
function ScrollReveal({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#0a0a12]">
      {/* Aurora Background */}
      <AuroraBackground />

      {/* 3D Canvas */}
      <div className="absolute inset-0 pointer-events-none">
        <Suspense fallback={null}>
          <Canvas
            camera={{ position: [0, 0, 6], fov: 50 }}
            style={{ background: "transparent" }}
            gl={{ alpha: true, antialias: true }}
          >
            <Scene3D />
          </Canvas>
        </Suspense>
      </div>

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div 
        style={{ opacity, scale, y: smoothY }} 
        className="relative z-10 max-w-7xl mx-auto px-6 w-full"
      >
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content - 7 columns */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#27AAE1]/30 bg-[#27AAE1]/5 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#27AAE1] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#27AAE1]" />
              </span>
              <span className="text-sm font-medium text-[#27AAE1]">Now offering AI Sales Agents</span>
            </motion.div>

            {/* Kinetic Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-6 tracking-tight">
              <span className="block"><KineticText text="Digital marketing" delay={0.2} /></span>
              <ShimmerText>
                <KineticText text="with heart." delay={0.8} />
              </ShimmerText>
            </h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-base sm:text-lg text-gray-400 max-w-lg mb-10 leading-relaxed"
            >
              A boutique agency helping businesses grow through AI implementation, 
              strategic SEO, CRM integrations, and stunning web experiences.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link href="/meet">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button size="lg" className="h-12 px-6 text-sm font-medium group bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black shadow-lg shadow-[#27AAE1]/25">
                    Book a Discovery Call
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/services">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button size="lg" variant="outline" className="h-12 px-6 text-sm font-medium group border-[#262466] hover:bg-[#262466]/20 hover:border-[#27AAE1]">
                    View Services
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="flex items-center gap-4 text-sm text-gray-500"
            >
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.svg 
                    key={i} 
                    className="w-4 h-4 text-[#27AAE1]" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.6 + i * 0.1, type: "spring" }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
              <span>Trusted by 50+ growing businesses</span>
            </motion.div>
          </div>

          {/* Right side - Stats card - 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 50 }}
            className="lg:col-span-5"
            style={{ perspective: "1000px" }}
          >
            <motion.div 
              className="relative p-8 rounded-xl border border-[#262466] bg-[#12121f]/80 backdrop-blur-md shadow-2xl"
              whileHover={{ 
                rotateY: 5,
                rotateX: -5,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(39, 170, 225, 0.25)",
              }}
              transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Glowing border effect */}
              <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-[#27AAE1]/20 via-transparent to-[#2B3990]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Brand accent corner */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-xl">
                <motion.div 
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, transparent 50%, #27AAE1 50%)",
                  }}
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
              
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-6 font-medium">Why work with us</p>
              
              <div className="space-y-6">
                {[
                  { value: "20+", label: "years combined experience", delay: 0.8 },
                  { value: "2.4x", label: "average ROI increase", delay: 1 },
                  { value: "48hr", label: "response guarantee", delay: 1.2 },
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-baseline gap-4"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: stat.delay, type: "spring", stiffness: 100 }}
                  >
                    <motion.span 
                      className="text-5xl font-bold text-[#27AAE1] font-mono"
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: stat.delay + 0.2, type: "spring", stiffness: 200 }}
                    >
                      {stat.value}
                    </motion.span>
                    <span className="text-gray-400">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-600 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-[#262466] flex justify-center pt-2">
            <motion.div 
              className="w-1 h-2 rounded-full bg-[#27AAE1]"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Export ScrollReveal for use in other sections
export { ScrollReveal };
