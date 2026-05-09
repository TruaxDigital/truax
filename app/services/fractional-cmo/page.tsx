"use client";

import { motion } from "framer-motion";
import { 
  Compass, Users, Calendar, Target, Database, Cpu, Link2, AlertTriangle,
  ArrowRight, Check, X, ChevronDown, Quote
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";

const responsibilities = [
  {
    icon: Compass,
    title: "Strategic leadership",
    description: "Quarterly planning, board reporting, agency selection, budget allocation, growth strategy."
  },
  {
    icon: Users,
    title: "Team management and coaching",
    description: "Direct management of your marketing team. Hiring, performance reviews, 1:1s, career development."
  },
  {
    icon: Calendar,
    title: "Operating cadence",
    description: "Weekly leadership team, monthly all-hands, quarterly OKR reviews, board prep."
  },
  {
    icon: Target,
    title: "Demand generation accountability",
    description: "Pipeline targets, channel mix, paid media oversight, content strategy. We own the number."
  },
  {
    icon: Database,
    title: "MarTech and CRM ownership",
    description: "HubSpot, Salesforce, Marketo, Pardot, analytics. Calls on what to keep, cut, or buy."
  },
  {
    icon: Cpu,
    title: "AI enablement",
    description: "SDR enablement, content production, campaign analysis, RAG knowledge. AI as operator."
  },
  {
    icon: Link2,
    title: "Sales and marketing alignment",
    description: "Weekly sessions with VP Sales and RevOps. Clear handoff criteria, shared definitions."
  },
  {
    icon: AlertTriangle,
    title: "Crisis response",
    description: "PR, security incidents, brand crises, competitor moves. Senior judgment when stakes are highest."
  }
];

const processSteps = [
  {
    week: "Week 0",
    title: "Discovery",
    description: "Free 90-minute working session. Meet CEO, sales leader, marketing team. 30-day plan preview, no obligation."
  },
  {
    week: "Weeks 1-2",
    title: "Diagnostic",
    description: "Full diagnostic across team, MarTech, CRM, content, pipeline. Week-two readout with three biggest opportunities."
  },
  {
    week: "Weeks 3-6",
    title: "Stabilize",
    description: "Quick wins that prove the model: lifecycle cleanup, attribution, vendor renegotiation. 30-50% MarTech bloat reduction in first 60 days typical."
  },
  {
    week: "Weeks 7-12",
    title: "Build the plan",
    description: "12-month strategic plan, budget, OKRs, hiring plan, operating cadence. Team owns the system by week 12."
  },
  {
    week: "Weeks 13-26",
    title: "Operate and execute",
    description: "Weekly leadership cadence, agency management, team 1:1s, quarterly OKR rollouts, board prep."
  }
];

const pricingTiers = [
  {
    name: "Operating Partner",
    price: "$9,600",
    period: "/month",
    bestFor: "$10M to $30M revenue, small marketing team",
    time: "10-12 hours/week",
    recommended: false
  },
  {
    name: "Embedded CMO",
    price: "$16,000",
    period: "/month",
    bestFor: "$30M to $150M revenue, multi-channel",
    time: "18-22 hours/week",
    recommended: true
  },
  {
    name: "Executive in Residence",
    price: "$24,000",
    period: "/month",
    bestFor: "$150M+ revenue, transformation moments",
    time: "25-30 hours/week",
    recommended: false
  }
];

const comparisonData = [
  { factor: "Background", truax: "Operator, CRM and AI fluent", typical: "Career consultant or retired exec" },
  { factor: "Hands-on execution", truax: "Yes, owns outcomes", typical: "Advisory only" },
  { factor: "MarTech and CRM expertise", truax: "HubSpot, Salesforce, Marketo deep", typical: "Generic frameworks" },
  { factor: "AI integration", truax: "Designed into workflows", typical: "Not on the radar" },
  { factor: "Pricing model", truax: "Fixed monthly retainer", typical: "Hourly billing surprises" },
  { factor: "Team management", truax: "Direct management of your team", typical: "Strategic oversight only" },
  { factor: "Transition support", truax: "Permanent CMO search included", typical: "Hands off at handoff" },
  { factor: "First 90 days", truax: "Documented Embed Protocol", typical: '"We will figure it out"' }
];

const yesReasons = [
  "Last CMO left, 6 months into looking for replacement",
  "Marketing team is 2-8 people with no senior leadership",
  "You promoted a director who needs an executive coach",
  "Pipeline is flat and the board is asking why",
  "Pre-Series B and need senior judgment without senior cost",
  "CEO is functioning as de facto CMO and it is a bottleneck",
  "You inherited messy MarTech and CRM full of debt",
  "Exploring a category shift, rebrand, or new product launch"
];

const noReasons = [
  "Pre-product-market-fit with no marketing function yet",
  "You need a doer for a single channel",
  "You want strategy slides without execution accountability"
];

const outcomes = [
  { value: "30-50%", label: "improvement in marketing-sourced pipeline", source: "Forrester TEI, 2024" },
  { value: "25-40%", label: "reduction in marketing CAC", source: "HubSpot, 2025" },
  { value: "50-70%", label: "cost savings versus full-time CMO total comp", source: "" },
  { value: "60-90%", label: "improvement in internal team confidence", source: "Gartner CMO survey, 2024" },
  { value: "23%", label: "average MarTech spend reduction", source: "Gartner CMO Spend Survey, 2024" }
];

const faqs = [
  {
    q: "How is this different from a marketing consultant?",
    a: "A consultant advises and leaves. A fractional CMO operates and owns outcomes. Same accountability as a full-time hire."
  },
  {
    q: "How much time does the engagement take from my team?",
    a: "CEO: 1 hour/week. Sales leader: 1 hour/week. Marketing direct reports: standard 1:1s and team meetings."
  },
  {
    q: "Can the engagement convert to full-time?",
    a: "About 30% do. We are upfront if a fit develops. Otherwise we run a clean transition."
  },
  {
    q: "What is the difference between fractional CMO and interim CMO?",
    a: "Interim is full-time but temporary. Fractional is part-time and longer-term."
  },
  {
    q: "Do you bring your own marketing tools or use ours?",
    a: "Yours. The point is to embed in your stack, not add another tool to your bill."
  },
  {
    q: "What industries do you have experience with?",
    a: "Insurance, warranty, B2B SaaS, financial services, professional services, technology-enabled services."
  },
  {
    q: "Can you work with PE-backed or venture-backed companies?",
    a: "Yes. Comfortable with board reporting, investor cadences, transformation timelines."
  },
  {
    q: "What if it is not working out?",
    a: "30-day notice on either side after the 90-day commitment."
  },
  {
    q: "What does the first 30 days actually look like?",
    a: "Week 1: 1:1s with every team member, audit kickoff. Week 2: MarTech and CRM diagnostic, three-priority list. Weeks 3-4: quick wins shipped. End of month: 30-day readout."
  },
  {
    q: "Are you certified on HubSpot or Salesforce?",
    a: "Yes. HubSpot Solutions Partner with experience across all hubs. Salesforce and Pardot environments too."
  }
];

export default function FractionalCMOPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#27AAE1] font-medium mb-4 tracking-wide"
          >
            Fractional CMO Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight leading-[1.1]"
          >
            Senior marketing leadership{" "}
            <span className="text-[#27AAE1]">without the senior salary</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            A full-time CMO costs $300K base. Most mid-market companies need 60% of that workload, 
            not 100% of that headcount. We embed a senior operator into your business at a fraction 
            of the cost, with the same accountability.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/meet">
              <Button size="lg" className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black font-medium px-8">
                Book an executive intro call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-[#262466] hover:bg-[#262466]/50">
                Get a free 30-day plan preview
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Direct Answer Block */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-[#0f0f1a] border border-[#27AAE1]/30"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              <strong className="text-white">A fractional CMO</strong> is a senior marketing executive 
              who operates inside your business part-time, typically 10 to 25 hours per week, leading 
              strategy, hiring, vendor management, board reporting, and execution. Truax Marketing 
              fractional CMOs are operators with CRM, demand gen, and AI background. 
              Engagements start at <strong className="text-[#27AAE1]">$9,600 per month</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: When You Need a CMO */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
              When you need a CMO and when you do not
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-[#0f0f1a] border border-[#262466]"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">Full-time CMO is the right hire when:</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#27AAE1] mt-0.5 flex-shrink-0" />
                  <span>You have $50M+ in revenue</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#27AAE1] mt-0.5 flex-shrink-0" />
                  <span>Marketing org with 8+ people</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#27AAE1] mt-0.5 flex-shrink-0" />
                  <span>Complex multi-product motion</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#27AAE1] mt-0.5 flex-shrink-0" />
                  <span>Board pressure requiring full-time exec presence</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-[#2B3990]/20 to-[#27AAE1]/10 border border-[#27AAE1]/30"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">Fractional CMO is sharper when:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#27AAE1] mt-0.5 flex-shrink-0" />
                  <span>$10M to $50M revenue with marketing under-resourced</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#27AAE1] mt-0.5 flex-shrink-0" />
                  <span>Team of 2 to 6 marketers needing direction more than management</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#27AAE1] mt-0.5 flex-shrink-0" />
                  <span>Product-market-fit moment needing an operator not a strategist</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#27AAE1] mt-0.5 flex-shrink-0" />
                  <span>Budget that cannot absorb $300K base plus equity plus benefits</span>
                </li>
              </ul>
              <p className="mt-6 text-sm text-gray-400">
                Same seniority. Same accountability. 50 to 70% lower fully-loaded cost.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Eight Responsibilities */}
      <section className="py-24 px-6 bg-[#0f0f1a]/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#27AAE1] font-medium mb-3 tracking-wide">What a Truax fractional CMO does</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Eight responsibilities, one operator
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {responsibilities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group p-6 rounded-xl bg-[#0a0a12] border border-[#262466] hover:border-[#27AAE1]/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-[#27AAE1]/10 flex items-center justify-center mb-4 group-hover:bg-[#27AAE1]/20 transition-colors">
                  <item.icon className="h-6 w-6 text-[#27AAE1]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: 90-Day Embed Protocol */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              The 90-Day Embed Protocol
            </h2>
          </motion.div>

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.week}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-28">
                  <span className="text-[#27AAE1] font-mono text-sm">{step.week}</span>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-[#27AAE1]" />
                  {index < processSteps.length - 1 && (
                    <div className="w-0.5 h-full min-h-[60px] bg-[#262466]" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Scenario */}
      <section className="py-24 px-6 bg-[#0f0f1a]/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-[#27AAE1] font-medium mb-3 tracking-wide">Imagine this scenario</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-[#0a0a12] border border-[#262466]"
          >
            <Quote className="h-10 w-10 text-[#27AAE1]/30 mb-6" />
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              You are the CEO of a $25M B2B services company. Your last CMO left six months ago. 
              You have been functioning as the de facto CMO ever since, and pipeline has been flat 
              for two quarters. The board is asking questions. You cannot afford a $400K full-time 
              hire and you cannot keep being the CMO.
            </p>
            <p className="text-lg text-white leading-relaxed font-medium">
              Twelve weeks in: senior marketing leadership in place 15 hours per week, marketing team 
              has weekly clarity, MarTech bloat cut by 28%, attribution rebuilt in HubSpot, AI tools 
              deployed for SDR enablement, content production restarted, and a 12-month strategic plan 
              the board endorsed at the last meeting. Total cost: $115K annualized versus the $400K+ 
              full-time hire.
            </p>
            <p className="mt-6 text-[#27AAE1] font-semibold">That is the deliverable.</p>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Pricing */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
              Clear pricing, serious commitment
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Three-month minimum. Most engagements run 6 to 12 months. Saves 50-70% vs. full-time CMO total comp.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border ${
                  tier.recommended 
                    ? "bg-gradient-to-br from-[#2B3990]/20 to-[#27AAE1]/10 border-[#27AAE1]/50" 
                    : "bg-[#0f0f1a] border-[#262466]"
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#27AAE1] text-black text-xs font-semibold px-3 py-1 rounded-full">
                      Recommended
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                <p className="text-sm text-gray-400 mb-6">{tier.bestFor}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#27AAE1]">{tier.price}</span>
                  <span className="text-gray-400">{tier.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{tier.time}</p>
                <Link href="/meet">
                  <Button 
                    className={`w-full ${
                      tier.recommended 
                        ? "bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black" 
                        : "bg-[#262466] hover:bg-[#262466]/80"
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Comparison Table */}
      <section className="py-24 px-6 bg-[#0f0f1a]/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Not your typical fractional CMO
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#262466]">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Factor</th>
                  <th className="text-left py-4 px-4 text-[#27AAE1] font-semibold">Truax Marketing</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Typical Fractional CMO</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={row.factor} className="border-b border-[#262466]/50">
                    <td className="py-4 px-4 text-gray-300">{row.factor}</td>
                    <td className="py-4 px-4 text-white font-medium">{row.truax}</td>
                    <td className="py-4 px-4 text-gray-500">{row.typical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Yes/No */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Is this right for you?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-[#0f0f1a] border border-[#27AAE1]/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#27AAE1]/20 flex items-center justify-center">
                  <Check className="h-5 w-5 text-[#27AAE1]" />
                </div>
                <h3 className="text-xl font-semibold">Yes, if...</h3>
              </div>
              <ul className="space-y-3">
                {yesReasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <Check className="h-5 w-5 text-[#27AAE1] mt-0.5 flex-shrink-0" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-[#0f0f1a] border border-[#262466]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                  <X className="h-5 w-5 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold">No, if...</h3>
              </div>
              <ul className="space-y-3">
                {noReasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-400">
                    <X className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 8: Outcomes */}
      <section className="py-24 px-6 bg-[#0f0f1a]/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Outcomes you can measure
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="text-center p-6 rounded-xl bg-[#0a0a12] border border-[#262466]"
              >
                <div className="text-3xl font-bold text-[#27AAE1] font-mono mb-2">{outcome.value}</div>
                <p className="text-gray-400 text-sm leading-snug">{outcome.label}</p>
                {outcome.source && (
                  <p className="text-gray-600 text-xs mt-2">{outcome.source}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              About your fractional CMO
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-[#0f0f1a] border border-[#262466]"
          >
            <p className="text-gray-300 leading-relaxed">
              Truax Marketing was founded by Aaron Truax in 2022. Aaron has led marketing, CRM, and 
              AI enablement for B2B mid-market companies in insurance, warranty, SaaS, and professional 
              services. Engagements include CRM rebuilds, MarTech consolidation, AI workflow design, 
              and full-stack demand programs. Background: marketing leadership, CMO consulting, CRM 
              and automation strategy, AI enablement operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 9: FAQ */}
      <section className="py-24 px-6 bg-[#0f0f1a]/50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Frequently asked questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border border-[#262466] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#0f0f1a]/50 transition-colors"
                >
                  <span className="font-medium text-white pr-4">{faq.q}</span>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-400 flex-shrink-0 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`} 
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-gradient-to-br from-[#2B3990]/30 to-[#27AAE1]/10 border border-[#262466]"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
              Senior marketing leadership when you need it, not when you can afford it
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Intro call is 30 minutes with our founder. Plan preview is a 90-minute working session. 
              Either way, you leave with a clear read.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/meet">
                <Button size="lg" className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black font-medium px-8">
                  Book an executive intro call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-[#262466] hover:bg-[#262466]/50">
                  Get a free 30-day plan preview
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
