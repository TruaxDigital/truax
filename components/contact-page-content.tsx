"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { track } from "@vercel/analytics";
import { Mail, MapPin, Calendar, Send, ArrowRight, CheckCircle, AlertCircle, Loader2, ChevronDown } from "lucide-react";
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

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@truaxmarketing.com",
    href: "mailto:hello@truaxmarketing.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Charlotte, NC",
    href: null,
  },
  {
    icon: Calendar,
    title: "Book a Call",
    value: "Schedule a meeting",
    href: "/meet",
  },
];

export function ContactPageContent() {
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
        body: JSON.stringify({ ...formState, source: "contact-page" }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      track("Form Submit", { form: "contact", location: "contact-page", service: formState.service || "unspecified" });
      setFormState({ name: "", email: "", company: "", service: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message");
    }
  };

  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-[#27AAE1] font-medium mb-4 tracking-wide">Contact</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight leading-[1.1]">
              Let&apos;s talk about{" "}
              <span className="text-[#27AAE1]">your project</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Ready to grow your business? Drop us a line and we will get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {method.href ? (
                  <Link href={method.href} className="block">
                    <div className="p-6 rounded-xl border border-[#262466] bg-[#0a0a12] hover:border-[#27AAE1]/50 transition-colors group">
                      <div className="w-12 h-12 rounded-lg bg-[#262466] flex items-center justify-center mb-4 group-hover:bg-[#27AAE1]/20 transition-colors">
                        <method.icon className="w-5 h-5 text-[#27AAE1]" />
                      </div>
                      <p className="text-sm text-gray-500 mb-1">{method.title}</p>
                      <p className="font-medium group-hover:text-[#27AAE1] transition-colors">{method.value}</p>
                    </div>
                  </Link>
                ) : (
                  <div className="p-6 rounded-xl border border-[#262466] bg-[#0a0a12]">
                    <div className="w-12 h-12 rounded-lg bg-[#262466] flex items-center justify-center mb-4">
                      <method.icon className="w-5 h-5 text-[#27AAE1]" />
                    </div>
                    <p className="text-sm text-gray-500 mb-1">{method.title}</p>
                    <p className="font-medium">{method.value}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="bg-[#0a0a12] border-[#262466] focus:border-[#27AAE1] h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="bg-[#0a0a12] border-[#262466] focus:border-[#27AAE1] h-12"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Company</label>
                    <Input
                      type="text"
                      placeholder="Your company"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="bg-[#0a0a12] border-[#262466] focus:border-[#27AAE1] h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      What can we help with? <span className="text-[#27AAE1]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full h-12 px-4 pr-10 rounded-lg bg-[#0a0a12] border border-[#262466] focus:border-[#27AAE1] focus:outline-none focus:ring-2 focus:ring-[#27AAE1]/20 transition-all text-white appearance-none cursor-pointer"
                      >
                        {serviceOptions.map((option) => (
                          <option 
                            key={option.value} 
                            value={option.value}
                            className="bg-[#0a0a12]"
                          >
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#0a0a12] border border-[#262466] focus:border-[#27AAE1] focus:outline-none focus:ring-2 focus:ring-[#27AAE1]/20 transition-all resize-none text-white placeholder:text-gray-500"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={status === "loading"}
                  className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black font-medium w-full md:w-auto disabled:opacity-50"
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

            {/* Quick Book CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center"
            >
              <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[#262466] to-[#0a0a12] border border-[#262466] w-full">
                <div className="w-16 h-16 rounded-xl bg-[#27AAE1]/20 flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-[#27AAE1]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Prefer to talk live?</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Skip the form and book a 30-minute discovery call directly on our calendar. 
                  We will discuss your goals and see if we are a good fit.
                </p>
                <Link href="/meet">
                  <Button size="lg" className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black font-medium">
                    Book a Call <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
