import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";
import aboutBlurredBg from "@/assets/about-blurred-bg.jpg";
import cleaningPattern from "@/assets/cleaning-pattern.jpg";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  const features = t('about.features', { returnObjects: true });

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Enhanced Background Images */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full opacity-8">
          <img src={aboutBlurredBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-full opacity-15">
          <img src={cleaningPattern} alt="" className="w-full h-full object-cover" />
        </div>
        {/* Moving decorative elements */}
        <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-primary/15 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-brand-yellow/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/5 w-12 h-12 bg-accent/15 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/5 right-1/5 w-8 h-8 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-background/96 via-background/93 to-background/98 z-1"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {Array.isArray(features) && features.map((feature, i) => (
            <Card key={i} className="bg-white/80 shadow-lg border-0">
              <CardContent className="flex flex-col items-center p-8">
                <div className="mb-4">
                  {i === 0 && <Target className="h-10 w-10 text-primary" />}
                  {i === 1 && <CheckCircle className="h-10 w-10 text-primary" />}
                  {i === 2 && <Heart className="h-10 w-10 text-primary" />}
                  {i === 3 && <Eye className="h-10 w-10 text-primary" />}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground text-center">{feature.title}</h3>
                <p className="text-muted-foreground text-center text-sm">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};