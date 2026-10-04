import { Metadata } from "next";

// Outreach landing page personalised by query string. Keep it out of search results.
export const metadata: Metadata = {
  title: "Your New Website",
  description: "The story behind the website Truax Marketing built for your business.",
  robots: { index: false, follow: false },
};

export default function YourNewWebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
