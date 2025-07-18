import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, Shield, Users } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showStats, setShowStats] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [textAnimating, setTextAnimating] = useState(true);

  const slides = [
    { 
      main: "KLEENOLOGY", 
      sub: "Excellence in Every Inch",
      accent: "✨ Premium Cleaning Services"
    },
    { 
      main: "SPOTLESS RESULTS", 
      sub: "Focused on hygiene and attention to detail",
      accent: "🧽 Professional Care"
    }, 
    { 
      main: "EXPERT TEAM", 
      sub: "Behind every clean space is a dedicated team",
      accent: "👥 Trusted Professionals"
    }
  ];

  useEffect(() => {
    // Initial load animation
    setTimeout(() => setIsLoaded(true), 300);
    
    const timer = setInterval(() => {
      setTextAnimating(false);
      setTimeout(() => {
        setCurrentSlide((prev) => {
          if (prev === slides.length - 1) {
            setTimeout(() => setShowStats(true), 1000);
            return 0; // Loop back to start
          }
          return prev + 1;
        });
        setTextAnimating(true);
      }, 200);
    }, 4000);

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
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-brand-yellow/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_50%)] animate-pulse"></div>
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-yellow rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Modern floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${
                i % 4 === 0 ? 'w-2 h-2 bg-brand-yellow/60 animate-ping' :
                i % 4 === 1 ? 'w-1 h-1 bg-white/80 animate-pulse' :
                i % 4 === 2 ? 'w-3 h-3 bg-primary/40 animate-bounce' :
                'w-1.5 h-1.5 bg-accent/50 animate-pulse'
              }`}
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
      <div className={`relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="max-w-7xl mx-auto">
          {/* Dynamic Hero Text */}
          <div className="min-h-[400px] sm:min-h-[450px] flex flex-col justify-center items-center relative mb-8 sm:mb-12">
            <div className={`transition-all duration-700 transform ${
              textAnimating ? 'opacity-100 translate-y-0 scale-100' : 'opacity-60 translate-y-2 scale-98'
            }`}>
              {/* Main Title */}
              <div className="mb-6 sm:mb-8">
                <div className="text-sm sm:text-base md:text-lg font-semibold tracking-widest text-brand-yellow/80 mb-2 animate-pulse">
                  {slides[currentSlide].accent}
                </div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight mb-4">
                  <span className="block bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-500">
                    {slides[currentSlide].main}
                  </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light max-w-4xl mx-auto leading-relaxed text-gray-200">
                  {slides[currentSlide].sub}
                </p>
              </div>

              {/* Slide indicators */}
              <div className="flex justify-center space-x-3 mb-8">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === currentSlide 
                        ? 'w-12 bg-brand-yellow shadow-lg shadow-brand-yellow/50' 
                        : 'w-3 bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-20">
            <Button 
              onClick={handleWhatsAppClick}
              className="group relative text-base sm:text-lg font-bold px-8 sm:px-12 py-4 sm:py-6 h-auto bg-gradient-to-r from-brand-yellow to-yellow-400 hover:from-yellow-400 hover:to-brand-yellow text-slate-900 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-brand-yellow/40 border-0 rounded-full overflow-hidden w-full sm:w-auto max-w-xs"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Call Now</span>
            </Button>
            <Button 
              onClick={handleLearnMore}
              className="group text-base sm:text-lg font-semibold px-8 sm:px-12 py-4 sm:py-6 h-auto border-2 border-white/40 text-white bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/60 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl rounded-full w-full sm:w-auto max-w-xs"
            >
              <span className="group-hover:tracking-wider transition-all duration-300">Learn More</span>
            </Button>
          </div>

          {/* Enhanced Animated Stats */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto transition-all duration-1000 delay-500 ${
            showStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {[
              { icon: Users, number: "1542+", label: "Happy Clients", color: "from-brand-yellow to-yellow-400", glow: "brand-yellow" },
              { icon: Shield, number: "182+", label: "Expert Team", color: "from-primary to-blue-400", glow: "primary" },
              { icon: Sparkles, number: "100%", label: "Satisfaction", color: "from-emerald-400 to-green-500", glow: "emerald-400" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group text-center transform hover:scale-105 transition-all duration-300 hover:-translate-y-1"
                style={{ 
                  animationDelay: `${0.2 + index * 0.1}s`
                }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${stat.color} rounded-2xl mb-3 sm:mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-3`}>
                  <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white drop-shadow-lg" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modern Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-md bg-white/5 shadow-lg hover:border-brand-yellow/60 transition-colors duration-300">
          <div className="w-1 h-3 sm:w-2 sm:h-4 bg-gradient-to-b from-brand-yellow to-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};