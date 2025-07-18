import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* About Kleenology */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            About <span className="text-primary">Kleenology</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Kleenology is a specialized cleaning company committed to delivering spotless results using the latest technologies and eco-friendly products. We prioritize your comfort and trust and are proud to serve hundreds of satisfied customers.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
            Why Choose <span className="text-primary">Kleenology?</span>
          </h3>
          
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            At Kleenology, cleaning is just the beginning. We're all about creating a space that feels fresh, safe, and truly cared for, with every detail tailored to your comfort and peace of mind.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Philosophy, Mission, Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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