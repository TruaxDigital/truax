"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import { ArrowRight, ArrowLeft, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// Portfolio data
const portfolio = [
  { name: "AI Life", category: "Insurance", url: "https://ailife.ca" },
  { name: "Get Certain", category: "Insurance", url: "https://getcertain.ca" },
  { name: "Allen Septic Service", category: "Home Services", url: "https://allensepticservice.com" },
  { name: "Downeast Plumber", category: "Plumbing", url: "https://downeastplumber.com" },
  { name: "Socastee HVAC", category: "HVAC", url: "https://socasteehvac.com" },
  { name: "Power Wash Woodbridge", category: "Pressure Washing", url: "https://powerwashwoodbridge.com" },
  { name: "Handyman Woodbridge", category: "Handyman", url: "https://handymanwoodbridge.com" },
  { name: "Marina House Cleaners", category: "Cleaning", url: "https://marinahousecleaners.com" },
  { name: "DMV Hand Wash", category: "Auto Detail", url: "https://dmvhandwash.com" },
  { name: "Manassas Handyman", category: "Handyman", url: "https://manassashandyman.com" },
  { name: "Panchito Handyman", category: "Handyman", url: "https://panchitohandyman.com" },
  { name: "1st Choice Auto", category: "Automotive", url: "https://1stchoiceauto.shop" },
  { name: "Kevin Fixes Cars", category: "Auto Repair", url: "https://kevinfixescars.com" },
  { name: "Garand Plumbers", category: "Plumbing", url: "https://garandplumbers.com" },
  { name: "Freedom Electric", category: "Electrical", url: "https://freedomelectric.company" },
  { name: "Albany Auto Repair", category: "Auto Repair", url: "https://albanyautorepair.shop" },
  { name: "Auto Repair Burlington", category: "Auto Repair", url: "https://autorepairburlington.com" },
  { name: "GTA Barbershop", category: "Barbershop", url: "https://gtabarbershop.com" },
  { name: "Heritage Translation", category: "Professional", url: "https://heritagetranslation.com" },
  { name: "Fabricio Cutz", category: "Barbershop", url: "https://fabriciocutz.com" },
  { name: "Kips Bay Laundromat", category: "Laundromat", url: "https://kipsbaylaundromat.com" },
  { name: "Hernandez Hotshot", category: "Trucking", url: "https://hernandezhotshot.com" },
  { name: "Midland Tree Service", category: "Tree Service", url: "https://midlandtreeservice.company" },
  { name: "Texas Fence", category: "Fencing", url: "https://texasfence.company" },
  { name: "Sacramento Mobile Detailer", category: "Auto Detail", url: "https://sacramentomobiledetailer.com" },
  { name: "The Gentlemen's Barber", category: "Barbershop", url: "https://thegentlemensbarber.shop" },
  { name: "Peoples Tax Chicago", category: "Tax & Accounting", url: "https://peoplestaxserviceschicago.com" },
  { name: "Bellevue Tax Pros", category: "Tax & Accounting", url: "https://bellevuetaxpros.com" },
  { name: "West Fargo CPA", category: "Tax & Accounting", url: "https://westfargocpa.com" },
  { name: "West Village Tailor", category: "Tailoring", url: "https://westvillagetailor.com" },
  { name: "East Village Tailor", category: "Tailoring", url: "https://eastvillagetailor.com" },
  { name: "Cambridge Auto", category: "Automotive", url: "https://cambridgeauto.shop" },
  { name: "Guru Accounting", category: "Tax & Accounting", url: "https://guruaccounting.company" },
  { name: "Fidelity Tax", category: "Tax & Accounting", url: "https://fidelitytax.company" },
  { name: "Western Edge Home Services", category: "Home Services", url: "https://westernedgehomeservices.com" },
  { name: "Dust Busters Houston", category: "Cleaning", url: "https://dustbustershouston.com" },
  { name: "EAPW", category: "Pressure Washing", url: "https://eapw.shop" },
  { name: "CR Contracting", category: "Contracting", url: "https://crcontracting.pro" },
  { name: "El Mouqaiss", category: "Professional", url: "https://elmouqaiss.com" },
];

// Get screenshot URL from thum.io
function getScreenshotUrl(url: string) {
  return `https://image.thum.io/get/width/1600/crop/1000/noanimate/${url}`;
}

// Get unique categories
const allCategories = ["All", ...Array.from(new Set(portfolio.map((p) => p.category)))];

// Filter categories to show main ones + Other
const mainCategories = ["All", "Insurance", "Home Services", "Auto Repair", "Tax & Accounting", "Barbershop", "Tailoring"];
const otherCategories = allCategories.filter(c => !mainCategories.includes(c) && c !== "All");

export default function PortfolioPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Filter portfolio based on active filter
  const filteredPortfolio = activeFilter === "All" 
    ? portfolio 
    : activeFilter === "Other"
    ? portfolio.filter(p => otherCategories.includes(p.category))
    : portfolio.filter(p => p.category === activeFilter);

  // Auto-rotate carousel
  useEffect(() => {
    if (isPaused || filteredPortfolio.length === 0) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredPortfolio.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, filteredPortfolio.length]);

  // Reset index when filter changes
  useEffect(() => {
    setActiveIndex(0);
  }, [activeFilter]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + filteredPortfolio.length) % filteredPortfolio.length);
  }, [filteredPortfolio.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % filteredPortfolio.length);
  }, [filteredPortfolio.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Get visible cards for coverflow
  const getVisibleCards = () => {
    const cards = [];
    const total = filteredPortfolio.length;
    
    for (let offset = -2; offset <= 2; offset++) {
      const index = (activeIndex + offset + total) % total;
      cards.push({ ...filteredPortfolio[index], offset, index });
    }
    
    return cards;
  };

  return (
    <main className="min-h-screen bg-[#0a0a12] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-gradient-to-br from-[#27AAE1]/8 via-[#2B3990]/6 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-gradient-to-tl from-[#262466]/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            Sites we&apos;ve{" "}
            <span className="relative inline-block">
              <span className="text-[#27AAE1]">built</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#27AAE1] to-[#2B3990] rounded-full" />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Real businesses, live work, screenshot proof.
          </motion.p>
        </div>
      </section>

      {/* Filter Pills */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[...mainCategories, "Other"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-[#27AAE1] text-black shadow-lg shadow-[#27AAE1]/25"
                    : "bg-[#262466]/30 text-gray-400 hover:bg-[#262466]/50 hover:text-white border border-[#262466]"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3D Coverflow Carousel */}
      <section 
        className="relative px-6 pb-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="max-w-7xl mx-auto">
          <div 
            ref={carouselRef}
            className="relative h-[360px] md:h-[500px] lg:h-[600px] flex items-center justify-center perspective-[1200px]"
            style={{ perspective: "1200px" }}
          >
            <AnimatePresence mode="popLayout">
              {filteredPortfolio.length > 0 && getVisibleCards().map((item) => {
                const isActive = item.offset === 0;
                const rotateY = item.offset * 35;
                const translateX = item.offset * 280;
                const translateZ = isActive ? 0 : -200;
                const scale = isActive ? 1 : 0.75;
                const opacity = Math.abs(item.offset) > 1 ? 0.3 : isActive ? 1 : 0.6;
                const zIndex = 10 - Math.abs(item.offset);

                return (
                  <motion.div
                    key={`${item.url}-${item.offset}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity,
                      scale,
                      rotateY: -rotateY,
                      x: translateX,
                      z: translateZ,
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute cursor-pointer"
                    style={{ 
                      zIndex,
                      transformStyle: "preserve-3d",
                    }}
                    onClick={() => {
                      if (isActive) {
                        window.open(item.url, "_blank", "noopener,noreferrer");
                      } else {
                        setActiveIndex(item.index);
                      }
                    }}
                  >
                    <div 
                      className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                        isActive 
                          ? "shadow-2xl shadow-[#27AAE1]/20 ring-2 ring-[#27AAE1]/50" 
                          : "shadow-xl"
                      }`}
                      style={{
                        width: "clamp(280px, 40vw, 480px)",
                        filter: isActive ? "none" : "saturate(0.7) brightness(0.8)",
                      }}
                    >
                      {/* Screenshot */}
                      <div className="aspect-[16/10] bg-[#1a1a2e] relative overflow-hidden">
                        <img
                          src={getScreenshotUrl(item.url)}
                          alt={`${item.name} website screenshot`}
                          className="w-full h-full object-cover object-top"
                          loading={Math.abs(item.offset) <= 1 ? "eager" : "lazy"}
                          referrerPolicy="no-referrer"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-transparent to-transparent opacity-60" />
                      </div>

                      {/* Card info */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                        <span className="inline-block px-3 py-1 bg-[#27AAE1]/20 text-[#27AAE1] text-xs font-medium rounded-full mb-2 backdrop-blur-sm border border-[#27AAE1]/30">
                          {item.category}
                        </span>
                        <h3 className="text-lg md:text-xl font-semibold text-white flex items-center gap-2">
                          {item.name}
                          {isActive && <ExternalLink className="w-4 h-4 text-[#27AAE1]" />}
                        </h3>
                      </div>

                      {/* Active glow */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-2xl ring-2 ring-[#27AAE1] shadow-[0_0_40px_rgba(39,170,225,0.3)]" />
                      )}
                    </div>

                    {/* Floor reflection for active card */}
                    {isActive && (
                      <div 
                        className="absolute top-full left-0 right-0 h-20 bg-gradient-to-b from-[#27AAE1]/10 to-transparent blur-xl opacity-50"
                        style={{ transform: "scaleY(-0.3) translateY(-20px)" }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#262466]/80 backdrop-blur-sm border border-[#27AAE1]/30 flex items-center justify-center text-white hover:bg-[#27AAE1]/20 hover:border-[#27AAE1] transition-all duration-300"
              aria-label="Previous site"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#262466]/80 backdrop-blur-sm border border-[#27AAE1]/30 flex items-center justify-center text-white hover:bg-[#27AAE1]/20 hover:border-[#27AAE1] transition-all duration-300"
              aria-label="Next site"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Counter */}
          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm">
              Site <span className="text-white font-medium">{activeIndex + 1}</span> of{" "}
              <span className="text-white font-medium">{filteredPortfolio.length}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Grid of all sites */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            All {filteredPortfolio.length} Sites
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPortfolio.map((item, index) => (
              <motion.a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group relative rounded-xl overflow-hidden bg-[#1a1a2e] border border-[#262466] hover:border-[#27AAE1]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#27AAE1]/10"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={getScreenshotUrl(item.url)}
                    alt={`${item.name} website`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block px-2 py-0.5 bg-[#262466]/50 text-[#27AAE1] text-xs font-medium rounded mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-semibold text-white group-hover:text-[#27AAE1] transition-colors flex items-center gap-2">
                    {item.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="px-6 py-20 bg-gradient-to-r from-[#262466] to-[#2B3990]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Want a site this clean?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 mb-8"
          >
            Book a 15-minute review and see what we can build for you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/meet">
              <Button 
                size="lg" 
                className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black font-semibold px-8 py-6 text-lg hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#27AAE1]/25 transition-all duration-300"
              >
                Book a Discovery Call
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
