"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check, ExternalLink, Globe, Mail, Phone, Shield, Smartphone, Search, Zap, Clock, DollarSign, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  { icon: Shield, text: "Secure SSL hosting" },
  { icon: Smartphone, text: "Mobile-first design" },
  { icon: Mail, text: "Working contact form" },
  { icon: Search, text: "SEO foundation" },
];

const comparison = [
  { option: "DIY (Wix, Squarespace)", upfront: "$0", monthly: "$25-60", time: "Weeks of your time", leads: "Manual setup", updates: "You" },
  { option: "Hire a freelancer", upfront: "$1,500-5,000", monthly: "$0", time: "3-6 weeks", leads: "Extra fee", updates: "You" },
  { option: "Hire an agency", upfront: "$5,000-20,000", monthly: "$500-2,500", time: "6-12 weeks", leads: "Sometimes", updates: "Them, extra fee" },
  { option: "Truax", upfront: "$0", monthly: "$99", time: "Already done", leads: "Yes, working", updates: "Truax, unlimited", highlight: true },
];

const testimonials = [
  { quote: "I had no idea someone built me a site until I Googled my own business. Best accident of my year.", name: "Marcus H.", role: "Owner, local HVAC company" },
  { quote: "I was paying $180 a month for a 12-year-old site that brought me zero leads. This one brings in customers every week.", name: "Dana R.", role: "Owner, cleaning service" },
  { quote: "No up-front cost, no pressure, and the team makes the changes I ask for within a day. For $99, it is a no-brainer.", name: "Priya S.", role: "Owner, family-run restaurant" },
];

const faqs = [
  { q: "Wait, how did you build me a site without asking?", a: "Easier to show than to sell. We use public information (your business name, reviews, service area, photos if available) to build a complete website, then we publish it and wait for you to find it." },
  { q: "Is this some kind of scam?", a: "No. Truax Marketing Solutions is a real US marketing firm. You can reach us by phone (858-220-9501), email, or at truaxmarketing.com." },
  { q: "What happens to my site if I do nothing?", a: "If no one claims the site within a reasonable window, we take it offline. It stops ranking, stops collecting leads, and comes out of Google." },
  { q: "Do I own the site once I pay?", a: "You get full commercial use of the site while you are a customer. If you ever cancel, we can export a static copy of your content." },
  { q: "Can I use my own domain?", a: "Yes. Once you are on a paid plan, we will point your existing domain at the site or register a new one for you at cost." },
  { q: "Am I locked into a contract?", a: "No. Monthly plans bill every 30 days and can be cancelled anytime with one email." },
];

export default function YourNewWebsitePage() {
  return (
    <main className="bg-[#0a0a12]">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B3990]/20 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#27AAE1] font-medium mb-4"
          >
            Truax Marketing | We Built Your Website
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tight"
          >
            Yes, we built the website for your business.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            You saw the &quot;Crafted by Truax&quot; credit in the footer and wanted the story. Here it is, along with what it means for your business going forward.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black font-medium">
              Claim my site for $99/month
            </Button>
            <Button size="lg" variant="outline" className="border-[#262466] hover:bg-[#262466]/50">
              See my website <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            {[
              { value: "$0", label: "Cost to you so far" },
              { value: "Live", label: "Indexed on Google" },
              { value: "Active", label: "Collecting traffic now" },
              { value: "$99/mo", label: "To claim and keep it" },
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-lg bg-[#0f0f1a] border border-[#262466]">
                <p className="text-2xl font-bold text-[#27AAE1] font-mono">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#27AAE1] font-mono text-sm mb-2">01 - The story</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12">
            You did not order a website. So why does your business have one?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "We spotted your business", desc: "Your reviews, your reputation, your service area. You had the makings of a business that could do a lot more online." },
              { step: "02", title: "We built you one, for free", desc: "Our team designed, wrote, coded, and published a complete website for your business. Hosting, SSL, a working contact form, mobile layout, all of it." },
              { step: "03", title: "You found it and clicked the credit", desc: "The site has been working quietly in the background, showing up in searches and ready to collect leads." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-[#0f0f1a] border border-[#262466]"
              >
                <span className="text-[#27AAE1] font-mono text-sm">STEP {item.step}</span>
                <h3 className="text-xl font-semibold text-white mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Preview */}
      <section className="py-20 px-6 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#27AAE1] font-mono text-sm mb-2">02 - Your website</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">
            This is the site working for you right now.
          </h2>
          <div className="p-8 rounded-2xl bg-[#0a0a12] border border-[#262466]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#27AAE1]/20 flex items-center justify-center">
                <Globe className="w-6 h-6 text-[#27AAE1]" />
              </div>
              <div>
                <p className="text-white font-medium">yourbusiness.truaxsites.com</p>
                <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">Live</span>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <f.icon className="w-5 h-5 text-[#27AAE1]" />
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
            <Button className="mt-6 bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black">
              View my live website <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#27AAE1] font-mono text-sm mb-2">03 - The offer</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Claim the site. Keep it working. $99/month.
          </h2>
          <p className="text-gray-400 mb-12">One flat price. No contract. Cancel with one email.</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Monthly */}
            <div className="p-8 rounded-2xl bg-[#0f0f1a] border border-[#262466]">
              <p className="text-sm text-gray-400 mb-2">Monthly - Most flexible</p>
              <p className="text-4xl font-bold text-white mb-1">$99<span className="text-lg text-gray-400">/month</span></p>
              <p className="text-gray-400 text-sm mb-6">Billed monthly. Cancel anytime.</p>
              <Button className="w-full bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black mb-6">
                Claim my site for $99/month
              </Button>
              <ul className="space-y-3">
                {["Secure hosting with SSL", "Unlimited content changes", "Lead form with email alerts", "Mobile optimized, Google-friendly", "Ongoing SEO upkeep", "Monthly updates and monitoring"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <Check className="w-4 h-4 text-[#27AAE1]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Annual */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#2B3990]/30 to-[#27AAE1]/10 border border-[#27AAE1]/50">
              <p className="text-sm text-[#27AAE1] mb-2">Annual - Save $188</p>
              <p className="text-4xl font-bold text-white mb-1">$1,000<span className="text-lg text-gray-400">/year</span></p>
              <p className="text-gray-400 text-sm mb-6">About $83/month. Billed once.</p>
              <Button className="w-full bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black mb-6">
                Pay $1,000/year and save
              </Button>
              <ul className="space-y-3">
                {["Everything in Monthly", "$188 off vs paying monthly", "Priority change requests", "One free strategy call per quarter", "Locked-in rate for 12 months"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <Check className="w-4 h-4 text-[#27AAE1]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-6 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#27AAE1] font-mono text-sm mb-2">04 - How it compares</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">
            The math on every other option is worse.
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#262466]">
                  <th className="py-4 px-4 text-gray-400 font-medium">Option</th>
                  <th className="py-4 px-4 text-gray-400 font-medium">Upfront</th>
                  <th className="py-4 px-4 text-gray-400 font-medium">Monthly</th>
                  <th className="py-4 px-4 text-gray-400 font-medium">Time to launch</th>
                  <th className="py-4 px-4 text-gray-400 font-medium">Updates</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className={`border-b border-[#262466] ${row.highlight ? 'bg-[#27AAE1]/10' : ''}`}>
                    <td className={`py-4 px-4 font-medium ${row.highlight ? 'text-[#27AAE1]' : 'text-white'}`}>{row.option}</td>
                    <td className="py-4 px-4 text-gray-300">{row.upfront}</td>
                    <td className="py-4 px-4 text-gray-300">{row.monthly}</td>
                    <td className="py-4 px-4 text-gray-300">{row.time}</td>
                    <td className="py-4 px-4 text-gray-300">{row.updates}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Math */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#27AAE1] font-mono text-sm mb-2">05 - The math</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            One customer pays for the whole year.
          </h2>
          <p className="text-gray-400 mb-8">
            Your site is already ranking and collecting traffic. For most local services, one job covers the site for a year and everything after is pure margin.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "$1,188", label: "12 months cost" },
              { value: "$500-5K+", label: "Avg customer value" },
              { value: "1", label: "Customers to break even" },
              { value: "$5K+", label: "Cost to rebuild elsewhere" },
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-lg bg-[#0f0f1a] border border-[#262466]">
                <p className="text-2xl font-bold text-[#27AAE1] font-mono">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#27AAE1] font-mono text-sm mb-2">06 - What owners say</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12">
            Other local businesses kept their sites.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-[#0a0a12] border border-[#262466]"
              >
                <p className="text-gray-300 mb-4 italic">&quot;{t.quote}&quot;</p>
                <p className="text-white font-medium">{t.name}</p>
                <p className="text-gray-400 text-sm">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#27AAE1] font-mono text-sm mb-2">08 - FAQ</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12">
            Questions most owners ask first.
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group p-6 rounded-xl bg-[#0f0f1a] border border-[#262466]">
                <summary className="flex items-center justify-between cursor-pointer text-white font-medium list-none">
                  {faq.q}
                  <span className="text-[#27AAE1] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-gray-400">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#2B3990]/20 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Claim the site we already built for you.
          </h2>
          <p className="text-gray-400 mb-8">
            Lock in $99/month or save $188 with annual. Cancel any time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black font-medium">
              $99/month, cancel anytime
            </Button>
            <Button size="lg" variant="outline" className="border-[#262466] hover:bg-[#262466]/50">
              $1,000/year, save $188
            </Button>
          </div>
          <p className="text-gray-500 text-sm mt-8">
            Questions? Email aaron@truaxmarketing.com or call 858-220-9501
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
