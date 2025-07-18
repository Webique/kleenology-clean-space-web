import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, Wind, Sofa, Home } from "lucide-react";
import deepCleaningImg from "@/assets/deep-cleaning.jpg";
import furnitureCleaningImg from "@/assets/furniture-cleaning.jpg";
import acCleaningImg from "@/assets/ac-cleaning.jpg";
import moveCleaningImg from "@/assets/move-cleaning.jpg";
import cleaningPattern from "@/assets/cleaning-pattern.jpg";
import officeCleaningBg from "@/assets/office-cleaning-bg.jpg";

export const Services = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/966537519929', '_blank');
  };

  const services = [
    {
      title: "Deep Cleaning",
      description: "Comprehensive cleaning that reaches every corner and detail of your space.",
      image: deepCleaningImg,
      icon: Sparkles
    },
    {
      title: "Furniture Cleaning",
      description: "Professional upholstery and furniture cleaning to restore freshness.",
      image: furnitureCleaningImg,
      icon: Sofa
    },
    {
      title: "Air Conditioner Cleaning",
      description: "Expert AC cleaning for better air quality and efficiency.",
      image: acCleaningImg,
      icon: Wind
    },
    {
      title: "Move In / Move Out Service",
      description: "Complete cleaning service for moving transitions.",
      image: moveCleaningImg,
      icon: Home
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Enhanced Background Images and Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 right-10 w-80 h-80 opacity-8">
          <img src={officeCleaningBg} alt="" className="w-full h-full object-cover rounded-full shadow-2xl" />
        </div>
        <div className="absolute bottom-10 left-10 w-60 h-60 opacity-12">
          <img src={cleaningPattern} alt="" className="w-full h-full object-cover rounded-2xl rotate-12 shadow-xl" />
        </div>
        
        {/* Enhanced floating decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-brand-yellow/30 rounded-full animate-float shadow-lg"></div>
        <div className="absolute top-1/3 right-1/5 w-6 h-6 bg-primary/25 rounded-full animate-float shadow-md" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-10 h-10 bg-accent/25 rounded-full animate-float shadow-lg" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-1/6 w-4 h-4 bg-brand-yellow/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/6 w-6 h-6 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/85 to-background/90"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Featured Service */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-foreground">
            Featured <span className="text-primary">Service</span>
          </h2>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 text-primary px-4">
            Your comfort starts with clean — and we're here to make it effortless
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Our services are tailored to fit your lifestyle — whether you need precise home cleaning or professional care for offices and commercial spaces. In Kleenology, we deliver all-around cleaning solutions — accurate, dependable, and held to the highest standards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-clean overflow-hidden">
              <div className="relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Steps to Reach */}
        <div className="bg-secondary/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Steps to reach <span className="text-primary">here</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Simple steps to get your space clean Fast, easy, and professional
            </p>
            <p className="text-muted-foreground mt-2">
              We were glad to serve homes and businesses across the country with trusted cleaning services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full text-white font-bold text-2xl mb-4">
                1
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">Find our agent</h4>
              <p className="text-muted-foreground">
                Locate our nearest specialist for on-site consultation
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full text-white font-bold text-2xl mb-4">
                2
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">Estimate budget</h4>
              <p className="text-muted-foreground">
                Get a clear, customized quote that fits your space and service type.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full text-white font-bold text-2xl mb-4">
                3
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">Hire our agent!</h4>
              <p className="text-muted-foreground">
                Confirm your booking and let Kleenology handle the rest.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="whatsapp" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="text-lg px-8 py-6 h-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Start Your Booking
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};