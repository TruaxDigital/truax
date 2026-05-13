"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef } from "react";

// Static Gradient Mesh Background - no animation for performance
function GradientMeshBackground() {
  return (
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 75% 15%, rgba(39, 170, 225, 0.2) 0%, transparent 50%),
          radial-gradient(ellipse 60% 50% at 15% 60%, rgba(43, 57, 144, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse 50% 40% at 70% 85%, rgba(38, 36, 102, 0.12) 0%, transparent 50%)
        `,
      }}
    />
  );
}



// Fast word animation for first line
function KineticText({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) {
  const words = text.split(" ");
  
  return (
    <motion.span
      style={{ display: "flex", flexWrap: "wrap", overflow: "hidden" }}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.4,
            delay: delay + wordIndex * 0.08,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          style={{ 
            display: "inline-block",
            marginRight: "0.3em",
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Letter-by-letter animation for "with heart" - the wow factor
function KineticLetters({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) {
  const words = text.split(" ");
  let charIndex = 0;
  
  return (
    <motion.span
      style={{ display: "flex", flexWrap: "wrap", overflow: "hidden" }}
      className={className}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: "inline-flex", marginRight: "0.3em" }}>
          {word.split("").map((char) => {
            const currentIndex = charIndex++;
            return (
              <motion.span
                key={currentIndex}
                initial={{ opacity: 0, y: 40, rotateX: -60 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.5,
                  delay: delay + currentIndex * 0.05,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                style={{ 
                  display: "inline-block",
                  transformOrigin: "bottom",
                }}
              >
                {char}
              </motion.span>
            );
          })}
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
      {/* Animated Gradient Mesh Background */}
      <GradientMeshBackground />



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
                <KineticLetters text="with heart." delay={0.35} />
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
