import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

export const Header = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/966537519929', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+966537519929';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/afda02d7-63e7-4998-92eb-dbe3d776cea3.png" 
            alt="Kleenology Logo" 
            className="h-10 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            About
          </a>
          <a 
            href="#services" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Services
          </a>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={handleCallClick}
            className="hidden sm:flex"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </Button>
          <Button 
            variant="whatsapp" 
            size="sm"
            onClick={handleWhatsAppClick}
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
};