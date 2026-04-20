import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { MessageCircle, Phone, Check, Star, ChevronDown } from "lucide-react";

const SERVICES = [
  { num: "01", title: "تنظيف المنازل والفلل", desc: "تنظيف دوري أو لمرة واحدة بأعلى معايير الجودة" },
  { num: "02", title: "التنظيف العميق الشامل", desc: "تنظيف كامل من الأسقف حتى الأرضيات، يشمل الخزائن والنوافذ" },
  { num: "03", title: "تنظيف المكاتب والشركات", desc: "بيئة عمل نظيفة تعكس احترافية مؤسستك" },
  { num: "04", title: "تنظيف السجاد بالبخار", desc: "إزالة البقع العميقة وتجديد ألوان السجاد" },
  { num: "05", title: "تنظيف ما بعد البناء", desc: "تسليم المشروع نظيفاً جاهزاً للسكن أو الافتتاح" },
];

const REVIEWS = [
  { name: "ياسر بن مضواح", text: "الله يوفقكم، فريق عمل متميز وشغل مرتب ونظيف", stars: 5 },
  { name: "حسن العتيبي", text: "دقة متناهية، اهتمام بأدق التفاصيل، واستعداد دائم لتقبل الملاحظات. خدمة تستحق التجربة!", stars: 5 },
  { name: "الزين", text: "رائع شغلهم وإحترافي ماشاء الله، إن شاء الله مو آخر تعامل معاكم", stars: 5 },
];

const FAQS = [
  { q: "هل أحتاج لتوفير مواد التنظيف؟", a: "لا. الفريق يصل بكامل معداته ومواده. تحتاج فقط لتوفير الماء والكهرباء." },
  { q: "كم تستغرق الخدمة؟", a: "الخدمة العادية يوم عمل واحد. التنظيف العميق وما بعد البناء قد يمتد ليومين حسب المساحة." },
  { q: "ماذا لو لم أكن راضياً؟", a: "نضمن رضاك ١٠٠٪. نعود ونعيد العمل مجاناً خلال ٢٤ ساعة بدون نقاش." },
  { q: "ما هي مناطق الخدمة؟", a: "نخدم جميع أحياء مدينة الرياض." },
];

export default function PremiumLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleWhatsApp = () => {
    const msg = "مرحباً، أريد الاستفسار عن خدمات التنظيف";
    window.open(`https://wa.me/966537519929?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+966537519929";
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl" style={{ fontFamily: "'Segoe UI', Arial, sans-serif" }}>
      <SEO
        title="كلينولوجي — تنظيف احترافي في الرياض"
        description="كلينولوجي. خدمات تنظيف احترافية في الرياض منذ ٣ سنوات. +٦٩٠ عميل، ضمان الرضا ١٠٠٪."
        keywords="شركة تنظيف الرياض, تنظيف منازل احترافي, كلينولوجي"
        url="https://kleenology.me/premium"
      />

      {/* Header */}
      <header className="px-8 py-5 flex items-center justify-between max-w-6xl mx-auto">
        <a href="/">
          <img
            src="/lovable-uploads/afda02d7-63e7-4998-92eb-dbe3d776cea3.png"
            alt="Kleenology"
            className="h-12 w-auto"
          />
        </a>
        <button
          onClick={handleCall}
          className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-green-700 transition-colors"
        >
          <Phone className="h-4 w-4" />
          <span dir="ltr">0537 519 929</span>
        </button>
      </header>

      {/* Hero */}
      <section className="px-8 pt-16 pb-24 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="w-8 h-px bg-green-600" />
            <span className="text-green-700 text-sm font-semibold tracking-wider uppercase">
              الرياض — منذ ٢٠٢٢
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl font-black text-gray-950 leading-none mb-8"
            style={{ letterSpacing: "-0.02em" }}
          >
            نظافة
            <br />
            <span className="text-green-600">تستحقها.</span>
          </h1>

          <p className="text-xl text-gray-500 leading-relaxed mb-12 max-w-lg">
            فريق متخصص، مواد آمنة لعائلتك، وضمان رضا كامل.
            أكثر من ٦٩٠ منزل وشركة في الرياض وثقوا بنا.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-green-200 active:scale-95"
            >
              <MessageCircle className="h-5 w-5" />
              احجز الآن عبر واتساب
            </button>
            <button
              onClick={handleCall}
              className="inline-flex items-center justify-center gap-3 bg-white border-2 border-gray-200 hover:border-green-600 text-gray-800 font-semibold text-base px-8 py-4 rounded-full transition-all active:scale-95"
            >
              <Phone className="h-5 w-5" />
              اتصل مباشرة
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-3 divide-x divide-x-reverse divide-gray-200">
          {[
            { value: "+٦٩٠", label: "عميل سعيد" },
            { value: "٣", label: "سنوات في السوق" },
            { value: "١٠٠٪", label: "ضمان الرضا" },
          ].map((s, i) => (
            <div key={i} className="py-10 px-6 text-center">
              <div
                className="text-4xl font-black text-gray-950 mb-1"
                style={{ letterSpacing: "-0.02em" }}
              >
                {s.value}
              </div>
              <div className="text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
            <p className="text-green-600 text-sm font-semibold tracking-wider uppercase mb-3">خدماتنا</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-950" style={{ letterSpacing: "-0.02em" }}>
              ماذا نقدم لك؟
            </h2>
          </div>
        </div>

        <div className="space-y-px">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="group flex items-center gap-6 py-6 border-b border-gray-100 hover:bg-green-50 px-4 -mx-4 rounded-xl transition-colors cursor-default"
            >
              <span className="text-green-600 font-bold text-sm w-8 flex-shrink-0">{s.num}</span>
              <div className="flex-1">
                <h3 className="font-bold text-gray-950 text-lg mb-0.5">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
              <Check className="h-5 w-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            </div>
          ))}
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-green-600 py-20 px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="text-center md:text-right flex-shrink-0">
            <div
              className="text-8xl font-black text-white leading-none"
              style={{ letterSpacing: "-0.04em" }}
            >
              100٪
            </div>
            <div className="text-green-200 font-semibold mt-1">ضمان الرضا</div>
          </div>
          <div className="w-px h-20 bg-green-500 hidden md:block" />
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              غير راضٍ؟ نعود مجاناً.
            </h3>
            <p className="text-green-100 leading-relaxed">
              إذا لم تكن راضياً عن النتيجة لأي سبب، نعود خلال ٢٤ ساعة
              ونعيد العمل بالكامل مجاناً — بدون نقاش، بدون شروط.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <p className="text-green-600 text-sm font-semibold tracking-wider uppercase mb-3">تقييمات العملاء</p>
        <h2
          className="text-3xl md:text-4xl font-black text-gray-950 mb-14"
          style={{ letterSpacing: "-0.02em" }}
        >
          ماذا قالوا عنا؟
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-green-500 text-green-500" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm">"{r.text}"</p>
              <p className="font-bold text-gray-950 text-sm">{r.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 px-8">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl font-black text-gray-950 mb-10"
            style={{ letterSpacing: "-0.02em" }}
          >
            أسئلة شائعة
          </h2>
          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-right font-bold text-gray-950 text-sm"
                >
                  {faq.q}
                  <ChevronDown
                    className={`h-4 w-4 text-gray-400 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-8 text-center">
        <div className="max-w-xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-black text-gray-950 mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            ابدأ الآن.
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            تواصل معنا على واتساب وسنرتب معك الموعد خلال دقائق.
          </p>
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-12 py-5 rounded-full transition-all hover:shadow-xl hover:shadow-green-200 active:scale-95"
          >
            <MessageCircle className="h-6 w-6" />
            تواصل عبر واتساب
          </button>
          <p className="text-sm text-gray-400 mt-5">
            أو اتصل على{" "}
            <button
              onClick={handleCall}
              className="underline hover:text-gray-700 transition-colors"
              dir="ltr"
            >
              0537 519 929
            </button>
          </p>
        </div>
      </section>

      <div className="border-t border-gray-100 py-6 text-center text-xs text-gray-300">
        © 2024 كلينولوجي — الرياض
      </div>

      {/* Sticky WhatsApp */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl flex items-center justify-center transform hover:scale-110 transition-all duration-300"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </button>
    </div>
  );
}
