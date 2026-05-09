"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  AlertTriangle, 
  Layers, 
  Shield, 
  Cog, 
  Brain, 
  FileText, 
  Mail, 
  Target, 
  BarChart3,
  Search,
  PenTool,
  Rocket,
  Users,
  CheckCircle,
  XCircle,
  ChevronDown,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

// Section wrapper with scroll animation
function AnimatedSection({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// Problem cards data
const problems = [
  {
    icon: Layers,
    title: "Tool sprawl with no system",
    description: "Teams buy AI tools, plug them in, and end up with copy that sounds like everyone else."
  },
  {
    icon: Shield,
    title: "No governance, no trust",
    description: "Marketing, legal, and ops have no shared rules for how AI gets used. Adoption stalls."
  },
  {
    icon: Cog,
    title: "Manual work everywhere",
    description: "Briefs, content, CRM updates, reporting. AI is in the room, but the team is still doing the work by hand."
  }
];

// Services data
const services = [
  {
    icon: Brain,
    title: "AI Strategy & Governance",
    description: "Use cases, guardrails, IP and data policy, vendor selection."
  },
  {
    icon: Users,
    title: "Internal AI Assistants",
    description: "Custom assistants trained on your brand, products, and SOPs."
  },
  {
    icon: FileText,
    title: "Content Production Systems",
    description: "Briefs to drafts to publish, with brand voice locked in."
  },
  {
    icon: Mail,
    title: "CRM & Lifecycle Automation",
    description: "HubSpot workflows, lead routing, lifecycle emails, reporting."
  },
  {
    icon: Target,
    title: "Outbound & ABM Systems",
    description: "AI-driven prospecting, personalization, sequence orchestration."
  },
  {
    icon: BarChart3,
    title: "Reporting & Insight Layer",
    description: "Dashboards, meeting analysis, pipeline intelligence."
  }
];

// Process steps
const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Audit",
    description: "We map your stack, workflows, content engine, and CRM. We find the leaks."
  },
  {
    number: "02",
    icon: PenTool,
    title: "Architect",
    description: "We design the AI systems, governance, and automation plan."
  },
  {
    number: "03",
    icon: Rocket,
    title: "Build",
    description: "We deploy assistants, workflows, and integrations in your tools."
  },
  {
    number: "04",
    icon: Users,
    title: "Operate",
    description: "We train your team, measure output, and refine the system."
  }
];

// Outcomes metrics
const outcomes = [
  { metric: "3-5x", label: "Content output per marketer" },
  { metric: "40-60%", label: "Reduction in manual marcomm work" },
  { metric: "2x", label: "Pipeline velocity from CRM and outbound automation" },
  { metric: "Days, not weeks", label: "Time from brief to published asset" }
];

// Fit criteria
const forYou = [
  "Your team has 5+ marketers and a CRM you actually use",
  "You have content, lifecycle, and outbound running but not connected",
  "You want AI inside the workflow, not bolted on the side",
  "You need governance that legal and ops will sign off on",
  "You are ready to invest in systems, not one-off tools"
];

const notForYou = [
  "You want a one-off AI tool recommendation",
  "You have no CRM and no content engine yet",
  "You want a chatbot on your website and nothing else"
];

// FAQ data
const faqs = [
  {
    question: "How long does an engagement take?",
    answer: "Most engagements run 8-12 weeks for the initial build, depending on scope. We start with a 2-week audit, then move into architecture and build phases. Ongoing optimization is typically month-to-month after launch."
  },
  {
    question: "Do you replace our tools or work inside our stack?",
    answer: "We work inside your existing stack. If you are on HubSpot, Salesforce, or another major platform, we build there. We only recommend new tools when there is a clear gap and strong ROI case."
  },
  {
    question: "What about data security and IP?",
    answer: "Governance is built in from day one. We establish clear policies for data handling, IP ownership, and AI usage before any systems go live. Your data stays in your environment."
  },
  {
    question: "Do you train our team or just deliver systems?",
    answer: "Both. We build the systems and run hands-on training sessions so your team can operate and iterate independently. Documentation and playbooks are included."
  },
  {
    question: "What does pricing look like?",
    answer: "Engagements typically start at $25,000 for a focused scope (single system build) and scale based on complexity. We scope everything before signing so there are no surprises."
  },
  {
    question: "How is this different from hiring an AI consultant?",
    answer: "Most AI consultants deliver strategy decks. We deliver working systems. You get governance frameworks, trained assistants, automated workflows, and a team that knows how to operate them."
  }
];

export default function AIEnablementPage() {
  return (
    <main className="min-h-screen bg-[#0a0a12]">
      <Navbar />
      
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Enablement for Marketing Teams",
            "provider": {
              "@type": "Organization",
              "name": "Truax Marketing Solutions",
              "url": "https://truaxmarketing.com"
            },
            "description": "Enterprise AI enablement for marketing, CRM, and marcomm operations. Real governance, real automation, real revenue impact.",
            "areaServed": "Worldwide",
            "serviceType": "AI Consulting and Implementation"
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pb-32 px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#262466] via-[#2B3990] to-[#0a0a12]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(39,170,225,0.15)_0%,_transparent_60%)]" />
        
        {/* Geometric accents */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#27AAE1]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#262466]/30 rounded-full blur-2xl" />
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-[#27AAE1] font-medium mb-4 tracking-wide">AI Enablement</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-6">
              Bring AI into your marketing operation. Without the mess.
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              We help enterprise teams adopt AI with real governance, then automate the marcomm stack so your team ships more, faster, with fewer tools.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/meet">
                <Button size="lg" className="h-12 px-6 bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black font-medium">
                  Book a Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#services">
                <Button size="lg" variant="outline" className="h-12 px-6 border-white/20 hover:bg-white/10">
                  See What We Build
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-gray-400">
              Trusted by teams in insurance, warranty, SaaS, and B2B services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <AnimatedSection className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              Most AI rollouts fail in the same three ways
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-[#262466] bg-[#12121f]/50 hover:border-[#27AAE1]/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#27AAE1]/10 flex items-center justify-center mb-6">
                  <problem.icon className="h-6 w-6 text-[#27AAE1]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                <p className="text-gray-400 leading-relaxed">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection id="services" className="py-24 lg:py-32 px-6 bg-[#0d0d18]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              What AI Enablement looks like in practice
            </h2>
            <p className="text-lg text-gray-400">
              Six systems we build inside your marcomm stack.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-[#262466] bg-[#12121f]/50 hover:border-[#27AAE1]/30 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#27AAE1]/10 flex items-center justify-center mb-6">
                  <service.icon className="h-6 w-6 text-[#27AAE1]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection id="process" className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              How we run an AI enablement engagement
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connection line on desktop */}
            <div className="hidden lg:block absolute top-20 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#262466] to-transparent" />
            
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative p-8 rounded-2xl border border-[#262466] bg-[#12121f]/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-bold text-[#27AAE1]/30 font-mono">{step.number}</span>
                  <div className="w-10 h-10 rounded-lg bg-[#27AAE1]/10 flex items-center justify-center">
                    <step.icon className="h-5 w-5 text-[#27AAE1]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Outcomes Section */}
      <AnimatedSection id="outcomes" className="py-24 lg:py-32 px-6 bg-[#0d0d18]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              What changes when this is done right
            </h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl border border-[#262466] bg-[#12121f]/50"
              >
                <p className="text-3xl sm:text-4xl font-bold text-[#27AAE1] mb-3 font-mono">
                  {outcome.metric}
                </p>
                <p className="text-sm text-gray-400">{outcome.label}</p>
              </motion.div>
            ))}
          </div>
          
          <p className="text-center text-sm text-gray-500">
            Ranges based on engagement scope and starting baseline.
          </p>
        </div>
      </AnimatedSection>

      {/* Who This Is For Section */}
      <AnimatedSection className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Built for marketing teams running real revenue motions
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* For you */}
            <div className="p-8 rounded-2xl border border-[#27AAE1]/30 bg-[#12121f]/50">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#27AAE1]" />
                This is for you if...
              </h3>
              <ul className="space-y-4">
                {forYou.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="h-4 w-4 text-[#27AAE1] mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Not for you */}
            <div className="p-8 rounded-2xl border border-[#262466] bg-[#12121f]/50">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <XCircle className="h-5 w-5 text-gray-500" />
                This is not for you if...
              </h3>
              <ul className="space-y-4">
                {notForYou.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-400">
                    <XCircle className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Credibility Strip */}
      <div className="py-12 px-6 border-y border-[#262466] bg-[#0d0d18]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-8">
            Truax Marketing builds revenue systems for insurance, warranty, SaaS, and B2B services companies. Led by Aaron Truax, CMO consultant and operator.
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-40">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-24 h-8 bg-gray-600 rounded" />
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <AnimatedSection id="faq" className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Common questions
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="border border-[#262466] rounded-xl bg-[#12121f]/50 px-6 data-[state=open]:border-[#27AAE1]/30"
              >
                <AccordionTrigger className="text-left font-medium py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </AnimatedSection>

      {/* Final CTA Section */}
      <section id="contact" className="py-24 lg:py-32 px-6 bg-[#262466]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
              Ready to put AI to work inside your marketing operation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book a 30-minute strategy call. We will map your highest-leverage AI plays in real time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/meet">
                <Button size="lg" className="h-14 px-8 bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black font-medium text-lg">
                  Book a Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-gray-400">
              Or email{" "}
              <a href="mailto:digital@truaxmarketing.com" className="text-[#27AAE1] hover:underline">
                digital@truaxmarketing.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
