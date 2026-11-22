import type { Metadata } from "next";
import "./globals.css";
import { SiteNav } from "@/components/SiteNav";
import { LocaleProvider } from "@/i18n/LocaleProvider";

export const metadata: Metadata = {
  title: "ClearBison: security scans you can patch from",
  description:
    "ClearBison runs authorized security scans on code you own or systems you control, then hands you findings you can fix. I quote after a short call. No public price list.",
  metadataBase: new URL("https://clearbison.com"),
  openGraph: {
    title: "ClearBison: security scans you can patch from",
    description:
      "Authorized security scanning for repositories and domains you control. You get a report you can patch from.",
    url: "https://clearbison.com",
    siteName: "ClearBison",
    type: "website",
  },
};

const localeBootScript = `
(function () {
  try {
    var key = "clearbison.lang";
    var stored = localStorage.getItem(key);
    var locale = stored === "en" || stored === "es"
      ? stored
      : ((navigator.language || "").toLowerCase().indexOf("es") === 0 ? "es" : "en");
    document.documentElement.lang = locale;
    document.documentElement.dataset.locale = locale;
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: localeBootScript }} />
      </head>
      <body>
        <LocaleProvider>
          <a id="top" />
          <SiteNav />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
