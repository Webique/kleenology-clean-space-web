import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, Shield, Users } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showStats, setShowStats] = useState(false);

  const slides = [
    "Excellence in Every Inch",
    "Focused on hygiene and attention to detail", 
    "Behind every clean space is a dedicated team"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev === slides.length - 1) {
          setShowStats(true);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/966537519929', '_blank');
  };

  const handleLearnMore = () => {
    document.getElementById('about')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Clean Home Interior" 
          className="w-full h-full object-cover transform scale-105 animate-pulse"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Animated Slideshow Text */}
          <div className="min-h-[300px] flex flex-col justify-center items-center relative">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col justify-center items-center text-center transition-all duration-1000 transform ${
                  index === currentSlide 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-10 scale-95'
                } ${
                  index === 0 ? 'text-4xl md:text-6xl font-bold' :
                  index === 1 ? 'text-xl md:text-2xl opacity-90' :
                  'text-lg md:text-xl opacity-80'
                }`}
              >
                {index === 0 ? (
                  <>
                    <span className="mb-4">Excellence in</span>
                    <span className="text-brand-yellow animate-pulse">Every Inch</span>
                  </>
                ) : (
                  <span>{slide}</span>
                )}
              </div>
            ))}
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-1000 ${
            showStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Button 
              variant="hero" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="text-lg px-8 py-6 h-auto transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-brand-yellow/50"
            >
              <MessageCircle className="h-5 w-5" />
              Book via WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleLearnMore}
              className="text-lg px-8 py-6 h-auto border-white/50 text-white bg-white/10 hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          {/* Animated Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-1000 ${
            showStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {[
              { icon: Users, number: "1542+", label: "Satisfied Clients", delay: "0s" },
              { icon: Shield, number: "182+", label: "Expert Team", delay: "0.2s" },
              { icon: Sparkles, number: "100%", label: "Satisfaction", delay: "0.4s" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center transform hover:scale-110 transition-all duration-300"
                style={{ animationDelay: stat.delay }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-yellow rounded-full mb-3 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-pulse">
                  <stat.icon className="h-8 w-8 text-foreground" />
                </div>
                <div className="text-3xl font-bold mb-1 animate-pulse">{stat.number}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
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