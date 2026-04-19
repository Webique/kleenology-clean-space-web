import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: { ar: "ما هي مناطق الخدمة؟", en: "What areas do you serve?" },
    a: { ar: "نخدم حالياً جميع أحياء مدينة الرياض.", en: "We currently serve all neighborhoods in Riyadh." },
  },
  {
    q: { ar: "كم تستغرق مدة التنظيف؟", en: "How long does cleaning take?" },
    a: { ar: "تستغرق الخدمة العادية يوم عمل واحد. التنظيف العميق وما بعد البناء قد يستغرق يومين حسب حجم المكان.", en: "Standard service takes one working day. Deep cleaning and post-construction may take two days depending on the size." },
  },
  {
    q: { ar: "هل المواد المستخدمة آمنة للأطفال؟", en: "Are your products safe for children?" },
    a: { ar: "نعم، نستخدم مواد تنظيف معتمدة وصديقة للبيئة آمنة تماماً للأطفال والحيوانات الأليفة.", en: "Yes, we use certified eco-friendly products that are completely safe for children and pets." },
  },
  {
    q: { ar: "هل يوجد ضمان على الخدمة؟", en: "Is there a service guarantee?" },
    a: { ar: "نعم، نضمن رضاك التام. إذا لم تكن راضياً عن النتيجة نعود مجاناً خلال 24 ساعة لإعادة التنظيف.", en: "Yes, we guarantee your complete satisfaction. If you're not satisfied, we return for free within 24 hours." },
  },
  {
    q: { ar: "كيف أحجز الخدمة؟", en: "How do I book a service?" },
    a: { ar: "يمكنك الحجز عبر واتساب مباشرة أو من خلال صفحة الحجز في موقعنا، وسنتواصل معك لتأكيد الموعد.", en: "You can book via WhatsApp directly or through our booking page, and we'll contact you to confirm the appointment." },
  },
  {
    q: { ar: "هل أحتاج لتوفير أدوات التنظيف؟", en: "Do I need to provide cleaning tools?" },
    a: { ar: "لا، فريقنا يصل بكامل معداته ومواد التنظيف المتخصصة. تحتاج فقط لتوفير الماء والكهرباء.", en: "No, our team arrives with all equipment and specialized cleaning products. You only need to provide water and electricity." },
  },
];

export const FAQ = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-muted/30" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="h-4 w-4" />
            {isRTL ? "الأسئلة الشائعة" : "FAQ"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {isRTL ? "أسئلة يسألها عملاؤنا" : "Questions Our Clients Ask"}
          </h2>
          <p className="text-muted-foreground text-lg">
            {isRTL ? "إجابات على أكثر الأسئلة شيوعاً" : "Answers to the most common questions"}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-start hover:bg-muted/30 transition-colors"
              >
                <span className="font-semibold text-foreground">
                  {isRTL ? faq.q.ar : faq.q.en}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                  {isRTL ? faq.a.ar : faq.a.en}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
