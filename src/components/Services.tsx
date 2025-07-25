import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, Wind, Sofa, Home, Building2, Square, Zap } from "lucide-react";
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

  const popularServices = [
    { title: "Condo Cleaning", icon: Building2 },
    { title: "House Cleaning", icon: Home },
    { title: "Deep Cleaning", icon: Sparkles },
    { title: "Carpet Cleaning", icon: Square },
    { title: "Appliance Cleaning", icon: Zap },
    { title: "Windows Cleaning", icon: Wind }
  ];

  return (
    <>
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
        </div>
      </section>
      {/* Most Popular Services - Full Width Horizontal Bar */}
      <div className="w-full bg-[#1997d7] py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 text-blue-900">
            Most Popular Services
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12">
            {popularServices.map((service, index) => (
              <div key={index} className="flex flex-col items-center group cursor-pointer">
                <div className="relative mb-3">
                  {/* Hexagonal background */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white backdrop-blur-sm border-2 border-blue-300 transform rotate-45 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-lg"></div>
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-800 transform -rotate-45" />
                  </div>
                </div>
                <h3 className="text-blue-900 text-xs sm:text-sm font-bold text-center group-hover:text-blue-700 transition-colors max-w-20 sm:max-w-24">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};