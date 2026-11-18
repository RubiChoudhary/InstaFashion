import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InstaFashion - 30-Min Local City Fashion & Daily Essentials",
  description:
    "Order women's wear, men's wear, artificial jewellery, footwear, stationery, and kitchen utensils straight from your city's local shops in 30-45 minutes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
