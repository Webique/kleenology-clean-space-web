import { useState, useEffect, useRef } from "react";
import { SEO } from "@/components/SEO";
import { MessageCircle, Phone, Star, ArrowLeft, CheckCircle } from "lucide-react";

/* ── tiny hook: fires once when element enters viewport ── */
function useFadeIn(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ── count-up ── */
function useCountUp(target: number, active: boolean, duration = 1800) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(ease * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return val;
}

const SERVICES = [
  { icon: "🏠", title: "تنظيف المنازل والفلل", desc: "دوري أو لمرة واحدة بأعلى معايير الجودة" },
  { icon: "✨", title: "التنظيف العميق الشامل", desc: "من الأسقف للأرضيات — لا زاوية تُنسى" },
  { icon: "🏢", title: "تنظيف المكاتب والشركات", desc: "بيئة عمل نظيفة تعكس احترافيتك" },
  { icon: "🧶", title: "تنظيف السجاد بالبخار", desc: "إزالة البقع العميقة وتجديد الألوان" },
  { icon: "🔨", title: "تنظيف ما بعد البناء", desc: "تسليم نظيف جاهز للسكن أو الافتتاح" },
  { icon: "🧴", title: "التعقيم والتطهير الشامل", desc: "مواد معتمدة آمنة للأطفال والحيوانات" },
];

const REVIEWS = [
  { name: "ياسر بن مضواح", text: "الله يوفقكم، فريق عمل متميز وشغل مرتب ونظيف", stars: 5 },
  { name: "حسن العتيبي", text: "دقة متناهية، اهتمام بأدق التفاصيل. خدمة تستحق التجربة وبقوة!", stars: 5 },
  { name: "الزين", text: "رائع شغلهم وإحترافي ماشاء الله، إن شاء الله مو آخر تعامل معاكم", stars: 5 },
];

const TICKER = ["تنظيف احترافي", "مواد آمنة للأطفال", "ضمان الرضا ١٠٠٪", "الرياض", "+٦٩٠ عميل", "فريق معتمد", "تنظيف احترافي", "مواد آمنة للأطفال", "ضمان الرضا ١٠٠٪", "الرياض", "+٦٩٠ عميل", "فريق معتمد"];

export default function PremiumLanding() {
  const wa = () => window.open(`https://wa.me/966537519929?text=${encodeURIComponent("مرحباً، أريد الاستفسار عن خدمات التنظيف")}`, "_blank");
  const call = () => { window.location.href = "tel:+966537519929"; };

  const stats = useFadeIn(0.3);
  const c690 = useCountUp(690, stats.visible);
  const c3 = useCountUp(3, stats.visible);
  const c100 = useCountUp(100, stats.visible);

  const s1 = useFadeIn(); const s2 = useFadeIn(); const s3 = useFadeIn();
  const s4 = useFadeIn(); const s5 = useFadeIn(); const s6 = useFadeIn();
  const servRefs = [s1, s2, s3, s4, s5, s6];

  const revSection = useFadeIn(0.1);

  return (
    <div dir="rtl" style={{ fontFamily: "Arial, sans-serif", background: "#f8faf8", overflowX: "hidden" }}>
      <SEO
        title="كلينولوجي — تنظيف احترافي في الرياض"
        description="+٦٩٠ عميل في الرياض. مواد آمنة. ضمان الرضا ١٠٠٪. احجز الآن."
        keywords="شركة تنظيف الرياض, تنظيف منازل, كلينولوجي"
        url="https://kleenology.me/premium"
      />

      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(3deg); }
        }
        @keyframes floatB {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(14px) rotate(-4deg); }
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes glowPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(22,163,74,0.4); }
          50% { box-shadow: 0 0 0 16px rgba(22,163,74,0); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .glow-btn { animation: glowPulse 2.5s ease-in-out infinite; }
        .float-a { animation: float 6s ease-in-out infinite; }
        .float-b { animation: floatB 8s ease-in-out infinite; }
        .ticker-wrap { animation: ticker 22s linear infinite; }
        .grad-bg {
          background: linear-gradient(135deg, #e8f5e9, #f0fdf4, #dcfce7, #f8faf8);
          background-size: 400% 400%;
          animation: gradientShift 10s ease infinite;
        }
      `}</style>

      {/* Nav */}
      <nav style={{ position: "fixed", top: 0, inset: "0 0 auto", zIndex: 100, background: "rgba(248,250,248,0.88)", backdropFilter: "blur(16px)", borderBottom: "1px solid #e2ece2" }}
        className="flex items-center justify-between px-6 md:px-14 py-3">
        <a href="/"><img src="/lovable-uploads/afda02d7-63e7-4998-92eb-dbe3d776cea3.png" alt="Kleenology" style={{ height: "clamp(56px, 8vw, 80px)", width: "auto" }} /></a>
        <button onClick={call} className="text-sm font-semibold text-gray-500 hover:text-green-700 transition-colors" dir="ltr">0537 519 929</button>
      </nav>

      {/* ─── HERO ─── */}
      <section className="grad-bg min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 relative overflow-hidden">
        {/* floating blobs */}
        <div className="float-a absolute top-24 right-12 w-32 h-32 rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #16a34a, transparent)" }} />
        <div className="float-b absolute bottom-28 left-8 w-52 h-52 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #15803d, transparent)" }} />
        <div className="float-a absolute top-1/2 left-1/3 w-20 h-20 rounded-full opacity-15 pointer-events-none" style={{ background: "radial-gradient(circle, #4ade80, transparent)", animationDelay: "3s" }} />

        {/* badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs font-bold text-green-700 border border-green-200" style={{ background: "rgba(255,255,255,0.7)" }}>
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
          متاح الآن في الرياض
        </div>

        <h1 style={{ fontSize: "clamp(44px, 8vw, 100px)", fontWeight: 900, letterSpacing: "-0.04em", color: "#052e16", lineHeight: 1.0 }}>
          نظافة<br />
          <span style={{ color: "#16a34a" }}>تليق</span><br />
          بمنزلك.
        </h1>

        <p className="mt-7 text-gray-500 text-lg max-w-md leading-relaxed">
          فريق معتمد يعمل في الرياض منذ ٣ سنوات.
          مواد آمنة، وضمان رضا كامل أو نعود مجاناً.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={wa} className="glow-btn inline-flex items-center gap-3 font-bold text-base text-white px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95" style={{ background: "#16a34a" }}>
            <MessageCircle className="h-5 w-5" />
            احجز عبر واتساب
          </button>
          <button onClick={call} className="inline-flex items-center gap-3 font-semibold text-base text-gray-700 px-8 py-4 rounded-full border-2 border-gray-200 hover:border-green-500 hover:text-green-700 transition-all bg-white/60">
            <Phone className="h-4 w-4" />
            اتصل الآن
          </button>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <span className="text-xs text-gray-500">اسحب للأسفل</span>
          <div className="w-px h-8 bg-gray-300 animate-pulse" />
        </div>
      </section>

      {/* ─── TICKER ─── */}
      <div style={{ background: "#052e16", overflow: "hidden", padding: "14px 0" }}>
        <div className="ticker-wrap flex whitespace-nowrap">
          {TICKER.map((t, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-8 text-sm font-bold" style={{ color: "#4ade80" }}>
              <span style={{ color: "#166534" }}>✦</span>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ─── STATS ─── */}
      <section ref={stats.ref} style={{ background: "#052e16" }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { val: c690, suffix: "+", label: "عميل في الرياض وثق بنا" },
            { val: c3, suffix: " سنوات", label: "خبرة في السوق المحلي" },
            { val: c100, suffix: "٪", label: "ضمان الرضا أو نعود مجاناً" },
          ].map((s, i) => (
            <div key={i} style={{ opacity: stats.visible ? 1 : 0, transform: stats.visible ? "none" : "translateY(30px)", transition: `all 0.7s ease ${i * 0.2}s` }}>
              <div style={{ fontSize: "clamp(56px, 8vw, 96px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1, background: "linear-gradient(135deg, #4ade80, #86efac)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {s.val}{s.suffix}
              </div>
              <p style={{ color: "#4b7a5a", fontSize: "14px", marginTop: "10px" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-green-600 text-xs font-bold tracking-[0.3em] uppercase mb-4">خدماتنا</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#052e16" }}>
              ماذا نقدم لك؟
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                ref={servRefs[i].ref}
                style={{
                  opacity: servRefs[i].visible ? 1 : 0,
                  transform: servRefs[i].visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)",
                  transition: `all 0.55s ease ${(i % 3) * 0.12}s`,
                  background: "white",
                  borderRadius: "20px",
                  padding: "28px 24px",
                  border: "1.5px solid #e8f0e8",
                  cursor: "default",
                }}
                className="hover:border-green-400 hover:shadow-lg hover:shadow-green-50 hover:-translate-y-1 transition-all duration-300"
              >
                <div style={{ fontSize: "32px", marginBottom: "14px" }}>{s.icon}</div>
                <h3 style={{ fontWeight: 700, color: "#052e16", fontSize: "16px", marginBottom: "6px" }}>{s.title}</h3>
                <p style={{ color: "#6b7280", fontSize: "13px", lineHeight: "1.6" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GUARANTEE ─── */}
      <section className="px-4 md:px-8 mb-6">
        <div style={{ background: "linear-gradient(135deg, #15803d, #052e16)", borderRadius: "28px", padding: "clamp(48px, 8vw, 80px) clamp(24px, 6vw, 80px)" }}>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="float-b flex-shrink-0 text-center">
              <div style={{ fontSize: "clamp(72px, 14vw, 140px)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.05em", background: "linear-gradient(135deg, #4ade80, #86efac)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                ١٠٠٪
              </div>
              <p style={{ color: "#4ade80", fontSize: "13px", fontWeight: 600, marginTop: "4px" }}>ضمان الرضا</p>
            </div>
            <div>
              <h3 style={{ color: "white", fontWeight: 900, fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "16px" }}>
                غير راضٍ؟<br />نرجع ونعيد كل شيء مجاناً.
              </h3>
              <p style={{ color: "#86efac", fontSize: "15px", lineHeight: "1.8" }}>
                إذا انتهينا وما عجبك الشغل، نعود خلال ٢٤ ساعة بدون نقاش، بدون شروط.
                هذا وعدنا لكل عميل.
              </p>
              <button onClick={wa} className="mt-8 inline-flex items-center gap-2 font-bold text-sm text-green-800 px-6 py-3 rounded-full hover:scale-105 transition-all" style={{ background: "#4ade80" }}>
                <MessageCircle className="h-4 w-4" />
                احجز الآن
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section ref={revSection.ref} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-green-600 text-xs font-bold tracking-[0.3em] uppercase mb-4">آراء العملاء</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#052e16" }}>
              ماذا قالوا عنا؟
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                style={{
                  opacity: revSection.visible ? 1 : 0,
                  transform: revSection.visible ? "none" : `translateY(${30 + i * 10}px)`,
                  transition: `all 0.65s ease ${i * 0.18}s`,
                  background: i === 1 ? "#052e16" : "white",
                  borderRadius: "20px",
                  padding: "28px 24px",
                  border: i === 1 ? "none" : "1.5px solid #e8f0e8",
                  marginTop: i === 1 ? "-16px" : "0",
                  marginBottom: i === 1 ? "-16px" : "0",
                }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Star key={j} className={`h-4 w-4 fill-current ${i === 1 ? "text-green-400" : "text-green-500"}`} />
                  ))}
                </div>
                <p style={{ fontSize: "14px", lineHeight: "1.7", marginBottom: "20px", color: i === 1 ? "#86efac" : "#374151" }}>
                  "{r.text}"
                </p>
                <p style={{ fontWeight: 700, fontSize: "13px", color: i === 1 ? "white" : "#052e16" }}>{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="grad-bg py-32 px-6 text-center relative overflow-hidden">
        <div className="float-a absolute top-10 right-16 w-40 h-40 rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #16a34a, transparent)" }} />
        <div className="float-b absolute bottom-10 left-10 w-56 h-56 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #15803d, transparent)" }} />
        <div className="relative">
          <p style={{ color: "#6b7280", fontSize: "13px", marginBottom: "16px", letterSpacing: "0.15em" }}>جاهز للبدء؟</p>
          <h2 style={{ fontSize: "clamp(40px, 8vw, 90px)", fontWeight: 900, letterSpacing: "-0.04em", color: "#052e16", lineHeight: 1, marginBottom: "40px" }}>
            تواصل معنا<br />
            <span style={{ color: "#16a34a" }}>الآن.</span>
          </h2>
          <button onClick={wa} className="glow-btn inline-flex items-center gap-3 font-bold text-lg text-white px-12 py-5 rounded-full transition-all hover:scale-105 active:scale-95" style={{ background: "#16a34a" }}>
            <MessageCircle className="h-6 w-6" />
            واتساب
            <ArrowLeft className="h-5 w-5" />
          </button>
          <p className="mt-5 text-sm text-gray-400">
            أو اتصل على{" "}
            <button onClick={call} className="underline hover:text-gray-600 transition-colors" dir="ltr">0537 519 929</button>
          </p>
        </div>
      </section>

      <div style={{ borderTop: "1px solid #e2ece2", padding: "24px", textAlign: "center", fontSize: "12px", color: "#9ca3af" }}>
        © 2024 كلينولوجي — الرياض
      </div>

      <button onClick={wa} className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300" style={{ background: "#25D366" }} aria-label="WhatsApp">
        <MessageCircle className="h-7 w-7 text-white" />
      </button>
    </div>
  );
}
