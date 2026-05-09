"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  Layers,
  Database,
  BookOpen,
  Cpu,
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

// Operating System for Revenue framework cards
const frameworkCards = [
  {
    icon: TrendingUp,
    title: "Revenue model and growth math",
    description:
      "Pipeline targets, conversion rates by stage, channel mix, CAC, payback, LTV. You leave week three knowing what each channel needs to deliver.",
  },
  {
    icon: Target,
    title: "Positioning and category strategy",
    description:
      "ICP, value props, messaging, competitive differentiation. One-page positioning doc your whole org can quote.",
  },
  {
    icon: Layers,
    title: "MarTech stack architecture",
    description:
      "Map current stack, identify cuts, design integrations, document workflow. Average mid-market cuts 23% of MarTech spend in first 90 days (Gartner, 2024).",
  },
  {
    icon: Database,
    title: "CRM architecture and lifecycle",
    description:
      "Lead scoring, lifecycle stages, routing rules, sales handoff criteria, attribution model. HubSpot, Salesforce, Pardot, Marketo all in scope.",
  },
  {
    icon: BookOpen,
    title: "Content and demand strategy",
    description:
      "Editorial calendar, topic clusters, channel mix, paid media plan, ABM motion, AI search optimization.",
  },
  {
    icon: Cpu,
    title: "AI enablement and automation",
    description:
      "AI in SDR enablement, content production, campaign analysis, RAG knowledge, customer-facing assistants. Operator, not gimmick.",
  },
  {
    icon: BarChart3,
    title: "Analytics and attribution",
    description:
      "GA4, GTM, server-side tracking, multi-touch attribution, BI dashboards. One source of truth across the C-suite.",
  },
];

// Process timeline steps
const processSteps = [
  {
    number: "1",
    title: "Diagnostic",
    timeline: "Weeks 1-2",
    description:
      "Stakeholder interviews, MarTech audit, CRM audit, content audit, reporting audit, competitive benchmarking.",
  },
  {
    number: "2",
    title: "Strategy and design",
    timeline: "Weeks 3-6",
    description:
      "Revenue model, positioning, MarTech architecture, CRM redesign, content blueprint, 12-month roadmap.",
  },
  {
    number: "3",
    title: "Implementation runway",
    timeline: "Weeks 7-12",
    description:
      "Hands-on for 90 days of execution. CRM rebuild, MarTech consolidation, tracking, AI workflows, team enablement.",
  },
  {
    number: "4",
    title: "Operating partnership",
    timeline: "Optional",
    description:
      "Monthly strategic reviews, quarterly planning, ongoing optimization.",
  },
];

// Pricing tiers
const pricingTiers = [
  {
    name: "Strategy Sprint",
    bestFor: "New CMOs, pre-funding diligence, 90-day reset",
    price: "$12,000 one-time",
    timeline: "4 weeks",
    features: [
      "Full diagnostic across team, MarTech, CRM",
      "Revenue model design",
      "Positioning document",
      "90-day priority roadmap",
    ],
    recommended: false,
  },
  {
    name: "Strategy + Implementation",
    bestFor: "Mid-market teams ready to rebuild MarTech and CRM",
    price: "$36,000 one-time",
    timeline: "12 weeks",
    features: [
      "Everything in Strategy Sprint",
      "Hands-on implementation",
      "CRM rebuild",
      "MarTech consolidation",
      "AI workflow design",
      "Team enablement",
    ],
    recommended: true,
  },
  {
    name: "Operating Partnership",
    bestFor: "Ongoing strategic partner, monthly executive cadence",
    price: "$6,000 to $18,000/month",
    timeline: "Ongoing",
    features: [
      "Monthly strategic reviews",
      "Quarterly planning",
      "Board prep support",
      "Ongoing optimization",
    ],
    recommended: false,
  },
];

// Comparison table data
const comparisonRows = [
  {
    factor: "Output",
    truax: "Working system + documentation",
    typical: "PDF deck",
  },
  {
    factor: "Implementation",
    truax: "Hands-on through week 12",
    typical: "Hands-off after handoff",
  },
  {
    factor: "MarTech expertise",
    truax: "HubSpot, Salesforce, Marketo, AI tools",
    typical: "Generic frameworks",
  },
  {
    factor: "AI integration",
    truax: "Designed into workflow",
    typical: "Mentioned in passing",
  },
  {
    factor: "Pricing",
    truax: "Fixed-fee or retainer",
    typical: "Hourly billing surprises",
  },
  {
    factor: "Background",
    truax: "Operator-led, CMO and CRM background",
    typical: "Career consultant",
  },
  {
    factor: "Cost vs. Big 4",
    truax: "10-20% of comparable scope",
    typical: "$250K+ for similar engagement",
  },
];

// Who this is for
const whoYes = [
  "New CMO or VP Marketing in first 90 days",
  "Marketing spend up but pipeline flat",
  "MarTech grew organically and nobody owns it",
  "CRM is a graveyard with no lifecycle logic",
  "Considering a CRM migration",
  "Pre-funding diligence requires a credible plan",
  "AI is on the board agenda",
];

const whoNo = [
  "Pre-revenue or pre-product-market-fit",
  "You want strategy slides without execution accountability",
  "You need a doer for a single channel (see other service pages)",
];

// Outcome stats
const outcomeStats = [
  {
    stat: "30-50%",
    label: "reduction in CAC",
    source: "Forrester TEI, 2024",
  },
  {
    stat: "2x-3x",
    label: "improvement in MQL-to-SQL conversion",
    source: "HubSpot, 2025",
  },
  {
    stat: "25-40%",
    label: "lift in pipeline reporting accuracy",
    source: "Bizible/Marketo, 2024",
  },
  {
    stat: "23%",
    label: "average MarTech spend reduction",
    source: "Gartner CMO Spend Survey, 2024",
  },
  {
    stat: "60-80%",
    label: "reduction in time-to-decision in marketing leadership meetings",
    source: "",
  },
];

// FAQ items
const faqItems = [
  {
    question: "How is this different from a McKinsey or BCG strategy engagement?",
    answer:
      "We are operators, not consultants. Hands-on through implementation. 10-20% of Big 4 fees because we run lean.",
  },
  {
    question: "Do we have to use specific tools?",
    answer:
      "No. Tool-agnostic. Deep expertise in HubSpot, Salesforce, Marketo, Pardot, ActiveCampaign, Customer.io, Segment, GA4.",
  },
  {
    question: "Can you migrate us between CRMs?",
    answer:
      "Yes. CRM migration is high-leverage work. HubSpot to Salesforce, Pipedrive to HubSpot, Marketo to Pardot.",
  },
  {
    question: "How involved does our team need to be?",
    answer:
      "First two weeks: 4-6 hours from CMO, sales leader, ops lead. Implementation: 2-4 hours per week from project owner.",
  },
  {
    question: "What if our team cannot run the system after handoff?",
    answer:
      "Every engagement includes 8-12 hours of training, written SOPs, and 60-day post-handoff support.",
  },
  {
    question: "Do you work with venture-backed companies?",
    answer:
      "Yes. PE-backed and venture-backed mid-market companies. Comfortable with board reporting requirements.",
  },
  {
    question: "What about international or multi-region operations?",
    answer:
      "US, Canada, UK, EU. Note: one of our clients (Ai Insurance Organization) does not operate in Quebec.",
  },
  {
    question: "How do you handle AI strategy specifically?",
    answer:
      "Built into every engagement. SDR enablement, content production, campaign analysis, RAG knowledge, customer-facing assistants.",
  },
  {
    question: "What about board-level reporting?",
    answer:
      "We can build the marketing portion of your board deck and brief your CFO on attribution methodology.",
  },
  {
    question: "Is this strategy or implementation?",
    answer:
      "Both. Most consultants stop at strategy. We bake implementation into every engagement.",
  },
];

export default function DigitalStrategyPage() {
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
                Digital Strategy
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight leading-[1.1]"
              >
                The strategy that turns marketing into a revenue system
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-400 mb-8 leading-relaxed"
              >
                Most digital strategy decks die in a Google Drive folder. Ours ship as a working system, CRM, MarTech, attribution, content, and AI workflows wired together to generate, route, and close pipeline.
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
                    Book a strategy call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#27AAE1] text-[#27AAE1] hover:bg-[#27AAE1]/10 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 px-8 transition-all duration-300"
                  >
                    Get a free MarTech and CRM diagnostic
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
                <div className="absolute top-8 left-8 w-40 h-40 border-2 border-[#27AAE1]/30 rounded-2xl" />
                <div className="absolute top-16 right-12 w-20 h-20 bg-[#2B3990]/40 rounded-lg rotate-12" />
                <div className="absolute bottom-24 left-16 w-24 h-24 bg-[#27AAE1]/20 rounded-full" />
                <div className="absolute bottom-12 right-16 w-32 h-4 bg-[#27AAE1]/40 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#27AAE1] rounded-xl opacity-50 rotate-45" />
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
              What is B2B digital strategy?
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              B2B digital strategy is the architecture that turns marketing investment into revenue. It connects positioning, demand programs, MarTech, CRM, content, AI workflows, and reporting into one system. Truax Marketing builds these for mid-market companies in 6 to 12 weeks. Engagements start at $12,000 one-time or $6,000 per month.
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
            Strategy decks die in Google Drive. Working systems do not.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <p className="text-gray-400 leading-relaxed mb-6">
              Most strategy decks are PDFs that look smart and change nothing. They live on a shared drive, get referenced once at a kickoff, then quietly die when the next quarter starts.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              The failure pattern is consistent across every B2B mid-market team we audit:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[#27AAE1]">-</span>
                <span className="text-gray-400">
                  Strategy is decoupled from execution, the deck is built by people who never touch the CRM
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#27AAE1]">-</span>
                <span className="text-gray-400">
                  MarTech is bought before the workflow is designed, then nobody owns it
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#27AAE1]">-</span>
                <span className="text-gray-400">
                  Reporting measures activity (MQLs, opens, clicks) instead of revenue contribution
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#27AAE1]">-</span>
                <span className="text-gray-400">
                  AI is &quot;on the roadmap&quot; but not actually inside any workflow
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#27AAE1]">-</span>
                <span className="text-gray-400">
                  Sales and marketing each run their own data and they disagree about what is true
                </span>
              </li>
            </ul>
            <p className="text-gray-400 leading-relaxed">
              We do strategy differently. Every engagement ends with a working system, not a slideshow. We call this the Operating System for Revenue.
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
            The Operating System for Revenue framework
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-12 tracking-tight text-center"
          >
            Seven layers of every engagement
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
              You are a new VP Marketing at a $80M B2B services company. The board hired you to fix marketing. You inherit a HubSpot instance with 240,000 contacts (most stale), four different attribution definitions across the team, an SDR team using a different lead-scoring model than marketing, and a $1.2M MarTech budget with no clear owner.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              Twelve weeks later: HubSpot rebuilt with clean lifecycle stages, MarTech consolidated from 23 tools to 14 (saving $340K annually), one attribution model used across sales and marketing, AI tools integrated for SDR enablement and content production, and a 12-month roadmap your CEO actually believes in.
            </p>
            <p className="text-xl font-semibold text-white">
              Now you can build instead of clean up.
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
                <p className="text-gray-500 text-sm mb-6">{tier.timeline}</p>
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
            Truax vs. typical consultant
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
                    Typical Consultant
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
              Ready to make marketing make sense?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              The diagnostic is a 90-minute working session. You leave with a clear read on the three biggest leverage points. No deck. No upsell.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/meet">
                <Button
                  size="lg"
                  className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#27AAE1]/25 active:translate-y-0 text-black font-medium px-8 transition-all duration-300"
                >
                  Book a strategy call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#27AAE1] text-[#27AAE1] hover:bg-[#27AAE1]/10 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 px-8 transition-all duration-300"
                >
                  Get a free MarTech and CRM diagnostic
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
