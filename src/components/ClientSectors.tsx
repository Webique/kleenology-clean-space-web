import { useTranslation } from "react-i18next";
import { Building2, Stethoscope, UtensilsCrossed, Hotel, HardHat, Home, Users } from "lucide-react";

const sectors = [
  { icon: Home, key: "homes" },
  { icon: Building2, key: "offices" },
  { icon: Stethoscope, key: "medical" },
  { icon: UtensilsCrossed, key: "restaurants" },
  { icon: Hotel, key: "hotels" },
  { icon: HardHat, key: "construction" },
];

const content = {
  ar: {
    title: "من نخدم؟",
    subtitle: "نقدم خدماتنا لمختلف القطاعات بأعلى معايير النظافة والاحترافية",
    sectors: {
      homes: { label: "المنازل والشقق", desc: "تنظيف منازل وشقق سكنية بكل أحجامها" },
      offices: { label: "الشركات والمكاتب", desc: "بيئة عمل نظيفة تعكس احترافية شركتك" },
      medical: { label: "العيادات والمستشفيات", desc: "تعقيم وتنظيف بمعايير طبية عالية" },
      restaurants: { label: "المطاعم والكافيهات", desc: "نظافة مطابخ وصالات بمعايير الصحة العامة" },
      hotels: { label: "الفنادق والشقق المفروشة", desc: "تنظيف احترافي يليق بضيوفك" },
      construction: { label: "المقاولات والتشطيبات", desc: "تنظيف ما بعد البناء وتسليم جاهز" },
    },
  },
  en: {
    title: "Who We Serve",
    subtitle: "We deliver cleaning services across all sectors with the highest standards of quality",
    sectors: {
      homes: { label: "Homes & Apartments", desc: "Cleaning for residential spaces of all sizes" },
      offices: { label: "Companies & Offices", desc: "A clean workplace that reflects your professionalism" },
      medical: { label: "Clinics & Hospitals", desc: "Sanitization and cleaning to medical-grade standards" },
      restaurants: { label: "Restaurants & Cafes", desc: "Kitchen and dining area cleaning to health standards" },
      hotels: { label: "Hotels & Furnished Apartments", desc: "Professional cleaning worthy of your guests" },
      construction: { label: "Construction & Finishing", desc: "Post-construction cleanup, ready for handover" },
    },
  },
};

export const ClientSectors = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const c = isRTL ? content.ar : content.en;

  return (
    <section className="py-20 bg-muted/30" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Users className="h-4 w-4" />
            {isRTL ? "عملاؤنا" : "Our Clients"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {c.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {c.subtitle}
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {sectors.map(({ icon: Icon, key }) => {
            const sector = c.sectors[key as keyof typeof c.sectors];
            return (
              <div
                key={key}
                className="group bg-white rounded-2xl p-6 border border-border hover:border-primary/40 hover:shadow-clean transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-1 text-base">
                  {sector.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {sector.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
