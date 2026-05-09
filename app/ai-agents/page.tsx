"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  Bot,
  Users,
  MessageSquare,
  BarChart3,
  Calendar,
  Zap,
  Target,
  Mail,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const features = [
  {
    icon: Users,
    title: "Find Ideal Leads Automatically",
    description:
      "Tap into a massive database of 4 billion+ contacts. We filter and target by role, industry, location, company size, revenue, and more.",
  },
  {
    icon: MessageSquare,
    title: "Personalized AI Outreach",
    description:
      "Our AI agents send context-aware messages across email, LinkedIn, SMS, and WhatsApp. Designed to start real sales conversations.",
  },
  {
    icon: BarChart3,
    title: "Transparent, Real-Time Reporting",
    description:
      "Track opens, replies, meetings booked, and campaign performance from a single dashboard. Your pipeline just became visible.",
  },
  {
    icon: Calendar,
    title: "Book Meetings on Autopilot",
    description:
      "Once a lead engages, our system qualifies them and books appointments directly into your calendar. No back-and-forth.",
  },
];

const whatYouGet = [
  "A dedicated AI sales agent working 24/7",
  "Targeted leads from verified B2B data",
  "Fully managed outreach across multiple channels",
  "Calendar-based meeting scheduling",
  "Real-time analytics dashboard",
  "Weekly performance updates",
];

const stats = [
  { value: "10-20", label: "Meetings/month consistently" },
  { value: "15x", label: "ROI on campaign spend" },
  { value: "90%+", label: "Reduction in outreach time" },
  { value: "7", label: "Days to first results" },
];

export default function AIAgentsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a12]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-20 px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#27AAE1]/15 via-[#2B3990]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-[#2B3990]/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="w-20 h-20 rounded-2xl bg-[#27AAE1]/20 flex items-center justify-center mx-auto">
              <Bot className="h-10 w-10 text-[#27AAE1]" />
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#27AAE1] font-medium mb-4 tracking-wide"
          >
            AI Sales Agents
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight leading-[1.1]"
          >
            Meet Your New{" "}
            <span className="text-[#27AAE1]">Sales Agent</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl text-gray-400 mb-4"
          >
            (That Never Sleeps)
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            AI-powered prospecting and outreach. Fully managed, fully done-for-you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <Button size="lg" className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black font-medium px-8">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/ai-agents/pricing">
              <Button size="lg" variant="outline" className="border-[#262466] hover:bg-[#262466]/50 px-8">
                View Pricing
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
              Get Sales Meetings Without Lifting a Finger
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Growing your business does not mean cold calling or burning hours on outreach. 
              Our AI Sales Agents prospect, message, qualify, and book meetings with your ideal 
              clients. So you can focus on closing, not chasing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-12 text-center tracking-tight"
          >
            What This Service Does for You
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
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

      {/* Why It Works */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-gradient-to-br from-[#2B3990]/20 to-[#27AAE1]/10 border border-[#262466]"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#27AAE1]/20 flex items-center justify-center mx-auto mb-6">
              <Zap className="h-8 w-8 text-[#27AAE1]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">Why It Works</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              This is more than automation. It is strategy + AI + data, fine-tuned by real humans. 
              Your outreach is based on millions of optimized message sequences, not guesswork.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-8 tracking-tight">What You Get</h2>
              <ul className="space-y-4">
                {whatYouGet.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-lg"
                  >
                    <CheckCircle className="h-6 w-6 text-[#27AAE1] flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-[#0f0f1a] border border-[#262466]"
            >
              <h3 className="text-2xl font-semibold mb-6">Designed for SMBs</h3>
              <ul className="space-y-4 mb-6">
                {[
                  { icon: Users, text: "No in-house SDRs needed" },
                  { icon: Target, text: "No software to learn" },
                  { icon: Mail, text: "No cold email writing" },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3 text-gray-400">
                    <item.icon className="h-5 w-5 text-[#27AAE1]" />
                    {item.text}
                  </li>
                ))}
              </ul>
              <p className="text-lg font-semibold text-[#27AAE1]">
                Just qualified meetings, delivered to your inbox.
              </p>
            </motion.div>
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
            What Others Are Seeing
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-[#0f0f1a] border border-[#262466] text-center"
              >
                <div className="text-4xl font-bold text-[#27AAE1] font-mono mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">Ready to Scale Without Hiring?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let us put your outreach on autopilot. We will build the system. Your only job? Show up to close.
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
