import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutPageContent } from "@/components/about-page-content";

export const metadata = {
  title: "Meet The Team | Truax Marketing Solutions",
  description:
    "We help businesses increase their online visibility and reach to a wider audience through various digital channels.",
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
