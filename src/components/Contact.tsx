import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import officeCleaningBg from "@/assets/office-cleaning-bg.jpg";
import cleanResultsBg from "@/assets/clean-results-bg.jpg";

export const Contact = () => {
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
    <section id="contact" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Enhanced Background Images */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 opacity-8">
          <img src={officeCleaningBg} alt="" className="w-full h-full object-cover rounded-br-3xl" />
        </div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10">
          <img src={cleanResultsBg} alt="" className="w-full h-full object-cover rounded-tl-3xl" />
        </div>
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-brand-yellow/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/5 w-24 h-24 bg-primary/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90 z-1"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-foreground">
            Want to Contact <span className="text-primary">with us?</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Get in touch with our team for a free consultation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* WhatsApp */}
          <Card className="text-center border-primary/10 hover:shadow-clean transition-all duration-300 hover:border-primary/30">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#25D366]/10 rounded-full mb-4">
                <MessageCircle className="h-8 w-8 text-[#25D366]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">WhatsApp</h3>
              <p className="text-muted-foreground mb-6">Quick response and instant booking</p>
              <Button 
                variant="whatsapp" 
                onClick={handleWhatsAppClick}
                className="w-full"
              >
                <MessageCircle className="h-4 w-4" />
                +966-53-7519929
              </Button>
            </CardContent>
          </Card>

          {/* Phone */}
          <Card className="text-center border-primary/10 hover:shadow-clean transition-all duration-300 hover:border-primary/30">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Call us</h3>
              <p className="text-muted-foreground mb-6">Direct line for immediate assistance</p>
              <Button 
                variant="default" 
                onClick={handleCallClick}
                className="w-full"
              >
                <Phone className="h-4 w-4" />
                +966-53-7519929
              </Button>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="text-center border-primary/10 hover:shadow-clean transition-all duration-300 hover:border-primary/30">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Mail className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Mail us</h3>
              <p className="text-muted-foreground mb-6">Send us your detailed requirements</p>
              <Button 
                variant="outline" 
                onClick={handleEmailClick}
                className="w-full"
              >
                <Mail className="h-4 w-4" />
                Send Email
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to experience the Kleenology difference?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Book your cleaning service today and join our satisfied customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="whatsapp" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="text-lg px-8 py-6 h-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Book via WhatsApp
            </Button>
            <Button 
              size="lg"
              onClick={handleCallClick}
              className="text-lg px-8 py-6 h-auto bg-white text-primary hover:bg-gray-100 font-semibold border-2 border-white hover:border-gray-200 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <Phone className="h-5 w-5 mr-3" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};