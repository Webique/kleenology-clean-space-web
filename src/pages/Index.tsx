import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { BeforeAfterShowcase } from "@/components/BeforeAfterShowcase";
import { CorporateCleaning } from "@/components/CorporateCleaning";
import { ClientSectors } from "@/components/ClientSectors";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { TrustBadges } from "@/components/TrustBadges";
import { PromoBanner } from "@/components/PromoBanner";
import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { SEO } from "@/components/SEO";

const Index = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  console.log('Index component rendering, i18n language:', i18n.language);

  const handleWhatsAppClick = () => {
    if ((window as any).pixelTracker) {
      (window as any).pixelTracker.trackWhatsAppClick();
    }
    window.open('https://wa.me/966537519929', '_blank');
  };

  const homeJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": isRTL ? "كلينولوجي - خدمات تنظيف احترافية في الرياض" : "Kleenology - Professional Cleaning Services in Riyadh",
      "url": "https://kleenology.me",
      "description": isRTL
        ? "شركة تنظيف احترافية في الرياض. تنظيف منازل، مكاتب، سجاد، وتنظيف عميق بمواد آمنة وضمان الرضا ١٠٠٪"
        : "Professional cleaning company in Riyadh. Home, office, carpet, and deep cleaning with eco-friendly products and 100% satisfaction guarantee.",
      "inLanguage": isRTL ? "ar" : "en",
      "isPartOf": { "@type": "WebSite", "url": "https://kleenology.me" },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": isRTL ? "خدمات كلينولوجي" : "Kleenology Services",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "item": { "@type": "Service", "name": isRTL ? "تنظيف المنازل" : "Home Cleaning", "url": "https://kleenology.me/home-cleaning" } },
        { "@type": "ListItem", "position": 2, "item": { "@type": "Service", "name": isRTL ? "تنظيف المكاتب" : "Office Cleaning", "url": "https://kleenology.me/office-cleaning" } },
        { "@type": "ListItem", "position": 3, "item": { "@type": "Service", "name": isRTL ? "تنظيف عميق" : "Deep Cleaning", "url": "https://kleenology.me/deep-cleaning" } },
        { "@type": "ListItem", "position": 4, "item": { "@type": "Service", "name": isRTL ? "تنظيف السجاد" : "Carpet Cleaning", "url": "https://kleenology.me/carpet-cleaning" } },
        { "@type": "ListItem", "position": 5, "item": { "@type": "Service", "name": isRTL ? "تنظيف ما بعد البناء" : "Post-Construction Cleaning", "url": "https://kleenology.me/post-construction-cleaning" } },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={isRTL
          ? "كلينولوجي - خدمات تنظيف احترافية في الرياض | Kleenology"
          : "Kleenology - Professional Cleaning Services in Riyadh"}
        description={isRTL
          ? "كلينولوجي — شركة تنظيف احترافية في الرياض. تنظيف منازل، مكاتب، سجاد، وتنظيف عميق بمواد آمنة وضمان الرضا ١٠٠٪. احجز الآن!"
          : "Kleenology — Professional cleaning company in Riyadh. Home, office, carpet, and deep cleaning with eco-friendly products. 100% satisfaction guarantee. Book now!"}
        keywords={isRTL
          ? "تنظيف منازل الرياض, شركة تنظيف الرياض, تنظيف عميق, تنظيف سجاد, تنظيف مكاتب, كلينولوجي, cleaning company Riyadh"
          : "cleaning company Riyadh, home cleaning Riyadh, professional cleaning, deep cleaning, carpet cleaning, office cleaning, kleenology"}
        url="https://kleenology.me"
        jsonLd={homeJsonLd}
      />
      
      <PromoBanner />
      <Header />

      <Hero />
      <Stats />
      <TrustBadges />
      <ClientSectors />
      <Services />
      <BeforeAfterShowcase />
      <Testimonials />
      <FAQ />
      <Contact />
      
      <Footer />
      
    </div>
  );
};

export default Index;