"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  Building,
  BookOpen,
  Mail,
  Sparkles,
  TestTube,
  BarChart3,
  ArrowRight,
  CheckCircle,
  X,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Pipeline Integration model cards
const frameworkCards = [
  {
    icon: DollarSign,
    title: "Paid media that converts to pipeline",
    description:
      "Google Ads, LinkedIn, Meta, programmatic, plus AI ad surfaces (ChatGPT, Perplexity, Reddit Ads). Built around buying-stage hypotheses, not keyword volume.",
  },
  {
    icon: Building,
    title: "Account-based marketing",
    description:
      "Tiered account strategy, intent data (6sense, Demandbase, Bombora), multi-channel orchestration, quarterly account reviews.",
  },
  {
    icon: BookOpen,
    title: "Content and SEO that compound",
    description:
      "Editorial tied to topic clusters, search intent, pipeline stages. Subject-matter experts. Optimized for Google and AI answer engines.",
  },
  {
    icon: Mail,
    title: "Email and lifecycle marketing",
    description:
      "Welcome flows, nurture, sales-assist, expansion, re-engagement. Built in HubSpot, Marketo, Pardot, ActiveCampaign, Customer.io.",
  },
  {
    icon: Sparkles,
    title: "AI ad surfaces (the new frontier)",
    description:
      "ChatGPT advertising, Perplexity sponsored answers, Reddit Ads. Low CPM, buyer-grade audiences, light competition. We are running tests today.",
  },
  {
    icon: TestTube,
    title: "Conversion-rate optimization",
    description:
      "Landing page tests, form optimization, friction audits. Every test tied to MQL, SQL, pipeline lift.",
  },
  {
    icon: BarChart3,
    title: "Reporting and attribution",
    description:
      "GA4, GTM, server-side tracking, multi-touch attribution (HubSpot, Bizible, Dreamdata). Single source of truth for revenue.",
  },
];

// Process timeline steps
const processSteps = [
  {
    number: "1",
    title: "Audit and plan",
    timeline: "Month 1",
    description:
      "Channel audit, CRM audit, attribution audit, ICP refresh. 90-day plan with weekly milestones.",
  },
  {
    number: "2",
    title: "Build and ignite",
    timeline: "Months 2-3",
    description:
      "Campaign builds, CRM and tracking setup, content production, first wave of paid spend.",
  },
  {
    number: "3",
    title: "Scale and optimize",
    timeline: "Months 4-6",
    description:
      "Channel mix adjusts based on what is working. ABM motion launches if relevant.",
  },
  {
    number: "4",
    title: "Compounding",
    timeline: "Month 6+",
    description:
      "Steady-state operating cadence with monthly executive reviews and quarterly planning.",
  },
];

// Pricing tiers
const pricingTiers = [
  {
    name: "Pipeline Starter",
    bestFor: "$10M to $30M revenue, single product",
    price: "$6,000/month",
    features: [
      "2 paid channels",
      "Content production",
      "Lifecycle email",
      "Monthly reporting",
    ],
    recommended: false,
  },
  {
    name: "Pipeline Engine",
    bestFor: "$30M to $150M revenue, multi-product",
    price: "$12,000/month",
    features: [
      "3-4 paid channels",
      "ABM motion",
      "Content production",
      "Lifecycle email",
      "CRO testing",
    ],
    recommended: true,
  },
  {
    name: "Pipeline at Scale",
    bestFor: "$150M+ revenue, complex motion",
    price: "$24,000-$30,000/month",
    features: [
      "Full omnichannel",
      "ABM motion",
      "Dedicated team",
      "Weekly cadence",
    ],
    recommended: false,
  },
];

// Comparison table data
const comparisonRows = [
  {
    factor: "North-star metric",
    truax: "Pipeline and closed revenue",
    typical: "MQLs and CTR",
  },
  {
    factor: "CRM integration",
    truax: "Built into every program",
    typical: "Frequently broken or missing",
  },
  {
    factor: "Channel mix",
    truax: "Performance-driven, channel-agnostic",
    typical: "Whatever they sell most of",
  },
  {
    factor: "ABM capability",
    truax: "Full motion, not just LinkedIn ads",
    typical: "Limited or outsourced",
  },
  {
    factor: "AI ad surfaces",
    truax: "ChatGPT, Perplexity, Reddit included",
    typical: "Not on the radar",
  },
  {
    factor: "Attribution",
    truax: "Multi-touch with CRM source-of-truth",
    typical: "Last-click default",
  },
  {
    factor: "Reporting cadence",
    truax: "Bi-weekly with pipeline impact",
    typical: "Monthly with CTR slides",
  },
];

// Who this is for
const whoYes = [
  "Marketing spend is up but pipeline is flat",
  "You inherited a paid media account nobody understands",
  "ABM is \"on the roadmap\" and never ships",
  "Sales says marketing leads are bad, marketing says sales does not work them",
  "You need to defend marketing spend to the CFO with revenue",
  "AI is changing buyer behavior and you have not adapted",
];

const whoNo = [
  "Pre-product-market-fit (demand gen requires repeatable motion)",
  "You want a single channel only (see other service pages)",
  "You want overnight pipeline (programs ramp over 90 days)",
];

// Outcome stats
const outcomeStats = [
  {
    stat: "2x-4x",
    label: "increase in qualified pipeline",
    source: "HubSpot State of Marketing, 2025",
  },
  {
    stat: "30-50%",
    label: "reduction in cost per qualified pipeline opportunity",
    source: "Forrester TEI, 2024",
  },
  {
    stat: "25-40%",
    label: "improvement in MQL-to-SQL conversion",
    source: "Bizible benchmarks, 2024",
  },
  {
    stat: "40-80%",
    label: "lift in branded search demand",
    source: "BrightEdge, 2024",
  },
  {
    stat: "60-80%",
    label: "lift in win rates on ABM-targeted accounts",
    source: "TOPO/Demandbase, 2024",
  },
];

// FAQ items
const faqItems = [
  {
    question: "What is the difference between demand generation and lead generation?",
    answer:
      "Lead gen is form fills. Demand gen is the integrated work of creating, capturing, and converting buyer demand into pipeline.",
  },
  {
    question: "Do you run paid media in-house or outsource it?",
    answer:
      "In-house. Paid media is too tightly coupled to CRM, attribution, and creative iteration to outsource.",
  },
  {
    question: "What ad platforms do you run?",
    answer:
      "Google Ads, LinkedIn, Meta, TikTok B2B, programmatic, Reddit Ads, ChatGPT advertising, Perplexity sponsored answers.",
  },
  {
    question: "Do you handle ABM?",
    answer:
      "Yes. Full ABM motion: list building, intent data, multi-channel orchestration, sales enablement.",
  },
  {
    question: "Can you work with our existing sales team?",
    answer:
      "Yes. SDR-aware, RevOps-friendly. Direct work with VP Sales and RevOps lead.",
  },
  {
    question: "How do you handle attribution?",
    answer:
      "Multi-touch with CRM as source of truth. HubSpot Attribution, Bizible/Adobe, or Dreamdata depending on stack.",
  },
  {
    question: "What about AI in demand gen?",
    answer:
      "AI extensively used: campaign analysis, creative variants, ad copy testing, content drafting, SDR enablement, meeting summaries.",
  },
  {
    question: "Are you running ads on ChatGPT and Perplexity?",
    answer:
      "Yes. Testing across multiple B2B verticals. Low CPMs, buyer-grade audiences, light competition. The window will not last forever.",
  },
  {
    question: "Do you do influencer or creator marketing?",
    answer:
      "For B2B, yes, mostly LinkedIn creators, podcast sponsorships, industry analyst influence programs.",
  },
  {
    question: "What is the minimum engagement length?",
    answer:
      "90-day initial commitment. After 90 days, month-to-month with 60-day notice.",
  },
];

export default function DemandGenerationPage() {
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
                Demand Generation
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight leading-[1.1]"
              >
                Demand generation that builds pipeline, not just leads
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-400 mb-8 leading-relaxed"
              >
                Most demand gen programs hit MQL targets and miss revenue. We run paid, ABM, content, and lifecycle as a single integrated system, every dollar attributed to the deals it actually influenced.
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
                    Book a pipeline planning call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#27AAE1] text-[#27AAE1] hover:bg-[#27AAE1]/10 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 px-8 transition-all duration-300"
                  >
                    Get a free demand gen audit
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

            {/* Right column - Abstract geometric illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2B3990]/30 to-[#27AAE1]/20 rounded-3xl border border-[#262466]" />
                <div className="absolute top-12 left-12 w-28 h-28 bg-[#27AAE1]/20 rounded-xl rotate-6" />
                <div className="absolute top-8 right-16 w-16 h-16 bg-[#2B3990]/40 rounded-full" />
                <div className="absolute bottom-16 left-20 w-20 h-4 bg-[#27AAE1]/40 rounded-full" />
                <div className="absolute bottom-8 right-12 w-32 h-32 border-2 border-[#27AAE1]/30 rounded-2xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#27AAE1] rounded-lg opacity-60" />
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
              What is B2B demand generation?
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              B2B demand generation is the integrated practice of creating, capturing, and converting qualified demand into pipeline and revenue. Truax Marketing runs paid media, ABM, content, lifecycle email, AI ad surfaces, and CRO as a single program, attributed to deals through HubSpot or Salesforce. Programs start at $6,000 per month.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 px-6 border-y border-[#262466]/50">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-500 text-sm">
            Industries served: Insurance | SaaS | Warranty | B2B Services | Financial Services | Professional Services
          </p>
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
            Hitting your MQL number is not the same as hitting your revenue number
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <p className="text-gray-400 leading-relaxed mb-6">
              Most B2B demand programs are graded on the wrong thing. Marketing hits an MQL target, hands the leads to sales, and quietly hopes the funnel works. Six months later, the CFO asks why pipeline is flat and nobody can answer with confidence.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              The leak is structural:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[#27AAE1]">-</span>
                <span className="text-gray-400">
                  Lead targets are not pipeline targets, and the gap is widening
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#27AAE1]">-</span>
                <span className="text-gray-400">
                  Generic content does not match buyer intent at the moment of search
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#27AAE1]">-</span>
                <span className="text-gray-400">
                  CRM hygiene is a mess, lifecycle stages are fictional
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#27AAE1]">-</span>
                <span className="text-gray-400">
                  Attribution is a guess, last-click reporting flatters the wrong channels
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#27AAE1]">-</span>
                <span className="text-gray-400">
                  Paid spend optimizes to clicks instead of closed-won
                </span>
              </li>
            </ul>
            <p className="text-gray-400 leading-relaxed">
              Gartner research (2024) found B2B buyers spend only 17% of the journey with sales reps. We rebuild demand gen as a revenue system. We call it the Pipeline Integration model.
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
            The Pipeline Integration model
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-12 tracking-tight text-center"
          >
            Seven channels, one system
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworkCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group p-8 rounded-2xl bg-[#0a0a12] border border-[#262466] hover:border-[#27AAE1]/50 transition-all ${
                  index === 6 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="w-14 h-14 rounded-xl bg-[#27AAE1]/10 flex items-center justify-center mb-6 group-hover:bg-[#27AAE1]/20 transition-colors">
                  <card.icon className="h-7 w-7 text-[#27AAE1]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.description}</p>
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
            How we run programs
          </motion.h2>

          {/* Desktop: Horizontal stepper */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-[#262466]" />
              <div className="grid grid-cols-4 gap-4">
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
              You are the new CMO at a $50M B2B SaaS company. The board hired you to fix demand. Inherited stack: $1.8M in paid media spend with no clear attribution, an SDR team disconnected from marketing, a HubSpot full of stale contacts, LinkedIn ads running on autopilot for 14 months with no creative refresh, and zero content produced in 8 months.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              Six months in: paid media reallocated to highest-ROI channels (and one new bet on Perplexity sponsored answers), 30+ pieces of subject-matter expert content shipped, ABM motion live for top 50 accounts, lifecycle email rebuilt, attribution wired through HubSpot. Marketing-sourced pipeline up 142%. CFO calls you about board prep, not about why marketing is so expensive.
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
                <p className="text-3xl font-bold text-[#27AAE1] mb-6">
                  {tier.price}
                </p>
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
            Paid media spend is separate from agency fees. We typically recommend 4x to 8x agency fee in media spend for healthy program economics.
          </motion.p>
        </div>
      </section>

      {/* Section 6: Comparison table */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-12 tracking-tight text-center"
          >
            Truax vs. typical agency
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto rounded-2xl border border-[#262466]"
          >
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-[#262466] bg-[#0f0f1a]">
                  <th className="text-left py-4 px-6 font-semibold">Factor</th>
                  <th className="text-left py-4 px-6 text-[#27AAE1] font-semibold">
                    Truax Marketing
                  </th>
                  <th className="text-left py-4 px-6 text-gray-500 font-semibold">
                    Typical Agency
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
                    <td className="py-4 px-6 text-gray-500">{row.typical}</td>
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
                <p className="text-gray-500 text-xs">{outcome.source}</p>
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
              Ready to ship demand that closes deals?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              The audit covers paid media, content, CRM hygiene, attribution, and the top three opportunities. Two-week turnaround. No commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/meet">
                <Button
                  size="lg"
                  className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#27AAE1]/25 active:translate-y-0 text-black font-medium px-8 transition-all duration-300"
                >
                  Book a pipeline planning call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#27AAE1] text-[#27AAE1] hover:bg-[#27AAE1]/10 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 px-8 transition-all duration-300"
                >
                  Get a free demand gen audit
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
