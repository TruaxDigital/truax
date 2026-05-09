import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { JsonLd, createBreadcrumbSchema } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Truax Marketing Solutions | Digital Marketing with Heart",
  description: "A boutique digital marketing agency specializing in AI implementation, SEO, web development, and strategic marketing. 20+ years of experience helping businesses grow.",
  alternates: {
    canonical: "https://truaxmarketing.com",
  },
};

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://truaxmarketing.com/#webpage",
  url: "https://truaxmarketing.com",
  name: "Truax Marketing Solutions | Digital Marketing with Heart",
  description: "A boutique digital marketing agency specializing in AI implementation, SEO, web development, and strategic marketing.",
  isPartOf: {
    "@id": "https://truaxmarketing.com/#website",
  },
  about: {
    "@id": "https://truaxmarketing.com/#organization",
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://truaxmarketing.com/og-image.jpg",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={homePageSchema} />
      <JsonLd data={createBreadcrumbSchema([{ name: "Home", url: "/" }])} />
      <main className="relative">
        <Navbar />
        <Hero />
        <section id="services">
          <Features />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="work">
          <Services />
        </section>
        <Testimonials />
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </>
  );
}
