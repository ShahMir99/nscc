import "./globals.css";
import type { Metadata } from "next";
import { Inter, Saira } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

const saira = Saira({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "NSCC — Leading General Contracting Company in Saudi Arabia",
  description:
    "From iconic commercial buildings to turnkey residential developments, NSCC delivers construction, MEP and engineering excellence across Saudi Arabia.",
  openGraph: {
    title: "NSCC — General Contracting in Saudi Arabia",
    description: "Building landmarks, shaping Saudi Arabia's future.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${saira.className} h-full antialiased`}>
      <body cz-shortcut-listen="true" className="min-h-full flex flex-col">
        <TooltipProvider>
          <Header />
          {children}
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
