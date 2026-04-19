import { useTranslation } from "react-i18next";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    nameAr: "ياسر بن مضواح",
    nameEn: "Yaser bin Mudwah",
    textAr: "الله يوفقكم، فريق عمل متميز وشغل مرتب ونظيف",
    textEn: "May God bless you, an outstanding team with neat and clean work",
    rating: 5,
  },
  {
    nameAr: "آلاء القرشي",
    nameEn: "Alaa Al-Qurashi",
    textAr: "خدمتهم جداً رائعة، يستحقون التجربة",
    textEn: "Their service is truly wonderful, they deserve to be tried",
    rating: 5,
  },
  {
    nameAr: "حسن العتيبي",
    nameEn: "Hassan Al-Otaibi",
    textAr: "شكراً كلينولوجي على الخدمة والتجربة الرائعة. والله دقة متناهية، اهتمام بأدق التفاصيل، واستعداد دائم لتقبل الملاحظات بصدر رحب والتأكد من رضا العميل. استخدموا مواد تنظيف متخصصة لإزالة أصعب البقايا والرواسب، وعملوا يومين متتاليين لتنظيف الفيلا. إدارة وإشراف سعودي لمتابعة كل التفاصيل. خدمة حقيقية تستحق التجربة وبقوة!",
    textEn: "Thank you Kleenology for the amazing service and experience. Incredible precision, attention to the finest details, and always ready to receive feedback. They used specialized cleaning products and worked two consecutive days on the villa. A service that truly deserves a try!",
    rating: 5,
  },
  {
    nameAr: "الزين",
    nameEn: "AlZain",
    textAr: "الله يعطيهم الف عافية، رائع شغلهم وإحترافي ماشاء الله، إن شاء الله مو آخر تعامل معاكم",
    textEn: "May God bless them, their work is wonderful and professional mashallah. Definitely not our last deal with you!",
    rating: 5,
  },
  {
    nameAr: "ف",
    nameEn: "F",
    textAr: "من افضل شركات التنظيف في الرياض، تعاملت مع شركات كثيرة لكن للأسف بعد ما ينظفون ويمشون تلقى ملاحظات. لكن شركة كلينولوجي كسرت هذي القاعدة، مهتمين برضا العميل. أنصحكم بالتعامل معهم وبقوة عن تجربة!",
    textEn: "One of the best cleaning companies in Riyadh. Kleenology broke the pattern — they truly care about client satisfaction. Highly recommend from experience!",
    rating: 5,
  },
  {
    nameAr: "Om Faisal 20",
    nameEn: "Om Faisal 20",
    textAr: "ماشاء الله طلبتهم والحمدلله متوفرين في نفس اليوم، سعر منطقي، وأخذوا وقتهم وهم ينظفون. العمالة مع مشرف من الجنسية السودانية.",
    textEn: "Mashallah, I called them and they were available the same day. Reasonable price, they took their time cleaning.",
    rating: 5,
  },
];

const ReviewCard = ({ review, isRTL }: { review: typeof reviews[0]; isRTL: boolean }) => (
  <div className="w-80 flex-shrink-0 bg-white rounded-2xl p-6 border border-border shadow-sm flex flex-col mx-3">
    <Quote className="h-7 w-7 text-primary/30 mb-3 flex-shrink-0" />
    <div className="flex gap-1 mb-3">
      {Array.from({ length: review.rating }).map((_, j) => (
        <Star key={j} className="h-4 w-4 text-brand-yellow fill-brand-yellow" />
      ))}
    </div>
    <p className="text-foreground/80 leading-relaxed text-sm flex-1 line-clamp-4">
      {isRTL ? review.textAr : review.textEn}
    </p>
    <div className="mt-5 pt-4 border-t border-border flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
        {(isRTL ? review.nameAr : review.nameEn).charAt(0)}
      </div>
      <div>
        <p className="font-semibold text-foreground text-sm">
          {isRTL ? review.nameAr : review.nameEn}
        </p>
        <p className="text-xs text-muted-foreground">
          {isRTL ? "عميل موثق" : "Verified Client"}
        </p>
      </div>
    </div>
  </div>
);

export const Testimonials = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  return (
    <section className="py-20 bg-white overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto px-4 mb-14">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-brand-yellow/20 text-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Star className="h-4 w-4 text-brand-yellow fill-brand-yellow" />
            {isRTL ? "آراء عملائنا" : "Client Reviews"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {isRTL ? "ماذا يقول عملاؤنا؟" : "What Our Clients Say"}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {isRTL
              ? "تجارب حقيقية من عملاء وثقوا بكلينولوجي"
              : "Real experiences from clients who trusted Kleenology"}
          </p>
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-4">
        <div className="flex animate-marquee-left">
          {[...reviews, ...reviews].map((r, i) => (
            <ReviewCard key={i} review={r} isRTL={isRTL} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative">
        <div className="flex animate-marquee-right">
          {[...reviews, ...reviews].map((r, i) => (
            <ReviewCard key={i} review={r} isRTL={isRTL} />
          ))}
        </div>
      </div>
    </section>
  );
};
