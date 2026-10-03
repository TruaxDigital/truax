import { Metadata } from "next";

// Outreach landing page personalised by query string. Keep it out of search results.
export const metadata: Metadata = {
  title: "Keep Your Website",
  description: "Keep the website Truax Marketing built for your business running.",
  robots: { index: false, follow: false },
};

export default function KeepYourWebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
