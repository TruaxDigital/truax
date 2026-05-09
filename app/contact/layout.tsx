import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Truax Marketing Solutions. Request a free consultation, ask questions, or start your next marketing project.",
  openGraph: {
    title: "Contact Us | Truax Marketing Solutions",
    description: "Get in touch with Truax Marketing Solutions. Request a free consultation.",
    url: "https://truaxmarketing.com/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://truaxmarketing.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
