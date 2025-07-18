import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";
import teamCleaningBg from "@/assets/team-cleaning-bg.jpg";
import cleaningPattern from "@/assets/cleaning-pattern.jpg";

export const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Enhanced Background Images */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-6">
          <img src={teamCleaningBg} alt="" className="w-full h-full object-cover rounded-bl-3xl" />
        </div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-12">
          <img src={cleaningPattern} alt="" className="w-full h-full object-cover rounded-tr-2xl" />
        </div>
        {/* Floating decorative elements */}
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-brand-yellow/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/5 w-8 h-8 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/90 to-background/95 z-1"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* About Kleenology */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-foreground">
            About <span className="text-primary">Kleenology</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-4">
            Kleenology is a specialized cleaning company committed to delivering spotless results using the latest technologies and eco-friendly products. We prioritize your comfort and trust and are proud to serve hundreds of satisfied customers.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 sm:mb-12 text-foreground">
            Why Choose <span className="text-primary">Kleenology?</span>
          </h3>
          
          <p className="text-center text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            At Kleenology, cleaning is just the beginning. We're all about creating a space that feels fresh, safe, and truly cared for, with every detail tailored to your comfort and peace of mind.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Masterful Performance",
                description: "A trained and experienced team in all aspects of cleaning."
              },
              {
                title: "Secure Materials",
                description: "We use cleaning materials that are safe for health, and free from harmful substances."
              },
              {
                title: "Punctuality",
                description: "We are committed to arriving and completing the work according to your schedule."
              },
              {
                title: "Tangible Results",
                description: "Because we pay attention to the small details that make a big difference."
              },
              {
                title: "Competitive Prices",
                description: "High quality at affordable prices that are budget-friendly for everyone."
              },
              {
                title: "Responsive Support",
                description: "We are always just a call away to meet your needs."
              }
            ].map((feature, index) => (
              <Card key={index} className="border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-clean">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{feature.title}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Philosophy, Mission, Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <Card className="text-center border-primary/10 hover:shadow-clean transition-all duration-300">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Our Philosophy</h3>
              <h4 className="font-semibold text-primary mb-3">Service with Integrity and Precision</h4>
              <p className="text-muted-foreground">
                At Kleenology, we believe that true cleanliness starts with integrity. That's why we focus on detail, respect privacy, and always deliver what we promise.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-primary/10 hover:shadow-clean transition-all duration-300">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Our Mission</h3>
              <h4 className="font-semibold text-primary mb-3">Raising the Standard of Clean</h4>
              <p className="text-muted-foreground">
                Our mission is to provide top-tier cleaning services tailored to the needs of homes and businesses, with a focus on quality, trust, and long-term relationships.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-primary/10 hover:shadow-clean transition-all duration-300">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Our Vision</h3>
              <h4 className="font-semibold text-primary mb-3">A Cleaner Future for Every Space</h4>
              <p className="text-muted-foreground">
                We envision a future where reliable cleaning services are accessible to every family and business, promoting healthier environments and peace of mind.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};