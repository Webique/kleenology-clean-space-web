import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import officeCleaningBg from "@/assets/office-cleaning-bg.jpg";
import cleanResultsBg from "@/assets/clean-results-bg.jpg";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  const handleWhatsAppClick = () => {
    // Track WhatsApp click
    if ((window as any).pixelTracker) {
      (window as any).pixelTracker.trackWhatsAppClick();
    }
    window.open('https://wa.me/966537519929', '_blank');
  };

  const handleCallClick = () => {
    // Track phone call click
    if ((window as any).pixelTracker) {
      (window as any).pixelTracker.trackButtonClick('phone_call');
    }
    window.location.href = 'tel:+966537519929';
  };

  const handleEmailClick = () => {
    // Track email click
    if ((window as any).pixelTracker) {
      (window as any).pixelTracker.trackButtonClick('email_click');
    }
    window.location.href = 'mailto:abdulhadi@kleenology.net';
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Enhanced Background Images */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-8">
          <img src={officeCleaningBg} alt="Professional office cleaning background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-0 right-0 w-full h-full opacity-12">
          <img src={cleanResultsBg} alt="Clean results background showing spotless surfaces" className="w-full h-full object-cover" />
        </div>
        {/* Moving decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-brand-yellow/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/5 w-24 h-24 bg-primary/10 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-16 h-16 bg-accent/10 rounded-full blur-md animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95 z-1"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* WhatsApp */}
          <Card className="bg-white/80 shadow-lg border-0">
            <CardContent className="flex flex-col items-center p-8">
              <div className="mb-4">
                <MessageCircle className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground text-center">{t('contact.whatsapp')}</h3>
              <Button onClick={handleWhatsAppClick} className="mt-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold px-6 py-2 rounded-full">
                +966-53-7519929
              </Button>
            </CardContent>
          </Card>
          {/* Call */}
          <Card className="bg-white/80 shadow-lg border-0">
            <CardContent className="flex flex-col items-center p-8">
              <div className="mb-4">
                <Phone className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground text-center">{t('contact.call')}</h3>
              <Button onClick={handleCallClick} className="mt-2 bg-primary hover:bg-primary/80 text-white font-bold px-6 py-2 rounded-full">
                +966-53-7519929
              </Button>
            </CardContent>
          </Card>
          {/* Email */}
          <Card className="bg-white/80 shadow-lg border-0">
            <CardContent className="flex flex-col items-center p-8">
              <div className="mb-4">
                <Mail className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground text-center">{t('contact.email')}</h3>
              <Button onClick={handleEmailClick} className="mt-2 bg-accent hover:bg-accent/80 text-white font-bold px-6 py-2 rounded-full">
                abdulhadi@kleenology.net
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};