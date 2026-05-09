"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  { href: "/services/web-design-development", label: "Web Design & Development" },
  { href: "/services/search-engine-optimization", label: "Search Engine Optimization" },
  { href: "/services/digital-strategy", label: "Digital Strategy" },
  { href: "/services/demand-generation", label: "Demand Generation" },
  { href: "/services/fractional-cmo", label: "Fractional CMO" },
  { href: "/services/managed-hosting", label: "Managed Hosting" },
];

const aiEnablementLinks = [
  { href: "/ai-enablement", label: "AI Enablement" },
  { href: "/ai-agents", label: "AI Agents" },
  { href: "/ai-agents/pricing", label: "Pricing" },
];

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAiEnablementOpen, setIsAiEnablementOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileAiEnablementOpen, setIsMobileAiEnablementOpen] = useState(false);
  const { scrollY } = useScroll();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const aiEnablementDropdownRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (aiEnablementDropdownRef.current && !aiEnablementDropdownRef.current.contains(event.target as Node)) {
        setIsAiEnablementOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#0a0a12]/95 backdrop-blur-sm border-b border-[#262466] py-4" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="/logo.svg" 
                alt="Truax Marketing Solutions" 
                className="h-8 md:h-10"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Services Dropdown */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <motion.button
                className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors relative group cursor-pointer"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 bg-[#27AAE1]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              {/* Dropdown Menu */}
              <motion.div
                initial={false}
                animate={{
                  opacity: isServicesOpen ? 1 : 0,
                  y: isServicesOpen ? 0 : -10,
                  pointerEvents: isServicesOpen ? "auto" : "none",
                }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 pt-2"
              >
                <div className="w-64 rounded-xl bg-[#0f0f1a]/95 backdrop-blur-md border border-[#262466] shadow-2xl shadow-black/50 overflow-hidden">
                  <div className="p-2">
                    <Link
                      href="/services"
                      className="block px-4 py-2.5 text-sm font-medium text-[#27AAE1] hover:bg-[#27AAE1]/10 rounded-lg transition-all duration-200 hover:translate-x-1"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      All Services
                    </Link>
                    <div className="h-px bg-[#262466]/50 my-2" />
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-[#262466]/30 rounded-lg transition-all duration-200 hover:translate-x-1"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* AI Enablement Dropdown */}
            <div 
              ref={aiEnablementDropdownRef}
              className="relative"
              onMouseEnter={() => setIsAiEnablementOpen(true)}
              onMouseLeave={() => setIsAiEnablementOpen(false)}
            >
              <motion.button
                className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors relative group cursor-pointer"
                onClick={() => setIsAiEnablementOpen(!isAiEnablementOpen)}
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                AI Enablement
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isAiEnablementOpen ? "rotate-180" : ""}`} />
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 bg-[#27AAE1]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              {/* AI Enablement Dropdown Menu */}
              <motion.div
                initial={false}
                animate={{
                  opacity: isAiEnablementOpen ? 1 : 0,
                  y: isAiEnablementOpen ? 0 : -10,
                  pointerEvents: isAiEnablementOpen ? "auto" : "none",
                }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 pt-2"
              >
                <div className="w-48 rounded-xl bg-[#0f0f1a]/95 backdrop-blur-md border border-[#262466] shadow-2xl shadow-black/50 overflow-hidden">
                  <div className="p-2">
                    {aiEnablementLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-[#262466]/30 rounded-lg transition-all duration-200 hover:translate-x-1"
                        onClick={() => setIsAiEnablementOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {navLinks.map((link, index) => (
              <Link key={link.href} href={link.href}>
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -1 }}
                  transition={{ delay: index * 0.1, duration: 0.2 }}
                  className="text-gray-300 hover:text-white transition-colors relative group cursor-pointer inline-block"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#27AAE1] group-hover:w-full transition-all duration-300 ease-out" />
                </motion.span>
              </Link>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/meet">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button className="bg-[#27AAE1] hover:bg-[#1d9ad1] text-black font-medium shadow-lg shadow-[#27AAE1]/20 hover:shadow-[#27AAE1]/40 transition-shadow duration-300">
                    Book a Call
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        className="fixed top-20 left-0 right-0 z-40 bg-[#0a0a12] border-b border-[#262466] overflow-hidden md:hidden"
      >
        <nav className="flex flex-col p-6 gap-2">
          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex items-center justify-between w-full text-lg text-gray-300 hover:text-white transition-colors py-2"
            >
              Services
              <ChevronDown className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            <motion.div
              initial={false}
              animate={{
                height: isMobileServicesOpen ? "auto" : 0,
                opacity: isMobileServicesOpen ? 1 : 0,
              }}
              className="overflow-hidden"
            >
              <div className="pl-4 py-2 space-y-2">
                <Link
                  href="/services"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-[#27AAE1] font-medium py-1"
                >
                  All Services
                </Link>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-gray-400 hover:text-white transition-colors py-1"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mobile AI Enablement Accordion */}
          <div>
            <button
              onClick={() => setIsMobileAiEnablementOpen(!isMobileAiEnablementOpen)}
              className="flex items-center justify-between w-full text-lg text-gray-300 hover:text-white transition-colors py-2"
            >
              AI Enablement
              <ChevronDown className={`w-5 h-5 transition-transform ${isMobileAiEnablementOpen ? "rotate-180" : ""}`} />
            </button>
            <motion.div
              initial={false}
              animate={{
                height: isMobileAiEnablementOpen ? "auto" : 0,
                opacity: isMobileAiEnablementOpen ? 1 : 0,
              }}
              className="overflow-hidden"
            >
              <div className="pl-4 py-2 space-y-2">
                {aiEnablementLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-gray-400 hover:text-white transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg text-gray-300 hover:text-white transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/meet" onClick={() => setIsMenuOpen(false)}>
            <motion.div
              whileTap={{ scale: 0.98 }}
            >
              <Button className="mt-4 w-full bg-[#27AAE1] hover:bg-[#1d9ad1] text-black font-medium shadow-lg shadow-[#27AAE1]/20">
                Book a Call
              </Button>
            </motion.div>
          </Link>
        </nav>
      </motion.div>
    </>
  );
}
