import { MessageCircle, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
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
              src="/logo.png" 
              alt="Kleenology Logo" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            /> 
            <p className="text-sm text-background/80 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <div className="space-y-2">
              <a 
                href="#home" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-sm text-background/80 hover:text-brand-yellow transition-colors cursor-pointer"
              >
                {t('footer.home')}
              </a>
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-sm text-background/80 hover:text-brand-yellow transition-colors cursor-pointer"
              >
                {t('footer.about')}
              </a>
              <a 
                href="#services" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-sm text-background/80 hover:text-brand-yellow transition-colors cursor-pointer"
              >
                {t('footer.services')}
              </a>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-sm text-background/80 hover:text-brand-yellow transition-colors cursor-pointer"
              >
                {t('footer.contact')}
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contactInfo')}</h3>
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
          <div className="inline-flex items-center justify-center bg-white/5 backdrop-blur-lg rounded-2xl px-6 py-4 shadow-lg border border-white/10">
            <p className="text-sm font-medium text-white/90 bg-gradient-to-r from-brand-yellow/80 to-brand-blue/80 bg-clip-text text-transparent">
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};