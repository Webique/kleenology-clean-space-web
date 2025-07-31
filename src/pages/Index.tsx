import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { BeforeAfterShowcase } from "@/components/BeforeAfterShowcase";
import { CorporateCleaning } from "@/components/CorporateCleaning";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/966537519929', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <BeforeAfterShowcase />
      <CorporateCleaning />
      <Contact />
      <Footer />
      
      {/* Mobile-only floating WhatsApp button */}
      <Button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg md:hidden"
        size="icon"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>
    </div>
  );
};

export default Index;
