import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet Aaron Truax and the team behind Truax Marketing Solutions. 20+ years of marketing leadership experience with a human-first approach to digital marketing.",
  openGraph: {
    title: "About Us | Truax Marketing Solutions",
    description: "Meet Aaron Truax and the team behind Truax Marketing Solutions. 20+ years of marketing leadership experience.",
    url: "https://truaxmarketing.com/about",
    type: "website",
  },
  alternates: {
    canonical: "https://truaxmarketing.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
