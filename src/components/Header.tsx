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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/afda02d7-63e7-4998-92eb-dbe3d776cea3.png" 
            alt="Kleenology Logo" 
            className="h-8 sm:h-10 w-auto"
          />
        </div>
        
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-foreground hover:text-primary transition-colors cursor-pointer font-medium"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-foreground hover:text-primary transition-colors cursor-pointer font-medium"
          >
            About
          </a>
          <a 
            href="#services" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-foreground hover:text-primary transition-colors cursor-pointer font-medium"
          >
            Services
          </a>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-foreground hover:text-primary transition-colors cursor-pointer font-medium"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={handleCallClick}
            className="hidden md:flex text-sm"
          >
            <Phone className="h-4 w-4 mr-2" />
            Call
          </Button>
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm px-3 py-2 sm:px-4"
          >
            <MessageCircle className="h-4 w-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">Chat</span>
          </Button>
        </div>
      </div>
    </header>
  );
};