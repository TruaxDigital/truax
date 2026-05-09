"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check, Shield, X, Bot, Database, Mail, Link2, Plus } from "lucide-react";
import Link from "next/link";

type BillingPeriod = "annual" | "quarterly" | "monthly";

const plans = {
  annual: [
    { name: "Starter", price: 900, setup: 1000, domains: 1, agents: 3 },
    { name: "Growth", price: 1350, setup: 1500, domains: 3, agents: 9, popular: true },
    { name: "Enterprise", price: 2250, setup: 2500, domains: "5+", agents: "15+" },
  ],
  quarterly: [
    { name: "Starter", price: 1080, setup: 1000, domains: 1, agents: 3 },
    { name: "Growth", price: 1620, setup: 1500, domains: 3, agents: 9, popular: true },
    { name: "Enterprise", price: 2700, setup: 2500, domains: "5+", agents: "15+" },
  ],
  monthly: [
    { name: "Starter", price: 1200, setup: 1000, domains: 1, agents: 3 },
    { name: "Growth", price: 1800, setup: 1500, domains: 3, agents: 9, popular: true },
    { name: "Enterprise", price: 3000, setup: 2500, domains: "5+", agents: "15+" },
  ],
};

const discountBadges: Record<BillingPeriod, string | null> = {
  annual: "Save 25%",
  quarterly: "Save 10%",
  monthly: null,
};

const allPlansInclude = [
  "White-Glove Onboarding",
  "Domain Setup + Inbox Warm-up",
  "Copywriting + CRM Sync",
  "AI Campaign Management",
  "Campaign Testing + Live Optimization",
];

const featureSections = [
  {
    icon: Bot,
    title: "AI Agents",
    subtitle: "Credits & Limits",
    features: [
      { name: "AI Agents", starter: "3", growth: "9", enterprise: "15+" },
      { name: "AI Knowledge Base (coming soon)", starter: "1,000 Pages", growth: "10,000 Pages", enterprise: "50,000 Pages" },
      { name: "AI Voice Agent (coming soon)", starter: false, growth: "60 min/mo", enterprise: "180 min/mo" },
      { name: "AI Copilot (coming soon)", starter: false, growth: false, enterprise: true },
      { name: "AI Copywriting", starter: true, growth: true, enterprise: true },
      { name: "AI Auto Replies", starter: true, growth: true, enterprise: true },
    ],
  },
  {
    icon: Database,
    title: "B2B Contact Database",
    subtitle: "Data Access",
    features: [
      { name: "Contact & Company Lookups", starter: "Unlimited", growth: "Unlimited", enterprise: "Unlimited" },
      { name: "User Uploaded Data", starter: "Unlimited", growth: "Unlimited", enterprise: "Unlimited" },
      { name: "Database Credits*", starter: "2,000/mo", growth: "10,000/mo", enterprise: "25,000/mo" },
      { name: "Email Verification", starter: "2,000/mo", growth: "10,000/mo", enterprise: "25,000/mo" },
      { name: "Buying Intent Data", starter: "1 Topic", growth: "5 Topics", enterprise: "12 Topics" },
      { name: "Website Visitor Identification*", starter: false, growth: "1,000/mo", enterprise: "5,000/mo" },
    ],
  },
  {
    icon: Mail,
    title: "Automated Outreach",
    subtitle: "Email & Campaigns",
    features: [
      { name: "Email Sending", starter: "Unlimited", growth: "Unlimited", enterprise: "Unlimited" },
      { name: "Deal Pipeline(s)", starter: "1", growth: "5", enterprise: "20" },
      { name: "AI Agent Mailboxes", starter: "1", growth: "5", enterprise: "20" },
      { name: "Multichannel Accounts*", starter: false, growth: "1", enterprise: "5" },
      { name: "A/B Testing Variations", starter: true, growth: true, enterprise: true },
      { name: "Custom Domain Tracking", starter: true, growth: true, enterprise: true },
      { name: "DFY Mailboxes & Domains*", starter: false, growth: true, enterprise: true },
      { name: "Unified Inbox", starter: true, growth: true, enterprise: true },
      { name: "Dashboard", starter: true, growth: true, enterprise: true },
      { name: "Outreach Analytics", starter: true, growth: true, enterprise: true },
      { name: "Global Blocklist", starter: true, growth: true, enterprise: true },
    ],
  },
  {
    icon: Link2,
    title: "Connections",
    subtitle: "Integrations & Support",
    features: [
      { name: "Team Member Seats*", starter: "1", growth: "2", enterprise: "5" },
      { name: "Salesforce", starter: true, growth: true, enterprise: true },
      { name: "Hubspot", starter: true, growth: true, enterprise: true },
      { name: "Zoho", starter: true, growth: true, enterprise: true },
      { name: "Zapier", starter: true, growth: true, enterprise: true },
      { name: "Workspaces", starter: true, growth: true, enterprise: true },
      { name: "Weekly Webinars", starter: true, growth: true, enterprise: true },
      { name: "Live Chat Support", starter: true, growth: true, enterprise: true },
      { name: "Help Center", starter: true, growth: true, enterprise: true },
      { name: "1 on 1 Voice/Video Support", starter: false, growth: true, enterprise: true },
    ],
  },
  {
    icon: Plus,
    title: "Add-Ons",
    subtitle: "Expand Your Plan",
    features: [
      { name: "Database Credits", starter: "$25 per 500/mo", growth: "$25 per 500/mo", enterprise: "$25 per 500/mo" },
      { name: "Email Verification Credits", starter: "$10 per 2,500/mo", growth: "$10 per 2,500/mo", enterprise: "$10 per 2,500/mo" },
      { name: "User Brought Mailboxes", starter: "$5/mo", growth: "$3/mo", enterprise: "$3/mo" },
      { name: "DFY Domains & Mailboxes", starter: "$3.5/mo & $13/yr", growth: "$3.5/mo & $13/yr", enterprise: "$3.5/mo & $13/yr" },
      { name: "Additional Team Members", starter: "$100/user/mo", growth: "$100/user/mo", enterprise: "$100/user/mo" },
      { name: "Multichannel Accounts", starter: false, growth: "$20/account/mo", enterprise: "$20/account/mo" },
    ],
  },
];

function FeatureValue({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-5 h-5 text-[#27AAE1] mx-auto" />
    ) : (
      <X className="w-5 h-5 text-gray-600 mx-auto" />
    );
  }
  return <span className="text-gray-300 text-sm">{value}</span>;
}

export default function AiAgentsPricingPage() {
  const [billing, setBilling] = useState<BillingPeriod>("annual");

  return (
    <main className="bg-[#0a0a12]">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B3990]/20 to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#27AAE1]/10 rounded-full blur-[150px]" />
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-[#2B3990]/20 rounded-full blur-[150px]" />
        
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#27AAE1]/10 border border-[#27AAE1]/30 text-[#27AAE1] text-sm font-medium mb-6"
          >
            <Bot className="w-4 h-4" />
            AI-Powered Lead Generation
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight"
          >
            Find, Contact & Close{" "}
            <span className="text-[#27AAE1]">Unlimited Leads</span> with AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            Experience the Power of Our All-in-One AI Prospecting Platform. Book Your Free Demo Today.
          </motion.p>
          
          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-1 p-1.5 rounded-xl bg-[#0f0f1a] border border-[#262466]"
          >
            {(["annual", "quarterly", "monthly"] as BillingPeriod[]).map((period) => (
              <button
                key={period}
                onClick={() => setBilling(period)}
                className={`relative px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  billing === period
                    ? "bg-[#27AAE1] text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {discountBadges[period] && (
                  <span className={`absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    billing === period ? "bg-green-500 text-white" : "bg-green-500/20 text-green-400"
                  }`}>
                    {discountBadges[period]}
                  </span>
                )}
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {plans[billing].map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-2xl border ${
                  plan.popular
                    ? "bg-gradient-to-br from-[#2B3990]/30 to-[#27AAE1]/10 border-[#27AAE1]/50 scale-105 shadow-2xl shadow-[#27AAE1]/10"
                    : "bg-[#0f0f1a] border-[#262466]"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#27AAE1] text-black text-xs font-semibold">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold text-white">${plan.price.toLocaleString()}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-sm text-gray-500 mb-6">
                  Billed {billing === "annual" ? "annually" : billing === "quarterly" ? "quarterly" : "monthly"}
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-[#27AAE1]/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#27AAE1]" />
                    </div>
                    ${plan.setup.toLocaleString()} Set-up Fee
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-[#27AAE1]/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#27AAE1]" />
                    </div>
                    {plan.domains} Domain{typeof plan.domains === "number" && plan.domains > 1 ? "s" : ""}
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-[#27AAE1]/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#27AAE1]" />
                    </div>
                    {plan.agents} AI Agents
                  </li>
                </ul>
                
                <Link href="/meet">
                  <Button 
                    className={`w-full py-6 text-base font-medium ${
                      plan.popular 
                        ? "bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black" 
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                    }`}
                  >
                    Book a Demo
                  </Button>
                </Link>
                
                <div className="mt-6 pt-6 border-t border-[#262466]">
                  <p className="text-sm text-gray-500 mb-3 font-medium">All Plans Include:</p>
                  <ul className="space-y-2">
                    {allPlansInclude.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-400">
                        <Check className="w-3 h-3 text-[#27AAE1] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Guarantee */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">90-Day Money-Back Guarantee if zero qualified meetings booked.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Comparison Tables */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Complete Feature Comparison
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to scale your outbound prospecting with AI
            </p>
          </motion.div>
          
          {featureSections.map((section, sectionIndex) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#27AAE1]/20 flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-[#27AAE1]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                  <p className="text-sm text-gray-500">{section.subtitle}</p>
                </div>
              </div>
              
              <div className="overflow-x-auto rounded-xl border border-[#262466] bg-[#0f0f1a]">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#262466]">
                      <th className="py-4 px-6 text-left text-gray-400 font-medium text-sm">Feature</th>
                      <th className="py-4 px-6 text-center text-gray-400 font-medium text-sm w-32">Starter</th>
                      <th className="py-4 px-6 text-center text-[#27AAE1] font-medium text-sm w-32 bg-[#27AAE1]/5">Growth</th>
                      <th className="py-4 px-6 text-center text-gray-400 font-medium text-sm w-32">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.features.map((feature, i) => (
                      <tr key={feature.name} className={i !== section.features.length - 1 ? "border-b border-[#262466]/50" : ""}>
                        <td className="py-4 px-6 text-gray-300 text-sm">{feature.name}</td>
                        <td className="py-4 px-6 text-center"><FeatureValue value={feature.starter} /></td>
                        <td className="py-4 px-6 text-center bg-[#27AAE1]/5"><FeatureValue value={feature.growth} /></td>
                        <td className="py-4 px-6 text-center"><FeatureValue value={feature.enterprise} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#0f0f1a] to-[#0a0a12]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              Ready to scale your outreach with AI?
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Book a demo to see how our AI agents can transform your lead generation and close more deals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/meet">
                <Button size="lg" className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black font-medium px-8 py-6 text-base">
                  Book a Demo
                </Button>
              </Link>
              <Link href="/ai-agents">
                <Button size="lg" variant="outline" className="border-[#262466] text-white hover:bg-white/5 px-8 py-6 text-base">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
