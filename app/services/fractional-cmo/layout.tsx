import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractional CMO Services",
  description: "Senior marketing leadership without the full-time salary. A fractional CMO embedded in your business, with the same accountability at a fraction of the cost.",
  openGraph: {
    title: "Fractional CMO Services | Truax Marketing Solutions",
    description: "Senior marketing leadership without the full-time salary. A fractional CMO embedded in your business.",
    url: "https://truaxmarketing.com/services/fractional-cmo",
    type: "website",
  },
  alternates: {
    canonical: "https://truaxmarketing.com/services/fractional-cmo",
  },
};

export default function FractionalCmoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
