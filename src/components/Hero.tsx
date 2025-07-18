import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, Shield, Users } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/966537519929', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Clean Home Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Excellence in 
            <span className="block text-brand-yellow">Every Inch</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            Focused on hygiene and attention to detail
          </p>
          
          <p className="text-lg md:text-xl mb-8 opacity-80">
            Behind every clean space is a dedicated team
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="text-lg px-8 py-6 h-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Book via WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 h-auto border-white/30 text-white hover:bg-white hover:text-primary"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-yellow rounded-full mb-3">
                <Users className="h-6 w-6 text-foreground" />
              </div>
              <div className="text-2xl font-bold">1542+</div>
              <div className="text-sm opacity-80">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-yellow rounded-full mb-3">
                <Shield className="h-6 w-6 text-foreground" />
              </div>
              <div className="text-2xl font-bold">182+</div>
              <div className="text-sm opacity-80">Expert Team</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-yellow rounded-full mb-3">
                <Sparkles className="h-6 w-6 text-foreground" />
              </div>
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm opacity-80">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};