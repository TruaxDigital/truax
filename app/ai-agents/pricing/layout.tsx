import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Sales Agents Pricing",
  description: "Pricing for the Truax Marketing AI prospecting platform. Find, contact, and close leads with AI sales agents. Book a free demo.",
  openGraph: {
    title: "AI Sales Agents Pricing | Truax Marketing Solutions",
    description: "Pricing for the Truax Marketing AI prospecting platform. Book a free demo.",
    url: "https://truaxmarketing.com/ai-agents/pricing",
    type: "website",
  },
  alternates: {
    canonical: "https://truaxmarketing.com/ai-agents/pricing",
  },
};

export default function AiAgentsPricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
