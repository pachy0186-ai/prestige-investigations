import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Prestige Executive Investigations LLC | Licensed Private Investigator South Florida",
  description: "Professional private investigation services in South Florida. Background checks, surveillance, corporate investigations, and more. Licensed PI #A1700257.",
  keywords: "private investigator, South Florida, background checks, surveillance, corporate investigations, infidelity investigations, child custody",
  authors: [{ name: "Prestige Executive Investigations LLC" }],
  openGraph: {
    title: "Prestige Executive Investigations LLC",
    description: "Professional private investigation services in South Florida",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
