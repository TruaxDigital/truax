import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactPageContent } from "@/components/contact-page-content";

export const metadata = {
  title: "Contact Us | Truax Marketing Solutions",
  description:
    "Drop us a note and let's find a time to talk about your marketing needs.",
};

export default function ContactPage() {
  return (
    <main className="relative">
      <Navbar />
      <ContactPageContent />
      <Footer />
    </main>
  );
}
