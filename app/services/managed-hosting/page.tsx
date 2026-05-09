"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Activity,
  HardDrive,
  Shield,
  Gauge,
  RefreshCw,
  Lock,
  Search,
  FileText,
  Headphones,
  ArrowRight,
  CheckCircle,
  X,
  Check,
  Code2,
  RefreshCcw,
  Briefcase,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getPostsByKeywords } from "@/lib/blog-data";
import { getBlogImageUrl } from "@/lib/blog-image-urls";
import { Calendar, Clock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Pipeline Protection layer cards
const frameworkCards = [
  {
    icon: Cloud,
    title: "Cloud hosting on WP Engine",
    description:
      "NVMe SSD storage, multi-layer caching, EverCache, CDN, PHP 8+. Built specifically for WordPress.",
  },
  {
    icon: Activity,
    title: "24/7 uptime monitoring",
    description:
      "Monitoring every 60 seconds. Median time-to-restore under 12 minutes.",
  },
  {
    icon: HardDrive,
    title: "Daily backups",
    description:
      "Automated daily backups stored for 60 days. Real-time on higher tiers.",
  },
  {
    icon: Shield,
    title: "Security hardening",
    description:
      "2FA, audit logs, vulnerability scanning, malware scanning, threat alerts. Block 99.9% of bot traffic.",
  },
  {
    icon: Gauge,
    title: "Performance monitoring",
    description:
      "Daily performance checks. Image optimization, lazy loading, code minification, CDN tuning.",
  },
  {
    icon: RefreshCw,
    title: "Managed updates",
    description:
      "WordPress, themes, plugins updated weekly. Tested in staging, then promoted.",
  },
  {
    icon: Lock,
    title: "SSL and email gateway",
    description:
      "Free Let's Encrypt SSL auto-renewed. Reliable transactional email through Postmark.",
  },
  {
    icon: Search,
    title: "SEO and AI search monitoring",
    description:
      "Core Web Vitals, broken link checks, ranking changes, AI citation visibility. Most hosts skip this.",
  },
  {
    icon: FileText,
    title: "Monthly maintenance reports",
    description:
      "Plain-English: uptime, security, performance, updates, recommendations.",
  },
  {
    icon: Headphones,
    title: "Expert human support",
    description:
      "Senior WordPress devs. 2-hour response on business hours. Faster on emergencies.",
  },
];

// Process timeline steps
const processSteps = [
  {
    number: "1",
    title: "Discovery call",
    timeline: "Week 0",
    description:
      "30 minutes. We review your current hosting, traffic patterns, and security posture.",
  },
  {
    number: "2",
    title: "Migration prep",
    timeline: "Week 1",
    description:
      "Staging environment built, content cloned, plugins audited.",
  },
  {
    number: "3",
    title: "Go-live",
    timeline: "Week 2",
    description:
      "Migration with under 60 seconds of downtime, scheduled during your off-hours.",
  },
  {
    number: "4",
    title: "First 30 days",
    timeline: "Weeks 3-6",
    description:
      "Performance tuning, security hardening, SEO baseline established.",
  },
  {
    number: "5",
    title: "Steady state",
    timeline: "Week 7+",
    description:
      "Monthly reports, ongoing optimization, on-demand support.",
  },
];

// Pricing tiers
const pricingTiers = [
  {
    name: "Standard",
    bestFor: "Single-site B2B, 10 to 25 pages",
    price: "$195/month",
    visits: "Up to 20,000",
    features: [
      "Cloud hosting on WP Engine",
      "Security monitoring",
      "Daily backups",
      "Performance monitoring",
      "Managed updates",
      "SEO + AI search monitoring",
      "Human support",
    ],
    recommended: false,
  },
  {
    name: "Growth",
    bestFor: "Multi-page B2B, 25 to 60 pages, more traffic",
    price: "$575/month",
    visits: "Up to 100,000",
    features: [
      "Everything in Standard",
      "Real-time backups",
      "Priority support",
      "Enhanced security",
      "Performance optimization",
    ],
    recommended: true,
  },
  {
    name: "Scale",
    bestFor: "Mission-critical, multi-site, or high-traffic",
    price: "$1,900/month",
    visits: "Up to 500,000",
    features: [
      "Everything in Growth",
      "1-hour SLA for emergencies",
      "Multi-site management",
      "Custom configurations",
      "Dedicated support",
    ],
    recommended: false,
  },
];

// Comparison table data
const comparisonRows = [
  {
    factor: "Infrastructure",
    truax: "WP Engine, NVMe, multi-layer caching",
    cheap: "Shared servers",
    agency: "Shared or basic VPS",
  },
  {
    factor: "Uptime SLA",
    truax: "99.99%",
    cheap: "99.9% claimed, often less",
    agency: "Often unstated",
  },
  {
    factor: "Security monitoring",
    truax: "24/7 active threat response",
    cheap: "Reactive only",
    agency: "Limited",
  },
  {
    factor: "Performance monitoring",
    truax: "Daily, with optimization",
    cheap: "None",
    agency: "None",
  },
  {
    factor: "SEO and AI search monitoring",
    truax: "Included standard",
    cheap: "Not offered",
    agency: "Not offered",
  },
  {
    factor: "Plugin and theme updates",
    truax: "Tested and managed weekly",
    cheap: "Manual or auto with no QA",
    agency: "Often forgotten",
  },
  {
    factor: "Backup retention",
    truax: "60 days",
    cheap: "7-14 days",
    agency: "Varies",
  },
  {
    factor: "Support response",
    truax: "2 business hours",
    cheap: "24+ hours",
    agency: "Days",
  },
  {
    factor: "Reporting",
    truax: "Monthly plain-English",
    cheap: "None",
    agency: "Vague emails",
  },
];

// Who this is for
const whoYes = [
  "Your site went down in the last 6 months and nobody could explain why",
  "You do not know who is responsible for plugin updates",
  "Last security audit was more than 12 months ago",
  "Homepage loads more than 3 seconds on mobile",
  "Your developer left and took the credentials",
  "You are on cheap shared hosting \"because it works fine\"",
  "Your IT team treats marketing tech as marketing's problem",
];

const whoNo = [
  "You have a dedicated DevOps team that already manages WordPress",
  "You are on Webflow or Shopify (not our specialty)",
  "You want the cheapest possible hosting (we are not it)",
];

// Outcome stats
const outcomeStats = [
  {
    stat: "40-70%",
    label: "improvement in mobile page speed",
    source: "WP Engine benchmarks, 2024",
  },
  {
    stat: "99.99%",
    label: "uptime versus 99.5% on shared hosting",
    source: "Industry average",
  },
  {
    stat: "24%",
    label: "lift in conversion from sub-2-second loads",
    source: "Google Web.dev, 2023",
  },
  {
    stat: "95%+",
    label: "reduction in security incidents within 30 days",
    source: "",
  },
  {
    stat: "30-50%",
    label: "reduction in time spent by internal teams managing the site",
    source: "",
  },
];

// FAQ items
const faqItems = [
  {
    question: "Do you only host WordPress sites?",
    answer:
      "WordPress is our specialty. We can host other platforms (Webflow, Sanity, Contentful, Next.js) on case-by-case basis with custom pricing.",
  },
  {
    question: "Can you move our site over without downtime?",
    answer:
      "Yes. Migrations happen with under 60 seconds of downtime, scheduled during your off-hours.",
  },
  {
    question: "What happens if my site gets hacked?",
    answer:
      "1-hour SLA for active hacks on Growth and Scale plans. 4-hour SLA on Standard. Restore from clean backup, identify vector, patch, incident report.",
  },
  {
    question: "Why is your hosting more expensive than GoDaddy or Bluehost?",
    answer:
      "Cheap shared hosting is $9-$30/month and shares your server with hundreds of sites. When one gets hacked, yours suffers. Our hosting is enterprise-grade WP Engine with active monitoring and human support.",
  },
  {
    question: "Do you handle DNS and email?",
    answer:
      "Yes for DNS. Email through Google Workspace or Microsoft 365, we configure MX, SPF, DKIM, DMARC.",
  },
  {
    question: "Can we still update content ourselves?",
    answer:
      "Yes. The CMS is yours. We handle infrastructure, security, performance.",
  },
  {
    question: "What about traffic spikes?",
    answer:
      "Auto-scales for short bursts. Planned events (PR launch, paid campaign) we coordinate ahead and pre-scale.",
  },
  {
    question: "Is there a contract?",
    answer:
      "Month-to-month after the first 90 days.",
  },
  {
    question: "Do you provide cancellation handoff?",
    answer:
      "Yes. Full export of files, database, content, DNS records.",
  },
  {
    question: "What is AI search visibility monitoring and why does it matter?",
    answer:
      "Tracks whether your site is cited by ChatGPT, Perplexity, AI Overviews, and Gemini for priority queries. Most hosts do not monitor this.",
  },
];

export default function ManagedHostingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a12]">
      <Navbar />

      {/* Hero Section - Two column layout */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-32 pb-20 px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#27AAE1]/15 via-[#2B3990]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-[#2B3990]/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Content */}
            <div>
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
                className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight leading-[1.1]"
              >
                Managed hosting that protects your most important asset
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-400 mb-8 leading-relaxed"
              >
                Your website is the front door to your business. We keep it fast, secure, and search-ready while your team focuses on the work that actually grows pipeline.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 mb-6"
              >
                <Link href="/meet">
                  <Button
                    size="lg"
                    className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#27AAE1]/25 active:translate-y-0 text-black font-medium px-8 transition-all duration-300"
                  >
                    Get hosting plan recommendation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#27AAE1] text-[#27AAE1] hover:bg-[#27AAE1]/10 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 px-8 transition-all duration-300"
                  >
                    Run a free website performance check
                  </Button>
                </Link>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-sm text-gray-500"
              >
                Trusted by marketing leaders at insurance, SaaS, warranty, and B2B services companies
              </motion.p>
            </div>

            {/* Right column - Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative aspect-square max-w-lg mx-auto rounded-3xl overflow-hidden border border-[#262466] shadow-2xl shadow-[#27AAE1]/10">
                <img 
                  src="/images/services/managed-hosting-hero.jpg" 
                  alt="Abstract visualization of cloud infrastructure with server nodes and secure connections"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12]/40 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Direct Answer Block */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-2xl bg-[#0f0f1a] border border-[#262466]"
          >
            <p className="text-[#27AAE1] text-sm font-medium mb-4 tracking-wide uppercase">
              What is managed WordPress hosting?
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Managed WordPress hosting is a fully handled hosting and maintenance service that includes security monitoring, automated backups, performance optimization, plugin updates, and 24/7 uptime monitoring. Truax Marketing delivers managed hosting on WP Engine infrastructure with SEO and AI search visibility monitoring layered in. Plans start at $195 per month.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 px-6 border-y border-[#262466]/50 bg-[#0a0a12]/50">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 text-sm uppercase tracking-widest mb-8"
          >
            Industries we serve
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Shield, name: "Insurance" },
              { icon: Code2, name: "SaaS" },
              { icon: RefreshCcw, name: "Warranty" },
              { icon: Briefcase, name: "B2B Services" },
              { icon: TrendingUp, name: "Financial Services" },
              { icon: Users, name: "Professional Services" },
            ].map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group flex flex-col items-center gap-3 p-4 rounded-xl border border-transparent hover:border-[#262466] hover:bg-[#0f0f1a] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#27AAE1]/10 flex items-center justify-center group-hover:bg-[#27AAE1]/20 group-hover:scale-110 transition-all duration-300">
                  <industry.icon className="h-6 w-6 text-[#27AAE1]" />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors text-center">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: Problem framing */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-8 tracking-tight"
          >
            Three questions most CMOs cannot answer about their own website
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <p className="text-gray-400 leading-relaxed mb-6">
              Most marketing leaders cannot answer three basic questions about their own website:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[#27AAE1] font-semibold">1.</span>
                <span className="text-gray-400">
                  When was the last security patch applied?
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#27AAE1] font-semibold">2.</span>
                <span className="text-gray-400">
                  What is the uptime over the last 90 days?
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#27AAE1] font-semibold">3.</span>
                <span className="text-gray-400">
                  How fast does the homepage load on mobile, today?
                </span>
              </li>
            </ul>
            <p className="text-gray-400 leading-relaxed mb-6">
              Not because they do not care. Because nobody owns it.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Meanwhile, your website is the most expensive employee on payroll. When it breaks, deals stall. When it slows, conversion drops. Sub-2-second load times correlate with 24% higher conversion rates{" "}
              <span className="text-gray-500">(Google Web.dev, 2023)</span>.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We solve that. Managed hosting designed for B2B mid-market companies, on infrastructure built for WordPress, with humans accountable for every metric. We call this the Pipeline Protection layer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Framework grid */}
      <section className="py-24 px-6 bg-[#0f0f1a]/50">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#27AAE1] text-sm font-medium mb-4 tracking-wide uppercase text-center"
          >
            What is included in every plan
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-12 tracking-tight text-center"
          >
            Ten things we monitor while you sleep
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworkCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group p-6 rounded-2xl bg-[#0a0a12] border border-[#262466] hover:border-[#27AAE1]/50 transition-all ${
                  index === 9 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#27AAE1]/10 flex items-center justify-center mb-4 group-hover:bg-[#27AAE1]/20 transition-colors">
                  <card.icon className="h-6 w-6 text-[#27AAE1]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Process timeline */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-12 tracking-tight text-center"
          >
            How onboarding works
          </motion.h2>

          {/* Desktop: Horizontal stepper */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-[#262466]" />
              <div className="grid grid-cols-5 gap-4">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#27AAE1] flex items-center justify-center text-black font-bold text-xl mb-4 relative z-10">
                      {step.number}
                    </div>
                    <p className="text-[#27AAE1] text-sm font-medium mb-1">
                      {step.timeline}
                    </p>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: Vertical stepper */}
          <div className="lg:hidden space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#27AAE1] flex items-center justify-center text-black font-bold">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-0.5 h-full bg-[#262466] mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-[#27AAE1] text-sm font-medium mb-1">
                    {step.timeline}
                  </p>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Buyer scenario card */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[#2B3990]/20 to-[#27AAE1]/10 border-l-4 border-[#27AAE1]"
          >
            <p className="text-[#27AAE1] text-sm font-medium mb-4 tracking-wide uppercase">
              Imagine this scenario
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic mb-6">
              You are the CMO at a $35M B2B services firm. Saturday morning, your phone buzzes. Sales VP texts: &quot;Site is down.&quot; It has been down for 47 minutes before anyone noticed. The dev who built it left 14 months ago. Your IT team says hosting &quot;is marketing&apos;s problem.&quot; You spend three hours of your weekend on hold with a $9.99/month shared hosting provider.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              Different scenario. Same Saturday morning. Site goes down at 7:43 AM. Truax monitoring catches it at 7:43 AM. You get a Slack alert at 7:44 AM, and a &quot;we are restoring now&quot; message at 7:46 AM. Site is back at 7:51 AM. Incident report by Monday with root cause and prevention plan.
            </p>
            <p className="text-xl font-semibold text-white">
              That is the deliverable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Pricing table */}
      <section className="py-24 px-6 bg-[#0f0f1a]/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-12 tracking-tight text-center"
          >
            Pricing
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border ${
                  tier.recommended
                    ? "bg-[#0a0a12] border-[#27AAE1]"
                    : "bg-[#0a0a12] border-[#262466]"
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#27AAE1] text-black text-xs font-semibold px-4 py-1 rounded-full">
                      Recommended
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{tier.bestFor}</p>
                <p className="text-3xl font-bold text-[#27AAE1] mb-2">
                  {tier.price}
                </p>
                <p className="text-gray-500 text-sm mb-6">{tier.visits} visits/month</p>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#27AAE1] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 text-sm mt-8"
          >
            All plans include cloud hosting, security, backups, performance monitoring, managed updates, SEO and AI search monitoring, and human support. Custom enterprise plans available for multi-brand portfolios.
          </motion.p>
        </div>
      </section>

      {/* Section 6: Comparison table */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-12 tracking-tight text-center"
          >
            Truax Managed vs. alternatives
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto rounded-2xl border border-[#262466]"
          >
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-[#262466] bg-[#0f0f1a]">
                  <th className="text-left py-4 px-6 font-semibold">Factor</th>
                  <th className="text-left py-4 px-6 text-[#27AAE1] font-semibold">
                    Truax Managed
                  </th>
                  <th className="text-left py-4 px-6 text-gray-500 font-semibold">
                    Cheap Host
                  </th>
                  <th className="text-left py-4 px-6 text-gray-500 font-semibold">
                    Agency Add-On
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.factor}
                    className="border-b border-[#262466] last:border-0"
                  >
                    <td className="py-4 px-6 font-medium">{row.factor}</td>
                    <td className="py-4 px-6 text-gray-300">{row.truax}</td>
                    <td className="py-4 px-6 text-gray-500">{row.cheap}</td>
                    <td className="py-4 px-6 text-gray-500">{row.agency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Who this is for */}
      <section className="py-24 px-6 bg-[#0f0f1a]/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-12 tracking-tight text-center"
          >
            Who this is for
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-[#0a0a12] border border-[#262466]"
            >
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                You should consider this if...
              </h3>
              <ul className="space-y-4">
                {whoYes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-[#0a0a12] border border-[#262466]"
            >
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <X className="h-5 w-5 text-red-500" />
                You should not consider this if...
              </h3>
              <ul className="space-y-4">
                {whoNo.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 8: Outcomes */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-12 tracking-tight text-center"
          >
            Outcomes you can expect
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomeStats.map((outcome, index) => (
              <motion.div
                key={outcome.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-[#0f0f1a] border border-[#262466] text-center"
              >
                <p className="text-4xl font-bold text-[#27AAE1] mb-2">
                  {outcome.stat}
                </p>
                <p className="text-gray-300 mb-2">{outcome.label}</p>
                {outcome.source && (
                  <p className="text-gray-500 text-xs">{outcome.source}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: FAQ */}
      <section className="py-24 px-6 bg-[#0f0f1a]/50">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-12 tracking-tight text-center"
          >
            Frequently Asked Questions
          </motion.h2>

          <Accordion type="multiple" defaultValue={["item-0", "item-1"]}>
            {faqItems.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#262466]"
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline">
                  <span className="text-lg font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Blog Posts */}
      <section className="py-20 px-6 border-t border-[#262466]/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#27AAE1] text-sm font-medium uppercase tracking-widest mb-3">From the Blog</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Latest on Hosting & Maintenance</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {getPostsByKeywords(["hosting", "maintenance", "wordpress", "security", "performance", "uptime", "backup"], 3).map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/insights/${post.slug}`} className="block">
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-[#2B3990]/40 to-[#27AAE1]/20 border border-[#262466] group-hover:border-[#27AAE1]/50 transition-colors">
                    {(() => {
                      const imageUrl = getBlogImageUrl(post.slug, post.featuredImage);
                      return imageUrl ? (
                        <img 
                          src={imageUrl} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Cloud className="h-10 w-10 text-[#27AAE1]/40" />
                        </div>
                      );
                    })()}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {Math.ceil(post.content.split(" ").length / 200)} min read
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-[#27AAE1] transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{post.excerpt.replace(/\*+/g, "")}</p>
                </Link>
              </motion.article>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link href="/insights" className="inline-flex items-center gap-2 text-[#27AAE1] hover:text-white transition-colors text-sm font-medium">
              View all articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-gradient-to-br from-[#2B3990]/30 to-[#27AAE1]/10 border border-[#262466]"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
              Stop worrying about your website. Get back to growing your business.
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              The performance check covers page speed, security, SEO health, AI visibility, and the top three issues. 48-hour turnaround. No commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/meet">
                <Button
                  size="lg"
                  className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#27AAE1]/25 active:translate-y-0 text-black font-medium px-8 transition-all duration-300"
                >
                  Get hosting plan recommendation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#27AAE1] text-[#27AAE1] hover:bg-[#27AAE1]/10 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 px-8 transition-all duration-300"
                >
                  Run a free website performance check
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
