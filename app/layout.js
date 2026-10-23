import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { company } from "@/lib/site";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   display: "swap",
// });

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  metadataBase: new URL(company.website),
  title: {
    default: `${company.shortName} | ${company.tagline}`,
    template: `%s | ${company.shortName}`,
  },
  description: company.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: company.name,
    title: `${company.shortName} | ${company.tagline}`,
    description: company.description,
    url: company.website,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
