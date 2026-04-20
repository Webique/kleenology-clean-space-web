import { useState, useEffect, useRef } from "react";
import { SEO } from "@/components/SEO";
import { MessageCircle, Phone, ArrowLeft, Star } from "lucide-react";

const REVIEWS = [
  { name: "ياسر بن مضواح", text: "الله يوفقكم، فريق عمل متميز وشغل مرتب ونظيف", stars: 5 },
  { name: "حسن العتيبي", text: "دقة متناهية، اهتمام بأدق التفاصيل. خدمة تستحق التجربة!", stars: 5 },
  { name: "الزين", text: "رائع شغلهم وإحترافي ماشاء الله، إن شاء الله مو آخر تعامل معاكم", stars: 5 },
];

function useInView(ref: React.RefObject<HTMLElement>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

export default function PremiumLanding() {
  const whatsApp = () => window.open(`https://wa.me/966537519929?text=${encodeURIComponent("مرحباً، أريد الاستفسار عن خدمات التنظيف")}`, "_blank");
  const call = () => { window.location.href = "tel:+966537519929"; };

  const statsRef = useRef<HTMLDivElement>(null);
  const statsVisible = useInView(statsRef);

  return (
    <div dir="rtl" className="min-h-screen overflow-x-hidden" style={{ background: "#fafaf8", fontFamily: "Arial, sans-serif" }}>
      <SEO
        title="كلينولوجي — تنظيف احترافي في الرياض"
        description="كلينولوجي. +٦٩٠ عميل في الرياض. مواد آمنة. ضمان الرضا ١٠٠٪."
        keywords="شركة تنظيف الرياض, تنظيف منازل احترافي"
        url="https://kleenology.me/premium"
      />

      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 py-4" style={{ background: "rgba(250,250,248,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e8e8e4" }}>
        <a href="/"><img src="/lovable-uploads/afda02d7-63e7-4998-92eb-dbe3d776cea3.png" alt="Kleenology" className="h-10 w-auto" /></a>
        <button onClick={call} className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" dir="ltr">0537 519 929</button>
      </nav>

      {/* Hero — asymmetric */}
      <section className="min-h-screen flex flex-col justify-end pb-16 pt-32 px-6 md:px-16 relative overflow-hidden">
        {/* Big background number */}
        <div
          className="absolute top-0 left-0 select-none pointer-events-none"
          style={{
            fontSize: "clamp(200px, 40vw, 500px)",
            fontWeight: 900,
            color: "transparent",
            WebkitTextStroke: "1.5px #e0ede0",
            lineHeight: 0.85,
            letterSpacing: "-0.05em",
          }}
        >
          690
        </div>

        <div className="relative max-w-5xl">
          <p className="text-green-600 text-xs font-bold tracking-[0.25em] uppercase mb-8">
            الرياض · منذ ٢٠٢٢
          </p>
          <h1 style={{ fontSize: "clamp(42px, 7vw, 96px)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.03em", color: "#0f1a0f" }}>
            كلينولوجي.
            <br />
            <span style={{ color: "#16a34a" }}>٦٩٠ منزل</span>
            <br />
            لا تكذب.
          </h1>
          <p className="mt-8 text-gray-400 text-lg max-w-md leading-relaxed">
            ما عندنا وعود كبيرة. عندنا ٦٩٠ عميل في الرياض جربونا وعادوا.
            هذا يكفي.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <button
              onClick={whatsApp}
              className="group flex items-center gap-3 font-bold text-white px-7 py-4 rounded-full transition-all active:scale-95"
              style={{ background: "#16a34a" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#15803d")}
              onMouseLeave={e => (e.currentTarget.style.background = "#16a34a")}
            >
              <MessageCircle className="h-5 w-5" />
              احجز عبر واتساب
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={call}
              className="flex items-center gap-3 font-semibold text-gray-700 px-7 py-4 rounded-full border border-gray-200 hover:border-green-500 hover:text-green-700 transition-all"
            >
              <Phone className="h-4 w-4" />
              اتصل الآن
            </button>
          </div>
        </div>

        {/* Bottom quote */}
        <div className="relative mt-20 pt-8 border-t border-gray-200 max-w-xl">
          <p className="text-sm text-gray-400 italic leading-relaxed">
            "رائع شغلهم وإحترافي ماشاء الله، إن شاء الله مو آخر تعامل معاكم"
          </p>
          <p className="text-xs text-gray-300 mt-2">— الزين، عميل من الرياض</p>
        </div>
      </section>

      {/* Stats — animated */}
      <section ref={statsRef} className="py-24 px-6 md:px-16" style={{ background: "#0f1a0f" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { value: "+690", suffix: "", label: "عميل وثق بنا في الرياض" },
            { value: "3", suffix: " سنوات", label: "نعمل في السوق المحلي" },
            { value: "100", suffix: "٪", label: "ضمان الرضا أو نعود مجاناً" },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                opacity: statsVisible ? 1 : 0,
                transform: statsVisible ? "translateY(0)" : "translateY(24px)",
                transition: `all 0.6s ease ${i * 0.15}s`,
              }}
            >
              <div style={{ fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 900, color: "#4ade80", letterSpacing: "-0.04em", lineHeight: 1 }}>
                {s.value}<span style={{ color: "#16a34a", fontSize: "0.6em" }}>{s.suffix}</span>
              </div>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services — editorial list */}
      <section className="py-24 px-6 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-start justify-between mb-16 gap-8 flex-wrap">
          <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#0f1a0f", lineHeight: 1.1 }}>
            وش نسوي<br />بالضبط؟
          </h2>
          <p className="text-gray-400 max-w-xs text-sm leading-relaxed self-end">
            متخصصون في التنظيف فقط — لا صيانة، لا تركيبات، لا تشتيت.
          </p>
        </div>

        <div>
          {[
            ["تنظيف المنازل والفلل", "يومي · أسبوعي · شهري"],
            ["التنظيف العميق الشامل", "من الأسقف للأرضيات، يشمل الخزائن والنوافذ"],
            ["تنظيف المكاتب والشركات", "قبل الدوام أو بعده"],
            ["تنظيف السجاد بالبخار", "إزالة البقع العميقة وتجديد الألوان"],
            ["تنظيف ما بعد البناء", "تسليم نظيف جاهز للسكن"],
          ].map(([title, sub], i) => (
            <div
              key={i}
              className="group flex items-center justify-between py-6 border-b cursor-default hover:px-4 transition-all"
              style={{ borderColor: "#e8e8e4" }}
            >
              <div>
                <p className="font-bold text-lg" style={{ color: "#0f1a0f" }}>{title}</p>
                <p className="text-gray-400 text-sm mt-0.5">{sub}</p>
              </div>
              <span
                className="text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                style={{ background: "#e8f5e9", color: "#16a34a" }}
              >
                احجز
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Guarantee — full bleed */}
      <section className="mx-4 md:mx-8 rounded-3xl py-20 px-8 md:px-16 mb-8" style={{ background: "#16a34a" }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div style={{ fontSize: "clamp(64px, 12vw, 140px)", fontWeight: 900, color: "rgba(255,255,255,0.15)", lineHeight: 1, letterSpacing: "-0.05em", flexShrink: 0 }}>
            100٪
          </div>
          <div>
            <h3 className="text-white font-black text-2xl md:text-3xl mb-4" style={{ letterSpacing: "-0.02em" }}>
              غير راضٍ؟ نرجع.
            </h3>
            <p className="text-green-100 leading-relaxed text-base">
              ما نحتاج نقنعك. إذا انتهينا وما عجبك الشغل،
              نرجع خلال ٢٤ ساعة ونعيد كل شيء — مجاناً،
              بدون نقاش، بدون شروط.
            </p>
            <button
              onClick={whatsApp}
              className="mt-8 inline-flex items-center gap-2 bg-white text-green-700 font-bold px-6 py-3 rounded-full hover:bg-green-50 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              احجز الآن
            </button>
          </div>
        </div>
      </section>

      {/* Reviews — staggered */}
      <section className="py-24 px-6 md:px-16 max-w-5xl mx-auto">
        <p className="text-green-600 text-xs font-bold tracking-[0.2em] uppercase mb-12">
          ماذا قالوا
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl"
              style={{
                background: i === 1 ? "#0f1a0f" : "#f0f4f0",
                marginTop: i === 1 ? "0" : i === 0 ? "0" : "32px",
              }}
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} className={`h-4 w-4 fill-current ${i === 1 ? "text-green-400" : "text-green-600"}`} />
                ))}
              </div>
              <p className={`text-sm leading-relaxed mb-6 ${i === 1 ? "text-gray-300" : "text-gray-600"}`}>
                "{r.text}"
              </p>
              <p className={`font-bold text-sm ${i === 1 ? "text-white" : "text-gray-900"}`}>
                {r.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA — minimal */}
      <section className="py-32 px-6 text-center">
        <p className="text-gray-300 text-sm mb-4">جاهز؟</p>
        <h2
          style={{ fontSize: "clamp(40px, 7vw, 80px)", fontWeight: 900, letterSpacing: "-0.04em", color: "#0f1a0f", lineHeight: 1 }}
          className="mb-10"
        >
          تواصل معنا.
        </h2>
        <button
          onClick={whatsApp}
          className="group inline-flex items-center gap-3 font-bold text-lg text-white px-10 py-5 rounded-full transition-all hover:gap-5 active:scale-95"
          style={{ background: "#16a34a" }}
          onMouseEnter={e => (e.currentTarget.style.background = "#15803d")}
          onMouseLeave={e => (e.currentTarget.style.background = "#16a34a")}
        >
          <MessageCircle className="h-6 w-6" />
          واتساب
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
        </button>
        <p className="mt-5 text-sm text-gray-400">
          أو{" "}
          <button onClick={call} className="underline hover:text-gray-700 transition-colors" dir="ltr">
            0537 519 929
          </button>
        </p>
      </section>

      <div className="border-t py-6 text-center text-xs text-gray-300" style={{ borderColor: "#e8e8e4" }}>
        © 2024 كلينولوجي — الرياض
      </div>

      {/* Floating WhatsApp */}
      <button
        onClick={whatsApp}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
        style={{ background: "#25D366" }}
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </button>
    </div>
  );
}
