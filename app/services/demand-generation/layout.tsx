import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demand Generation Services",
  description: "Demand generation that builds pipeline. Paid, ABM, content, and lifecycle run as one integrated system, with spend attributed to the deals it influenced.",
  openGraph: {
    title: "Demand Generation Services | Truax Marketing Solutions",
    description: "Demand generation that builds pipeline. Paid, ABM, content, and lifecycle run as one integrated system.",
    url: "https://truaxmarketing.com/services/demand-generation",
    type: "website",
  },
  alternates: {
    canonical: "https://truaxmarketing.com/services/demand-generation",
  },
};

export default function DemandGenerationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
