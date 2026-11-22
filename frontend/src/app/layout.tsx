import type { Metadata } from "next";
import "./globals.css";
import { SiteNav } from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "ClearBison — AI security scans you can act on",
  description:
    "ClearBison runs authorized AI security scans on code you own or systems you control — then delivers findings you can patch. Founder-led engagements. No published price list; scoped quotes after a short call.",
  metadataBase: new URL("https://clearbison.com"),
  openGraph: {
    title: "ClearBison — AI security scans you can act on",
    description:
      "Authorized AI security scanning for repositories and domains you control. Report. Patch. Improve.",
    url: "https://clearbison.com",
    siteName: "ClearBison",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a id="top" />
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
