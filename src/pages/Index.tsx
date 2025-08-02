import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { BeforeAfterShowcase } from "@/components/BeforeAfterShowcase";
import { CorporateCleaning } from "@/components/CorporateCleaning";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MessageCircle, Users, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();
  
  const handleWhatsAppClick = () => {
    // Track WhatsApp click with Meta pixel
    if ((window as any).pixelTracker) {
      (window as any).pixelTracker.trackWhatsAppClick();
    }
    window.open('https://wa.me/966537519929', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Mobile Stats Section - Separate section with cute background */}
      <div 
        className="sm:hidden py-12 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3880&q=80)`
        }}
      >
        <div className="grid grid-cols-1 gap-4 max-w-2xl w-full mx-auto px-4">
          {[
            { icon: Users, number: "1542+", label: t('hero.stats.0') },
            { icon: Shield, number: "182+", label: t('hero.stats.1') },
            { icon: Sparkles, number: "100%", label: t('hero.stats.2') }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-brand-yellow to-brand-blue rounded-full mb-3 shadow-xl">
                <stat.icon className="h-6 w-6 text-white drop-shadow-lg" />
              </div>
              <div className="text-2xl font-extrabold mb-1 text-foreground">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <About />
      <Services />
      <BeforeAfterShowcase />
      <CorporateCleaning />
      <Contact />
      <Footer />
      
      {/* Mobile-only floating WhatsApp button */}
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
