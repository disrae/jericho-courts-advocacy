import type { Metadata } from "next";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Jericho Courts | Permanent courts for Vancouver",
    template: "%s | Jericho Courts",
  },
  description:
    "A community campaign for permanent courts at Jericho Beach Park: resurfacing, fixed nets, and a solar lighting pilot.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Jericho Courts",
    description:
      "Jericho is full every day. It is time for permanent courts, proper surfaces, and responsible solar lighting.",
    type: "website",
    siteName: "Jericho Courts",
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
        <ConvexClientProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
