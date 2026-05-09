"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check, ExternalLink, Globe, Clock, DollarSign, AlertTriangle } from "lucide-react";

const comparison = [
  { option: "DIY (Wix, Squarespace)", upfront: "$0", monthly: "$25-60", time: "Weeks of your time", updates: "You" },
  { option: "Hire a freelancer", upfront: "$1,500-5,000", monthly: "$0", time: "3-6 weeks", updates: "You" },
  { option: "Hire an agency", upfront: "$5,000-20,000", monthly: "$500-2,500", time: "6-12 weeks", updates: "Them, extra fee" },
  { option: "Truax", upfront: "$0", monthly: "$99", time: "Already done", updates: "Truax, unlimited", highlight: true },
];

const testimonials = [
  { quote: "I thought it was a scam. Then I closed the lead for a $2,800 job. I am keeping the site.", name: "Marcus H.", role: "Owner, local HVAC company" },
  { quote: "My old site was 12 years old and I was paying $180 a month for it to do nothing. This one actually brings customers in.", name: "Dana R.", role: "Owner, cleaning service" },
  { quote: "No up-front cost, no pressure, and the team makes the changes I ask for within a day. For $99, it is a no-brainer.", name: "Priya S.", role: "Owner, family-run restaurant" },
];

const faqs = [
  { q: "Who are you and why did I get a lead from you?", a: "We are Truax Marketing Solutions, a US marketing firm. We built a free demo website for your business as part of our lead-generation program, published it, and when a real customer filled out the contact form, we forwarded the lead to you." },
  { q: "Why did you build the site for free?", a: "Pitching is cheap. Showing is better. We only charge you if the site actually produces real leads and you want to keep it." },
  { q: "What happens if I do nothing?", a: "We keep your site live for 14 days after your first lead. After that, the site is taken offline and removed from Google." },
  { q: "Am I locked into a contract?", a: "No. Monthly plans bill every 30 days and can be cancelled at any time with one email." },
  { q: "Is the lead I got real?", a: "Yes. Every lead is a real form submission from a real person searching for your service." },
  { q: "How do I cancel?", a: "One email to aaron@truaxmarketing.com and we cancel the billing immediately. No phone calls, no hoops." },
];

export default function KeepYourWebsitePage() {
  return (
    <main className="bg-[#0a0a12]">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B3990]/20 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Your site is live
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tight"
          >
            That lead just came from a site we built for your business.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Truax Marketing built you a working website at no cost. It already earned you a real customer. If you want the leads to keep coming, keep the site running for $99/month.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black font-medium">
              Keep my site live for $99/month
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
              { value: "1", label: "Lead already delivered", icon: Check },
              { value: "$0", label: "You have paid so far", icon: DollarSign },
              { value: "14 days", label: "Until site is taken offline", icon: Clock },
              { value: "$99/mo", label: "To keep it running", icon: Globe },
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-lg bg-[#0f0f1a] border border-[#262466]">
                <p className="text-2xl font-bold text-[#27AAE1] font-mono">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How you got here */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#27AAE1] font-mono text-sm mb-2">01 - How you got here</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12">
            You did not sign up for anything. A real customer just found you.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "We built you a site", desc: "Truax Marketing builds free demo websites for local businesses we think have a strong offering. No cost to you, no strings, no signup." },
              { step: "02", title: "It started ranking", desc: "The site went live, got indexed by Google, and started showing up when customers in your area searched for your service." },
              { step: "03", title: "A real customer filled out the form", desc: "That is the lead we just sent you. Free, real, and yours to close. Keep the site live and more will follow." },
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
            <Button className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black">
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
            Keep the site. Keep the leads. $99/month.
          </h2>
          <p className="text-gray-400 mb-12">One flat price. No contract. Cancel with one email.</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Monthly */}
            <div className="p-8 rounded-2xl bg-[#0f0f1a] border border-[#262466]">
              <p className="text-sm text-gray-400 mb-2">Monthly - Most flexible</p>
              <p className="text-4xl font-bold text-white mb-1">$99<span className="text-lg text-gray-400">/month</span></p>
              <p className="text-gray-400 text-sm mb-6">Billed monthly. Cancel anytime.</p>
              <Button className="w-full bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black mb-6">
                Keep my site for $99/month
              </Button>
              <ul className="space-y-3">
                {["Secure hosting with SSL", "Unlimited content changes", "Lead form with email alerts", "Mobile optimized, Google-friendly", "Ongoing SEO upkeep", "Monthly monitoring"].map((item, i) => (
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
                  <th className="py-4 px-4 text-gray-400 font-medium">Time</th>
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
            One job from this site pays for the year.
          </h2>
          <p className="text-gray-400 mb-8">
            You already got a lead before you even knew the site existed. Close that one and everything after is margin.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "$1,188", label: "12 months cost" },
              { value: "$500-5K+", label: "Avg customer value" },
              { value: "1", label: "Leads to break even" },
              { value: "1+", label: "Leads already received" },
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
            Other local businesses stayed on.
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
            Questions most owners ask.
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            14-day window before takedown
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Keep the site that already paid you.
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
