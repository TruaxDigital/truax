"use client";

import { motion } from "framer-motion";
import { Search, BarChart3, TrendingUp, Share2, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const features = [
  {
    icon: Search,
    title: "Paid Advertising",
    description:
      "Paid advertising in search engines and social networks is often the fastest way to increase your traffic. Spend your dollars right. Our team will optimize the performance of your PPC campaigns.",
  },
  {
    icon: BarChart3,
    title: "360 Web Analytics",
    description:
      "We go beyond conventional web analytics, offering in-depth insights across all of your data sources to find what is working, what is not, and how to boost your revenue.",
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization",
    description:
      "SEO is the intersection of art and technology. When guided properly it can produce the best leads, fantastic results, and genuinely enthusiastic visitors to your website.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Drive ROI from targeted audiences in Facebook, Instagram, TikTok, and LinkedIn with our fully managed social media services that accelerate business growth.",
  },
  {
    icon: Mail,
    title: "Email Automations",
    description:
      "Email remains the conversion king. Let us work with you to create automations that tell your story, delight your audience, and differentiate you from competitors.",
  },
];

const stats = [
  { stat: "3x", label: "Average ROI" },
  { stat: "50%", label: "Lower CPA" },
  { stat: "200%", label: "Traffic Increase" },
  { stat: "85%", label: "Lead Quality" },
];

export default function DemandGenerationPage() {
  return (
    <main className="min-h-screen bg-[#0a0a12]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20 px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#27AAE1]/15 via-[#2B3990]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-[#2B3990]/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#27AAE1] font-medium mb-4 tracking-wide"
          >
            Demand Generation
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight leading-[1.1]"
          >
            Digital Engagement{" "}
            <span className="text-[#27AAE1]">Built for Big Data</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Engaging the right people at the right time is just as important as volume. Let us refine 
            your conversion funnels to save dollars, time, and energy.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact">
              <Button size="lg" className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black font-medium px-8">
                Generate Demand
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-[#0f0f1a] border border-[#262466] hover:border-[#27AAE1]/50 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-[#27AAE1]/10 flex items-center justify-center mb-6 group-hover:bg-[#27AAE1]/20 transition-colors">
                  <feature.icon className="h-7 w-7 text-[#27AAE1]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-12 text-center tracking-tight"
          >
            Results That Speak
          </motion.h2>

          <div className="p-12 rounded-3xl bg-gradient-to-br from-[#2B3990]/20 to-[#27AAE1]/10 border border-[#262466]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-[#27AAE1] font-mono mb-2">{item.stat}</div>
                  <div className="text-gray-400">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-gradient-to-br from-[#2B3990]/30 to-[#27AAE1]/10 border border-[#262466]"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">Ready to Generate Demand?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let us inspire your audience with the right story, right on time.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black font-medium px-8">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
