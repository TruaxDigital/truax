import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Strategy",
  description: "Digital strategy that ships as a working system: CRM, MarTech, attribution, content, and AI workflows wired together to generate, route, and close pipeline.",
  openGraph: {
    title: "Digital Marketing Strategy | Truax Marketing Solutions",
    description: "Digital strategy that ships as a working system: CRM, MarTech, attribution, content, and AI workflows.",
    url: "https://truaxmarketing.com/services/digital-strategy",
    type: "website",
  },
  alternates: {
    canonical: "https://truaxmarketing.com/services/digital-strategy",
  },
};

export default function DigitalStrategyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
