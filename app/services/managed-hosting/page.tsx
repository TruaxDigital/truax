"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  RefreshCw,
  Database,
  Shield,
  Gauge,
  Activity,
  Eye,
  Link2,
  TrendingUp,
  Image,
  Globe,
  Mail,
  FileText,
  Lock,
  Headphones,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const features = [
  { icon: Cloud, title: "Cloud Hosting", description: "Blazing fast servers with SSD and multiple caching layers" },
  { icon: RefreshCw, title: "Managed Updates", description: "WordPress, themes, and plugins updated regularly" },
  { icon: Database, title: "Regular Backups", description: "Daily or real-time backups stored for 60 days" },
  { icon: Shield, title: "Security Checks", description: "Daily scans to catch vulnerabilities" },
  { icon: Gauge, title: "Performance Checks", description: "Daily checks to detect loading issues" },
  { icon: Activity, title: "24/7 Uptime", description: "Constant monitoring and instant restoration" },
  { icon: Eye, title: "UI/UX Checks", description: "Regular checks for usability issues" },
  { icon: Link2, title: "Link Monitoring", description: "Monthly scans for broken links" },
  { icon: TrendingUp, title: "Rank Monitoring", description: "Track your performance vs competitors" },
  { icon: Image, title: "Image Optimization", description: "Automatic resize and conversion" },
  { icon: Globe, title: "CDN", description: "Global content delivery via Fastly" },
  { icon: Mail, title: "Email Gateway", description: "Reliable delivery via Postmark" },
  { icon: FileText, title: "Maintenance Report", description: "Monthly detailed summaries" },
  { icon: Lock, title: "SSL Encryption", description: "Free Let's Encrypt certificates" },
  { icon: Headphones, title: "Expert Support", description: "Fast email and live chat support" },
];

const specs = [
  { label: "Visits Monthly", value: "20,000" },
  { label: "SSD Storage", value: "10GB" },
  { label: "Monthly CDN Bandwidth", value: "15GB" },
  { label: "Outbound Emails", value: "10GB" },
];

const additionalServices = [
  { title: "Detailed Quality Assurance", description: "Extensive testing to catch flaws before implementation" },
  { title: "Performance Optimization", description: "Regular adjustments for peak performance" },
  { title: "WordPress Hardening", description: "2FA, audit logs, blacklist monitoring, and more" },
  { title: "SEO Optimization", description: "Ensure your website ranks high on search engines" },
];

export default function ManagedHostingPage() {
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
            Managed Hosting
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight leading-[1.1]"
          >
            Cloud Hosting{" "}
            <span className="text-[#27AAE1]">and Maintenance</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Enjoy hands-free website hosting and maintenance on our lightning-fast cloud platform 
            designed specifically for WordPress. Focus on the important stuff.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact">
              <Button size="lg" className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black font-medium px-8">
                Get Hosted
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
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
            What&apos;s Included
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group p-4 rounded-xl bg-[#0f0f1a] border border-[#262466] hover:border-[#27AAE1]/50 transition-all text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-[#27AAE1]/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#27AAE1]/20 transition-colors">
                  <feature.icon className="h-5 w-5 text-[#27AAE1]" />
                </div>
                <h3 className="text-sm font-semibold mb-1">{feature.title}</h3>
                <p className="text-xs text-gray-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-12 text-center tracking-tight"
          >
            Hosting Specifications
          </motion.h2>

          <div className="p-12 rounded-3xl bg-gradient-to-br from-[#2B3990]/20 to-[#27AAE1]/10 border border-[#262466]">
            <div className="grid md:grid-cols-4 gap-6">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-[#27AAE1] font-mono mb-2">{spec.value}</div>
                  <div className="text-sm text-gray-400">{spec.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-12 text-center tracking-tight"
          >
            Components Include
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {additionalServices.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <CheckCircle className="h-6 w-6 text-[#27AAE1] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">Ready for Worry-Free Hosting?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let us handle the heavy lifting so you can focus on growing your business.
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
