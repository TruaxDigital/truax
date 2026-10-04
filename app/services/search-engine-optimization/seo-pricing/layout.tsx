import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Pricing and Plans",
  description: "SEO pricing from Truax Marketing. A complete SEO solution, month to month, with no contracts.",
  openGraph: {
    title: "SEO Pricing and Plans | Truax Marketing Solutions",
    description: "SEO pricing from Truax Marketing. Month to month, with no contracts.",
    url: "https://truaxmarketing.com/services/search-engine-optimization/seo-pricing",
    type: "website",
  },
  alternates: {
    canonical: "https://truaxmarketing.com/services/search-engine-optimization/seo-pricing",
  },
};

export default function SeoPricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
