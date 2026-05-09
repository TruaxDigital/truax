import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Marketing insights, SEO tips, digital strategy guides, and industry trends from the Truax Marketing team.",
  openGraph: {
    title: "Blog | Truax Marketing Solutions",
    description: "Marketing insights, SEO tips, digital strategy guides, and industry trends.",
    url: "https://truaxmarketing.com/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://truaxmarketing.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
