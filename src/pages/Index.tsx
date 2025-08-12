import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { BeforeAfterShowcase } from "@/components/BeforeAfterShowcase";
import { CorporateCleaning } from "@/components/CorporateCleaning";
import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { SEO } from "@/components/SEO";

const Index = () => {
  const { t, i18n } = useTranslation();
  
  console.log('Index component rendering, i18n language:', i18n.language);
  
  const handleWhatsAppClick = () => {
    if ((window as any).pixelTracker) {
      (window as any).pixelTracker.trackWhatsAppClick();
    }
    window.open('https://wa.me/966537519929', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Kleenology - Professional Cleaning Services | Excellence in Every Inch"
        description="Kleenology delivers spotless cleaning results using eco-friendly products. Professional home and office cleaning services with satisfaction guarantee."
        keywords="cleaning services, professional cleaning, house cleaning, office cleaning, eco-friendly cleaning, deep cleaning, sanitization"
        url="https://kleenology.com"
      />
      
      <Header />
      
      <Hero />
      <About />
      <Services />
      <BeforeAfterShowcase />
      <CorporateCleaning />
      <Contact />
      
      <Footer />
      
      <Button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-float hover:shadow-lg transform hover:scale-110 transition-all duration-300 md:hidden"
        size="icon"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </Button>
    </div>
  );
};

export default Index;