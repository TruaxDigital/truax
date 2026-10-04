import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design and Development",
  description: "B2B websites built to drive pipeline: fast, search-optimized, CRM-connected, and ready to convert the day they ship.",
  openGraph: {
    title: "Web Design and Development | Truax Marketing Solutions",
    description: "B2B websites built to drive pipeline: fast, search-optimized, and CRM-connected.",
    url: "https://truaxmarketing.com/services/web-design-development",
    type: "website",
  },
  alternates: {
    canonical: "https://truaxmarketing.com/services/web-design-development",
  },
};

export default function WebDesignDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
