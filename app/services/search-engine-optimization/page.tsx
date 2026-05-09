"use client";

import { motion } from "framer-motion";
import {
  Cog,
  MessageSquare,
  PenTool,
  Award,
  MapPin,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  X,
  Check,
  Shield,
  Code2,
  RefreshCcw,
  Briefcase,
  Users,
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

// Citation Engine framework cards
const frameworkCards = [
  {
    icon: Cog,
    title: "Technical SEO that compounds",
    description:
      "Site speed, crawlability, indexation, schema markup, internal linking, Core Web Vitals, log file analysis, and JavaScript rendering audits.",
  },
  {
    icon: MessageSquare,
    title: "AI search optimization (GEO)",
    description:
      "We optimize content for citation in Google AI Overviews, ChatGPT, Perplexity, and Claude. Citations and statistics boost AI visibility by 40% (Princeton GEO, 2024).",
  },
  {
    icon: PenTool,
    title: "Content strategy and SME production",
    description:
      "Editorial calendars built around topic clusters, search intent, and pipeline stages. Subject-matter experts, not generalists.",
  },
  {
    icon: Award,
    title: "Authority through earned media",
    description:
      "Earned coverage through digital PR, original research, podcast appearances, and authentic outreach. No PBNs, no paid links.",
  },
  {
    icon: MapPin,
    title: "Local and multi-location SEO",
    description:
      "Google Business Profile management, local citations, review-driven schema, location-specific landing pages, Bing Places.",
  },
  {
    icon: TrendingUp,
    title: "Conversion-rate optimization",
    description:
      "A/B testing, form optimization, friction audits. Every test tied to MQLs and SQLs in your CRM.",
  },
];

// Process timeline steps
const processSteps = [
  {
    number: "1",
    title: "Audit and roadmap",
    timeline: "Month 1",
    description:
      "Full technical audit, AI visibility audit (20+ priority queries tested), competitor analysis, 90-day priority roadmap.",
  },
  {
    number: "2",
    title: "Foundation",
    timeline: "Months 2-3",
    description:
      "Technical fixes, schema rollout, CRM tracking, content blueprints, first wave of optimized content. Technical lifts in 30-60 days.",
  },
  {
    number: "3",
    title: "Acceleration",
    timeline: "Months 4-6",
    description:
      "Content production at 4 to 12 pieces/month, link earning, GEO optimization, ongoing technical work.",
  },
  {
    number: "4",
    title: "Compounding",
    timeline: "Month 6+",
    description:
      "40-80% lift in organic traffic typical, measurable lift in AI citation share. Monthly reporting with pipeline impact.",
  },
];

// Pricing tiers
const pricingTiers = [
  {
    name: "Foundation",
    bestFor: "Single-product B2B, $10M to $50M revenue",
    price: "$3,600/month",
    features: [
      "Technical SEO",
      "4 SME content pieces/mo",
      "AI visibility tracking",
      "Monthly reporting",
      "CRO testing",
    ],
    recommended: false,
  },
  {
    name: "Growth",
    bestFor: "Multi-product or multi-location, $50M to $200M",
    price: "$7,200/month",
    features: [
      "Everything in Foundation",
      "8 content pieces/mo",
      "GEO optimization",
      "Link earning",
      "ABM landing pages",
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    bestFor: "$200M+, multi-brand, complex stacks",
    price: "$12,000/month+",
    features: [
      "Everything in Growth",
      "12+ content pieces/mo",
      "Original research",
      "Digital PR",
      "Dedicated strategist",
      "Weekly cadence",
    ],
    recommended: false,
  },
];

// Comparison table data
const comparisonRows = [
  {
    factor: "Contract terms",
    truax: "Month-to-month",
    typical: "12-month minimum",
  },
  {
    factor: "AI search optimization",
    truax: "Included in every retainer",
    typical: "Not offered or upcharged",
  },
  {
    factor: "CRM integration",
    truax: "MQL/SQL attribution wired in",
    typical: "Rankings-only reporting",
  },
  {
    factor: "Content quality",
    truax: "Subject-matter expert review",
    typical: "Outsourced to generalists at $0.05/word",
  },
  {
    factor: "Backlinks",
    truax: "Earned through PR and research",
    typical: "PBNs or paid links",
  },
  {
    factor: "Reporting cadence",
    truax: "Monthly with pipeline impact",
    typical: "Quarterly with vanity metrics",
  },
  {
    factor: "Account team",
    truax: "Dedicated strategist + content lead",
    typical: "Junior account manager",
  },
];

// Who this is for
const whoYes = [
  "Your top competitor shows up in ChatGPT for buyer queries and you do not",
  "Organic traffic has been flat for 12+ months",
  "You are paying for SEO and cannot tell what you are getting",
  "AI Overviews are showing up for your queries and reducing your clicks",
  "You need to defend SEO spend to the CFO with revenue numbers",
  "You are migrating to a new CMS and want SEO done right",
];

const whoNo = [
  "You are pre-revenue or pre-product-market-fit",
  "You want overnight rankings (SEO compounds over months)",
  "You want to buy backlinks (we will not)",
];

// Outcome stats
const outcomeStats = [
  {
    stat: "40-80%",
    label: "lift in non-branded organic traffic",
    source: "BrightEdge, 2024",
  },
  {
    stat: "2x to 3x",
    label: "increase in MQLs from organic search",
    source: "HubSpot State of Marketing, 2025",
  },
  {
    stat: "30-50%",
    label: "improvement in AI citation share",
    source: "Otterly AI benchmarks, 2024",
  },
  {
    stat: "20-35%",
    label: "reduction in CAC for organic-influenced deals",
    source: "Forrester, 2024",
  },
  {
    stat: "95+",
    label: "Lighthouse correlates with 24% higher conversion",
    source: "Google Web.dev, 2023",
  },
];

// FAQ items
const faqItems = [
  {
    question: "How long does B2B SEO take to show results?",
    answer:
      "Technical fixes can produce lifts in 30 to 60 days. Content-driven gains in months 3 to 4. Compounding effect in months 6 to 12.",
  },
  {
    question: "What is GEO or AI search optimization?",
    answer:
      "Generative Engine Optimization (GEO) is structuring content so it gets cited by AI answer engines like ChatGPT, Perplexity, AI Overviews, and Gemini.",
  },
  {
    question: "Will AI Overviews kill my organic traffic?",
    answer:
      "AI Overviews reduce clicks by up to 58% on informational queries (Search Engine Land, 2024). Bottom-funnel queries are less affected. We rebuild strategy around what still drives pipeline.",
  },
  {
    question: "Do you do link building?",
    answer:
      "Yes, through earned media, original research, and digital PR. No PBNs, no paid links.",
  },
  {
    question: "How do you report on results?",
    answer:
      "Monthly: organic traffic, AI citation share, MQL volume, SQL conversion, pipeline influenced, revenue attribution.",
  },
  {
    question: "Can you handle technical SEO for headless or JavaScript-heavy sites?",
    answer:
      "Yes. Next.js, Gatsby, Vue, React, and headless WordPress regularly.",
  },
  {
    question: "Do you do local SEO?",
    answer:
      "Yes, for multi-location B2B and service-area businesses.",
  },
  {
    question: "What if we have an existing SEO agency?",
    answer:
      "Happy to do a second-opinion audit. Honest assessment either way.",
  },
  {
    question: "What is the difference between SEO and GEO?",
    answer:
      "SEO targets traditional Google rankings. GEO targets citations in AI-generated answers. Modern programs need both.",
  },
  {
    question: "Will keyword stuffing help us rank in AI?",
    answer:
      "No. Princeton GEO study found keyword stuffing reduces AI citation rates by 10%. Citations boost visibility by 40%.",
  },
];

export default function SEOPage() {
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
                Search Engine Optimization
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight leading-[1.1]"
              >
                SEO built for revenue, not rankings reports
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-400 mb-8 leading-relaxed"
              >
                Most SEO agencies optimize for vanity. We optimize for pipeline. Technical SEO, AI search readiness, and content that compounds, all wired to your CRM so you can prove what works in the room with your CFO.
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
                    Book a 30-minute strategy call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#27AAE1] text-[#27AAE1] hover:bg-[#27AAE1]/10 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 px-8 transition-all duration-300"
                  >
                    Get a free SEO + AI visibility audit
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
                <div className="absolute top-12 left-12 w-24 h-24 bg-[#27AAE1]/20 rounded-full" />
                <div className="absolute top-8 right-16 w-32 h-8 bg-[#2B3990]/40 rounded-full" />
                <div className="absolute bottom-20 left-20 w-28 h-28 border-2 border-[#27AAE1]/30 rounded-2xl rotate-12" />
                <div className="absolute bottom-12 right-12 w-20 h-20 bg-[#27AAE1]/30 rounded-lg" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#27AAE1] rounded-full opacity-60" />
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
              What is B2B SEO?
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              B2B SEO is the practice of earning qualified traffic from search engines and AI answer engines, then converting that traffic into pipeline. Truax Marketing delivers technical SEO, content strategy, AI search optimization (GEO), and CRM-tied reporting for mid-market B2B companies. Retainers start at $3,600 per month with month-to-month terms.
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
            If your buyers ask ChatGPT first, your SEO strategy is two years old
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <p className="text-gray-400 leading-relaxed mb-6">
              Three forces have rewritten B2B SEO in the last 24 months:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[#27AAE1] font-semibold">1.</span>
                <span className="text-gray-400">
                  Google AI Overviews now appear in 45% of searches and reduce clicks to websites by up to 58%{" "}
                  <span className="text-gray-500">(Search Engine Land, 2024)</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#27AAE1] font-semibold">2.</span>
                <span className="text-gray-400">
                  ChatGPT, Perplexity, Gemini, and Copilot collectively crossed 1.5 billion monthly visits and are pulling top-funnel research traffic away from Google
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#27AAE1] font-semibold">3.</span>
                <span className="text-gray-400">
                  B2B buyers complete 67% of their research before talking to sales{" "}
                  <span className="text-gray-500">(Gartner Future of Sales, 2024)</span>, and increasingly that research starts in an AI chat window
                </span>
              </li>
            </ul>
            <p className="text-gray-400 leading-relaxed mb-6">
              If your SEO partner is still selling you keyword density reports and 12-month contracts for &quot;rankings,&quot; you are paying for a service that no longer matches the market.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We rebuilt SEO around three forces that drive pipeline: traditional organic search, AI answer engines, and conversion-tied content. We call this the Citation Engine framework.
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
            The Citation Engine framework
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-12 tracking-tight text-center"
          >
            Six pillars under every retainer
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworkCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-[#0a0a12] border border-[#262466] hover:border-[#27AAE1]/50 transition-all"
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
            How we work
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
              You are the new VP Marketing at a $60M B2B SaaS company. Your CMO left three months ago. The last SEO agency was billing $9,000 a month for &quot;ongoing optimization&quot; and the CFO is asking what you are getting for it. You check ChatGPT for your top three buying-intent queries. Your top competitor is cited in all three. You are not.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              Six months in: technical foundation rebuilt, schema deployed across 80+ pages, 40+ pieces of subject-matter expert content shipped, and your brand is now cited in 14 of 20 priority queries across ChatGPT, Perplexity, and AI Overviews. Organic pipeline is up 67%. CFO stops asking.
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
            Month-to-month terms. No annual contracts. 60-day notice for offboarding with full data, content, and process handoff.
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
            Truax vs. typical SEO agency
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
                    Typical SEO Agency
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
              Ready to compete in the new search landscape?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              The audit covers technical SEO, AI visibility (we test 20 queries across ChatGPT, Perplexity, AI Overviews, and Gemini), and the top three opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/meet">
                <Button
                  size="lg"
                  className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#27AAE1]/25 active:translate-y-0 text-black font-medium px-8 transition-all duration-300"
                >
                  Book a 30-minute strategy call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#27AAE1] text-[#27AAE1] hover:bg-[#27AAE1]/10 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 px-8 transition-all duration-300"
                >
                  Get a free SEO + AI visibility audit
                </Button>
              </Link>
            </div>
            <p className="text-gray-500 text-sm">
              48-hour turnaround. No commitment.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
