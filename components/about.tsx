"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual with parallax */}
          <motion.div
            initial={{ opacity: 0, x: -80, rotateY: 15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -80, rotateY: 15 }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ y: imageY, perspective: 1000 }}
            className="relative max-w-lg mx-auto lg:mx-0"
          >
            <motion.div 
              className="aspect-[4/3] rounded-xl overflow-hidden border border-[#262466] bg-[#12121f]"
              whileHover={{ scale: 1.02, rotateY: -5 }}
              transition={{ duration: 0.4 }}
            >
              <Image 
                src="/images/illustration-strategy.jpg" 
                alt="Digital Strategy Illustration" 
                width={600}
                height={450}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
            {/* Floating stat card with bounce */}
            <motion.div 
              className="absolute -bottom-6 -right-6 p-6 rounded-xl bg-[#12121f] border border-[#262466] shadow-brand"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <p className="text-4xl font-bold text-[#27AAE1] font-mono">20+</p>
              <p className="text-sm text-muted-foreground">Years in marketing</p>
            </motion.div>
          </motion.div>

          {/* Right - Content with staggered reveals */}
          <motion.div
            style={{ y: contentY }}
          >
            <motion.p 
              className="text-[#27AAE1] font-medium mb-4"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Truax Marketing
            </motion.p>
            <motion.h2 
              className="text-4xl md:text-5xl font-semibold mb-6 tracking-display"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Human-first in a data-driven world
            </motion.h2>
            <motion.div 
              className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p>
                We take a human-first approach to developing creative strategies, 
                scalable growth systems, and targeted communications. We connect with 
                individuals throughout their journey: from awareness to advocacy.
              </p>
              <p>
                In twenty years as a marketing leader across industries, our founder 
                never found an agency worth the retainer. Slow responses, generic reports, 
                and cookie-cutter strategies drove the creation of something different.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link href="/about">
                <motion.div
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="inline-block"
                >
                  <Button size="lg" variant="outline" className="group border-[#262466] hover:bg-[#262466]/20 hover:border-[#27AAE1]">
                    Meet the team
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats row with staggered reveal */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
          {[
            { stat: "< 24hr", label: "Response time" },
            { stat: "Zero", label: "Hidden fees" },
            { stat: "100%", label: "Senior talent" },
            { stat: "3+ yrs", label: "Avg client tenure" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.8 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.05,
                borderColor: "rgba(39, 170, 225, 0.5)",
              }}
              className="text-center p-6 rounded-xl border border-[#262466] bg-[#12121f]/50 transition-colors"
            >
              <motion.p 
                className="text-3xl md:text-4xl font-bold text-[#27AAE1] font-mono mb-2"
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
              >
                {item.stat}
              </motion.p>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
