"use client";

import { ArrowUp } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 px-6 border-t border-[#262466]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-4">
              <img 
                src="/logo.svg" 
                alt="Truax Marketing Solutions" 
                className="h-7"
              />
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              A boutique marketing agency focused on AI implementation, 
              SEO, and web development for growing businesses.
            </p>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services/web-design-development" className="hover:text-foreground transition-colors">
                  Web Design & Development
                </Link>
              </li>
              <li>
                <Link href="/services/search-engine-optimization" className="hover:text-foreground transition-colors">
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/digital-strategy" className="hover:text-foreground transition-colors">
                  Digital Strategy
                </Link>
              </li>
              <li>
                <Link href="/services/demand-generation" className="hover:text-foreground transition-colors">
                  Demand Generation
                </Link>
              </li>
              <li>
                <Link href="/services/fractional-cmo" className="hover:text-foreground transition-colors">
                  Fractional CMO
                </Link>
              </li>
              <li>
                <Link href="/services/managed-hosting" className="hover:text-foreground transition-colors">
                  Managed Hosting
                </Link>
              </li>
              <li>
                <Link href="/ai-agents" className="hover:text-foreground transition-colors">
                  AI Sales Agents
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-medium mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/meet" className="hover:text-foreground transition-colors">
                  Book a Call
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:hello@truaxmarketing.com" 
                  className="hover:text-foreground transition-colors"
                >
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#262466]">
          <p className="text-muted-foreground text-xs mb-4 md:mb-0">
            © {new Date().getFullYear()} Truax Marketing Solutions
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-xs"
          >
            Back to top
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
