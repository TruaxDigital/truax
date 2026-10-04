import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Portfolio",
  description: "Websites built by Truax Marketing for real businesses, with live work and screenshots.",
  openGraph: {
    title: "Website Portfolio | Truax Marketing Solutions",
    description: "Websites built by Truax Marketing for real businesses.",
    url: "https://truaxmarketing.com/portfolio",
    type: "website",
  },
  alternates: {
    canonical: "https://truaxmarketing.com/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
