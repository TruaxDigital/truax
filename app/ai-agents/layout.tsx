import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Sales Agents for Small Businesses",
  description: "Automated lead qualification and outreach with AI-powered sales agents. Book more meetings on autopilot with our B2B contact database and multi-channel campaigns.",
  keywords: ["AI sales agents", "automated outreach", "B2B lead generation", "sales automation", "AI marketing"],
  openGraph: {
    title: "AI Sales Agents for Small Businesses | Truax Marketing",
    description: "Automated lead qualification and outreach with AI-powered sales agents. Book more meetings on autopilot.",
    url: "https://truaxmarketing.com/ai-agents",
    type: "website",
  },
  alternates: {
    canonical: "https://truaxmarketing.com/ai-agents",
  },
};

export default function AIAgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
