import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Research Control | Softwareentwicklung für physikalisch-technische Anwendungen",
  description: "Softwareentwicklung für Anwendungen mit physikalisch technischem Hintergrund. C#, WPF, MVVM, Laborautomatisierung und Steuerungstechnik von Michael Hermann.",
  authors: [{ name: "Michael Hermann" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body
        className={`${inter.variable} ${oswald.variable} bg-slate-50 text-slate-800 font-sans antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
