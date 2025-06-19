import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Promed Africa",
  description: `Nigeria’s first managed B2B marketplace for connecting manufacturers, importers, distributors, and wholesalers to pharmacies, hospitals, NGOs, and PPMVs facilitated by a same-day delivery logistics platform.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="tt-magic-cursor">{children}</body>
    </html>
  );
}
