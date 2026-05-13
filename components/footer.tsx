"use client";

import { useState } from "react";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

// Footer link with hover underline effect
function FooterLink({ href, children, isExternal = false }: { href: string; children: React.ReactNode; isExternal?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const content = (
    <span 
      className={`relative inline-block text-sm transition-colors duration-300 ${isHovered ? 'text-white' : 'text-gray-400'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <span 
        className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-[#27AAE1] to-[#2B3990] origin-left transition-transform duration-300 ease-out"
        style={{ transform: isHovered ? 'scaleX(1)' : 'scaleX(0)' }}
      />
    </span>
  );
  
  if (isExternal) {
    return <a href={href}>{content}</a>;
  }
  
  return <Link href={href}>{content}</Link>;
}

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/truax-marketing-solutions",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/truaxmarketing/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/truaxmarketing/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
      </svg>
    ),
  },
  {
    name: "Google",
    href: "https://share.google/IridyvjreM1EFj1UR",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
      </svg>
    ),
  },
];

const footerLinks = {
  services: [
    { label: "Web Design & Development", href: "/services/web-design-development" },
    { label: "Search Engine Optimization", href: "/services/search-engine-optimization" },
    { label: "AI Enablement", href: "/ai-enablement" },
    { label: "Fractional CMO", href: "/services/fractional-cmo" },
    { label: "Demand Generation", href: "/services/demand-generation" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
    { label: "Book a Call", href: "/meet" },
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#27AAE1]/50 to-transparent" />
      
      <div className="py-16 px-6 bg-gradient-to-b from-[#0a0a12] to-[#080810]">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand column */}
            <div className="md:col-span-5 lg:col-span-4">
              <Link href="/" className="inline-block mb-6 group">
                <img 
                  src="/logo.svg" 
                  alt="Truax Marketing Solutions" 
                  className="h-8 transition-opacity group-hover:opacity-80"
                />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                A boutique marketing agency helping businesses grow through AI implementation, 
                SEO, and modern web development.
              </p>
              
              {/* Social links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-10 h-10 rounded-lg bg-[#0f0f1a] border border-[#262466] flex items-center justify-center text-gray-500 overflow-hidden transition-all duration-300 hover:border-[#27AAE1]/50 hover:shadow-lg hover:shadow-[#27AAE1]/20 hover:-translate-y-1"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {/* Gradient overlay on hover */}
                    <span className="absolute inset-0 bg-gradient-to-br from-[#27AAE1]/30 via-[#2B3990]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Glow effect */}
                    <span className="absolute inset-0 bg-[#27AAE1]/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Icon */}
                    <span className="relative z-10 group-hover:text-[#27AAE1] transition-colors duration-300 group-hover:scale-110 transform">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Services column */}
            <div className="md:col-span-4 lg:col-span-4">
              <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company column */}
            <div className="md:col-span-3 lg:col-span-2">
              <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact column */}
            <div className="md:col-span-12 lg:col-span-2">
              <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
                Get in Touch
              </h4>
              <div className="space-y-3 text-sm">
                <FooterLink href="mailto:hello@truaxmarketing.com" isExternal>
                  hello@truaxmarketing.com
                </FooterLink>
                <p className="text-gray-500">
                  Washington, DC
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-[#262466]/50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-xs">
                © {new Date().getFullYear()} Truax Marketing Solutions. All rights reserved.
              </p>
              
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 text-gray-500 hover:text-[#27AAE1] transition-all duration-300 text-xs hover:-translate-y-0.5"
              >
                Back to top
                <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center group-hover:bg-[#27AAE1]/10 group-hover:border-[#27AAE1] group-hover:shadow-sm group-hover:shadow-[#27AAE1]/30 transition-all duration-300">
                  <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
