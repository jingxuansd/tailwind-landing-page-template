export const metadata = {
  title: {
    absolute: "Koay: #1 E-commerce Trends & Competitor Data API",
  },
  description:
    "Unlock the power of e-commerce data with Koay. Track prices, monitor competitors, and analyze global market trends in real-time with our reliable API.",
  keywords: ["Koay", "Data API", "E-commerce API", "Price Monitoring", "Trend Analysis", "Competitor Intelligence"],
  alternates: {
    canonical: "https://koay.top",
  },
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Koay Data API",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Cloud",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
            },
            "description": "Real-time e-commerce data access, competitor monitoring, and market trend analysis via a powerful API.",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "120",
            },
          }),
        }}
      />
    </>
  );
}
