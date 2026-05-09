"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Brand gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(38, 36, 102, 0.1) 50%, transparent 100%)",
        }}
      />
      
      {/* Decorative beam */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-20">
        <div 
          className="absolute inset-0 rounded-full blur-[100px]"
          style={{
            background: "radial-gradient(circle, #27AAE1 0%, #2B3990 50%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-[#27AAE1] font-medium mb-4">Start a Conversation</p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-display">
            Let&apos;s talk about your goals
          </h2>
          <p className="text-xl text-muted-foreground">
            Looking for a marketing partner who responds in hours, not days? Drop us a note or book a call.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left side - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact cards */}
            <div className="p-6 rounded-xl border border-[#262466] bg-[#12121f]/80">
              <Mail className="w-6 h-6 text-[#27AAE1] mb-4" />
              <p className="text-sm text-muted-foreground mb-1">Email us</p>
              <a href="mailto:hello@truaxmarketing.com" className="text-lg font-medium hover:text-[#27AAE1] transition-colors">
                hello@truaxmarketing.com
              </a>
            </div>

            <div className="p-6 rounded-xl border border-[#262466] bg-[#12121f]/80">
              <MapPin className="w-6 h-6 text-[#27AAE1] mb-4" />
              <p className="text-sm text-muted-foreground mb-1">Location</p>
              <p className="text-lg font-medium">Remote-first, US-based</p>
            </div>

            <div 
              className="p-6 rounded-xl border border-[#27AAE1]/50 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(43, 57, 144, 0.2) 0%, rgba(39, 170, 225, 0.1) 100%)",
              }}
            >
              <p className="font-medium mb-2">Prefer to talk live?</p>
              <p className="text-sm text-muted-foreground mb-4">
                Book a free 30-minute discovery call.
              </p>
              <Link href="/meet">
                <Button className="w-full group bg-[#27AAE1] hover:bg-[#27AAE1]/90">
                  Book a Call
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-xl border border-[#262466] bg-[#12121f]/80 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="bg-[#0a0a12] border-[#262466] h-12 focus:border-[#27AAE1]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="you@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="bg-[#0a0a12] border-[#262466] h-12 focus:border-[#27AAE1]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">How can we help?</label>
                <textarea
                  placeholder="Tell us about your project, goals, or challenges..."
                  rows={6}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0a12] border border-[#262466] focus:border-[#27AAE1] focus:outline-none focus:ring-1 focus:ring-[#27AAE1] transition-all resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full h-14 text-base font-medium group bg-[#27AAE1] hover:bg-[#27AAE1]/90">
                <Send className="mr-2 h-4 w-4" />
                Send Message
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
