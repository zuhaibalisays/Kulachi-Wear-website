import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kulachi Wear - Elegant Women's Clothing",
  description: "Discover elegant women's clothing at Kulachi Wear. Premium quality kurtis, dresses, tops, and more.",
  keywords: ["women's clothing", "kurtis", "dresses", "Pakistani fashion", "ethnic wear"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
