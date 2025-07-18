import { MessageCircle, Phone, Mail } from "lucide-react";

export const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/966537519929', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+966537519929';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:abdulhadi@kleenology.net';
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <img 
              src="/lovable-uploads/afda02d7-63e7-4998-92eb-dbe3d776cea3.png" 
              alt="Kleenology Logo" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-background/80 leading-relaxed">
              Specialized cleaning company committed to delivering spotless results using the latest technologies and eco-friendly products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a 
                href="#home" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-sm text-background/80 hover:text-brand-yellow transition-colors cursor-pointer"
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-sm text-background/80 hover:text-brand-yellow transition-colors cursor-pointer"
              >
                About Us
              </a>
              <a 
                href="#services" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-sm text-background/80 hover:text-brand-yellow transition-colors cursor-pointer"
              >
                Services
              </a>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-sm text-background/80 hover:text-brand-yellow transition-colors cursor-pointer"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-brand-yellow" />
                <button 
                  onClick={handleWhatsAppClick}
                  className="text-sm text-background/80 hover:text-brand-yellow transition-colors"
                >
                  +966-53-7519929
                </button>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-yellow" />
                <button 
                  onClick={handleCallClick}
                  className="text-sm text-background/80 hover:text-brand-yellow transition-colors"
                >
                  +966-53-7519929
                </button>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-yellow" />
                <button 
                  onClick={handleEmailClick}
                  className="text-sm text-background/80 hover:text-brand-yellow transition-colors"
                >
                  abdulhadi@kleenology.net
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm text-background/60">
            © 2024 Kleenology. All rights reserved. | Excellence in every inch.
          </p>
        </div>
      </div>
    </footer>
  );
};