import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ServicesPageContent } from "@/components/services-page-content";

export const metadata = {
  title: "Services | Truax Marketing Solutions",
  description:
    "We are a digital marketing agency dedicated to helping businesses thrive in the ever-evolving online landscape.",
};

export default function ServicesPage() {
  return (
    <main className="relative">
      <Navbar />
      <ServicesPageContent />
      <Footer />
    </main>
  );
}
