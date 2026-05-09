"use client";

import { motion, useInView } from "framer-motion";
import { Zap, Target, TrendingUp, Sparkles } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Growth",
    description: "We implement cutting-edge AI tools that automate lead generation, optimize campaigns in real-time, and turn data into actionable insights.",
    stat: "3x",
    statLabel: "faster optimization",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Reach your ideal customers with laser-focused targeting. Our data-driven approach ensures every dollar works harder.",
    stat: "47%",
    statLabel: "lower CAC",
  },
  {
    icon: TrendingUp,
    title: "Measurable Results",
    description: "No vanity metrics here. We focus on the numbers that matter: leads, conversions, and revenue growth.",
    stat: "2.4x",
    statLabel: "average ROI",
  },
  {
    icon: Zap,
    title: "Rapid Execution",
    description: "From strategy to implementation in days, not months. Our agile approach keeps you ahead of the competition.",
    stat: "48hr",
    statLabel: "turnaround",
  },
];

export function Features() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      {/* Brand-inspired beam accent */}
      <div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent 0%, #262466 20%, #27AAE1 50%, #262466 80%, transparent 100%)",
        }}
      />
      
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.p 
            className="text-[#27AAE1] font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Why Truax Marketing
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl font-semibold mb-6 tracking-display"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Marketing that moves the needle
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            We combine deep expertise with modern AI tools to deliver results that actually matter to your bottom line.
          </motion.p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 80, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 80, rotateX: -15 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.6 + index * 0.15,
                ease: [0.25, 0.4, 0.25, 1]
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative p-8 rounded-xl border border-[#262466] bg-[#12121f]/50 hover:bg-[#12121f] hover:border-[#27AAE1]/50 transition-all duration-300"
              style={{ transformPerspective: 1000 }}
            >
              {/* Stat - large and prominent */}
              <div className="mb-6">
                <span className="text-5xl font-bold text-[#27AAE1] font-mono">{feature.stat}</span>
                <p className="text-sm text-muted-foreground mt-1">{feature.statLabel}</p>
              </div>

              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#2B3990]/30 flex items-center justify-center group-hover:bg-[#27AAE1]/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-[#27AAE1]" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>

              {/* Hover accent - Comet gradient */}
              <div 
                className="absolute bottom-0 left-4 right-4 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, #2B3990 30%, #27AAE1 50%, #2B3990 70%, transparent 100%)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
