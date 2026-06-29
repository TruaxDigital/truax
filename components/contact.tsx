"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { track } from "@vercel/analytics";
import { ArrowRight, Mail, MapPin, Send, ChevronDown, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

type FormStatus = "idle" | "loading" | "success" | "error";

const serviceOptions = [
  { value: "", label: "Select a service..." },
  { value: "ai-enablement", label: "AI Enablement" },
  { value: "seo", label: "SEO / Search Marketing" },
  { value: "web-development", label: "Web Development" },
  { value: "fractional-cmo", label: "Fractional CMO" },
  { value: "content-marketing", label: "Content Marketing" },
  { value: "social-media", label: "Social Media" },
  { value: "crm-automation", label: "CRM & Automation" },
  { value: "other", label: "Something else" },
];

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      track("Form Submit", { form: "contact", location: "contact-section", service: formState.service || "unspecified" });
      setFormState({ name: "", email: "", company: "", service: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message");
    }
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
                  <label className="block text-sm font-medium mb-2">Name <span className="text-[#27AAE1]">*</span></label>
                  <Input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="bg-[#0a0a12] border-[#262466] h-12 focus:border-[#27AAE1]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email <span className="text-[#27AAE1]">*</span></label>
                  <Input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="bg-[#0a0a12] border-[#262466] h-12 focus:border-[#27AAE1]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input
                    type="text"
                    placeholder="Your company"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="bg-[#0a0a12] border-[#262466] h-12 focus:border-[#27AAE1]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">What can we help with? <span className="text-[#27AAE1]">*</span></label>
                  <div className="relative">
                    <select
                      required
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full h-12 px-4 pr-10 rounded-lg bg-[#0a0a12] border border-[#262466] focus:border-[#27AAE1] focus:outline-none focus:ring-1 focus:ring-[#27AAE1] transition-all text-white appearance-none cursor-pointer"
                    >
                      {serviceOptions.map((option) => (
                        <option key={option.value} value={option.value} className="bg-[#0a0a12]">
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tell us more <span className="text-[#27AAE1]">*</span></label>
                <textarea
                  required
                  placeholder="Tell us about your project, goals, or challenges..."
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0a12] border border-[#262466] focus:border-[#27AAE1] focus:outline-none focus:ring-1 focus:ring-[#27AAE1] transition-all resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                disabled={status === "loading"}
                className="w-full h-14 text-base font-medium group bg-[#27AAE1] hover:bg-[#27AAE1]/90 disabled:opacity-50"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              {/* Success Message */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400"
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <p>Thanks for reaching out! We will get back to you within 24 hours.</p>
                </motion.div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400"
                >
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <p>{errorMessage}</p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
