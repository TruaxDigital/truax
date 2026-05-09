import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Meeting",
  description: "Schedule a free consultation with Truax Marketing Solutions. Book a discovery call, strategy session, or quick check-in.",
  openGraph: {
    title: "Book a Meeting | Truax Marketing Solutions",
    description: "Schedule a free consultation with Truax Marketing Solutions.",
    url: "https://truaxmarketing.com/meet",
    type: "website",
  },
  alternates: {
    canonical: "https://truaxmarketing.com/meet",
  },
};

export default function MeetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
