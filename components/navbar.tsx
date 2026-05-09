"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
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
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

// Animated underline component for nav links
function NavLink({ href, children, delay = 0 }: { href: string; children: React.ReactNode; delay?: number }) {
  return (
    <Link href={href}>
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.3 }}
        className="relative text-gray-300 hover:text-white transition-colors cursor-pointer inline-block group"
      >
        {children}
        {/* Animated underline */}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#27AAE1] to-[#2B3990] group-hover:w-full transition-all duration-300 ease-out" />
        {/* Subtle glow on hover */}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#27AAE1] blur-sm group-hover:w-full transition-all duration-300 ease-out opacity-50" />
      </motion.span>
    </Link>
  );
}

// Dropdown button with animated underline
function DropdownButton({ 
  label, 
  isOpen, 
  onClick 
}: { 
  label: string; 
  isOpen: boolean; 
  onClick: () => void;
}) {
  return (
    <motion.button
      className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors relative group cursor-pointer"
      onClick={onClick}
      whileHover={{ y: -1 }}
      transition={{ duration: 0.2 }}
    >
      {label}
      <motion.span
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <ChevronDown className="w-4 h-4" />
      </motion.span>
      {/* Animated underline */}
      <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#27AAE1] to-[#2B3990] transition-all duration-300 ease-out ${isOpen ? 'w-full' : 'w-0 group-hover:w-full'}`} />
      <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#27AAE1] blur-sm transition-all duration-300 ease-out opacity-50 ${isOpen ? 'w-full' : 'w-0 group-hover:w-full'}`} />
    </motion.button>
  );
}

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
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-[#0a0a12]/90 backdrop-blur-xl border-b border-[#262466]/50 py-3 shadow-lg shadow-black/20" 
            : "bg-transparent py-5"
        }`}
      >
        {/* Subtle gradient line at top when scrolled */}
        <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#27AAE1]/30 to-transparent transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
        
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center relative group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img 
                src="/logo.svg" 
                alt="Truax Marketing Solutions" 
                className="h-8 md:h-10 transition-all duration-300 group-hover:brightness-110"
              />
              {/* Subtle glow behind logo on hover */}
              <div className="absolute inset-0 bg-[#27AAE1]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
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
              <DropdownButton 
                label="Services" 
                isOpen={isServicesOpen} 
                onClick={() => setIsServicesOpen(!isServicesOpen)} 
              />
              
              {/* Dropdown Menu */}
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
                    className="absolute top-full left-0 pt-3"
                  >
                    <div className="w-72 rounded-2xl bg-[#0f0f1a]/95 backdrop-blur-xl border border-[#262466]/80 shadow-2xl shadow-black/50 overflow-hidden">
                      {/* Gradient accent at top */}
                      <div className="h-px bg-gradient-to-r from-transparent via-[#27AAE1]/50 to-transparent" />
                      
                      <div className="p-3">
                        <Link
                          href="/services"
                          className="group flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#27AAE1] hover:bg-[#27AAE1]/10 rounded-xl transition-all duration-200"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <span className="w-8 h-8 rounded-lg bg-[#27AAE1]/10 flex items-center justify-center group-hover:bg-[#27AAE1]/20 transition-colors">
                            <Sparkles className="w-4 h-4" />
                          </span>
                          <span className="group-hover:translate-x-0.5 transition-transform">All Services</span>
                        </Link>
                        
                        <div className="h-px bg-[#262466]/50 my-2 mx-4" />
                        
                        {services.map((service, index) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="group flex items-center px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-[#262466]/30 rounded-xl transition-all duration-200"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#27AAE1]/50 mr-3 group-hover:bg-[#27AAE1] group-hover:shadow-sm group-hover:shadow-[#27AAE1]/50 transition-all" />
                            <span className="group-hover:translate-x-0.5 transition-transform">{service.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* AI Enablement Dropdown */}
            <div 
              ref={aiEnablementDropdownRef}
              className="relative"
              onMouseEnter={() => setIsAiEnablementOpen(true)}
              onMouseLeave={() => setIsAiEnablementOpen(false)}
            >
              <DropdownButton 
                label="AI Enablement" 
                isOpen={isAiEnablementOpen} 
                onClick={() => setIsAiEnablementOpen(!isAiEnablementOpen)} 
              />
              
              {/* AI Enablement Dropdown Menu */}
              <AnimatePresence>
                {isAiEnablementOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
                    className="absolute top-full left-0 pt-3"
                  >
                    <div className="w-56 rounded-2xl bg-[#0f0f1a]/95 backdrop-blur-xl border border-[#262466]/80 shadow-2xl shadow-black/50 overflow-hidden">
                      {/* Gradient accent at top */}
                      <div className="h-px bg-gradient-to-r from-transparent via-[#27AAE1]/50 to-transparent" />
                      
                      <div className="p-3">
                        {aiEnablementLinks.map((link, index) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="group flex items-center px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-[#262466]/30 rounded-xl transition-all duration-200"
                            onClick={() => setIsAiEnablementOpen(false)}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#27AAE1]/50 mr-3 group-hover:bg-[#27AAE1] group-hover:shadow-sm group-hover:shadow-[#27AAE1]/50 transition-all" />
                            <span className="group-hover:translate-x-0.5 transition-transform">{link.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link, index) => (
              <NavLink key={link.href} href={link.href} delay={0.1 + index * 0.05}>
                {link.label}
              </NavLink>
            ))}
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <Link href="/meet">
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#27AAE1] to-[#2B3990] rounded-lg blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                  <Button className="relative bg-[#27AAE1] hover:bg-[#1d9ad1] text-black font-semibold px-6 shadow-lg">
                    Book a Call
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-[#262466]/30 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0a0a12]/98 backdrop-blur-xl border-b border-[#262466] overflow-hidden md:hidden"
          >
            <nav className="flex flex-col p-6 gap-1">
              {/* Mobile Services Accordion */}
              <div className="border-b border-[#262466]/30 pb-2">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full text-lg text-gray-300 hover:text-white transition-colors py-3"
                >
                  <span>Services</span>
                  <motion.span
                    animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 py-2 space-y-1">
                        <Link
                          href="/services"
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center gap-2 text-[#27AAE1] font-medium py-2"
                        >
                          <Sparkles className="w-4 h-4" />
                          All Services
                        </Link>
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors py-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#27AAE1]/50" />
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile AI Enablement Accordion */}
              <div className="border-b border-[#262466]/30 pb-2">
                <button
                  onClick={() => setIsMobileAiEnablementOpen(!isMobileAiEnablementOpen)}
                  className="flex items-center justify-between w-full text-lg text-gray-300 hover:text-white transition-colors py-3"
                >
                  <span>AI Enablement</span>
                  <motion.span
                    animate={{ rotate: isMobileAiEnablementOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isMobileAiEnablementOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 py-2 space-y-1">
                        {aiEnablementLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors py-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#27AAE1]/50" />
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg text-gray-300 hover:text-white transition-colors py-3 border-b border-[#262466]/30"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="pt-4"
              >
                <Link href="/meet" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-[#27AAE1] hover:bg-[#1d9ad1] text-black font-semibold shadow-lg shadow-[#27AAE1]/20">
                    Book a Call
                  </Button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
