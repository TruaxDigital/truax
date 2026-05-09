import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center px-6 py-32">
        <div className="text-center max-w-xl">
          {/* 404 Graphic */}
          <div className="relative mb-8">
            <div className="text-[150px] md:text-[200px] font-bold text-[#262466]/30 leading-none select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-[#27AAE1]/10 flex items-center justify-center">
                <Search className="w-10 h-10 text-[#27AAE1]" />
              </div>
            </div>
          </div>

          {/* Message */}
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
            Page not found
          </h1>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            The page you are looking for does not exist or has been moved. 
            Let us help you find what you need.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black font-medium w-full sm:w-auto">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-[#262466] hover:bg-[#262466]/20 w-full sm:w-auto">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-[#262466]">
            <p className="text-sm text-gray-500 mb-4">Popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/services" className="text-[#27AAE1] hover:underline">
                Services
              </Link>
              <Link href="/ai-enablement" className="text-[#27AAE1] hover:underline">
                AI Enablement
              </Link>
              <Link href="/blog" className="text-[#27AAE1] hover:underline">
                Blog
              </Link>
              <Link href="/about" className="text-[#27AAE1] hover:underline">
                About
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
