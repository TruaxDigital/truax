"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Target, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const expertise = [
  {
    icon: Zap,
    title: "AI Implementation",
    description: "Integrating AI tools and automation to streamline your marketing operations.",
  },
  {
    icon: Target,
    title: "CRM & Analytics",
    description: "Building data-driven systems that track, measure, and optimize performance.",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Developing comprehensive plans that drive sustainable business growth.",
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Training and empowering your team to execute marketing at a high level.",
  },
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "150+", label: "Projects Delivered" },
  { value: "2.4x", label: "Average ROI" },
  { value: "98%", label: "Client Retention" },
];

export function AboutPageContent() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 mb-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#27AAE1]/10 via-[#2B3990]/5 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-[#27AAE1] font-medium mb-4 tracking-wide">About Us</p>
            <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight leading-[1.1]">
              Marketing with heart,
              <br />
              <span className="text-[#27AAE1]">results that matter</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              We help businesses increase their online visibility and reach wider audiences 
              through strategic digital channels. No fluff, just results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="relative w-full max-w-[320px] mx-auto lg:mx-0">
                <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden border border-[#262466] bg-[#0f0f1a]">
                  <Image
                    src="/images/aaron-truax.webp"
                    alt="Aaron Truax"
                    width={320}
                    height={400}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 p-4 rounded-xl bg-[#0f0f1a] border border-[#262466] shadow-lg">
                  <p className="text-2xl font-bold text-[#27AAE1] font-mono">20+</p>
                  <p className="text-xs text-gray-400">Years in marketing</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
                Meet Aaron Truax
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed mb-8">
                <p>
                  With over two decades of experience in digital marketing, Aaron founded Truax Marketing 
                  Solutions to bring enterprise-level marketing strategies to growing businesses.
                </p>
                <p>
                  His approach combines data-driven decision making with creative problem solving, 
                  helping clients cut through the noise and connect with their ideal customers.
                </p>
                <p>
                  Aaron specializes in AI implementation, CRM integrations, and building marketing 
                  systems that scale with your business.
                </p>
              </div>
              <Link href="/meet">
                <Button className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black font-medium">
                  Schedule a Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
              Areas of Expertise
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Core competencies built over 20 years of hands-on marketing experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-[#0f0f1a] border border-[#262466] hover:border-[#27AAE1]/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#27AAE1]/10 flex items-center justify-center mb-6 group-hover:bg-[#27AAE1]/20 transition-colors">
                  <item.icon className="w-6 h-6 text-[#27AAE1]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-[#2B3990]/20 to-[#27AAE1]/10 border border-[#262466]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl md:text-5xl font-bold text-[#27AAE1] font-mono mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
              Ready to work together?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Book a free consultation and discover how we can help grow your business.
            </p>
            <Link href="/meet">
              <Button size="lg" className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black font-medium px-8">
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
