"use client";

import { motion } from "framer-motion";
import {
  Target,
  Settings,
  Palette,
  Server,
  Users,
  BarChart3,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

interface TechItem {
  name: string;
  logo: string;
  color: string;
}

function TechLogo({ tech, index }: { tech: TechItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col items-center gap-3 p-5 rounded-xl bg-[#0f0f1a] border transition-all duration-300 cursor-default"
      style={{ 
        borderColor: isHovered ? `${tech.color}50` : "#262466",
        boxShadow: isHovered ? `0 0 30px ${tech.color}20` : "none",
      }}
    >
      <div className="w-10 h-10 flex items-center justify-center">
        <img 
          src={tech.logo} 
          alt={tech.name}
          className="w-8 h-8 transition-all duration-300"
          style={{ 
            filter: isHovered 
              ? "brightness(0) invert(1)" 
              : "brightness(0) invert(0.4)",
            opacity: isHovered ? 1 : 0.6,
          }}
        />
      </div>
      <span 
        className="text-sm text-center transition-colors duration-300"
        style={{
          color: isHovered ? tech.color : "#9ca3af",
        }}
      >
        {tech.name}
      </span>
    </motion.div>
  );
}

const services = [
  {
    icon: Target,
    title: "Demand Generation",
    description:
      "Paid advertising, conversion optimization, and lead generation strategies that deliver measurable results.",
    href: "/services/demand-generation",
  },
  {
    icon: Settings,
    title: "Digital Strategy",
    description:
      "Comprehensive digital strategy, analytics setup, and startup branding packages tailored to your goals.",
    href: "/services/digital-strategy",
  },
  {
    icon: Palette,
    title: "Web Design & Development",
    description:
      "Stunning websites with code-free content management, built for performance and conversions.",
    href: "/services/web-design-development",
  },
  {
    icon: Server,
    title: "Managed Hosting",
    description:
      "Cloud hosting with daily backups, security monitoring, and performance optimization included.",
    href: "/services/managed-hosting",
  },
  {
    icon: Users,
    title: "Fractional CMO",
    description:
      "Executive-level marketing leadership, AI integrations, and strategic guidance without the overhead.",
    href: "/services/fractional-cmo",
  },
  {
    icon: BarChart3,
    title: "Search Engine Optimization",
    description:
      "On-site optimization, backlink building, and Google Business Profile management. Affordable monthly plans.",
    href: "/services/search-engine-optimization",
  },
];

const techStack = [
  { 
    name: "WordPress", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/wordpress.svg",
    color: "#21759B",
  },
  { 
    name: "Webflow", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/webflow.svg",
    color: "#4353FF",
  },
  { 
    name: "HubSpot", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/hubspot.svg",
    color: "#FF7A59",
  },
  { 
    name: "Salesforce", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/salesforce.svg",
    color: "#00A1E0",
  },
  { 
    name: "Google Ads", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/googleads.svg",
    color: "#4285F4",
  },
  { 
    name: "Meta", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/meta.svg",
    color: "#0081FB",
  },
  { 
    name: "Mailchimp", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/mailchimp.svg",
    color: "#FFE01B",
  },
  { 
    name: "Klaviyo", 
    logo: "https://cdn.simpleicons.org/klaviyo/000000",
    color: "#12B980",
  },
  { 
    name: "Shopify", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/shopify.svg",
    color: "#96BF48",
  },
  { 
    name: "Google Analytics", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/googleanalytics.svg",
    color: "#E37400",
  },
  { 
    name: "Semrush", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/semrush.svg",
    color: "#FF642D",
  },
  { 
    name: "Ahrefs", 
    logo: "https://cdn.simpleicons.org/ahrefs/000000",
    color: "#FF6B00",
  },
  { 
    name: "Zapier", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/zapier.svg",
    color: "#FF4A00",
  },
  { 
    name: "Slack", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/slack.svg",
    color: "#4A154B",
  },
  { 
    name: "Notion", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/notion.svg",
    color: "#FFFFFF",
  },
  { 
    name: "Stripe", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/stripe.svg",
    color: "#635BFF",
  },
  { 
    name: "LinkedIn", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/linkedin.svg",
    color: "#0A66C2",
  },
  { 
    name: "Canva", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/canva.svg",
    color: "#00C4CC",
  },
  { 
    name: "Figma", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/figma.svg",
    color: "#F24E1E",
  },
  { 
    name: "Vercel", 
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/vercel.svg",
    color: "#FFFFFF",
  },
];

export function ServicesPageContent() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 mb-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#27AAE1]/10 via-[#2B3990]/5 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-[#27AAE1] font-medium mb-4 tracking-wide">Our Services</p>
            <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight leading-[1.1]">
              Full-service digital
              <br />
              <span className="text-[#27AAE1]">marketing solutions</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              From strategy to execution, we provide everything you need to grow your 
              online presence and generate more leads.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.href} className="block h-full">
                  <div className="group h-full p-8 rounded-2xl bg-[#0f0f1a] border border-[#262466] hover:border-[#27AAE1]/50 transition-all hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-xl bg-[#27AAE1]/10 flex items-center justify-center mb-6 group-hover:bg-[#27AAE1]/20 transition-colors">
                      <service.icon className="w-7 h-7 text-[#27AAE1]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                    <span className="inline-flex items-center text-[#27AAE1] font-medium group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents Highlight */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/ai-agents">
              <div className="group relative p-12 rounded-3xl bg-gradient-to-br from-[#2B3990]/30 to-[#27AAE1]/10 border border-[#262466] hover:border-[#27AAE1]/50 transition-all overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-[#27AAE1]/20 to-transparent rounded-full blur-3xl" />
                
                <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#27AAE1]/20 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-8 h-8 text-[#27AAE1]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-semibold">AI Sales Agents</h3>
                        <span className="px-2 py-1 text-xs font-medium bg-[#27AAE1]/20 text-[#27AAE1] rounded-full">
                          New
                        </span>
                      </div>
                      <p className="text-gray-400 max-w-xl">
                        Automated AI agents that qualify leads, book meetings, and nurture prospects 24/7. 
                        Perfect for small businesses looking to scale their sales efforts.
                      </p>
                    </div>
                  </div>
                  <Button className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black font-medium flex-shrink-0">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-semibold mb-4 tracking-tight">Tools We Work With</h2>
            <p className="text-gray-400">Expertise across the modern marketing stack.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4"
          >
            {techStack.map((tech, index) => (
              <TechLogo key={tech.name} tech={tech} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
              Not sure where to start?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Book a free consultation and we will help identify the right services for your business.
            </p>
            <Link href="/meet">
              <Button size="lg" className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black font-medium px-8">
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
