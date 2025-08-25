import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Freshjal - Premium Packaged Water | Crafted by Nature, Perfected for You",
  description: "Freshjal provides premium packaged water bottles to corporates, restaurants, and shops. Inspired by Himalayan glacier mountains, our water is crafted by nature and perfected for you.",
  keywords: "premium water, packaged water, corporate water, restaurant water, Himalayan water, glacier water, luxury water",
  authors: [{ name: "Freshjal" }],
  openGraph: {
    title: "Freshjal - Premium Packaged Water",
    description: "Crafted by nature, perfected for you, inspired by Himalayas glacier mountain",
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
