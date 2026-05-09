"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Zap, 
  Target, 
  TrendingUp, 
  Users,
  Shield,
  Code2,
  RefreshCcw,
  Briefcase,
  CheckCircle,
  X,
  Building2,
  MapPin,
  GraduationCap,
  Award,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { JsonLd, createFAQSchema, createBreadcrumbSchema } from "@/components/json-ld";

const beliefs = [
  {
    title: "Marketing is a system, not a service.",
    description: "Campaigns burn cash. Systems compound. If your marketing has not been redesigned as a system, you are leaving 30 to 50% of pipeline on the table.",
  },
  {
    title: "Revenue is the only metric that matters.",
    description: "MQLs, MCLs, opens, and clicks are footnotes. If a metric does not connect to closed-won, it is decoration.",
  },
  {
    title: "AI is an operator, not a marketing buzzword.",
    description: "AI tools become a productivity force multiplier when designed into workflow. They become expensive desktop accessories when bought because the board asked about ChatGPT.",
  },
  {
    title: "Operators beat consultants.",
    description: "Career consultants advise. Operators have lived through the consequences of their own recommendations. We hire operators.",
  },
  {
    title: "Push back when the idea is weak.",
    description: "We will not bill you to ship a plan we do not believe in. That single principle has cost us deals and saved clients more.",
  },
];

const activeRoles = [
  { company: "Truax Marketing Solutions", role: "CEO and Founder", started: "April 2021", industry: "B2B marketing services" },
  { company: "Ai Insurance Organization", role: "CMO", started: "March 2023", industry: "Insurance broker network" },
  { company: "Approved Casualty & Surety", role: "CMO", started: "January 2023", industry: "MGA, surety, professional liability" },
  { company: "Rental Deposits Now", role: "CMO", started: "June 2023", industry: "InsurTech, deposit alternatives" },
  { company: "Deposit Rocket", role: "CMO", started: "January 2022", industry: "Fintech, deposit lending" },
];

const results = [
  { company: "Ai Insurance Organization", result: "$25M+ partner pipeline from Managing Partners Program launch", year: "2025" },
  { company: "Rental Deposits Now", result: "256% organic traffic growth, 300% conversion lift after relaunch", year: "2025" },
  { company: "Deposit Rocket", result: "150% conversion growth, 25% lower CPC, 75% lift in conversion rates after CRM rebuild", year: "2022-2024" },
  { company: "Sartorius LPS", result: "80% reduction in CPL, 400% lift in conversions, 500%+ lead velocity, $300M merger integration led", year: "2020" },
  { company: "Essen BioScience", result: "Tripled B2B conversion rate, $250K ecommerce launch in year one, 90% lead-to-sale cycle reduction", year: "2018" },
  { company: "Jewish Federation San Diego", result: "400% traffic growth, 250% online donation lift, 50% donor base growth", year: "2011-2017" },
];

const careerPath = [
  { role: "Founder and CEO", company: "Truax Marketing Solutions", period: "April 2021 to present" },
  { role: "Active CMO seats", company: "Ai Insurance Organization, Approved Casualty & Surety, Rental Deposits Now, Deposit Rocket", period: "2021 to present" },
  { role: "CMO", company: "Jigsaw Analytics Group", period: "2021 to 2022" },
  { role: "Head of Digital Demand", company: "Sartorius LPS", period: "2019 to 2021" },
  { role: "Head of Digital Marketing", company: "Essen BioScience", period: "2017 to 2019" },
  { role: "Director of Marketing and Communications", company: "Jewish Federation of San Diego County", period: "2011 to 2017" },
  { role: "Strategic Communications Manager", company: "Northrop Grumman Information Systems", period: "2007 to 2011" },
  { role: "Account Executive", company: "Bell Pottinger PR London (Rolex, Wimbledon Tennis, Vauxhall)", period: "2007" },
];

const operatingPrinciples = [
  {
    title: "Systems over campaigns",
    description: "One-off campaigns burn cash. Systems compound. We build systems that work after we leave.",
  },
  {
    title: "Revenue over vanity",
    description: "Every engagement reports against pipeline and revenue, not impressions and clicks. If a metric does not tie to closed-won, it is a footnote.",
  },
  {
    title: "Operator mindset, not agency theater",
    description: "We sit inside your stack and own outcomes. We do not pitch you a deck and walk away.",
  },
  {
    title: "AI as operator, not gimmick",
    description: "We deploy AI as a productivity force multiplier inside SDR enablement, content production, campaign analysis, RAG knowledge systems, and customer-facing assistants.",
  },
  {
    title: "Push back when the idea is weak",
    description: "We will not bill you to ship a plan we do not believe in. We surface bad ideas early. We propose better paths.",
  },
];

const willNotDo = [
  "Work with pre-revenue or pre-product-market-fit startups",
  "Work with consumer-direct categories (D2C ecommerce, B2C apps, retail)",
  "Work with regulated healthcare environments (HIPAA, clinical trials)",
  "Buy backlinks or use PBNs",
  "Bill hourly with surprise change orders",
  "Lock you into proprietary code or annual contracts longer than 12 months",
  "White-label our work for other agencies",
];

const industries = [
  { icon: Shield, name: "Insurance & InsurTech" },
  { icon: Code2, name: "B2B SaaS" },
  { icon: TrendingUp, name: "Fintech" },
  { icon: Zap, name: "Life Sciences" },
  { icon: Briefcase, name: "Professional Services" },
  { icon: Users, name: "Non-profit (legacy)" },
];

const faqs = [
  {
    question: "Who is Aaron Truax?",
    answer: "Aaron Truax is the founder and CEO of Truax Marketing Solutions. He has 20+ years in marketing leadership, currently holds CMO seats at four active B2B companies, and previously led digital demand at Sartorius LPS (a global life sciences company) through a $300M merger integration with 80% lower CPL and 500%+ lead velocity gains.",
  },
  {
    question: "Where is Truax Marketing based?",
    answer: "Truax Marketing Solutions is headquartered in the Washington, DC area, registered as a Wyoming LLC. The team operates remotely across the US and Canada.",
  },
  {
    question: "How is Truax different from a typical marketing agency?",
    answer: "Three differences. First, we are operators, not consultants. Every recommendation comes from someone who has implemented it inside a company. Second, every engagement ends with a working system, not a slide deck. Third, we tie every dollar to pipeline, not vanity metrics.",
  },
  {
    question: "What size company do you work with?",
    answer: "Mid-market B2B companies, $10M to $500M revenue. We do not work with pre-revenue startups or consumer-direct categories.",
  },
  {
    question: "Do you work internationally?",
    answer: "Yes. US, Canada, UK, and EU. One of our active clients (Ai Insurance Organization) does not operate in Quebec, but most multi-region work is region-agnostic.",
  },
  {
    question: "What certifications and partnerships do you hold?",
    answer: "HubSpot Agency Partner Certification, Marketo Certified, Google Partner, Salesforce Certified Sales Cloud Consultant.",
  },
  {
    question: "Can I work directly with Aaron?",
    answer: "Yes. Fractional CMO and strategy engagements are led by Aaron directly. Service engagements (SEO, demand gen, web dev, hosting) are led by senior operators with Aaron in executive oversight.",
  },
  {
    question: "Is Truax Marketing AI-driven or human-led?",
    answer: "Both. Aaron is an active AI operator who deploys GPT-based assistants, HubSpot AI workflows, and Power BI automation across client engagements. AI is an operator inside the team, not a replacement for senior judgment.",
  },
  {
    question: "How long has Truax Marketing been around?",
    answer: "Founded April 2021. Wyoming LLC since 2022. Five years of B2B mid-market engagements as of 2026.",
  },
  {
    question: "How do I work with you?",
    answer: "Book a 30-minute intro call with Aaron at truaxmarketing.com/meet. We start with a free diagnostic, propose a fixed-scope or retainer engagement, and ramp inside two weeks.",
  },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-[#262466] last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium group-hover:text-[#27AAE1] transition-colors pr-8">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-gray-400 leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
}

export function AboutPageContent() {
  return (
    <div className="pt-32 pb-24">
      <JsonLd data={createBreadcrumbSchema([
        { name: "Home", url: "https://truaxmarketing.com" },
        { name: "About", url: "https://truaxmarketing.com/about" },
      ])} />
      <JsonLd data={createFAQSchema(faqs)} />
      
      {/* Hero Section */}
      <section className="px-6 mb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#27AAE1]/10 via-[#2B3990]/5 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-[#27AAE1] font-medium mb-4 tracking-wide">About Truax Marketing</p>
            <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight leading-[1.1]">
              We do marketing the way operators run companies
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-8">
              Truax Marketing is led by Aaron Truax, a four-time active CMO running concurrent fractional engagements across insurance, fintech, and B2B services. Founded in 2021 to fix the gap between strategy decks and revenue.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/meet">
                <Button size="lg" className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#27AAE1]/25 active:translate-y-0 text-black font-medium px-8 transition-all duration-300">
                  Book a 30-minute intro call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-[#27AAE1] text-[#27AAE1] hover:bg-[#27AAE1]/10 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 px-8 transition-all duration-300">
                  See our services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Direct Answer Block */}
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-[#0f0f1a] border border-[#262466]"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Truax Marketing Solutions is a B2B marketing, CRM, and AI operations firm founded by Aaron Truax in April 2021. The team serves mid-market companies with fractional CMO services, demand generation, SEO, web development, and AI enablement. Aaron holds active CMO seats at four companies, plus HubSpot, Marketo, Google, and Salesforce certifications. Headquartered in Washington, DC.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Active engagements</p>
            <p className="text-gray-400">
              Ai Insurance Organization | Approved Casualty & Surety | Rental Deposits Now | Deposit Rocket
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Why Truax exists */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 tracking-tight">
              Why Truax exists
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p className="text-white font-medium">The agency model is broken in three predictable ways.</p>
              <p>
                Strategy decks die in Google Drive. MarTech gets bought before workflows are designed. Reporting flatters vanity metrics while pipeline stays flat. CMOs we know spend more time managing agency relationships than building actual revenue systems.
              </p>
              <p>
                Aaron Truax founded Truax Marketing Solutions in April 2021 after 14 years inside marketing organizations (Northrop Grumman, Sartorius LPS, Essen BioScience, Jewish Federation) made one thing painfully obvious: marketing is a system, not a service. Build the system right and revenue follows. Build it wrong and you spend $1.2M a year on tools nobody owns.
              </p>
              <p>
                That is the operating philosophy. Every engagement, every deliverable, every dollar tied back to pipeline.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Meet Aaron Truax */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="relative w-full max-w-[320px] mx-auto lg:mx-0 sticky top-32">
                <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden border border-[#262466] bg-[#0f0f1a]">
                  <Image
                    src="/images/aaron-truax.webp"
                    alt="Aaron Truax, Founder and CEO of Truax Marketing Solutions"
                    width={320}
                    height={400}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 p-4 rounded-xl bg-[#0f0f1a] border border-[#262466] shadow-lg">
                  <p className="text-2xl font-bold text-[#27AAE1] font-mono">4</p>
                  <p className="text-xs text-gray-400">Active CMO seats</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
                Meet Aaron Truax
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed mb-8">
                <p>
                  Aaron Truax is the founder and CEO of Truax Marketing Solutions. He has 20+ years in marketing leadership and currently holds active CMO seats at four B2B companies simultaneously, an unusual operator depth that informs every Truax engagement.
                </p>
                <p>
                  Aaron is based in Alexandria, Virginia, and leads a global team of strategists, designers, technologists, and AI operators serving B2B mid-market companies across the US and Canada.
                </p>
                <p>
                  Before founding Truax, Aaron led digital demand at Sartorius LPS through a $300M merger integration, where his team delivered an 80% reduction in cost per lead and a 500%+ lift in lead velocity. Earlier roles include Head of Digital Marketing at Essen BioScience (tripled B2B conversion rate, $250K ecommerce launch in year one), Director of Marketing at Jewish Federation of San Diego County (400% traffic growth, 250% lift in donations), and Strategic Communications Manager at Northrop Grumman Information Systems leading multi-million-dollar B2B and B2G campaigns.
                </p>
              </div>

              {/* What Aaron believes */}
              <h3 className="text-xl font-semibold mb-6 text-white">What Aaron believes</h3>
              <p className="text-gray-400 mb-6">This is the operating philosophy that informs every Truax engagement:</p>
              <div className="space-y-4">
                {beliefs.map((belief, index) => (
                  <motion.div
                    key={belief.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-[#0f0f1a] border border-[#262466]"
                  >
                    <p className="font-medium text-white mb-1">{index + 1}. {belief.title}</p>
                    <p className="text-gray-400 text-sm">{belief.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Active leadership roles */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
              Active leadership roles
            </h2>
            <p className="text-gray-400 text-lg">
              Aaron currently holds these CMO seats simultaneously:
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#262466]">
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Company</th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Started</th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Industry</th>
                </tr>
              </thead>
              <tbody>
                {activeRoles.map((role, index) => (
                  <motion.tr
                    key={role.company}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="border-b border-[#262466]/50 hover:bg-[#0f0f1a] transition-colors"
                  >
                    <td className="py-4 px-4 font-medium text-white">{role.company}</td>
                    <td className="py-4 px-4 text-[#27AAE1]">{role.role}</td>
                    <td className="py-4 px-4 text-gray-400">{role.started}</td>
                    <td className="py-4 px-4 text-gray-400">{role.industry}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-gray-400 leading-relaxed"
          >
            Concurrent CMO seats are uncommon. They work because every engagement uses the same operating system: HubSpot CRM, AI workflow design, demand generation playbooks, and pipeline-tied reporting. The system scales. The principles do not change.
          </motion.p>
        </div>
      </section>

      {/* Section 4: Selected results */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
              Selected results
            </h2>
            <p className="text-gray-400 text-lg">
              Real numbers, not rounded marketing copy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={result.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-[#0f0f1a] border border-[#262466] hover:border-[#27AAE1]/50 transition-colors"
              >
                <p className="text-sm text-[#27AAE1] font-medium mb-2">{result.year}</p>
                <h3 className="text-lg font-semibold mb-3 text-white">{result.company}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{result.result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Career path */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
              Career path
            </h2>
            <p className="text-gray-400 text-lg">
              20+ years inside marketing organizations:
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#27AAE1] via-[#262466] to-transparent" />
            <div className="space-y-6">
              {careerPath.map((item, index) => (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#0f0f1a] border-2 border-[#27AAE1] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#27AAE1]" />
                  </div>
                  <div className="p-4 rounded-xl bg-[#0f0f1a] border border-[#262466] hover:border-[#27AAE1]/30 transition-colors">
                    <p className="text-sm text-[#27AAE1] mb-1">{item.period}</p>
                    <p className="font-medium text-white">{item.role}</p>
                    <p className="text-gray-400 text-sm">{item.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-[#27AAE1]" />
              Education and certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#0f0f1a] border border-[#262466]">
                <p className="font-medium text-white">BA, Communications and Public Relations</p>
                <p className="text-gray-400 text-sm">George Mason University (2003 to 2007)</p>
              </div>
              <div className="p-4 rounded-xl bg-[#0f0f1a] border border-[#262466]">
                <div className="flex flex-wrap gap-2">
                  {["HubSpot Agency Partner", "Marketo Certified", "Google Partner", "Salesforce Certified"].map((cert) => (
                    <span key={cert} className="px-3 py-1 rounded-full bg-[#27AAE1]/10 text-[#27AAE1] text-xs font-medium">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-4 text-gray-400 text-sm">Languages: English (native), Spanish (working).</p>
          </motion.div>
        </div>
      </section>

      {/* Section 6: How we work */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
              How we work
            </h2>
            <p className="text-gray-400 text-lg">
              Truax Marketing engagements share five operating principles:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operatingPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-[#0f0f1a] border border-[#262466] hover:border-[#27AAE1]/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#27AAE1]/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-[#27AAE1]" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{principle.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: What we will not do */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
              What we will not do
            </h2>
            <p className="text-gray-400 text-lg">
              Sharper differentiation comes from saying no:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {willNotDo.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-[#0f0f1a] border border-[#262466]"
              >
                <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Industries we know cold */}
      <section className="px-6 mb-32 py-16 border-y border-[#262466]/50 bg-[#0a0a12]/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
              Industries we know cold
            </h2>
            <p className="text-gray-400 text-lg">
              Two decades of operating depth across:
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
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

      {/* Section 9: Where we work from */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
                Where we work from
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Headquartered in the Washington, DC area. Registered as a Wyoming LLC since 2022. Remote-first since founding.
                </p>
                <p>
                  The team operates across the US and Canada with active engagements in both countries. Most engagements blend in-person quarterly planning with weekly virtual operating cadence.
                </p>
                <p>
                  Common engagement geographies: US, Canada, UK, EU. We do not currently take work in Quebec, Asia, or Latin America.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="p-8 rounded-2xl bg-[#0f0f1a] border border-[#262466]">
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="w-8 h-8 text-[#27AAE1]" />
                  <div>
                    <p className="font-medium text-white">Washington, DC Area</p>
                    <p className="text-gray-400 text-sm">Wyoming LLC since 2022</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["US", "Canada", "UK", "EU"].map((region) => (
                    <span key={region} className="px-3 py-1 rounded-full bg-[#262466] text-gray-300 text-sm">
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 10: FAQ */}
      <section className="px-6 mb-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
              Frequently asked questions
            </h2>
          </motion.div>

          <div className="rounded-2xl bg-[#0f0f1a] border border-[#262466] p-6 md:p-8">
            {faqs.map((faq, index) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-12 rounded-3xl bg-gradient-to-br from-[#2B3990]/20 to-[#27AAE1]/10 border border-[#262466]"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
              Ready to work with operators, not consultants?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              You can keep paying for plans that die in Google Drive. Or you can work with operators who have built the systems they recommend, in companies they personally run.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Link href="/meet">
                <Button size="lg" className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#27AAE1]/25 active:translate-y-0 text-black font-medium px-8 transition-all duration-300">
                  Book a 30-minute intro call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-[#27AAE1] text-[#27AAE1] hover:bg-[#27AAE1]/10 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 px-8 transition-all duration-300">
                  See our services
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-500">
              The intro call is 30 minutes with Aaron directly. No pitch deck. No upsell. Just a clear read on whether we are the right fit.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
