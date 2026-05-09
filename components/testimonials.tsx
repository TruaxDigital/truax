"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "More than execution",
    description: "While other agencies stick to a script, we adapt to your business. Proactive communication, not reactive ticket-closing.",
    highlight: "Proactive partner",
  },
  {
    title: "Direct access",
    description: "No junior account managers. You work directly with senior strategists who understand your business.",
    highlight: "Senior talent only",
  },
  {
    title: "Proven results",
    description: "Double-digit traffic growth for B2B clients. Measurable ROI, not vanity metrics in monthly reports.",
    highlight: "Real ROI focus",
  },
  {
    title: "Long-term partner",
    description: "We build relationships, not billable hours. Most clients stay 3+ years because the results compound.",
    highlight: "3+ year avg tenure",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Brand-inspired background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-25">
        <div 
          className="absolute inset-0 rounded-full blur-[120px]"
          style={{
            background: "radial-gradient(circle, #27AAE1 0%, #2B3990 40%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-[#27AAE1] font-medium mb-4">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-display">
            What makes us different
          </h2>
          <p className="text-xl text-muted-foreground">
            Built by a marketing leader frustrated with the status quo. Every process is designed around what we wish agencies did.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-xl border border-[#262466] bg-[#12121f]/50 hover:bg-[#12121f] hover:border-[#27AAE1]/50 transition-all duration-300 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#2B3990]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#27AAE1]/20 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#27AAE1]" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-xl font-semibold">{reason.title}</h3>
                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-[#27AAE1]/10 text-[#27AAE1] border border-[#27AAE1]/20">
                      {reason.highlight}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote/testimonial with Comet gradient */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-10 rounded-xl border border-[#262466] relative overflow-hidden"
        >
          {/* Comet gradient background */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: "linear-gradient(135deg, #2B3990 0%, #27AAE1 50%, #2B3990 100%)",
            }}
          />
          <div className="relative z-10">
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed text-center max-w-4xl mx-auto tracking-display">
              &ldquo;In twenty years as a marketing leader across industries, I never found an agency worth the retainer. 
              So I built one.&rdquo;
            </blockquote>
            <p className="text-center mt-6 text-muted-foreground">
              <span className="font-medium text-foreground">Aaron Truax</span> · Founder
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
