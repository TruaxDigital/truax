import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Services",
  description: "Explore our full suite of digital marketing services including SEO, web development, AI agents, fractional CMO, demand generation, and managed hosting.",
  openGraph: {
    title: "Marketing Services | Truax Marketing Solutions",
    description: "Explore our full suite of digital marketing services including SEO, web development, AI agents, and more.",
    url: "https://truaxmarketing.com/services",
    type: "website",
  },
  alternates: {
    canonical: "https://truaxmarketing.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
