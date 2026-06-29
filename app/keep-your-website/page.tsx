"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { track } from "@vercel/analytics";
import { Check, ExternalLink, Globe, Clock, DollarSign, AlertTriangle, Quote, ArrowRight } from "lucide-react";
import Link from "next/link";

const comparison = [
  { option: "DIY (Wix, Squarespace)", upfront: "$0", monthly: "$25-60", time: "Weeks of your time", leadCapture: "Manual setup", updates: "You" },
  { option: "Hire a freelancer", upfront: "$1,500-5,000", monthly: "$0", time: "3-6 weeks", leadCapture: "Extra fee", updates: "You" },
  { option: "Hire an agency", upfront: "$5,000-20,000", monthly: "$500-2,500", time: "6-12 weeks", leadCapture: "Sometimes", updates: "Them, extra fee" },
  { option: "Truax", upfront: "$0", monthly: "$99", time: "Already done", leadCapture: "Yes, already working", updates: "Truax, unlimited", highlight: true },
];

const testimonials = [
  { quote: "I thought it was a scam. Then I closed the lead for a $2,800 job. I am keeping the site.", name: "Marcus H.", role: "Owner, local HVAC company" },
  { quote: "My old site was 12 years old and I was paying $180 a month for it to do nothing. This one actually brings customers in.", name: "Dana R.", role: "Owner, cleaning service" },
  { quote: "No up-front cost, no pressure, and the team makes the changes I ask for within a day. For $99, it is a no-brainer.", name: "Priya S.", role: "Owner, family-run restaurant" },
];

const faqs = [
  { q: "Who are you and why did I get a lead from you?", a: "We are Truax Marketing Solutions, a US marketing firm. We built a free demo website for your business as part of our lead-generation program, published it, and when a real customer filled out the contact form, we forwarded the lead to you. No bill. No signup. Just a free customer to show you what the site can do." },
  { q: "Why did you build the site for free?", a: "Pitching is cheap. Showing is better. We only charge you if the site actually produces real leads and you want to keep it. That way you take no risk and we only get paid for sites that work." },
  { q: "What happens if I do nothing?", a: "We keep your site live for 14 days after your first lead. After that, the site is taken offline and removed from Google. Any further leads that would have come through the site will not. No charge either way." },
  { q: "Am I locked into a contract?", a: "No. Monthly plans bill every 30 days and can be cancelled at any time with one email. Annual is billed once and locks your rate for 12 months, but you are never auto-renewed without notice." },
  { q: "Can I edit the site or request changes?", a: "Yes. Unlimited changes are included. Email any request (copy tweaks, photo swaps, new pages, new services, pricing updates, staff bios, you name it) and the team turns most changes around in 1 business day." },
  { q: "Can I use my own domain?", a: "Yes. Once you are on a paid plan, we will point your existing domain at the site or register a new one for you at cost. SSL is included automatically." },
  { q: "Will I keep getting leads?", a: "As long as the site stays live and ranking, yes. We cannot promise specific volume (Google does not let anyone do that honestly) but we handle ongoing SEO, performance upkeep, and monthly updates to keep the momentum going." },
  { q: "Is the lead I got real?", a: "Yes. Every lead is a real form submission from a real person searching for your service. We do not generate fake or incentivized leads. If something ever looks off, forward it to us and we will investigate." },
  { q: "How do I cancel?", a: "One email to aaron@truaxmarketing.com and we cancel the billing immediately. No phone calls, no hoops." },
];

// Stripe Payment Links
const STRIPE_MONTHLY_LINK = "https://buy.stripe.com/bJe8wP8ZheQK2WwazZbZe06";
const STRIPE_ANNUAL_LINK = "https://buy.stripe.com/9B63cv1wPcICaoYgYnbZe07";

function KeepYourWebsiteContent() {
  const searchParams = useSearchParams();
  
  // Get UTM parameters
  const rawBusiness = searchParams.get("business");
  const rawCity = searchParams.get("city");
  const rawSiteUrl = searchParams.get("siteurl");
  
  // Clean and sanitize function
  const clean = (str: string | null): string | null => {
    if (!str) return null;
    try {
      str = decodeURIComponent(str);
    } catch (e) {
      // If decoding fails, use as is
    }
    return str.replace(/<[^>]*>/g, "").trim().slice(0, 80);
  };
  
  const business = clean(rawBusiness) || "your business";
  const city = clean(rawCity) || "Your City";
  
  // Normalize site URL
  let siteUrl = clean(rawSiteUrl);
  if (siteUrl && !/^https?:\/\//i.test(siteUrl)) {
    siteUrl = "https://" + siteUrl;
  }
  // Validate URL
  let validSiteUrl = false;
  if (siteUrl) {
    try {
      new URL(siteUrl);
      validSiteUrl = true;
    } catch (e) {
      validSiteUrl = false;
    }
  }
  const displayUrl = validSiteUrl ? siteUrl : "https://yourbusiness.truaxsites.com";

  return (
    <main className="bg-white text-[#0A0A0A] antialiased">
      {/* Nav */}
      <header className="bg-black/95 backdrop-blur-md sticky top-0 z-40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <img 
              src="https://truaxmarketing.com/logo.svg" 
              alt="Truax Marketing Solutions" 
              className="h-8 w-auto brightness-0 invert group-hover:opacity-80 transition-opacity"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {[
              { href: "#what-happened", label: "What happened" },
              { href: "#your-site", label: "Your site" },
              { href: "#offer", label: "The offer" },
              { href: "#faq", label: "FAQ" },
            ].map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#27AAE1] group-hover:w-3/4 transition-all duration-300" />
              </a>
            ))}
          </nav>
          <a 
            href="#offer" 
            className="bg-[#27AAE1] text-black px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-white hover:scale-105 transition-all duration-200 shadow-lg shadow-[#27AAE1]/20"
          >
            Keep my site
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-70 pointer-events-none" style={{
          backgroundImage: "linear-gradient(to right, rgba(38,36,102,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(38,36,102,0.05) 1px, transparent 1px)",
          backgroundSize: "72px 72px"
        }} />
        
        {/* Abstract beams background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="w-full h-full opacity-60" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="beamGrad1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2B3990" stopOpacity="0.12"/>
                <stop offset="100%" stopColor="#27AAE1" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="beamGrad2" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#262466" stopOpacity="0.08"/>
                <stop offset="100%" stopColor="#2B3990" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <polygon points="1100,-100 1500,300 900,900 500,500" fill="url(#beamGrad1)"/>
            <polygon points="-100,400 400,100 1000,800 500,1000" fill="url(#beamGrad2)"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-medium uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Your site is live
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black text-white text-xs font-medium uppercase tracking-wider">
              For <span className="font-semibold">{business}</span>
            </span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[40px] leading-[1.05] md:text-6xl md:leading-[1.02] font-extrabold tracking-tight max-w-4xl"
          >
            That lead just came from a site we built for{" "}
            <span className="underline decoration-[#27AAE1] decoration-4 underline-offset-4">{business}</span>.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-[#5B5E6B] max-w-2xl font-medium"
          >
            Truax Marketing built you a working website at no cost. It already earned you a real customer. If you want the leads to keep coming, keep the site running for $99 per month.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a 
              href={STRIPE_MONTHLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-4 rounded-md font-semibold text-base text-center hover:bg-[#262466] transition transform hover:-translate-y-0.5"
            >
              Keep my site live for $99 per month
            </a>
            <a 
              href="#your-site"
              className="bg-white border-2 border-black px-6 py-4 rounded-md font-semibold text-base text-center hover:bg-gray-50 transition"
            >
              See my website
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#5B5E6B] font-medium"
          >
            {["No contract", "Cancel anytime", "Secure hosting included", "Unlimited changes"].map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#27AAE1]" strokeWidth={3} />
                {item}
              </span>
            ))}
          </motion.div>

          {/* Stat strip */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-200 pt-10"
          >
            {[
              { value: "1", label: "Lead already delivered" },
              { value: "$0", label: "You have paid so far" },
              { value: "14", suffix: "days", label: "Until site is taken offline" },
              { value: "$99", suffix: "/mo", label: "To keep it running" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-extrabold tracking-tight">
                  {stat.value}
                  {stat.suffix && <span className="text-lg font-semibold">{stat.suffix}</span>}
                </div>
                <div className="text-sm text-[#5B5E6B] mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Happened */}
      <section id="what-happened" className="bg-[#F7F8FB] border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-gray-200 text-[#5B5E6B] text-xs font-medium mb-5">
              01 &bull; How you got here
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              You did not sign up for anything. A real customer just found you.
            </h2>
            <p className="mt-4 text-[#5B5E6B] text-lg font-medium">Here is exactly what happened, in plain English.</p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "We built you a site", desc: "Truax Marketing builds free demo websites for local businesses we think have a strong offering. No cost to you, no strings, no signup.", icon: "M4 6h16M4 10h16M4 14h10" },
              { step: "02", title: "It started ranking and getting traffic", desc: "The site went live, got indexed by Google, and started showing up when customers in your area searched for your service.", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
              { step: "03", title: "A real customer filled out the form", desc: "That is the lead we just sent you. Free, real, and yours to close. Keep the site live and more will follow.", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-7 hover:shadow-lg transition"
              >
                <div className="text-xs font-bold tracking-widest text-[#27AAE1]">STEP {item.step}</div>
                <div className="mt-3 w-12 h-12 rounded-lg bg-black text-white flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon}/>
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
                <p className="mt-2 text-[#5B5E6B] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Site Preview */}
      <section id="your-site" className="bg-white">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#F7F8FB] border border-gray-200 text-[#5B5E6B] text-xs font-medium mb-5">
                02 &bull; Your website
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">This is the site working for you right now.</h2>
            </div>
            {validSiteUrl && (
              <a 
                href={displayUrl!}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-5 py-3 rounded-md text-sm font-semibold inline-flex items-center gap-2 w-fit hover:bg-[#262466] transition"
              >
                Open my website
                <ArrowRight className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Browser frame */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 bg-gray-50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 mx-4 bg-white border border-gray-200 rounded-md px-3 py-1.5 text-xs text-[#5B5E6B] truncate font-medium">
                {displayUrl}
              </div>
              <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-50 text-green-600 border border-green-200 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Live
              </span>
            </div>
            <div className="aspect-[16/9] bg-gradient-to-br from-white to-gray-100 flex items-center justify-center p-8 relative overflow-hidden">
              {/* Decorative beams */}
              <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="previewBeam" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#2B3990" stopOpacity="0.15"/>
                    <stop offset="100%" stopColor="#27AAE1" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <polygon points="600,-50 900,200 500,500" fill="url(#previewBeam)"/>
              </svg>
              <div className="text-center relative z-10">
                <img 
                  src="https://truaxmarketing.com/logo.svg" 
                  alt="Truax Marketing Solutions" 
                  className="h-10 w-auto mx-auto mb-5"
                />
                <div className="text-xs text-[#5B5E6B] font-semibold tracking-widest uppercase mb-2">Live Preview</div>
                <div className="text-3xl font-extrabold tracking-tight">{rawBusiness ? business : "Your Business"}</div>
                <div className="text-[#5B5E6B] font-medium mt-1">{city}</div>
                {validSiteUrl && (
                  <a 
                    href={displayUrl!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 bg-[#27AAE1] text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#2B3990] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#27AAE1]/25 active:translate-y-0 transition-all duration-300"
                  >
                    View my live website
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Offer */}
      <section id="offer" className="relative overflow-hidden text-white" style={{ background: "linear-gradient(135deg, #2B3990 0%, #262466 45%, #000000 100%)" }}>
        {/* Abstract X decorative */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="offerBeam1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#27AAE1" stopOpacity="0.25"/>
                <stop offset="100%" stopColor="#2B3990" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="offerBeam2" x1="1" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#000000" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#262466" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <polygon points="1200,-100 1600,400 800,1000 400,600" fill="url(#offerBeam1)"/>
            <polygon points="0,900 600,300 1400,1000" fill="url(#offerBeam2)"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium mb-5">
              03 &bull; The offer
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Keep the site. Keep the leads. <span className="text-[#27AAE1]">$99 a month.</span>
            </h2>
            <p className="mt-4 text-white/70 text-lg font-medium">One flat price. No contract. Cancel with one email. Or pay annually and save $188.</p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {/* Monthly plan */}
            <div className="bg-white text-black rounded-2xl p-8 shadow-xl relative">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-lg">Monthly</div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#F7F8FB] border border-gray-200 text-[#5B5E6B] text-xs font-medium">Most flexible</span>
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-extrabold tracking-tight">$99</span>
                <span className="text-[#5B5E6B] font-medium">/month</span>
              </div>
              <p className="text-[#5B5E6B] text-sm mt-2 font-medium">Billed monthly. Cancel anytime.</p>
              <a 
                href={STRIPE_MONTHLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full block text-center bg-black text-white rounded-md py-3 font-semibold hover:bg-[#262466] transition"
              >
                Keep my site for $99 a month
              </a>
              <ul className="mt-6 space-y-3 text-sm">
                {["Secure hosting with SSL included", "Unlimited content and design changes", "Lead form with instant email alerts", "Mobile optimized, fast, Google-friendly", "Ongoing SEO and performance upkeep", "Monthly updates and uptime monitoring"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#27AAE1] flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Annual plan */}
            <div className="rounded-2xl p-8 shadow-xl relative overflow-hidden text-white" style={{ background: "linear-gradient(135deg, #2B3990 0%, #27AAE1 100%)" }}>
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-lg">Annual</div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white text-[#2B3990] text-xs font-bold">Save $188</span>
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold tracking-tight">$1,000</span>
                  <span className="opacity-80 font-medium">/year</span>
                </div>
                <p className="opacity-80 text-sm mt-2 font-medium">Billed once. Works out to about $83 a month.</p>
                <a 
                  href={STRIPE_ANNUAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full block text-center bg-white text-black rounded-md py-3 font-semibold hover:bg-gray-100 transition"
                >
                  Pay $1,000 a year and save
                </a>
                <ul className="mt-6 space-y-3 text-sm">
                  {["Everything in Monthly", "$188 off vs paying monthly", "Priority change requests", "One free strategy call per quarter", "Locked-in rate for 12 months"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" strokeWidth={3} />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <p className="mt-8 text-white/60 text-sm text-center font-medium">Secure checkout by Stripe. Payments go to Truax Marketing Solutions.</p>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-24">
          <div className="max-w-2xl mb-12">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#F7F8FB] border border-gray-200 text-[#5B5E6B] text-xs font-medium mb-5">
              04 &bull; How it compares
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">The math on every other option is worse.</h2>
            <p className="mt-4 text-[#5B5E6B] text-lg font-medium">Most local businesses pay thousands up front, wait weeks, and still have to manage the site themselves. You skipped all of that.</p>
          </div>

          <div className="overflow-x-auto border border-gray-200 rounded-xl">
            <table className="w-full text-sm min-w-[760px]">
              <thead className="bg-[#F7F8FB] text-left">
                <tr>
                  <th className="p-5 font-semibold">&nbsp;</th>
                  <th className="p-5 font-semibold">DIY (Wix, Squarespace)</th>
                  <th className="p-5 font-semibold">Hire a freelancer</th>
                  <th className="p-5 font-semibold">Hire an agency</th>
                  <th className="p-5 font-semibold bg-black text-white">Truax</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { label: "Upfront cost", vals: ["$0", "$1,500 to $5,000", "$5,000 to $20,000", "$0"] },
                  { label: "Monthly cost", vals: ["$25 to $60", "$0 (you maintain it)", "$500 to $2,500", "$99"] },
                  { label: "Time to launch", vals: ["Weeks of your time", "3 to 6 weeks", "6 to 12 weeks", "Already done"] },
                  { label: "Lead capture built in", vals: ["Manual setup", "Extra fee", "Sometimes", "Yes, already working"] },
                  { label: "Who manages updates", vals: ["You", "You", "Them, extra fee", "Truax, unlimited"] },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="p-5 font-semibold">{row.label}</td>
                    <td className="p-5 text-[#5B5E6B]">{row.vals[0]}</td>
                    <td className="p-5 text-[#5B5E6B]">{row.vals[1]}</td>
                    <td className="p-5 text-[#5B5E6B]">{row.vals[2]}</td>
                    <td className="p-5 font-bold bg-[#27AAE1]/10">{row.vals[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* The Math */}
      <section className="bg-[#F7F8FB] border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-gray-200 text-[#5B5E6B] text-xs font-medium mb-5">
                05 &bull; The math
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">One job from this site pays for the year.</h2>
              <p className="mt-5 text-[#5B5E6B] text-lg font-medium">You already got a lead before you even knew the site existed. Close that one and everything after is margin.</p>
              <a 
                href={STRIPE_MONTHLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-[#262466] transition"
              >
                Lock it in at $99 a month
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="text-xs text-[#5B5E6B] uppercase tracking-widest font-bold">Annual math</div>
              <div className="mt-4 space-y-4 text-base">
                {[
                  { label: "Cost of keeping your site for 12 months", value: "$1,188" },
                  { label: "Average value of one new customer", value: "$500 to $5,000+" },
                  { label: "Leads needed to break even", value: "1" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <span className="text-[#5B5E6B] font-medium">{item.label}</span>
                    <span className="font-bold">{item.value}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-2">
                  <span className="font-semibold">Leads you have already received</span>
                  <span className="text-3xl font-extrabold text-[#27AAE1]">1+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-24">
          <div className="max-w-2xl mb-12">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#F7F8FB] border border-gray-200 text-[#5B5E6B] text-xs font-medium mb-5">
              06 &bull; What other owners say
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Other local businesses stayed on. Here is why.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#F7F8FB] border border-gray-200 rounded-xl p-7"
              >
                <Quote className="w-7 h-7 text-[#27AAE1] mb-4" />
                <blockquote className="leading-relaxed font-medium">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 pt-5 border-t border-gray-200">
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-[#5B5E6B] text-xs mt-0.5">{t.role}</div>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <p className="mt-6 text-xs text-[#5B5E6B] font-medium">Quotes reflect representative feedback from Truax website clients.</p>
        </div>
      </section>

      {/* About Truax */}
      <section className="bg-[#F7F8FB] border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-24">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-gray-200 text-[#5B5E6B] text-xs font-medium mb-5">
                07 &bull; About Truax
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">We build marketing that brings in customers. Not marketing that looks nice.</h2>
              <p className="mt-5 text-[#5B5E6B] text-lg font-medium leading-relaxed">Truax Marketing Solutions is a marketing firm based in the US that helps local and specialty businesses generate real revenue through clean websites, smart SEO, and full-service marketing automation.</p>
              <p className="mt-4 text-[#5B5E6B] text-lg font-medium leading-relaxed">The free website program exists because we would rather prove what we can do than pitch you on it. You are seeing the pitch right now.</p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
                <a href="https://truaxmarketing.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[#2B3990] transition">
                  Visit truaxmarketing.com
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="mailto:aaron@truaxmarketing.com" className="inline-flex items-center gap-2 hover:text-[#2B3990] transition">
                  aaron@truaxmarketing.com
                </a>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="bg-black text-white rounded-2xl p-8 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-xs uppercase tracking-widest font-bold text-[#27AAE1]">Founder</div>
                  <div className="mt-2 text-2xl font-bold">Aaron Truax</div>
                  <div className="text-white/70 text-sm font-medium">CEO, Truax Marketing Solutions</div>
                  <p className="mt-5 text-white/80 text-sm leading-relaxed font-medium">Over a decade building marketing engines for insurance, home services, and specialty B2B. This program is how we put our money where our mouth is.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-20 md:py-24">
          <div className="mb-10">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#F7F8FB] border border-gray-200 text-[#5B5E6B] text-xs font-medium mb-5">
              08 &bull; FAQ
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Questions most owners ask.</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-[#F7F8FB] border border-gray-200 rounded-xl open:shadow-lg transition">
                <summary className="cursor-pointer list-none p-6 flex items-center justify-between gap-4">
                  <span className="font-semibold text-lg">{faq.q}</span>
                  <span className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center font-bold text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-[#5B5E6B] font-medium leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 pointer-events-none opacity-50">
          <svg className="w-full h-full" viewBox="0 0 1400 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="finalBeam" x1="0" y1="0" x2="1" y2="0.5">
                <stop offset="0%" stopColor="#2B3990" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <polygon points="0,0 1000,0 1400,600 0,600" fill="url(#finalBeam)"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            14-day window before takedown
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Keep the site that already paid you.
          </h2>
          <p className="mt-6 text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Lock in $99 a month or save $188 with annual. Cancel any time. Stripe checkout, takes under a minute.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href={STRIPE_MONTHLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#27AAE1] text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-[#2B3990] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#27AAE1]/25 active:translate-y-0 transition-all duration-300"
            >
              $99 a month, cancel anytime
            </a>
            <a 
              href={STRIPE_ANNUAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-md font-semibold text-base hover:bg-gray-100 transition"
            >
              $1,000 a year, save $188
            </a>
          </div>
          <p className="mt-8 text-white/60 text-sm font-medium">
            Questions? Email <a href="mailto:aaron@truaxmarketing.com" className="underline text-[#27AAE1] hover:text-white">aaron@truaxmarketing.com</a> or call 1-571-200-1351.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white/60 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <img 
                src="https://truaxmarketing.com/logo.svg" 
                alt="Truax Marketing Solutions" 
                className="h-7 w-auto brightness-0 invert"
              />
            </div>
            <div className="flex flex-wrap items-center gap-6">
              {[
                { href: "https://truaxmarketing.com", label: "truaxmarketing.com", external: true },
                { href: "mailto:aaron@truaxmarketing.com", label: "aaron@truaxmarketing.com" },
                { href: "tel:15712001351", label: "1-571-200-1351" },
              ].map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={() => {
                    if (link.href.startsWith("tel:")) {
                      track("Phone Click", { location: "keep-your-website", number: link.label });
                    }
                  }}
                  className="text-sm font-medium hover:text-[#27AAE1] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              {[
                { href: "https://www.linkedin.com/company/truax-marketing-solutions", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                { href: "https://www.instagram.com/truaxmarketing/", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                { href: "https://www.facebook.com/truaxmarketing/", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
              ].map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#27AAE1] hover:scale-110 transition-all duration-200"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Truax Marketing Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

export default function KeepYourWebsitePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#27AAE1]" />
      </div>
    }>
      <KeepYourWebsiteContent />
    </Suspense>
  );
}
