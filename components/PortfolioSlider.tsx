"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

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

export function PortfolioSlider() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Auto-scroll
  useEffect(() => {
    if (isPaused || !scrollRef.current) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        if (scrollLeft >= maxScroll - 10) {
          // Reset to beginning
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll one card width
          scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Check scroll position
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -340, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 340, behavior: "smooth" });
  };

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#27AAE1] text-sm font-medium uppercase tracking-wider mb-2"
          >
            Recent builds
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            What we ship for clients
          </motion.h2>
        </div>

        {/* Slider container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation buttons */}
          <button
            onClick={scrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#262466]/90 backdrop-blur-sm border border-[#27AAE1]/30 flex items-center justify-center text-white transition-all duration-300 ${
              canScrollLeft 
                ? "opacity-100 hover:bg-[#27AAE1]/20 hover:border-[#27AAE1]" 
                : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#262466]/90 backdrop-blur-sm border border-[#27AAE1]/30 flex items-center justify-center text-white transition-all duration-300 ${
              canScrollRight 
                ? "opacity-100 hover:bg-[#27AAE1]/20 hover:border-[#27AAE1]" 
                : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scroll container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {portfolio.map((item, index) => (
              <motion.a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group flex-shrink-0 w-[320px] snap-start"
              >
                <div className="relative rounded-xl overflow-hidden bg-[#1a1a2e] border border-[#262466] hover:border-[#27AAE1]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#27AAE1]/10">
                  {/* Screenshot */}
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={getScreenshotUrl(item.url)}
                      alt={`${item.name} website`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading={index < 4 ? "eager" : "lazy"}
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Card info */}
                  <div className="p-4">
                    <span className="inline-block px-2 py-0.5 bg-[#262466]/50 text-[#27AAE1] text-xs font-medium rounded mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-semibold text-white group-hover:text-[#27AAE1] transition-colors flex items-center gap-2">
                      {item.name}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-[#0a0a12] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-[#0a0a12] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

export default PortfolioSlider;
