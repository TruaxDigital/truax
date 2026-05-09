import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Engine Optimization (SEO)",
  description: "Expert SEO services including technical audits, content strategy, keyword research, and local SEO. Improve your search rankings and drive organic traffic.",
  keywords: ["SEO services", "search engine optimization", "technical SEO", "local SEO", "keyword research", "content strategy"],
  openGraph: {
    title: "Search Engine Optimization (SEO) | Truax Marketing Solutions",
    description: "Expert SEO services including technical audits, content strategy, and local SEO. Improve your search rankings.",
    url: "https://truaxmarketing.com/services/search-engine-optimization",
    type: "website",
  },
  alternates: {
    canonical: "https://truaxmarketing.com/services/search-engine-optimization",
  },
};

export default function SEOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
