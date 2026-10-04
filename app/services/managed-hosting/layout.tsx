import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Managed Website Hosting",
  description: "Managed hosting that keeps your website fast, secure, and search-ready while your team focuses on the work that grows pipeline.",
  openGraph: {
    title: "Managed Website Hosting | Truax Marketing Solutions",
    description: "Managed hosting that keeps your website fast, secure, and search-ready.",
    url: "https://truaxmarketing.com/services/managed-hosting",
    type: "website",
  },
  alternates: {
    canonical: "https://truaxmarketing.com/services/managed-hosting",
  },
};

export default function ManagedHostingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
