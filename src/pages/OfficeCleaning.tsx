import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Shield, Sparkles, Building } from "lucide-react";
import { useTranslation } from "react-i18next";

const OfficeCleaning = () => {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    if ((window as any).pixelTracker) {
      (window as any).pixelTracker.trackWhatsAppClick();
    }
    window.open('https://wa.me/966537519929?text=Hi! I need office cleaning services', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Professional Office Cleaning Services | Kleenology"
        description="Expert office cleaning services for businesses. Commercial cleaning, sanitization, and maintenance. Keep your workplace spotless and professional."
        keywords="office cleaning, commercial cleaning, business cleaning, corporate cleaning, workplace cleaning, sanitization"
        url="https://kleenology.com/office-cleaning"
      />
      
      <Header />
      
      <main className="pt-24">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Breadcrumb items={[
            { label: "Services", href: "/services" },
            { label: "Office Cleaning" }
          ]} />
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Office Cleaning Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maintain a professional and healthy workplace with our comprehensive office cleaning services. Tailored solutions for businesses of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Office Cleaning Services Include
              </h2>
              <div className="space-y-4">
                {[
                  "Reception area cleaning and sanitization",
                  "Conference room and meeting space cleaning",
                  "Workstation and desk sanitization",
                  "Kitchen and break room deep cleaning",
                  "Restroom sanitization and maintenance",
                  "Floor cleaning and maintenance",
                  "Window and glass cleaning",
                  "Trash removal and recycling"
                ].map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Building className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Professional Workplace Environment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Health & Safety Compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Sparkles className="h-6 w-6 text-purple-600" />
                  <span className="text-gray-700">Increased Productivity</span>
                </div>
              </div>
              
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full mt-8 bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Book Office Cleaning
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OfficeCleaning; 