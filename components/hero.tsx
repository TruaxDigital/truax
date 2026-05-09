"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef, useMemo, useEffect, useState } from "react";

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

// Network Visualization - AI to People to Profit
function NetworkVisualization() {
  // Define nodes: AI/Data (left), People/Business (center), Growth/Profit (right)
  const nodes = useMemo(() => [
    // AI/Data nodes (left side)
    { id: "ai1", x: 8, y: 20, type: "ai", label: "AI" },
    { id: "ai2", x: 5, y: 40, type: "ai", label: "Data" },
    { id: "ai3", x: 10, y: 60, type: "ai", label: "ML" },
    { id: "ai4", x: 3, y: 75, type: "ai", label: "Auto" },
    
    // People/Business nodes (center)
    { id: "people1", x: 35, y: 25, type: "people", label: "" },
    { id: "people2", x: 40, y: 50, type: "people", label: "" },
    { id: "people3", x: 32, y: 70, type: "people", label: "" },
    
    // Growth/Profit nodes (right side)
    { id: "growth1", x: 70, y: 30, type: "growth", label: "" },
    { id: "growth2", x: 75, y: 55, type: "growth", label: "" },
    { id: "growth3", x: 68, y: 78, type: "growth", label: "" },
  ], []);
  
  // Define connections
  const connections = useMemo(() => [
    // AI to People
    { from: "ai1", to: "people1", delay: 0 },
    { from: "ai1", to: "people2", delay: 0.3 },
    { from: "ai2", to: "people1", delay: 0.5 },
    { from: "ai2", to: "people2", delay: 0.8 },
    { from: "ai3", to: "people2", delay: 1 },
    { from: "ai3", to: "people3", delay: 1.2 },
    { from: "ai4", to: "people3", delay: 1.5 },
    // People to Growth
    { from: "people1", to: "growth1", delay: 1.8 },
    { from: "people1", to: "growth2", delay: 2 },
    { from: "people2", to: "growth1", delay: 2.2 },
    { from: "people2", to: "growth2", delay: 2.4 },
    { from: "people2", to: "growth3", delay: 2.6 },
    { from: "people3", to: "growth2", delay: 2.8 },
    { from: "people3", to: "growth3", delay: 3 },
  ], []);

  const getNode = (id: string) => nodes.find(n => n.id === id)!;
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg 
        viewBox="0 0 100 100" 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[60%] h-[80%] opacity-40"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradient for connections */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#27AAE1" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#2B3990" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#27AAE1" stopOpacity="0.8" />
          </linearGradient>
          
          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Pulse animation for data flow */}
          <linearGradient id="flowGradient">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="40%" stopColor="#27AAE1" />
            <stop offset="60%" stopColor="#27AAE1" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        {/* Connection lines - static for performance, pulses animate via CSS */}
        {connections.map((conn, i) => {
          const from = getNode(conn.from);
          const to = getNode(conn.to);
          return (
            <g key={i}>
              {/* Base line - no initial animation */}
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="#262466"
                strokeWidth="0.15"
                opacity="0.4"
              />
              {/* Animated pulse along the line - staggered with CSS animation */}
              <circle
                r="0.6"
                fill="#27AAE1"
                opacity="0.7"
                style={{
                  animation: `pulse-move-${i % 4} 4s ease-in-out ${conn.delay * 0.3}s infinite`,
                }}
              >
                <animate
                  attributeName="cx"
                  values={`${from.x};${to.x};${from.x}`}
                  dur="4s"
                  begin={`${conn.delay * 0.3}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  values={`${from.y};${to.y};${from.y}`}
                  dur="4s"
                  begin={`${conn.delay * 0.3}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0;0.8;0.8;0"
                  dur="4s"
                  begin={`${conn.delay * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}
        
        {/* Nodes - simplified with CSS animations for smooth performance */}
        {nodes.map((node, i) => (
          <g key={node.id} style={{ opacity: 0.9 }}>
            {/* Outer glow ring - CSS animation */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.type === "ai" ? 3 : node.type === "people" ? 4 : 3.5}
              fill="none"
              stroke={node.type === "ai" ? "#27AAE1" : node.type === "people" ? "#2B3990" : "#27AAE1"}
              strokeWidth="0.2"
              opacity="0.3"
            >
              <animate
                attributeName="r"
                values={`${node.type === "ai" ? 3 : node.type === "people" ? 4 : 3.5};${node.type === "ai" ? 4 : node.type === "people" ? 5 : 4.5};${node.type === "ai" ? 3 : node.type === "people" ? 4 : 3.5}`}
                dur="3s"
                begin={`${i * 0.2}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.3;0.1;0.3"
                dur="3s"
                begin={`${i * 0.2}s`}
                repeatCount="indefinite"
              />
            </circle>
            
            {/* Main node - static, no animation needed */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.type === "ai" ? 2 : node.type === "people" ? 2.5 : 2.2}
              fill={node.type === "ai" ? "#27AAE1" : node.type === "people" ? "#2B3990" : "#27AAE1"}
              filter="url(#glow)"
            />
            
            {/* Icon inside node - no animation */}
            <g>
              {node.type === "ai" && (
                // Brain/chip icon for AI
                <g transform={`translate(${node.x - 1}, ${node.y - 1})`}>
                  <rect x="0.3" y="0.3" width="1.4" height="1.4" rx="0.2" fill="none" stroke="#0a0a12" strokeWidth="0.15" />
                  <line x1="0" y1="0.7" x2="0.3" y2="0.7" stroke="#0a0a12" strokeWidth="0.1" />
                  <line x1="0" y1="1.3" x2="0.3" y2="1.3" stroke="#0a0a12" strokeWidth="0.1" />
                  <line x1="1.7" y1="0.7" x2="2" y2="0.7" stroke="#0a0a12" strokeWidth="0.1" />
                  <line x1="1.7" y1="1.3" x2="2" y2="1.3" stroke="#0a0a12" strokeWidth="0.1" />
                  <circle cx="1" cy="1" r="0.3" fill="#0a0a12" />
                </g>
              )}
              {node.type === "people" && (
                // Person icon
                <g transform={`translate(${node.x - 1.2}, ${node.y - 1.2})`}>
                  <circle cx="1.2" cy="0.7" r="0.5" fill="#0a0a12" />
                  <path d="M0.4 2.2 Q1.2 1.4 2 2.2" fill="none" stroke="#0a0a12" strokeWidth="0.25" strokeLinecap="round" />
                </g>
              )}
              {node.type === "growth" && (
                // Trending up arrow
                <g transform={`translate(${node.x - 1}, ${node.y - 1})`}>
                  <polyline 
                    points="0.3,1.5 0.8,1 1.3,1.3 1.7,0.5" 
                    fill="none" 
                    stroke="#0a0a12" 
                    strokeWidth="0.2" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline 
                    points="1.3,0.5 1.7,0.5 1.7,0.9" 
                    fill="none" 
                    stroke="#0a0a12" 
                    strokeWidth="0.2" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              )}
            </g>
          </g>
        ))}
        
        {/* Floating particles - reduced count, CSS animations */}
        {[...Array(6)].map((_, i) => {
          const startX = 15 + (i % 3) * 30;
          const startY = 20 + Math.floor(i / 3) * 40;
          return (
            <circle
              key={`particle-${i}`}
              r="0.3"
              fill="#27AAE1"
              cx={startX}
              cy={startY}
            >
              <animate
                attributeName="cx"
                values={`${startX};${startX + 15};${startX}`}
                dur={`${8 + i}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                values={`${startY};${startY - 10};${startY}`}
                dur={`${8 + i}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.1;0.4;0.1"
                dur={`${8 + i}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}
      </svg>
    </div>
  );
}

// Kinetic Typography - Word by word animation (optimized for smooth loading)
function KineticText({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
    hidden: {
      opacity: 0,
      y: 30,
    },
  };

  return (
    <motion.span
      style={{ display: "flex", flexWrap: "wrap", overflow: "hidden", willChange: "opacity" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          variants={child}
          style={{ 
            display: "inline-block",
            marginRight: "0.3em",
            willChange: "transform, opacity",
          }}
        >
          {word}
        </motion.span>
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

      {/* Network Visualization - AI to People to Profit */}
      <NetworkVisualization />

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
              <span className="block"><KineticText text="Digital marketing" delay={0.1} /></span>
              <ShimmerText>
                <KineticText text="with heart." delay={0.4} />
              </ShimmerText>
            </h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-base sm:text-lg text-gray-400 max-w-lg mb-10 leading-relaxed"
            >
              A boutique agency helping businesses grow through AI implementation, 
              strategic SEO, CRM integrations, and stunning web experiences.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
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
              transition={{ duration: 0.4, delay: 0.8 }}
              className="flex items-center gap-4 text-sm text-gray-500"
            >
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg 
                    key={i} 
                    className="w-4 h-4 text-[#27AAE1]" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span>Trusted by 50+ growing businesses</span>
            </motion.div>
          </div>

          {/* Right side - Stats card - 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:col-span-5"
          >
            <div 
              className="relative p-8 rounded-xl border border-[#262466] bg-[#12121f]/80 backdrop-blur-md shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(39,170,225,0.25)] transition-shadow duration-500"
            >
              {/* Glowing border effect */}
              <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-[#27AAE1]/20 via-transparent to-[#2B3990]/20 opacity-0 hover:opacity-100 transition-opacity" />
              
              {/* Brand accent corner */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-xl">
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: "linear-gradient(135deg, transparent 50%, #27AAE1 50%)",
                  }}
                />
              </div>
              
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-6 font-medium">Why work with us</p>
              
              <div className="space-y-6">
                {[
                  { value: "20+", label: "years combined experience" },
                  { value: "2.4x", label: "average ROI increase" },
                  { value: "48hr", label: "response guarantee" },
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-baseline gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                  >
                    <span className="text-5xl font-bold text-[#27AAE1] font-mono">
                      {stat.value}
                    </span>
                    <span className="text-gray-400">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator - CSS animation for smooth performance */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 animate-bounce" style={{ animationDuration: "2s" }}>
          <span className="text-xs text-gray-600 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-[#262466] flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-[#27AAE1] animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// Export ScrollReveal for use in other sections
export { ScrollReveal };
