import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Enablement for Marketing Teams",
  description: "Truax Marketing builds AI systems inside your marketing, CRM, and content stack. Real governance, real automation, real revenue impact.",
  keywords: ["AI enablement", "marketing automation", "AI governance", "CRM automation", "content production", "martech"],
  openGraph: {
    title: "AI Enablement for Marketing Teams | Truax Marketing",
    description: "Truax Marketing builds AI systems inside your marketing, CRM, and content stack. Real governance, real automation, real revenue impact.",
    type: "website",
    url: "https://truaxmarketing.com/ai-enablement",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Enablement for Marketing Teams | Truax Marketing",
    description: "Truax Marketing builds AI systems inside your marketing, CRM, and content stack. Real governance, real automation, real revenue impact.",
  },
  alternates: {
    canonical: "https://truaxmarketing.com/ai-enablement",
  },
};

export default function AIEnablementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
