import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Clock, Shield, MessageCircle, CheckCircle } from "lucide-react";
import { useCallback } from "react";
import officeBg from "@/assets/office-cleaning-bg.jpg";

export const CorporateCleaning = () => {
  const handleWhatsAppClick = useCallback(() => {
    window.open('https://wa.me/966537519929', '_blank');
  }, []);

  return (
    <section id="corporate" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${officeBg})` }}
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Building2 className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Corporate Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional Office Cleaning Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Elevate your workplace with our comprehensive corporate cleaning solutions. 
            Trusted by leading businesses for maintaining pristine, healthy work environments.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: Clock,
              title: "Flexible Scheduling",
              description: "Before hours, after hours, or weekend services to fit your business needs"
            },
            {
              icon: Users,
              title: "Trained Professionals",
              description: "Certified staff with corporate experience and security clearances"
            },
            {
              icon: Shield,
              title: "Fully Insured",
              description: "Complete liability coverage and bonded employees for your peace of mind"
            },
            {
              icon: CheckCircle,
              title: "Quality Assurance",
              description: "Regular inspections and satisfaction guarantees for consistent results"
            }
          ].map((feature, index) => (
            <Card key={index} className="bg-background/80 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services List */}
        <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-border/50">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Complete Corporate Cleaning Solutions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Daily Office Cleaning",
              "Conference Room Sanitization",
              "Reception Area Maintenance",
              "Restroom Deep Cleaning",
              "Kitchen & Break Room Service",
              "Window & Glass Cleaning",
              "Carpet & Upholstery Care",
              "Post-Construction Cleanup",
              "Medical Office Cleaning"
            ].map((service, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Ready to Enhance Your Workplace Environment?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us for a customized cleaning plan that fits your corporate needs and schedule.
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            variant="hero"
            size="lg"
            className="text-lg px-8 py-6 h-auto"
          >
            <MessageCircle className="h-6 w-6 mr-2" />
            Request Corporate Quote
          </Button>
        </div>
      </div>
    </section>
  );
};