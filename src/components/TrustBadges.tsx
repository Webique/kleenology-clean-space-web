import { useTranslation } from "react-i18next";
import { ShieldCheck, Leaf, BadgeCheck, Clock } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    titleAr: "ضمان ١٠٠٪",
    titleEn: "100% Guarantee",
    descAr: "راضٍ أو نعود مجاناً",
    descEn: "Satisfied or we return free",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: BadgeCheck,
    titleAr: "فريق معتمد",
    titleEn: "Certified Team",
    descAr: "خبرة ومهنية عالية",
    descEn: "Highly trained professionals",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Leaf,
    titleAr: "مواد آمنة",
    titleEn: "Eco-Friendly",
    descAr: "آمنة لعائلتك والبيئة",
    descEn: "Safe for family & environment",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Clock,
    titleAr: "خدمة سريعة",
    titleEn: "Fast Service",
    descAr: "نصل في الوقت المحدد دائماً",
    descEn: "Always on time delivery",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

export const TrustBadges = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  return (
    <section className="py-12 bg-white border-y border-border" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((b, i) => (
            <div key={i} className="flex flex-col items-center text-center p-5 rounded-2xl border border-border hover:shadow-sm transition-shadow">
              <div className={`w-14 h-14 rounded-2xl ${b.bg} flex items-center justify-center mb-3`}>
                <b.icon className={`h-7 w-7 ${b.color}`} />
              </div>
              <h3 className="font-bold text-foreground text-sm mb-1">
                {isRTL ? b.titleAr : b.titleEn}
              </h3>
              <p className="text-xs text-muted-foreground">
                {isRTL ? b.descAr : b.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
