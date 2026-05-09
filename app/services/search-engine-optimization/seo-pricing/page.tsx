"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check, FileText, Link2, Search, BarChart3, Settings, Users } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Standard SEO",
    price: 500,
    description: "For local and niche businesses starting their SEO journey.",
    features: [
      { label: "25 Target Keywords", desc: "Focused keyword strategy for precise targeting." },
      { label: "1 Blog Article Per Week", desc: "Regular, high-quality content for your site." },
      { label: "On-Page Optimization", desc: "Enhancing your website for better search performance." },
      { label: "High-Quality Backlinks", desc: "Building credible links to boost your site authority." },
    ],
  },
  {
    name: "Plus SEO",
    price: 750,
    description: "Ideal for competitive businesses in saturated markets or with multiple locations.",
    popular: true,
    features: [
      { label: "50 Target Keywords", desc: "Expanded keyword strategy for broader targeting." },
      { label: "2 Blog Articles Per Week", desc: "Increased frequency of high-quality content." },
      { label: "On-Page Optimization", desc: "Advanced on-page SEO strategies." },
      { label: "High-Quality Backlinks", desc: "More extensive backlink building for greater authority." },
    ],
  },
  {
    name: "Enterprise SEO",
    price: 1000,
    description: "Designed for businesses targeting nationwide audiences or those looking to scale up.",
    features: [
      { label: "100 Target Keywords", desc: "Comprehensive keyword coverage for national reach." },
      { label: "4 Blog Articles Per Week", desc: "High volume of content for maximum engagement." },
      { label: "On-Page Optimization", desc: "Comprehensive on-page SEO for optimal site performance." },
      { label: "High-Quality Backlinks", desc: "Strategic backlink acquisition for robust online authority." },
    ],
  },
];

const allPlansInclude = [
  { icon: FileText, label: "Blog Publishing On Your Site", desc: "Seamless integration of blog content." },
  { icon: Link2, label: "Daily Backlink Tracking", desc: "Monitoring backlinks for quality and relevance." },
  { icon: Search, label: "Google Business Profile Posting", desc: "Regular updates to your Google Business profile." },
  { icon: Settings, label: "Technical SEO Optimization", desc: "Addressing technical aspects for optimal site performance." },
  { icon: BarChart3, label: "Detailed Website Auditing", desc: "Comprehensive analysis for ongoing improvements." },
  { icon: Search, label: "Google Business Profile Optimization", desc: "Maximizing your local business visibility." },
  { icon: BarChart3, label: "Daily Rank Tracking", desc: "Keeping tabs on your search engine rankings." },
  { icon: Settings, label: "Schema Markup Installation", desc: "Implementing schema for better search visibility." },
  { icon: Users, label: "Dedicated Support Team", desc: "Continuous support for any queries or concerns." },
  { icon: Link2, label: "Backlink Management", desc: "Managing and refining your backlink profile." },
];

export default function SeoPricingPage() {
  return (
    <main className="bg-[#0a0a12]">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B3990]/20 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight"
          >
            A Complete SEO Solution
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Month to month, no contracts.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-2xl border ${
                  plan.popular
                    ? "bg-gradient-to-br from-[#2B3990]/30 to-[#27AAE1]/10 border-[#27AAE1]/50"
                    : "bg-[#0f0f1a] border-[#262466]"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#27AAE1] text-black text-xs font-medium">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-medium text-gray-400 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-sm text-gray-400 mb-6">{plan.description}</p>
                
                <Button 
                  className={`w-full mb-6 ${
                    plan.popular 
                      ? "bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black" 
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  Get Started
                </Button>
                
                <ul className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <li key={j}>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#27AAE1] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-white font-medium">{feature.label}</p>
                          <p className="text-sm text-gray-400">{feature.desc}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Plans Include */}
      <section className="py-20 px-6 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-12 text-center">
            Every Plan Also Includes
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPlansInclude.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-[#0a0a12] border border-[#262466]"
              >
                <div className="w-10 h-10 rounded-lg bg-[#27AAE1]/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#27AAE1]" />
                </div>
                <div>
                  <p className="text-white font-medium">{item.label}</p>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">
            Ready to boost your rankings?
          </h2>
          <p className="text-gray-400 mb-8">
            Start with a free SEO audit and see where you stand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/meet">
              <Button size="lg" className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black font-medium">
                Book a Call
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-[#262466] hover:bg-[#262466]/50">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
