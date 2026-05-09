"use client";

import { motion } from "framer-motion";
import {
  MousePointerClick,
  Zap,
  Search,
  Network,
  Edit3,
  Layers,
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

// Pipeline-Grade Build framework cards
const frameworkCards = [
  {
    icon: MousePointerClick,
    title: "Conversion-engineered design",
    description:
      "Every section, button, and form is mapped to a buying-stage hypothesis. We design for the click, not the screenshot. Wireframes backed by competitor analysis and proven B2B conversion patterns.",
  },
  {
    icon: Zap,
    title: "Pipeline-grade performance",
    description:
      "Sites load in under 1.5 seconds on mobile and score 95+ on Google PageSpeed Insights. Cloudflare or Fastly CDN, image optimization, lazy loading, bloat-free code.",
  },
  {
    icon: Search,
    title: "SEO and AI search readiness",
    description:
      "Schema markup ships on every page. We optimize for Google AI Overviews, ChatGPT citations, and Perplexity sources. Citation-rich content gets cited 40% more often (Princeton GEO, 2024).",
  },
  {
    icon: Network,
    title: "CRM and martech connected",
    description:
      "HubSpot, Salesforce, Pardot, Marketo, ActiveCampaign. Lead scoring, lifecycle stages, attribution, and routing logic wired before launch, not as a phase 2 add-on.",
  },
  {
    icon: Edit3,
    title: "Content management your team uses",
    description:
      "WordPress with custom blocks is our default. Webflow, Sanity, Contentful, and headless setups also available. Update copy and ship landing pages without a developer ticket.",
  },
  {
    icon: Layers,
    title: "Built to scale, not to lock in",
    description:
      "Modular component libraries, design tokens, and reusable templates. Add a new product line in a week. We never write proprietary code that locks you to us.",
  },
];

// Process timeline steps
const processSteps = [
  {
    number: "1",
    title: "Discovery and strategy",
    timeline: "Weeks 1-2",
    description:
      "Audit, interviews, competitor study, buyer journey mapping. Output: strategy doc, sitemap, content blueprint.",
  },
  {
    number: "2",
    title: "Design system",
    timeline: "Weeks 3-4",
    description:
      "Figma component-driven design. Homepage, two priority pages, full design system. Two rounds of revisions.",
  },
  {
    number: "3",
    title: "Build and integrate",
    timeline: "Weeks 5-9",
    description:
      "Engineering in staging with weekly demos. Pages, CRM, schema, tracking, content load.",
  },
  {
    number: "4",
    title: "QA and pre-launch",
    timeline: "Week 10",
    description:
      "Cross-browser testing, accessibility audit, performance benchmarks, redirect mapping. Lighthouse 95+ minimum.",
  },
  {
    number: "5",
    title: "Launch and optimize",
    timeline: "Week 11+",
    description:
      "Go-live plus 30 days of post-launch monitoring. Conversion lift tracking and ongoing optimization.",
  },
];

// Pricing tiers
const pricingTiers = [
  {
    name: "Marketing Site",
    bestFor: "Single-product B2B, $10M to $50M revenue, 10 to 25 pages",
    price: "Starting at $30,000",
    timeline: "8-10 weeks",
    features: [
      "Strategy, design, development",
      "CRM integration",
      "Schema markup",
      "Analytics setup",
      "30 days post-launch support",
    ],
    recommended: false,
  },
  {
    name: "Multi-Product Build",
    bestFor: "$50M to $200M revenue, 2+ products or service lines, 25 to 60 pages",
    price: "Starting at $48,000",
    timeline: "10-14 weeks",
    features: [
      "Everything in Marketing Site",
      "Advanced lifecycle stages",
      "ABM landing page templates",
      "A/B testing infrastructure",
    ],
    recommended: true,
  },
  {
    name: "Headless or Custom",
    bestFor: "Custom Next.js, app integrations, complex CRM logic, 50+ pages",
    price: "Starting at $72,000",
    timeline: "12-20 weeks",
    features: [
      "Everything in Multi-Product",
      "Custom development",
      "App integrations",
      "Advanced API work",
    ],
    recommended: false,
  },
];

// Comparison table data
const comparisonRows = [
  {
    factor: "CRM integration",
    truax: "Wired before launch",
    typical: "Often a phase 2 add-on",
  },
  {
    factor: "AI search readiness",
    truax: "Schema and content built for citations",
    typical: "Rarely addressed",
  },
  {
    factor: "Page speed target",
    truax: "Sub-1.5s mobile, 95+ Lighthouse",
    typical: "3-5s mobile, 60-80 Lighthouse",
  },
  {
    factor: "Pricing model",
    truax: "Fixed scope, no surprises",
    typical: "Hourly with frequent overages",
  },
  {
    factor: "Post-launch ownership",
    truax: "Your team can update without dev tickets",
    typical: "Locked in custom code",
  },
  {
    factor: "Reporting",
    truax: "Pipeline impact, not vanity metrics",
    typical: "Page views and bounce rate",
  },
  {
    factor: "Migration safety",
    truax: "Less than 5% organic loss in 60 days",
    typical: "Frequent post-launch traffic crashes",
  },
];

// Who this is for
const whoYes = [
  "Your site is more than three years old and search rankings are slipping",
  "You are launching a new product line, brand, or category",
  "Your CRM data is messy because your forms are messier",
  "You are losing deals to competitors with better digital experiences",
  "Sales is asking marketing for \"better content\" and the site cannot host it",
  "You need to support inbound, paid, ABM, and partner traffic from one platform",
];

const whoNo = [
  "You are pre-product-market-fit or under $5M ARR",
  "You need a single landing page (we can do those, but Web Design is overkill)",
  "You are looking for the cheapest possible build",
];

// Outcome stats
const outcomeStats = [
  {
    stat: "40-60%",
    label: "lift in organic traffic within 6 months",
    source: "BrightEdge B2B benchmark, 2024",
  },
  {
    stat: "2x to 4x",
    label: "increase in qualified form fills",
    source: "HubSpot State of Marketing, 2025",
  },
  {
    stat: "30-50%",
    label: "reduction in CAC when CRM and site are properly wired",
    source: "Forrester TEI, 2024",
  },
  {
    stat: "24%",
    label: "higher conversion on sub-2-second mobile loads",
    source: "Google Web.dev, 2023",
  },
  {
    stat: "30-40%",
    label: "higher AI citation rates with proper schema",
    source: "BrightEdge GEO study, 2024",
  },
];

// FAQ items
const faqItems = [
  {
    question: "How long does a B2B website project take?",
    answer:
      "Most marketing sites take 8 to 12 weeks. Headless or custom builds take 12 to 20 weeks. Landing page projects ship in 3 to 4 weeks.",
  },
  {
    question: "What CMS do you build on?",
    answer:
      "WordPress is our default. We also build on Webflow, Sanity, Contentful, and Next.js with headless WordPress.",
  },
  {
    question: "Should we use WordPress or Webflow for B2B?",
    answer:
      "WordPress wins for content-heavy sites with complex CRM integration. Webflow wins for design-forward sites with lighter content needs. We help you pick during week one.",
  },
  {
    question: "Should we go headless?",
    answer:
      "Headless makes sense when you have multiple front-ends, heavy custom functionality, or a developer team that prefers Next.js. For most mid-market B2B, traditional WordPress is faster.",
  },
  {
    question: "Do you handle hosting and ongoing support?",
    answer:
      "Yes. Most clients move into our managed hosting and optimization retainer after launch.",
  },
  {
    question: "Can you integrate with our CRM and martech?",
    answer:
      "Standard integrations include HubSpot, Salesforce, Pardot, Marketo, ActiveCampaign, Mailchimp, Segment, GA4, and GTM.",
  },
  {
    question: "What about SEO migrations?",
    answer:
      "Every project includes a redirect map, schema audit, and SEO migration plan. We have not lost a client more than 5% of organic traffic during a launch since 2022.",
  },
  {
    question: "Do you write the copy?",
    answer:
      "We can. Most clients use our copywriting team or pair us with their existing writers.",
  },
  {
    question: "What if we already have a designer?",
    answer:
      "We work with in-house and external design teams. Bring us a Figma file and we engineer it into a fast, searchable, CRM-connected site.",
  },
  {
    question: "Are you certified on HubSpot or Salesforce?",
    answer:
      "Yes. Truax Marketing is a HubSpot Solutions Partner with implementation experience across all hubs.",
  },
];

export default function WebDesignPage() {
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
                Web Design & Development
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight leading-[1.1]"
              >
                Websites engineered to drive pipeline, not just impressions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-400 mb-8 leading-relaxed"
              >
                Most B2B websites are brochures with a logo. We build revenue systems disguised as websites, fast, search-optimized, CRM-connected, and ready to convert the day they ship.
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
                    className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black font-medium px-8"
                  >
                    Book a 30-minute build review
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#27AAE1] text-[#27AAE1] hover:bg-[#27AAE1]/10 px-8"
                  >
                    Get a free 10-point site teardown
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
                <div className="absolute top-8 left-8 w-32 h-32 bg-[#27AAE1]/20 rounded-2xl" />
                <div className="absolute top-24 right-12 w-24 h-24 bg-[#2B3990]/30 rounded-full" />
                <div className="absolute bottom-16 left-16 w-40 h-2 bg-[#27AAE1]/40 rounded-full" />
                <div className="absolute bottom-32 right-8 w-20 h-20 border-2 border-[#27AAE1]/30 rounded-xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#27AAE1] rounded-lg opacity-60" />
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
              What is B2B web design?
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              A B2B website built for pipeline is a fast, search-optimized site connected to your CRM that converts anonymous traffic into qualified meetings. Truax Marketing builds these for mid-market companies using WordPress, Next.js, or headless architecture. Every site ships with structured data, conversion tracking, and HubSpot or Salesforce integration wired in from day one.
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
            Your website is the most expensive employee on payroll, and nobody is managing it
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <p className="text-gray-400 leading-relaxed mb-6">
              The math is brutal. Your site works 24/7. It talks to every prospect before sales does. It shapes every buying decision that follows. Yet most B2B sites are managed like an afterthought.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Three numbers worth memorizing:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[#27AAE1] font-semibold">20%</span>
                <span className="text-gray-400">
                  A 1-second delay in mobile load time drops conversions by 20%{" "}
                  <span className="text-gray-500">(Google, 2024)</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#27AAE1] font-semibold">30-40%</span>
                <span className="text-gray-400">
                  Sites without structured data get cited 30 to 40% less often by AI search engines{" "}
                  <span className="text-gray-500">(BrightEdge GEO study, 2024)</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#27AAE1] font-semibold">3-5 hrs</span>
                <span className="text-gray-400">
                  Sales reps lose 3 to 5 hours per week chasing CRM data that should already be there{" "}
                  <span className="text-gray-500">(HubSpot State of Sales, 2025)</span>
                </span>
              </li>
            </ul>
            <p className="text-gray-400 leading-relaxed">
              Most agencies hand you a pretty design and walk away. We build the opposite. Every site we ship is a system. We call it the Pipeline-Grade Build framework, and it is how we have not lost a client more than 5% of organic traffic during a launch since 2022.
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
            The Pipeline-Grade Build framework
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-12 tracking-tight text-center"
          >
            Six pillars under every site we ship
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
            How we build (12-week typical timeline)
          </motion.h2>

          {/* Desktop: Horizontal stepper */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Progress line */}
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
              You are a CMO at a $40M B2B company. You inherited a five-year-old WordPress site held together by 47 plugins. The HubSpot forms break monthly. The site loads in 4.2 seconds on mobile. Your VP Sales is asking why marketing leads do not match what the team delivers.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              Twelve weeks later, you launch a new site that loads in 1.1 seconds, with every form mapped to HubSpot, schema on every page, and a content engine your team can update without engineering. Organic traffic is up 38% in 90 days. Sales-marketing arguments about lead quality stop. The CFO stops asking why marketing tech is so expensive.
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

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 text-sm mt-8"
          >
            No hourly billing. No surprise change orders. Fixed scope, fixed timeline, fixed fee. Ongoing retainers from $3,500 per month for content, optimization, and managed hosting.
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
            Truax vs. typical agency builds
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
            {/* Yes column */}
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

            {/* No column */}
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
              Ready to build a website that earns its keep?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              You can keep watching pipeline leak through a website built three CMOs ago. Or you can ship a system that compounds over time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/meet">
                <Button
                  size="lg"
                  className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black font-medium px-8"
                >
                  Book a 30-minute build review
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#27AAE1] text-[#27AAE1] hover:bg-[#27AAE1]/10 px-8"
                >
                  Get a free 10-point site teardown
                </Button>
              </Link>
            </div>
            <p className="text-gray-500 text-sm">
              48-hour turnaround on the teardown. No commitment to engage.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
