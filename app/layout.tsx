import "./css/style.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | Koay - E-commerce Data API",
    default: "Koay - Real-time E-commerce Data & Trend Analysis API",
  },
  description:
    "Koay provides real-time e-commerce data access, competitor monitoring, and market trend analysis via a powerful API. Start building smarter apps today.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://koay.top",
    siteName: "Koay",
    images: [
      {
        url: "/images/og-image.jpg", // Ensure you have an OG image or use a placeholder
        width: 1200,
        height: 630,
        alt: "Koay Data API",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
