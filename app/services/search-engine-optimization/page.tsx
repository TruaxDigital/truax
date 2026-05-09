"use client";

import { motion } from "framer-motion";
import { Search, FileText, Settings, Link2, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const features = [
  {
    icon: Search,
    title: "SEO Services for Businesses",
    description:
      "Maximize your online presence with our transparent, effective SEO services. Reasonable pricing, effective communication, and strict adherence to Google's guidelines.",
    points: ["Transparent Billing", "Month-to-month", "Dedicated account team"],
  },
  {
    icon: FileText,
    title: "Custom Content Creation",
    description:
      "Engage your audience with custom, SEO-driven content crafted to enhance your brand's digital footprint with quick revisions and expert writers.",
    points: ["Tailored to your brand", "Intent-driven content", "Unlimited revisions"],
  },
  {
    icon: Settings,
    title: "On-Page Optimization",
    description:
      "Optimize your website's performance with our comprehensive on-page SEO services, ensuring maximum visibility and user experience.",
    points: ["Technical optimization", "UX improvements", "No spammy methods"],
  },
  {
    icon: Link2,
    title: "Genuine Backlink Acquisition",
    description:
      "Boost your website's authority with our strategic backlink acquisition services, designed for long-term success with AI-powered outreach.",
    points: ["High-quality links", "Transparent reporting", "Custom outreach"],
  },
];

const comparison = [
  { feature: "Pricing Model", us: "Transparent, month to month", others: "Often long-term contracts" },
  { feature: "SEO Compliance", us: "Strictly adheres to Google", others: "Varies, not always compliant" },
  { feature: "Communication", us: "Dedicated Support team", others: "Limited or delayed support" },
  { feature: "Backlink Quality", us: "High-quality, genuine links", others: "Mixed link quality" },
  { feature: "Reporting", us: "Clear, transparent reporting", others: "Vague or infrequent reports" },
];

export default function SEOPage() {
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
            Search Engine Optimization
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight leading-[1.1]"
          >
            Affordable, High-Quality{" "}
            <span className="text-[#27AAE1]">SEO Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Where exceptional SEO meets affordability. Customized strategies that fit your 
            unique business needs without breaking the bank.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <Button size="lg" className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black font-medium px-8">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services/search-engine-optimization/seo-pricing">
              <Button size="lg" variant="outline" className="border-[#262466] hover:bg-[#262466]/50 px-8">
                View Pricing
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
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
                <p className="text-gray-400 leading-relaxed mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="h-4 w-4 text-[#27AAE1]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-12 text-center tracking-tight"
          >
            Truax Marketing vs. Other SEO Services
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto rounded-2xl border border-[#262466]"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#262466] bg-[#0f0f1a]">
                  <th className="text-left py-4 px-6 font-semibold">Feature</th>
                  <th className="text-left py-4 px-6 text-[#27AAE1] font-semibold">Truax Marketing</th>
                  <th className="text-left py-4 px-6 text-gray-500 font-semibold">Others</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-[#262466] last:border-0">
                    <td className="py-4 px-6">{row.feature}</td>
                    <td className="py-4 px-6">{row.us}</td>
                    <td className="py-4 px-6 text-gray-500">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">Ready to Rank Higher?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let us elevate your online presence and drive real results.
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
