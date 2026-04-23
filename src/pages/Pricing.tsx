import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import {
  CheckCircle2, MessageCircle, Home, Building, Castle,
  Layers, Sparkles, Star, Shield, Sofa, Utensils,
  Bath, Plus, ChevronDown, ChevronUp,
} from "lucide-react";

const WHATSAPP = "966537519929";

// ─── Pricing Data ───────────────────────────────────────────────
const PLACE_TYPES = {
  ar: [
    {
      group: "شقق",
      items: [
        { key: "studio",     label: "استوديو",        sub: "حتى 50 م²",         icon: Home,    general: 500,  deep: 600  },
        { key: "apt-small",  label: "شقة صغيرة",      sub: "50 – 100 م²",        icon: Home,    general: 600,  deep: 800  },
        { key: "apt-medium", label: "شقة وسط",         sub: "100 – 200 م²",       icon: Home,    general: 800,  deep: 1200 },
        { key: "apt-large",  label: "شقة كبيرة",      sub: "200 – 300 م²",       icon: Home,    general: 900,  deep: 1500 },
      ],
    },
    {
      group: "أدوار",
      items: [
        { key: "floor-normal", label: "دور عادي",     sub: "150 – 250 م²",       icon: Layers,  general: 1300, deep: 2000 },
        { key: "floor-large",  label: "دور كبير",     sub: "250 – 400 م²",       icon: Layers,  general: 1800, deep: 2800 },
      ],
    },
    {
      group: "فلل",
      items: [
        { key: "villa-small",  label: "فيلا صغيرة",  sub: "300 – 400 م²",       icon: Castle,  general: 2000, deep: 3600 },
        { key: "villa-medium", label: "فيلا وسط",     sub: "400 – 600 م²",       icon: Castle,  general: 3500, deep: 4800 },
        { key: "villa-large",  label: "فيلا كبيرة",  sub: "أكثر من 600 م²",     icon: Castle,  general: null, deep: 5600 },
      ],
    },
  ],
  en: [
    {
      group: "Apartments",
      items: [
        { key: "studio",     label: "Studio",         sub: "Up to 50 m²",        icon: Home,    general: 500,  deep: 600  },
        { key: "apt-small",  label: "Small Apartment",sub: "50 – 100 m²",        icon: Home,    general: 600,  deep: 800  },
        { key: "apt-medium", label: "Medium Apartment",sub:"100 – 200 m²",       icon: Home,    general: 800,  deep: 1200 },
        { key: "apt-large",  label: "Large Apartment",sub: "200 – 300 m²",       icon: Home,    general: 900,  deep: 1500 },
      ],
    },
    {
      group: "Floors",
      items: [
        { key: "floor-normal", label: "Regular Floor",sub: "150 – 250 m²",      icon: Layers,  general: 1300, deep: 2000 },
        { key: "floor-large",  label: "Large Floor",  sub: "250 – 400 m²",      icon: Layers,  general: 1800, deep: 2800 },
      ],
    },
    {
      group: "Villas",
      items: [
        { key: "villa-small",  label: "Small Villa",  sub: "300 – 400 m²",      icon: Castle,  general: 2000, deep: 3600 },
        { key: "villa-medium", label: "Medium Villa", sub: "400 – 600 m²",      icon: Castle,  general: 3500, deep: 4800 },
        { key: "villa-large",  label: "Large Villa",  sub: "600 m²+",           icon: Castle,  general: null, deep: 5600 },
      ],
    },
  ],
};

const ADDONS = {
  ar: {
    furniture: {
      label: "الأثاث",
      icon: Sofa,
      items: [
        { name: "سجاد / موكيت",      price: 9,   unit: "/ م²" },
        { name: "مسند ظهر",          price: 25,  unit: "/ م²" },
        { name: "جلسة عربية",        price: 30,  unit: "/ م²" },
        { name: "كنب مقعد واحد",     price: 40,  unit: "/ قطعة" },
        { name: "كنب مقعدين",        price: 80,  unit: "/ قطعة" },
        { name: "كنب 3 مقاعد",       price: 120, unit: "/ قطعة" },
        { name: "كنب 4 مقاعد",       price: 160, unit: "/ قطعة" },
        { name: "كرسي طعام",         price: 15,  unit: "/ قطعة" },
        { name: "كنب استرخاء",       price: 80,  unit: "/ قطعة" },
        { name: "ستارة صغيرة",       price: 70,  unit: "/ قطعة" },
        { name: "ستارة كبيرة",       price: 90,  unit: "/ قطعة" },
        { name: "مرتبة مفردة",       price: 120, unit: "/ قطعة" },
        { name: "مرتبة مزدوجة",      price: 140, unit: "/ قطعة" },
      ],
    },
    kitchens: {
      label: "المطابخ",
      icon: Utensils,
      items: [
        { name: "مطبخ جديد صغير",    price: 500  },
        { name: "مطبخ مستعمل صغير",  price: 600  },
        { name: "مطبخ جديد وسط",     price: 700  },
        { name: "مطبخ مستعمل وسط",   price: 800  },
        { name: "مطبخ جديد كبير",    price: 900  },
        { name: "مطبخ مستعمل كبير",  price: 1000 },
      ],
    },
    bathrooms: {
      label: "دورات المياه",
      icon: Bath,
      items: [
        { name: "دورة مياه صغيرة",   price: 100 },
        { name: "دورة مياه كبيرة",   price: 130 },
      ],
    },
    extra: {
      label: "إضافات أخرى",
      icon: Plus,
      items: [
        { name: "نافذة صغيرة",       price: 50,  unit: "/ قطعة" },
        { name: "نافذة وسط",         price: 70,  unit: "/ قطعة" },
        { name: "نافذة كبيرة",       price: 100, unit: "/ قطعة" },
        { name: "تنظيف أرضيات",      price: 7,   unit: "/ م²" },
        { name: "تنظيف درج (دور واحد)", price: 150 },
      ],
    },
  },
  en: {
    furniture: {
      label: "Furniture",
      icon: Sofa,
      items: [
        { name: "Carpet / Rug",       price: 9,   unit: "/ m²" },
        { name: "Backrest",           price: 25,  unit: "/ m²" },
        { name: "Arabic Seating",     price: 30,  unit: "/ m²" },
        { name: "Single Sofa",        price: 40,  unit: "/ piece" },
        { name: "2-Seat Sofa",        price: 80,  unit: "/ piece" },
        { name: "3-Seat Sofa",        price: 120, unit: "/ piece" },
        { name: "4-Seat Sofa",        price: 160, unit: "/ piece" },
        { name: "Dining Chair",       price: 15,  unit: "/ piece" },
        { name: "Recliner",           price: 80,  unit: "/ piece" },
        { name: "Small Curtain",      price: 70,  unit: "/ piece" },
        { name: "Large Curtain",      price: 90,  unit: "/ piece" },
        { name: "Single Mattress",    price: 120, unit: "/ piece" },
        { name: "Double Mattress",    price: 140, unit: "/ piece" },
      ],
    },
    kitchens: {
      label: "Kitchens",
      icon: Utensils,
      items: [
        { name: "New Small Kitchen",  price: 500  },
        { name: "Used Small Kitchen", price: 600  },
        { name: "New Medium Kitchen", price: 700  },
        { name: "Used Medium Kitchen",price: 800  },
        { name: "New Large Kitchen",  price: 900  },
        { name: "Used Large Kitchen", price: 1000 },
      ],
    },
    bathrooms: {
      label: "Bathrooms",
      icon: Bath,
      items: [
        { name: "Small Bathroom",     price: 100 },
        { name: "Large Bathroom",     price: 130 },
      ],
    },
    extra: {
      label: "Other Add-ons",
      icon: Plus,
      items: [
        { name: "Small Window",       price: 50,  unit: "/ piece" },
        { name: "Medium Window",      price: 70,  unit: "/ piece" },
        { name: "Large Window",       price: 100, unit: "/ piece" },
        { name: "Floor Cleaning",     price: 7,   unit: "/ m²" },
        { name: "Staircase (1 floor)",price: 150 },
      ],
    },
  },
};

// ─── Component ──────────────────────────────────────────────────
export default function Pricing() {
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const lang = isRTL ? "ar" : "en";

  const [serviceType, setServiceType] = useState<"general" | "deep">("general");
  const [openAddon, setOpenAddon] = useState<string | null>("furniture");

  const groups = PLACE_TYPES[lang];
  const addons = ADDONS[lang];

  const openWhatsApp = (msg: string) =>
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");

  const bookPlace = (label: string, price: number) => {
    const msg = isRTL
      ? `مرحباً، أريد حجز خدمة ${serviceType === "general" ? "تنظيف عام" : "تنظيف تأهيلي"} لـ ${label} بسعر ${price} ر.س`
      : `Hello! I'd like to book ${serviceType === "general" ? "General Cleaning" : "Deep Cleaning"} for ${label} at ${price} SAR`;
    openWhatsApp(msg);
  };

  return (
    <div className={`min-h-screen bg-background ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
      <SEO
        title={isRTL ? "أسعار خدمات التنظيف | كلينولوجي" : "Cleaning Service Prices | Kleenology"}
        description={isRTL
          ? "أسعار شفافة وواضحة لخدمات التنظيف في الرياض. تنظيف عام وتأهيلي للشقق والأدوار والفلل مع إضافات متعددة."
          : "Transparent pricing for cleaning services in Riyadh. General and deep cleaning for apartments, floors, and villas."}
        keywords="أسعار تنظيف, تكلفة تنظيف, cleaning prices, kleenology pricing"
        url="https://kleenology.me/pricing"
      />
      <Header />

      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 to-brand-blue/5 py-12 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {isRTL ? "أسعار شفافة بلا مفاجآت" : "Transparent Prices, No Surprises"}
            </h1>
            <p className="text-muted-foreground text-lg">
              {isRTL
                ? "اختر نوع الخدمة ونوع المكان واعرف السعر مباشرة"
                : "Pick your service type and property — get the price instantly"}
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 mt-10 space-y-10">

          {/* Special Offer */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Star className="h-6 w-6 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-foreground text-lg">
                  {isRTL ? "عرض المجلس" : "Majlis Package"}
                </p>
                <p className="text-muted-foreground text-sm mt-0.5">
                  {isRTL
                    ? "طقم كنب 9 مقاعد + سجادة 20 م² + ستارة"
                    : "9-seat sofa set + 20 m² carpet + curtain"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-amber-600">299 {isRTL ? "ر.س" : "SAR"}</span>
              <Button
                size="sm"
                className="bg-amber-500 hover:bg-amber-600 text-white"
                onClick={() => openWhatsApp(isRTL
                  ? "مرحباً، أريد الاستفسار عن عرض المجلس (299 ر.س)"
                  : "Hello! I'd like to inquire about the Majlis Package (299 SAR)")}
              >
                {isRTL ? "احجز الآن" : "Book Now"}
              </Button>
            </div>
          </div>

          {/* Service Type Toggle */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-foreground">
              {isRTL ? "نوع الخدمة" : "Service Type"}
            </h2>
            <div className="grid grid-cols-2 gap-3 max-w-md">
              {[
                {
                  key: "general" as const,
                  label: isRTL ? "تنظيف عام" : "General Cleaning",
                  desc: isRTL ? "تنظيف دوري شامل" : "Regular thorough cleaning",
                },
                {
                  key: "deep" as const,
                  label: isRTL ? "تنظيف تأهيلي" : "Deep Cleaning",
                  desc: isRTL ? "تنظيف عميق ومكثف" : "Intensive deep clean",
                },
              ].map(({ key, label, desc }) => (
                <button
                  key={key}
                  onClick={() => setServiceType(key)}
                  className={cn(
                    "p-4 rounded-xl border-2 text-start transition-all duration-200",
                    serviceType === key
                      ? "border-primary bg-primary/5 shadow-md"
                      : "border-border hover:border-primary/40",
                  )}
                >
                  {serviceType === key && (
                    <CheckCircle2 className="h-4 w-4 text-primary mb-1" />
                  )}
                  <p className="font-bold text-foreground">{label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Price Cards by Group */}
          {groups.map((group) => (
            <div key={group.group}>
              <h2 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full inline-block" />
                {group.group}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map(({ key, label, sub, icon: Icon, general, deep }) => {
                  const price = serviceType === "general" ? general : deep;
                  const unavailable = price === null;
                  return (
                    <div
                      key={key}
                      className={cn(
                        "bg-white rounded-2xl border border-border p-5 flex flex-col gap-4 transition-all duration-200",
                        !unavailable && "hover:shadow-md hover:border-primary/30",
                        unavailable && "opacity-50",
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-bold text-foreground">{label}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                        </div>
                      </div>

                      <div className="mt-auto">
                        {unavailable ? (
                          <p className="text-sm text-muted-foreground font-medium">
                            {isRTL ? "تواصل للسعر" : "Contact for price"}
                          </p>
                        ) : (
                          <p className="text-2xl font-bold text-primary">
                            {price?.toLocaleString("ar-SA")}
                            <span className="text-sm font-medium text-muted-foreground ms-1">
                              {isRTL ? "ر.س" : "SAR"}
                            </span>
                          </p>
                        )}
                        <Button
                          size="sm"
                          className="mt-3 w-full"
                          onClick={() =>
                            openWhatsApp(
                              isRTL
                                ? `مرحباً، أريد حجز خدمة ${serviceType === "general" ? "تنظيف عام" : "تنظيف تأهيلي"} لـ ${label} (${sub})${price ? ` بسعر ${price} ر.س` : ""}`
                                : `Hello! I'd like to book ${serviceType === "general" ? "General Cleaning" : "Deep Cleaning"} for ${label} (${sub})${price ? ` at ${price} SAR` : ""}`,
                            )
                          }
                        >
                          <MessageCircle className="h-3.5 w-3.5 me-1.5" />
                          {isRTL ? "احجز الآن" : "Book Now"}
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Add-ons */}
          <div>
            <h2 className="text-xl font-bold mb-2 text-foreground">
              {isRTL ? "إضافات وخدمات تكميلية" : "Add-ons & Extra Services"}
            </h2>
            <p className="text-muted-foreground text-sm mb-5">
              {isRTL
                ? "يمكن إضافتها لأي باقة بالأسعار أدناه"
                : "Can be added to any package at the prices below"}
            </p>
            <div className="space-y-3">
              {Object.entries(addons).map(([key, section]) => {
                const Icon = section.icon;
                const isOpen = openAddon === key;
                return (
                  <div key={key} className="bg-white rounded-2xl border border-border overflow-hidden">
                    <button
                      onClick={() => setOpenAddon(isOpen ? null : key)}
                      className="w-full flex items-center justify-between px-5 py-4 hover:bg-muted/30 transition-colors"
                    >
                      <span className="flex items-center gap-3 font-bold text-foreground">
                        <Icon className="h-5 w-5 text-primary" />
                        {section.label}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="border-t border-border divide-y divide-border">
                        {section.items.map((item) => (
                          <div
                            key={item.name}
                            className="flex items-center justify-between px-5 py-3"
                          >
                            <span className="text-sm text-foreground">{item.name}</span>
                            <span className="font-bold text-primary text-sm">
                              {item.price} {isRTL ? "ر.س" : "SAR"}
                              {"unit" in item && item.unit && (
                                <span className="font-normal text-muted-foreground text-xs ms-1">
                                  {item.unit}
                                </span>
                              )}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Trust + CTA */}
          <div className="bg-gradient-to-br from-primary/5 to-brand-blue/5 rounded-2xl p-6 text-center">
            <div className="flex justify-center gap-6 mb-5">
              {[
                { Icon: Shield, text: isRTL ? "ضمان ١٠٠٪" : "100% Guarantee" },
                { Icon: Star,   text: isRTL ? "تقييم ٤.٩" : "4.9 Rating" },
                { Icon: Sparkles, text: isRTL ? "فريق محترف" : "Pro Team" },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex flex-col items-center gap-1">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="text-xs font-semibold text-foreground">{text}</span>
                </div>
              ))}
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              {isRTL ? "مو متأكد من الخيار؟" : "Not sure which to pick?"}
            </h3>
            <p className="text-muted-foreground text-sm mb-5">
              {isRTL
                ? "تواصل معنا وسنساعدك تختار الباقة المناسبة لمكانك"
                : "Contact us and we'll help you choose the right package"}
            </p>
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold px-8"
              onClick={() => openWhatsApp(isRTL
                ? "مرحباً، أريد الاستفسار عن أسعار خدمات التنظيف"
                : "Hello! I'd like to inquire about cleaning service prices")}
            >
              <MessageCircle className="h-5 w-5 me-2" />
              {isRTL ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
            </Button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
