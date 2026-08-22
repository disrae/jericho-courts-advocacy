import type { Metadata } from "next";
import { TemporaryDaysCounter } from "@/components/temporary-days-counter";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jericho Courts Advocacy | Permanent courts for Vancouver",
  description:
    "Campaign for permanent, paved Jericho Beach courts with fixed nets and solar lighting. Park Board advocacy for Vancouver.",
  openGraph: {
    title: "Jericho Courts Advocacy",
    description:
      "Jericho proves demand every day. Match it with permanent courts, proper surfaces, and responsible solar lighting.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <TemporaryDaysCounter />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
