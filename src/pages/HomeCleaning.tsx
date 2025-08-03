import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Shield, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const HomeCleaning = () => {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    if ((window as any).pixelTracker) {
      (window as any).pixelTracker.trackWhatsAppClick();
    }
    window.open('https://wa.me/966537519929?text=Hi! I need home cleaning services', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Professional Home Cleaning Services | Kleenology"
        description="Expert home cleaning services with eco-friendly products. Deep cleaning, sanitization, and spotless results guaranteed. Book your home cleaning today!"
        keywords="home cleaning, house cleaning, residential cleaning, deep cleaning, eco-friendly cleaning, sanitization"
        url="https://kleenology.com/home-cleaning"
      />
      
      <Header />
      
      <main className="pt-24">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Breadcrumb items={[
            { label: "Services", href: "/services" },
            { label: "Home Cleaning" }
          ]} />
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Home Cleaning Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your home with our expert cleaning services. Using eco-friendly products and proven techniques for spotless results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What's Included in Our Home Cleaning
              </h2>
              <div className="space-y-4">
                {[
                  "Complete dusting and wiping of all surfaces",
                  "Kitchen deep cleaning (appliances, countertops, cabinets)",
                  "Bathroom sanitization and deep cleaning",
                  "Bedroom organization and cleaning",
                  "Living area vacuuming and mopping",
                  "Window and mirror cleaning",
                  "Trash removal and disposal",
                  "Eco-friendly product usage"
                ].map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Kleenology?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">100% Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Sparkles className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Eco-Friendly Products</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-6 w-6 text-purple-600" />
                  <span className="text-gray-700">Professional Team</span>
                </div>
              </div>
              
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full mt-8 bg-green-600 hover:bg-green-700"
                size="lg"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Book Home Cleaning
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomeCleaning; 