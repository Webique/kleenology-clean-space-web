import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { BeforeAfterShowcase } from "@/components/BeforeAfterShowcase";
import { CorporateCleaning } from "@/components/CorporateCleaning";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { SEO } from "@/components/SEO";
import { useState } from "react";

const Index = () => {
  const { t, i18n } = useTranslation();
  const [showTerms, setShowTerms] = useState(false);
  const isRTL = i18n.dir() === 'rtl';
  
  console.log('Index component rendering, i18n language:', i18n.language);
  
  const handleWhatsAppClick = () => {
    if ((window as any).pixelTracker) {
      (window as any).pixelTracker.trackWhatsAppClick();
    }
    window.open('https://wa.me/966537519929', '_blank');
  };

  const handleShowTerms = () => {
    setShowTerms(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHideTerms = () => {
    setShowTerms(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={showTerms ? "Terms and Conditions - Kleenology" : "Kleenology - Professional Cleaning Services | Excellence in Every Inch"}
        description={showTerms ? "Read our comprehensive terms and conditions for Kleenology cleaning services. Professional cleaning with clear policies." : "Kleenology delivers spotless cleaning results using eco-friendly products. Professional home and office cleaning services with satisfaction guarantee."}
        keywords={showTerms ? "terms and conditions, kleenology terms, cleaning service terms, شروط وأحكام, شروط الخدمة" : "cleaning services, professional cleaning, house cleaning, office cleaning, eco-friendly cleaning, deep cleaning, sanitization"}
        url={showTerms ? "https://kleenology.com/terms-and-conditions" : "https://kleenology.com"}
      />
      
      <Header onLogoClick={handleHideTerms} onNavClick={handleHideTerms} />
      
      {showTerms ? (
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                {t('terms.title')}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t('terms.subtitle')}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-border p-8 sm:p-12" dir={isRTL ? 'rtl' : 'ltr'}>
              <div className="prose prose-lg max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4 border-b-2 border-primary pb-2">
                    {t('terms.introduction.title')}
                  </h2>
                  <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                    {(t('terms.introduction.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4 border-b-2 border-primary pb-2">
                    {t('terms.clientObligations.title')}
                  </h2>
                  <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                    {(t('terms.clientObligations.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </section>
                
                <section className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {t('terms.contact.title')}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {t('terms.contact.description')}
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>{t('terms.contact.phone')}:</strong> <span dir="ltr">+966 53 751 9929</span></p>
                    <p><strong>{t('terms.contact.email')}:</strong> <span dir="ltr">info@kleenology.com</span></p>
                    <p><strong>{t('terms.contact.website')}:</strong> <span dir="ltr">www.kleenology.com</span></p>
                  </div>
                </section>
                
                <div className="text-center mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    {t('terms.lastUpdated')}: {new Date().toLocaleDateString(i18n.language === 'ar' ? 'ar-SA' : 'en-US')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <>
          <Hero />
          <About />
          <Services />
          <BeforeAfterShowcase />
          <CorporateCleaning />
          <Contact />
        </>
      )}
      
      <Footer onTermsClick={handleShowTerms} onNavClick={handleHideTerms} />
      
      <Button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-float hover:shadow-lg transform hover:scale-110 transition-all duration-300 md:hidden"
        size="icon"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </Button>
    </div>
  );
};

export default Index;
