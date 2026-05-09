import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description: "Marketing insights, SEO tips, digital strategy guides, and industry trends from the Truax Marketing team.",
  openGraph: {
    title: "Insights | Truax Marketing Solutions",
    description: "Marketing insights, SEO tips, digital strategy guides, and industry trends.",
    url: "https://truaxmarketing.com/insights",
    type: "website",
  },
  alternates: {
    canonical: "https://truaxmarketing.com/insights",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
