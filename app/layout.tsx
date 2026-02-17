import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Don Bosco school - Shape the Future Through Design",
  description:
    "A modern design school offering programs in Graphic Design, UX/UI, Photography, and more. Apply now and shape your creative future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
