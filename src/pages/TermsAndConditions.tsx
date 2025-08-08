import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { SEO } from "@/components/SEO";

const TermsAndConditions = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  return (
    <div className={`min-h-screen bg-muted/30 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <SEO 
        title={t('terms.pageTitle')}
        description={t('terms.pageDescription')}
        keywords="terms and conditions, kleenology terms, cleaning service terms, شروط وأحكام, شروط الخدمة"
        url="https://kleenology.com/terms-and-conditions"
      />
      
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {t('terms.title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('terms.subtitle')}
            </p>
          </div>

          {/* Terms Content */}
          <div className={`bg-white rounded-lg shadow-sm border border-border p-8 sm:p-12 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className={`prose prose-lg max-w-none ${isRTL ? 'prose-headings:text-right prose-p:text-right' : ''}`}>
              
              {/* Introduction */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 border-b-2 border-primary pb-2">
                  {t('terms.introduction.title')}
                </h2>
                <ul className={`space-y-3 text-muted-foreground ${isRTL ? 'list-none' : 'list-none'}`}>
                  {(t('terms.introduction.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
                    <li key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className={`w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 ${isRTL ? 'ml-0 mr-3' : 'mr-0 ml-3'}`}></span>
                      <span className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Client Obligations */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 border-b-2 border-primary pb-2">
                  {t('terms.clientObligations.title')}
                </h2>
                <ul className={`space-y-3 text-muted-foreground ${isRTL ? 'list-none' : 'list-none'}`}>
                  {(t('terms.clientObligations.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
                    <li key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className={`w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 ${isRTL ? 'ml-0 mr-3' : 'mr-0 ml-3'}`}></span>
                      <span className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Item Sensitivity */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 border-b-2 border-primary pb-2">
                  {t('terms.itemSensitivity.title')}
                </h2>
                <ul className={`space-y-3 text-muted-foreground ${isRTL ? 'list-none' : 'list-none'}`}>
                  {(t('terms.itemSensitivity.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
                    <li key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className={`w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 ${isRTL ? 'ml-0 mr-3' : 'mr-0 ml-3'}`}></span>
                      <span className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Appointment Changes */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 border-b-2 border-primary pb-2">
                  {t('terms.appointmentChanges.title')}
                </h2>
                <ul className={`space-y-3 text-muted-foreground ${isRTL ? 'list-none' : 'list-none'}`}>
                  {(t('terms.appointmentChanges.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
                    <li key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className={`w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 ${isRTL ? 'ml-0 mr-3' : 'mr-0 ml-3'}`}></span>
                      <span className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Service Duration */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 border-b-2 border-primary pb-2">
                  {t('terms.serviceDuration.title')}
                </h2>
                <ul className={`space-y-3 text-muted-foreground ${isRTL ? 'list-none' : 'list-none'}`}>
                  {(t('terms.serviceDuration.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
                    <li key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className={`w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 ${isRTL ? 'ml-0 mr-3' : 'mr-0 ml-3'}`}></span>
                      <span className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Liability Disclaimer */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 border-b-2 border-primary pb-2">
                  {t('terms.liabilityDisclaimer.title')}
                </h2>
                <ul className={`space-y-3 text-muted-foreground ${isRTL ? 'list-none' : 'list-none'}`}>
                  {(t('terms.liabilityDisclaimer.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
                    <li key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className={`w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 ${isRTL ? 'ml-0 mr-3' : 'mr-0 ml-3'}`}></span>
                      <span className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Offers and Discounts */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 border-b-2 border-primary pb-2">
                  {t('terms.offersDiscounts.title')}
                </h2>
                <ul className={`space-y-3 text-muted-foreground ${isRTL ? 'list-none' : 'list-none'}`}>
                  {(t('terms.offersDiscounts.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
                    <li key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className={`w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 ${isRTL ? 'ml-0 mr-3' : 'mr-0 ml-3'}`}></span>
                      <span className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Loyalty Program */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 border-b-2 border-primary pb-2">
                  {t('terms.loyaltyProgram.title')}
                </h2>
                <ul className={`space-y-3 text-muted-foreground ${isRTL ? 'list-none' : 'list-none'}`}>
                  {(t('terms.loyaltyProgram.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
                    <li key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className={`w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 ${isRTL ? 'ml-0 mr-3' : 'mr-0 ml-3'}`}></span>
                      <span className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Contact Information */}
              <section className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {t('terms.contact.title')}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t('terms.contact.description')}
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>{t('terms.contact.phone')}:</strong> +966 53 751 9929</p>
                  <p><strong>{t('terms.contact.email')}:</strong> info@kleenology.com</p>
                  <p><strong>{t('terms.contact.website')}:</strong> www.kleenology.com</p>
                </div>
              </section>

              {/* Last Updated */}
              <div className="text-center mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  {t('terms.lastUpdated')}: {new Date().toLocaleDateString(i18n.language === 'ar' ? 'ar-SA' : 'en-US')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;