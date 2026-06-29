"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { track } from "@vercel/analytics";
import { Check, Plus, ExternalLink, Quote, Shield, Smartphone, Mail, TrendingUp } from "lucide-react";


// Stripe payment links
const STRIPE_MONTHLY = "https://buy.stripe.com/bJe8wP8ZheQK2WwazZbZe06";
const STRIPE_ANNUAL = "https://buy.stripe.com/9B63cv1wPcICaoYgYnbZe07";

function YourNewWebsiteContent() {
  const searchParams = useSearchParams();
  const [business, setBusiness] = useState("your business");
  const [city, setCity] = useState("Your City");
  const [siteUrl, setSiteUrl] = useState("https://yourbusiness.truaxsites.com");

  useEffect(() => {
    // Parse UTM parameters
    const rawBusiness = searchParams.get("business");
    const rawCity = searchParams.get("city");
    const rawSite = searchParams.get("siteurl");

    const clean = (str: string | null) => {
      if (!str) return null;
      try {
        str = decodeURIComponent(str);
      } catch (e) {}
      return str.replace(/<[^>]*>/g, "").trim().slice(0, 80);
    };

    const cleanBusiness = clean(rawBusiness);
    const cleanCity = clean(rawCity);
    const cleanSite = clean(rawSite);

    if (cleanBusiness) setBusiness(cleanBusiness);
    if (cleanCity) setCity(cleanCity);
    if (cleanSite) {
      let normalized = cleanSite;
      if (!/^https?:\/\//i.test(normalized)) normalized = "https://" + normalized;
      try {
        new URL(normalized);
        setSiteUrl(normalized);
      } catch (e) {}
    }
  }, [searchParams]);

  const faqs = [
    {
      q: "Wait, how did you build me a site without asking?",
      a: "Easier to show than to sell. We use public information (your business name, reviews, service area, photos if available) to build a complete website, then we publish it and wait for you to find it. If it works for you and you want to keep it, great. If not, no harm done.",
    },
    {
      q: "Is this some kind of scam?",
      a: "No. Truax Marketing Solutions is a real US marketing firm. You can reach us by phone (1-571-200-1351), email, or at truaxmarketing.com. We have no access to your accounts, your money, or anything else. The only way you pay is if you decide to keep the site through a Stripe checkout.",
    },
    {
      q: "What happens to my site if I do nothing?",
      a: "If no one claims the site within a reasonable window, we take it offline. It stops ranking, stops collecting leads, and comes out of Google. Any traffic you were quietly getting goes away.",
    },
    {
      q: "Do I own the site once I pay?",
      a: "You get full commercial use of the site while you are a customer. The underlying hosting and platform is managed by Truax as part of the $99 a month service. If you ever cancel, we can also export a static copy of your content to move elsewhere.",
    },
    {
      q: "Can I use my own domain?",
      a: "Yes. Once you are on a paid plan, we will point your existing domain at the site or register a new one for you at cost. SSL is included automatically.",
    },
    {
      q: "Can I edit the site or request changes?",
      a: "Yes. Unlimited changes are included. Email any request (copy tweaks, photo swaps, new pages, new services, pricing updates, staff bios, you name it) and the team turns most changes around in 1 business day.",
    },
    {
      q: "Am I locked into a contract?",
      a: "No. Monthly plans bill every 30 days and can be cancelled anytime with one email. Annual is billed once and locks your rate for 12 months, but you are never auto-renewed without notice.",
    },
    {
      q: "What if I already have a website?",
      a: "Happens often. Most owners who keep ours end up retiring the old one because theirs is outdated, slow, or not generating leads. If yours is already working well, that is great. If not, you have a side-by-side comparison now.",
    },
    {
      q: "How do I cancel?",
      a: "One email to aaron@truaxmarketing.com and we cancel the billing immediately. No phone calls, no hoops.",
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Nav */}
      <header className="bg-[#0a0a12]/95 backdrop-blur-md sticky top-0 z-40 border-b border-[#262466]/50">
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
              { href: "#story", label: "The story" },
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
            href={STRIPE_MONTHLY}
            target="_blank"
            rel="noopener"
            className="bg-[#27AAE1] text-black px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-white hover:scale-105 transition-all duration-200 shadow-lg shadow-[#27AAE1]/20"
          >
            Claim my site
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B3990]/20 to-transparent" />
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-2 mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-[#0f0f1a] border border-[#262466] text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              You found the footer credit
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-[#27AAE1] text-black">
              For <span className="font-semibold">{business}</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tight"
          >
            Yes, we built the website for{" "}
            <span className="underline decoration-[#27AAE1] decoration-4 underline-offset-4">
              {business}
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-8 max-w-2xl"
          >
            You saw the &quot;Crafted by Truax&quot; credit in the footer and wanted the story. Here it is, along with what it means for your business going forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={STRIPE_MONTHLY}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center px-6 py-4 rounded-md font-semibold text-base bg-[#27AAE1] text-black hover:bg-[#27AAE1]/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#27AAE1]/25 active:translate-y-0 transition-all duration-300"
            >
              Claim my site for $99 per month
            </a>
            <a
              href="#your-site"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md font-semibold text-base border-2 border-[#262466] text-white hover:bg-[#262466]/50 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 transition-all duration-300"
            >
              See my website
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-400 font-medium"
          >
            {["Already built and live", "No contract", "Secure hosting included", "Unlimited changes"].map(
              (item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#27AAE1]" strokeWidth={3} />
                  {item}
                </span>
              )
            )}
          </motion.div>

          {/* Stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { value: "$0", label: "Cost to you so far" },
              { value: "Live", label: "Indexed on Google" },
              { value: "Active", label: "Collecting traffic now" },
              { value: "$99/mo", label: "To claim and keep it" },
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-lg bg-[#0f0f1a] border border-[#262466]">
                <p className="text-2xl md:text-3xl font-bold text-white font-mono">{stat.value}</p>
                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Story */}
      <section id="story" className="py-20 px-6 bg-[#0f0f1a] border-y border-[#262466]">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-wide bg-[#0a0a12] border border-[#262466] text-[#27AAE1] mb-5">
              01 &bull; The story
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              You didn&apos;t order a website. So why does your business have one?
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              Short answer: we built it before you asked. Long answer below.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "We spotted your business",
                desc: "Your reviews, your reputation, your service area. You had the makings of a business that could do a lot more online. The one thing holding you back was a proper website.",
              },
              {
                step: "02",
                title: "We built you one, for free",
                desc: "Our team designed, wrote, coded, and published a complete website for your business. Hosting, SSL, a working contact form, mobile layout, all of it. No cost to you, no sign-up, no credit card.",
              },
              {
                step: "03",
                title: "You found it and clicked the credit",
                desc: "The site has been working quietly in the background, showing up in searches and ready to collect leads. Now that you know it exists, the next move is yours.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0a0a12] border border-[#262466] rounded-xl p-7 hover:border-[#27AAE1]/50 transition"
              >
                <div className="text-xs font-bold tracking-widest text-[#27AAE1]">STEP {item.step}</div>
                <h3 className="mt-4 font-semibold text-lg text-white">{item.title}</h3>
                <p className="mt-2 text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 bg-[#0a0a12] border border-[#262466] rounded-xl p-6 md:p-8 max-w-3xl">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#27AAE1]/10 text-[#27AAE1] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg">Why do it this way?</h3>
                <p className="mt-2 text-gray-400 font-medium leading-relaxed">
                  We believe showing beats selling. Instead of sending you a sales pitch, we built the thing.
                  If the site works for your business and you want to keep it, $99 a month. If not, no hard
                  feelings and nothing owed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Site Preview */}
      <section id="your-site" className="py-20 px-6 bg-[#0a0a12]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-wide bg-[#0f0f1a] border border-[#262466] text-[#27AAE1] mb-5">
                02 &bull; Your website
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                This is the site working for you right now.
              </h2>
              <p className="mt-4 text-gray-400 text-lg">
                Open it in a new tab. Check the phone layout. Fill out the contact form. It all works.
              </p>
            </div>
            <a
              href={siteUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-semibold bg-[#27AAE1] text-black hover:bg-[#27AAE1]/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#27AAE1]/25 active:translate-y-0 transition-all duration-300 w-fit"
            >
              Open my website
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-[#0f0f1a] border border-[#262466] rounded-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#262466] bg-[#0a0a12]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 mx-4 bg-[#0f0f1a] border border-[#262466] rounded-md px-3 py-1.5 text-xs text-gray-400 truncate font-mono">
                {siteUrl}
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Live
              </span>
            </div>
            <div className="aspect-[16/9] bg-gradient-to-br from-[#2B3990]/20 to-[#27AAE1]/10 flex items-center justify-center p-8 relative overflow-hidden">
              <div className="text-center relative z-10">
                <img
                  src="https://truaxmarketing.com/logo.svg"
                  alt="Truax Marketing Solutions"
                  className="h-10 w-auto mx-auto mb-5 brightness-0 invert"
                />
                <div className="text-xs text-gray-400 font-semibold tracking-widest uppercase mb-2">
                  Live Preview
                </div>
                <div className="text-3xl font-bold tracking-tight text-white">{business}</div>
                <div className="text-gray-400 font-medium mt-1">{city}</div>
                <a
                  href={siteUrl}
                  target="_blank"
                  rel="noopener"
                  className="mt-6 inline-flex items-center gap-2 bg-[#27AAE1] text-black px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#27AAE1]/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#27AAE1]/25 active:translate-y-0 transition-all duration-300"
                >
                  View my live website
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* What's on it */}
          <div className="mt-10 grid md:grid-cols-4 gap-4">
            {[
              { icon: Shield, title: "Secure SSL hosting", desc: "HTTPS, fast servers, uptime monitoring" },
              { icon: Smartphone, title: "Mobile-first design", desc: "Looks right on every screen size" },
              { icon: Mail, title: "Working contact form", desc: "Routes leads straight to your email" },
              { icon: TrendingUp, title: "SEO foundation", desc: "Indexed on Google, built to rank locally" },
            ].map((item) => (
              <div key={item.title} className="bg-[#0f0f1a] border border-[#262466] rounded-xl p-5">
                <item.icon className="w-6 h-6 text-[#27AAE1] mb-3" />
                <div className="font-semibold text-sm text-white">{item.title}</div>
                <div className="text-xs text-gray-400 mt-1">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Offer */}
      <section id="offer" className="relative overflow-hidden py-20 px-6 bg-gradient-to-br from-[#2B3990] via-[#262466] to-black">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="max-w-2xl mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-wide bg-white/10 text-white border border-white/20 mb-5">
              03 &bull; The offer
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Claim the site. Keep it working.{" "}
              <span className="text-[#27AAE1]">$99 a month.</span>
            </h2>
            <p className="mt-4 text-white/70 text-lg">
              One flat price. No contract. Cancel with one email. Or pay annually and save $188.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Monthly */}
            <div className="bg-white text-gray-900 rounded-2xl p-8 relative">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-lg">Monthly</div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                  Most flexible
                </span>
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-bold tracking-tight">$99</span>
                <span className="text-gray-500 font-medium">/month</span>
              </div>
              <p className="text-gray-500 text-sm mt-2">Billed monthly. Cancel anytime.</p>
              <a
                href={STRIPE_MONTHLY}
                target="_blank"
                rel="noopener"
                className="mt-6 w-full block text-center bg-gray-900 text-white rounded-md py-3 font-semibold hover:bg-[#262466] transition"
              >
                Claim my site for $99 a month
              </a>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Secure hosting with SSL included",
                  "Unlimited content and design changes",
                  "Lead form with instant email alerts",
                  "Mobile optimized, fast, Google-friendly",
                  "Ongoing SEO and performance upkeep",
                  "Monthly updates and uptime monitoring",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#27AAE1] flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Annual */}
            <div className="bg-gradient-to-br from-[#2B3990] to-[#27AAE1] text-white rounded-2xl p-8 relative overflow-hidden border border-[#27AAE1]/50">
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-lg">Annual</div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-[#2B3990]">
                    Save $188
                  </span>
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-tight">$1,000</span>
                  <span className="opacity-80 font-medium">/year</span>
                </div>
                <p className="opacity-80 text-sm mt-2">
                  Billed once. Works out to about $83 a month.
                </p>
                <a
                  href={STRIPE_ANNUAL}
                  target="_blank"
                  rel="noopener"
                  className="mt-6 w-full block text-center bg-white text-gray-900 rounded-md py-3 font-semibold hover:bg-gray-100 transition"
                >
                  Pay $1,000 a year and save
                </a>
                <ul className="mt-6 space-y-3 text-sm">
                  {[
                    "Everything in Monthly",
                    "$188 off vs paying monthly",
                    "Priority change requests",
                    "One free strategy call per quarter",
                    "Locked-in rate for 12 months",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" strokeWidth={3} />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <p className="mt-8 text-white/60 text-sm text-center font-medium">
            Secure checkout by Stripe. Payments go to Truax Marketing Solutions.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6 bg-[#0a0a12]">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-wide bg-[#0f0f1a] border border-[#262466] text-[#27AAE1] mb-5">
              04 &bull; How it compares
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              The math on every other option is worse.
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              Most local businesses pay thousands up front, wait weeks, and still have to manage the
              site themselves. You skipped all of that before you even knew it was happening.
            </p>
          </div>

          <div className="overflow-x-auto border border-[#262466] rounded-xl">
            <table className="w-full text-sm min-w-[760px]">
              <thead className="bg-[#0f0f1a] text-left">
                <tr>
                  <th className="p-5 font-semibold text-gray-400">&nbsp;</th>
                  <th className="p-5 font-semibold text-gray-400">DIY (Wix, Squarespace)</th>
                  <th className="p-5 font-semibold text-gray-400">Hire a freelancer</th>
                  <th className="p-5 font-semibold text-gray-400">Hire an agency</th>
                  <th className="p-5 font-semibold bg-[#27AAE1] text-black">Truax</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#262466]">
                {[
                  ["Upfront cost", "$0", "$1,500 to $5,000", "$5,000 to $20,000", "$0"],
                  ["Monthly cost", "$25 to $60", "$0 (you maintain it)", "$500 to $2,500", "$99"],
                  ["Time to launch", "Weeks of your time", "3 to 6 weeks", "6 to 12 weeks", "Already done"],
                  ["Lead capture built in", "Manual setup", "Extra fee", "Sometimes", "Yes, already working"],
                  ["Who manages updates", "You", "You", "Them, extra fee", "Truax, unlimited"],
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="p-5 font-semibold text-white">{row[0]}</td>
                    <td className="p-5 text-gray-400">{row[1]}</td>
                    <td className="p-5 text-gray-400">{row[2]}</td>
                    <td className="p-5 text-gray-400">{row[3]}</td>
                    <td className="p-5 font-bold text-white bg-[#27AAE1]/10">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* The Math */}
      <section className="py-20 px-6 bg-[#0f0f1a] border-y border-[#262466]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-wide bg-[#0a0a12] border border-[#262466] text-[#27AAE1] mb-5">
                05 &bull; The math
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
                One customer pays for the whole year.
              </h2>
              <p className="mt-5 text-gray-400 text-lg">
                Your site is already ranking and collecting traffic. The leads are coming. For most
                local services, one job covers the site for a year and everything after is pure margin.
              </p>
              <a
                href={STRIPE_MONTHLY}
                target="_blank"
                rel="noopener"
                className="mt-6 inline-flex items-center gap-2 bg-[#27AAE1] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#27AAE1]/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#27AAE1]/25 active:translate-y-0 transition-all duration-300"
              >
                Lock it in at $99 a month
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-[#0a0a12] border border-[#262466] rounded-2xl p-8">
              <div className="text-xs text-gray-400 uppercase tracking-widest font-bold font-mono">Annual math</div>
              <div className="mt-4 space-y-4 text-base">
                <div className="flex items-center justify-between border-b border-[#262466] pb-3">
                  <span className="text-gray-400">Cost to keep your site for 12 months</span>
                  <span className="font-bold text-white font-mono">$1,188</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#262466] pb-3">
                  <span className="text-gray-400">Average value of one new customer</span>
                  <span className="font-bold text-white font-mono">$500 to $5,000+</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#262466] pb-3">
                  <span className="text-gray-400">Customers needed to break even</span>
                  <span className="font-bold text-white font-mono">1</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="font-semibold text-white">Upfront cost if you rebuild elsewhere</span>
                  <span className="text-2xl font-bold text-[#27AAE1] font-mono">$5K+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-[#0a0a12]">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-wide bg-[#0f0f1a] border border-[#262466] text-[#27AAE1] mb-5">
              06 &bull; What other owners say
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Other local businesses kept their sites. Here is why.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "I had no idea someone built me a site until I Googled my own business. Best accident of my year.",
                name: "Marcus H.",
                role: "Owner, local HVAC company",
              },
              {
                quote:
                  "I was paying $180 a month for a 12-year-old site that brought me zero leads. This one brings in customers every week.",
                name: "Dana R.",
                role: "Owner, cleaning service",
              },
              {
                quote:
                  "No up-front cost, no pressure, and the team makes the changes I ask for within a day. For $99, it is a no-brainer.",
                name: "Priya S.",
                role: "Owner, family-run restaurant",
              },
            ].map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0f0f1a] border border-[#262466] rounded-xl p-7"
              >
                <Quote className="w-7 h-7 text-[#27AAE1] mb-4" fill="currentColor" />
                <blockquote className="text-white leading-relaxed font-medium">{t.quote}</blockquote>
                <figcaption className="mt-5 pt-5 border-t border-[#262466]">
                  <div className="font-semibold text-sm text-white">{t.name}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{t.role}</div>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <p className="mt-6 text-xs text-gray-500">
            Quotes reflect representative feedback from Truax website clients.
          </p>
        </div>
      </section>

      {/* About Truax */}
      <section className="py-20 px-6 bg-[#0f0f1a] border-y border-[#262466]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-wide bg-[#0a0a12] border border-[#262466] text-[#27AAE1] mb-5">
                07 &bull; About Truax
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                We build marketing that brings in customers. Not marketing that looks nice.
              </h2>
              <p className="mt-5 text-gray-400 text-lg leading-relaxed">
                Truax Marketing Solutions is a US-based marketing firm that helps local and specialty
                businesses grow through websites, SEO, and full-service marketing automation.
              </p>
              <p className="mt-4 text-gray-400 text-lg leading-relaxed">
                The free website program exists because we would rather prove what we can do than pitch
                you on it. You are seeing the pitch right now.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
                <a
                  href="https://truaxmarketing.com"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-white hover:text-[#27AAE1] transition"
                >
                  Visit truaxmarketing.com
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="mailto:aaron@truaxmarketing.com"
                  className="inline-flex items-center gap-2 text-white hover:text-[#27AAE1] transition"
                >
                  aaron@truaxmarketing.com
                </a>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="bg-[#0a0a12] border border-[#262466] text-white rounded-2xl p-8 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-xs uppercase tracking-widest font-bold text-[#27AAE1]">Founder</div>
                  <div className="mt-2 text-2xl font-bold">Aaron Truax</div>
                  <div className="text-white/70 text-sm font-medium">CEO, Truax Marketing Solutions</div>
                  <p className="mt-5 text-white/80 text-sm leading-relaxed">
                    Over a decade building marketing engines for insurance, home services, and specialty
                    B2B. This program is how we put our money where our mouth is.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6 bg-[#0a0a12]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-wide bg-[#0f0f1a] border border-[#262466] text-[#27AAE1] mb-5">
              08 &bull; FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Questions most owners ask first.
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-[#0f0f1a] border border-[#262466] rounded-xl overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <span className="font-semibold text-white text-lg">{faq.q}</span>
                  <span
                    className={`w-8 h-8 rounded-full bg-[#0a0a12] border border-[#262466] flex items-center justify-center text-[#27AAE1] font-bold text-xl transition-transform ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    <Plus className="w-5 h-5" />
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-400 leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not your site? */}
      <section className="py-16 px-6 bg-[#0f0f1a] border-y border-[#262466]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#0a0a12] border border-[#262466] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="text-xs font-bold tracking-widest text-[#27AAE1] uppercase">
                Not your site?
              </div>
              <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-white tracking-tight">
                Curious how we did this for someone else&apos;s business?
              </h3>
              <p className="mt-3 text-gray-400">
                Truax Marketing helps local and specialty businesses grow through websites, SEO, paid
                media, and marketing automation. If you want your own version of what you just saw, we
                can do that too.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
              <a
                href="https://truaxmarketing.com"
                target="_blank"
                rel="noopener"
                className="bg-[#27AAE1] text-black px-5 py-3 rounded-md text-sm font-semibold text-center whitespace-nowrap hover:bg-[#27AAE1]/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#27AAE1]/25 active:translate-y-0 transition-all duration-300"
              >
                See what Truax does
              </a>
              <a
                href="mailto:aaron@truaxmarketing.com"
                className="bg-[#0a0a12] border-2 border-[#262466] px-5 py-3 rounded-md text-sm font-semibold text-white text-center hover:bg-[#0f0f1a] transition whitespace-nowrap"
              >
                Email Aaron directly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-20 px-6 bg-gradient-to-b from-[#2B3990]/20 to-transparent">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-white/10 text-white border border-white/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            The site is live and working right now
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.1]">
            Claim the site we already built for you.
          </h2>
          <p className="mt-6 text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Lock in $99 a month or save $188 with annual. Cancel any time. Stripe checkout, takes
            under a minute.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={STRIPE_MONTHLY}
              target="_blank"
              rel="noopener"
              className="bg-[#27AAE1] text-black px-8 py-4 rounded-md font-semibold text-base hover:bg-[#27AAE1]/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#27AAE1]/25 active:translate-y-0 transition-all duration-300"
            >
              $99 a month, cancel anytime
            </a>
            <a
              href={STRIPE_ANNUAL}
              target="_blank"
              rel="noopener"
              className="bg-white text-gray-900 px-8 py-4 rounded-md font-semibold text-base hover:bg-gray-100 transition"
            >
              $1,000 a year, save $188
            </a>
          </div>
          <p className="mt-8 text-white/60 text-sm">
            Questions? Email{" "}
            <a href="mailto:aaron@truaxmarketing.com" className="underline text-[#27AAE1] hover:text-white">
              aaron@truaxmarketing.com
            </a>{" "}
            or call 1-571-200-1351.
          </p>
        </div>
      </section>
    </>
  );
}

function CustomFooter() {
  return (
    <footer className="bg-[#0a0a12] text-white/60 border-t border-[#262466]">
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
                    track("Phone Click", { location: "your-new-website", number: link.label });
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
        <div className="mt-8 pt-8 border-t border-[#262466] text-xs text-center md:text-left">
          &copy; {new Date().getFullYear()} Truax Marketing Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function YourNewWebsitePage() {
  return (
    <main className="bg-[#0a0a12]">
      <Suspense fallback={<div className="min-h-screen bg-[#0a0a12]" />}>
        <YourNewWebsiteContent />
      </Suspense>
      <CustomFooter />
    </main>
  );
}
