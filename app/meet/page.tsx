"use client";

import { motion } from "framer-motion";
import { Clock, Video, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const meetingTypes = [
  {
    icon: Video,
    title: "Discovery Call",
    duration: "30 min",
    description: "Discuss your business goals and see if we are a good fit.",
  },
  {
    icon: Calendar,
    title: "Strategy Session",
    duration: "60 min",
    description: "Deep dive into your marketing challenges and opportunities.",
  },
  {
    icon: Clock,
    title: "Quick Chat",
    duration: "15 min",
    description: "Got a quick question? Jump on a brief call.",
  },
];

export default function MeetPage() {
  return (
    <main className="min-h-screen bg-[#0a0a12]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#27AAE1]/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#2B3990]/15 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#27AAE1] font-medium mb-4 tracking-wide"
          >
            Book a Call
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight leading-[1.1]"
          >
            Schedule your <span className="text-[#27AAE1]">appointment</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Select a topic that interests you and find a time to talk. We are excited to 
            learn about your business and explore how we can help.
          </motion.p>
        </div>
      </section>

      {/* Meeting Types */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {meetingTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-[#0f0f1a] border border-[#262466] hover:border-[#27AAE1]/50 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#27AAE1]/10 flex items-center justify-center mb-4 group-hover:bg-[#27AAE1]/20 transition-colors">
                  <type.icon className="h-6 w-6 text-[#27AAE1]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                <p className="text-[#27AAE1] font-medium mb-3">{type.duration}</p>
                <p className="text-gray-400 text-sm">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly Embed */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl bg-[#0f0f1a] border border-[#262466] overflow-hidden"
          >
            <iframe
              src="https://calendly.com/truax-marketing?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=211f66"
              width="100%"
              height="700"
              frameBorder="0"
              title="Schedule a meeting with Truax Marketing"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Alternative CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-[#262466] to-[#0a0a12] border border-[#262466]"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">Prefer to email?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              No problem. Drop us a note and we will get back to you within 24 hours.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-[#262466] hover:bg-[#262466]">
                Contact Us Instead
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
