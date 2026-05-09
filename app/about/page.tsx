import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutPageContent } from "@/components/about-page-content";

export const metadata = {
  title: "About Truax Marketing | Operator-Led B2B Marketing & AI",
  description:
    "Truax Marketing is led by Aaron Truax, a four-time active CMO with 20+ years in B2B marketing. HubSpot Solutions Partner. Built for revenue, not slides.",
  keywords: "Aaron Truax fractional CMO, Truax Marketing Solutions, B2B fractional CMO, AI marketing operator, HubSpot Solutions Partner, mid-market marketing leader",
};

export default function AboutPage() {
  return (
    <main className="relative">
      <Navbar />
      <AboutPageContent />
      <Footer />
    </main>
  );
}
