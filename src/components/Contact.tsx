import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

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
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Want to Contact <span className="text-primary">with us?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get in touch with our team for a free consultation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
              variant="outline" 
              size="lg"
              onClick={handleCallClick}
              className="text-lg px-8 py-6 h-auto border-white/30 text-white hover:bg-white hover:text-primary"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};