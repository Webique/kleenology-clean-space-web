import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, Shield, Users } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showStats, setShowStats] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const slides = [
    "Excellence in Every Inch",
    "Focused on hygiene and attention to detail", 
    "Behind every clean space is a dedicated team"
  ];

  useEffect(() => {
    // Initial load animation
    setTimeout(() => setIsLoaded(true), 500);
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev === slides.length - 1) {
          setTimeout(() => setShowStats(true), 800);
          return prev;
        }
        return prev + 1;
      });
    }, 3500);

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
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Clean Home Interior" 
          className="w-full h-full object-cover transform scale-110 transition-transform duration-[10s] hover:scale-125"
        />
        
        {/* Multiple overlapping gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/30 to-brand-yellow/20"></div>
        
        {/* Advanced floating particles */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full animate-float ${
                i % 3 === 0 ? 'w-1 h-1 bg-brand-yellow/40' :
                i % 3 === 1 ? 'w-2 h-2 bg-white/30' :
                'w-3 h-3 bg-accent/20'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute border border-white/20 transform rotate-45 animate-spin-slow ${
                i % 2 === 0 ? 'w-20 h-20' : 'w-16 h-16'
              }`}
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${20 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className={`relative z-10 container mx-auto px-4 text-center text-white transition-all duration-2000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Animated Slideshow Text */}
          <div className="min-h-[350px] flex flex-col justify-center items-center relative mb-8">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col justify-center items-center text-center transition-all duration-1500 ease-out transform ${
                  index === currentSlide 
                    ? 'opacity-100 translate-y-0 scale-100 rotate-0' 
                    : index < currentSlide 
                    ? 'opacity-0 -translate-y-20 scale-95 -rotate-1'
                    : 'opacity-0 translate-y-20 scale-95 rotate-1'
                }`}
              >
                {index === 0 ? (
                  <div className="space-y-6">
                    <div className="text-5xl md:text-7xl font-bold tracking-tight">
                      <span className="block mb-4 transform transition-all duration-1000 delay-300">
                        Excellence in
                      </span>
                      <span className="block text-brand-yellow animate-pulse bg-gradient-to-r from-brand-yellow to-yellow-300 bg-clip-text text-transparent">
                        Every Inch
                      </span>
                    </div>
                  </div>
                ) : index === 1 ? (
                  <div className="text-2xl md:text-3xl font-light max-w-3xl leading-relaxed">
                    <span className="inline-block">Focused on </span>
                    <span className="text-brand-yellow font-semibold animate-pulse">hygiene</span>
                    <span className="inline-block"> and </span>
                    <span className="text-accent font-semibold">attention to detail</span>
                  </div>
                ) : (
                  <div className="text-xl md:text-2xl font-light max-w-4xl leading-relaxed opacity-90">
                    <span className="inline-block">Behind every </span>
                    <span className="text-brand-yellow font-semibold">clean space</span>
                    <span className="inline-block"> is a </span>
                    <span className="text-accent font-semibold animate-pulse">dedicated team</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Enhanced Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 transition-all duration-1500 delay-500 ${
            showStats ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
          }`}>
            <Button 
              variant="hero" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="group text-lg px-10 py-8 h-auto transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-brand-yellow/60 bg-gradient-to-r from-brand-yellow to-yellow-400 hover:from-yellow-400 hover:to-brand-yellow"
            >
              <MessageCircle className="h-6 w-6 mr-3 group-hover:animate-bounce" />
              <span className="font-semibold">Book via WhatsApp</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleLearnMore}
              className="group text-lg px-10 py-8 h-auto border-2 border-white/60 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl"
            >
              <span className="font-semibold group-hover:tracking-wide transition-all duration-300">Learn More</span>
            </Button>
          </div>

          {/* Enhanced Animated Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto transition-all duration-2000 delay-1000 ${
            showStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            {[
              { icon: Users, number: "1542+", label: "Satisfied Clients", color: "bg-gradient-to-br from-brand-yellow to-yellow-400" },
              { icon: Shield, number: "182+", label: "Expert Team", color: "bg-gradient-to-br from-accent to-blue-400" },
              { icon: Sparkles, number: "100%", label: "Satisfaction", color: "bg-gradient-to-br from-green-400 to-emerald-500" }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`group text-center transform hover:scale-110 transition-all duration-500 hover:-translate-y-2`}
                style={{ 
                  animationDelay: `${1.5 + index * 0.3}s`,
                  animation: showStats ? `fade-in 1s ease-out ${1.5 + index * 0.3}s both` : ''
                }}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 ${stat.color} rounded-full mb-4 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:animate-pulse`}>
                  <stat.icon className="h-10 w-10 text-white drop-shadow-lg" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90 font-medium group-hover:text-brand-yellow transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/10 shadow-lg">
          <div className="w-2 h-4 bg-gradient-to-b from-brand-yellow to-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};