
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, Shield, Users } from "lucide-react";
import cleanApartmentBg from "@/assets/clean-apartment-bg.jpg";
import heroMobileBg from "@/assets/hero-mobile-bg.jpg";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showStats, setShowStats] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [textAnimating, setTextAnimating] = useState(true);
  const [isSliding, setIsSliding] = useState(false);

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
      setIsSliding(true);
      setTextAnimating(false);
      
      setTimeout(() => {
        setCurrentSlide((prev) => {
          if (prev === slides.length - 1) {
            setTimeout(() => setShowStats(true), 1000);
            return 0; // Loop back to start
          }
          return prev + 1;
        });
        
        setTimeout(() => {
          setIsSliding(false);
          setTextAnimating(true);
        }, 100);
      }, 300);
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
    <section id="home" className="relative min-h-[130vh] flex items-center justify-center overflow-hidden pb-24">
      {/* Clean Apartment Background */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Background */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${cleanApartmentBg})`
          }}
        ></div>
        {/* Mobile Background - Vertical oriented */}
        <div 
          className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroMobileBg})`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/70 via-blue-50/60 to-sky-100/70"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-blue-200/15"></div>
        
        {/* Moving animated gradient waves for depth */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-20 w-96 h-96 bg-gradient-to-r from-sky-300/30 to-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-20 -right-20 w-80 h-80 bg-gradient-to-l from-blue-300/40 to-sky-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-10 left-10 w-72 h-72 bg-gradient-to-t from-blue-200/50 to-sky-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-32 right-32 w-64 h-64 bg-gradient-to-br from-sky-400/30 to-blue-300/40 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-6000"></div>
        </div>
        
        {/* Cleaning-themed floating particles */}
        <div className="absolute inset-0 opacity-15">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute ${
                i % 5 === 0 ? 'w-2 h-2 bg-white/80 rounded-full animate-float' :
                i % 5 === 1 ? 'w-1.5 h-1.5 bg-sky-200/90 rounded-full animate-pulse' :
                i % 5 === 2 ? 'w-3 h-3 bg-blue-100/70 rounded-full animate-float' :
                i % 5 === 3 ? 'w-1 h-1 bg-white/90 rounded-full animate-pulse' :
                'w-2.5 h-2.5 bg-sky-100/80 rounded-full animate-float'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Subtle moving overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-900 transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="max-w-7xl mx-auto">
          {/* Dynamic Hero Text */}
          <div className="min-h-[400px] sm:min-h-[450px] flex flex-col justify-center items-center relative mb-8 sm:mb-12 overflow-hidden">
            <div className={`transition-all duration-500 ease-in-out transform ${
              isSliding ? 'animate-slide-down' : textAnimating ? 'animate-slide-up opacity-100' : 'opacity-80'
            }`}>
              {/* Main Title - With Bubbly Font */}
              <div className="mb-6 sm:mb-8">
                <div className="text-sm sm:text-base md:text-lg font-bold tracking-widest text-gray-800 bg-brand-yellow/90 px-3 py-1 rounded-full mb-2 animate-pulse shadow-lg">
                  {slides[currentSlide].accent}
                </div>
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4">
                  <span className="block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-500 drop-shadow-lg">
                    {slides[currentSlide].main}
                  </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal max-w-4xl mx-auto leading-relaxed text-gray-700 drop-shadow-sm">
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
                        : 'w-3 bg-gray-400 hover:bg-gray-600'
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
              className="group text-base sm:text-lg font-semibold px-8 sm:px-12 py-4 sm:py-6 h-auto border-2 border-gray-300 text-gray-800 bg-white/80 backdrop-blur-md hover:bg-white hover:border-gray-400 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl rounded-full w-full sm:w-auto max-w-xs"
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
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base font-medium text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modern Scroll indicator - positioned below stats */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-gray-400 rounded-full flex justify-center backdrop-blur-md bg-white/50 shadow-lg hover:border-brand-yellow transition-colors duration-300">
          <div className="w-1 h-3 sm:w-2 sm:h-4 bg-gradient-to-b from-brand-yellow to-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
