"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Globe, Search, Users, Megaphone, Server } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Bot,
    title: "AI Implementation",
    description: "Custom AI agents, workflow automation, and intelligent chatbots that handle real work.",
    href: "/ai-agents",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Fast, accessible websites with code-free content management. WordPress and headless builds.",
    href: "/services/web-design-development",
  },
  {
    icon: Search,
    title: "SEO & SEM",
    description: "Technical optimization, content strategy, and paid campaigns that drive qualified traffic.",
    href: "/services/search-engine-optimization",
  },
  {
    icon: Users,
    title: "Fractional CMO",
    description: "Senior marketing leadership without the overhead. Strategy, execution, and accountability.",
    href: "/services/fractional-cmo",
  },
  {
    icon: Megaphone,
    title: "Demand Generation",
    description: "Full-funnel campaigns from awareness to conversion. Paid media, email, and retargeting.",
    href: "/services/demand-generation",
  },
  {
    icon: Server,
    title: "Managed Hosting",
    description: "Cloud infrastructure with daily backups, security monitoring, and performance optimization.",
    href: "/services/managed-hosting",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6 relative">
      {/* Background with brand gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(38, 36, 102, 0.05) 50%, transparent 100%)",
        }}
      />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-[#27AAE1] font-medium mb-4">Our Services</p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-display">
            Everything you need to grow
          </h2>
          <p className="text-xl text-muted-foreground">
            From strategy to execution, we handle the heavy lifting so you can focus on running your business.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link href={service.href} className="block group h-full">
                <div className="relative h-full p-8 rounded-xl border border-[#262466] bg-[#12121f]/80 overflow-hidden transition-all duration-300 hover:border-[#27AAE1]/50 card-hover">
                  {/* Comet gradient overlay on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(135deg, rgba(43, 57, 144, 0.15) 0%, rgba(39, 170, 225, 0.1) 100%)",
                    }}
                  />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-[#2B3990]/30 flex items-center justify-center mb-6 group-hover:bg-[#27AAE1]/20 group-hover:scale-110 transition-all duration-300">
                      <service.icon className="w-7 h-7 text-[#27AAE1]" />
                    </div>

                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      {service.title}
                      <ArrowUpRight className="w-5 h-5 text-[#27AAE1] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-[#27AAE1] font-medium hover:underline underline-offset-4"
          >
            View all services
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
