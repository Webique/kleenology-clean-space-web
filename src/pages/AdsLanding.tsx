import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import {
  MessageCircle,
  Phone,
  CheckCircle2,
  Star,
  Shield,
  Clock,
  MapPin,
  ChevronDown,
} from "lucide-react";

const reviews = [
  { name: "ياسر بن مضواح", text: "فريق عمل متميز وشغل مرتب ونظيف، الله يوفقكم", stars: 5 },
  { name: "حسن العتيبي", text: "دقة متناهية واهتمام بأدق التفاصيل. خدمة تستحق التجربة!", stars: 5 },
  { name: "الزين", text: "رائع شغلهم وإحترافي ماشاء الله، إن شاء الله مو آخر تعامل", stars: 5 },
];

const includes = [
  "تنظيف المنازل والفلل",
  "تنظيف عميق شامل",
  "تنظيف المكاتب والشركات",
  "تنظيف السجاد بالبخار",
  "تنظيف ما بعد البناء",
  "تعقيم وتطهير كامل",
];

const faqs = [
  { q: "كم تستغرق الخدمة؟", a: "عادةً يوم عمل واحد حسب حجم المكان." },
  { q: "هل المواد آمنة للأطفال؟", a: "نعم، نستخدم مواد معتمدة وصديقة للبيئة آمنة تماماً." },
  { q: "هل يوجد ضمان؟", a: "نعم، ضمان رضا ١٠٠٪ أو نعود مجاناً خلال ٢٤ ساعة." },
  { q: "كيف أحجز؟", a: "اضغط زر واتساب أدناه وسنرد خلال دقائق." },
];

export default function AdsLanding() {
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  // Slots based on day of week — busier on Sun-Wed
  const [slots, setSlots] = useState(3);
  const [lastBooking, setLastBooking] = useState(14);
  useEffect(() => {
    const day = new Date().getDay(); // 0=Sun
    const slotsByDay = [3, 2, 2, 1, 3, 4, 4]; // Sun-Sat
    setSlots(slotsByDay[day]);
    // Random "last booking" between 8-40 min ago
    setLastBooking(Math.floor(Math.random() * 32) + 8);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleWhatsApp = () => {
    const msg = isRTL
      ? "مرحباً، رأيت إعلانكم وأريد الاستفسار عن خدمة التنظيف"
      : "Hello, I saw your ad and would like to inquire about cleaning service";
    window.open(`https://wa.me/966537519929?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+966537519929";
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <SEO
        title="احجز خدمة تنظيف الآن في الرياض | كلينولوجي"
        description="كلينولوجي — أفضل شركة تنظيف في الرياض. فريق معتمد، مواد آمنة، ضمان الرضا ١٠٠٪. احجز الآن عبر واتساب!"
        keywords="شركة تنظيف الرياض, احجز تنظيف, تنظيف منازل الرياض"
        url="https://kleenology.me/book-now"
      />

      {/* Top Bar */}
      <div className="bg-foreground text-white py-2 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4 text-sm">
          <span className="flex items-center gap-1.5">
            🔥 تبقى <span className="text-brand-yellow font-bold mx-1">{slots}</span> مواعيد فقط هذا الأسبوع
          </span>
          <span className="flex items-center gap-1.5 text-white/60 text-xs whitespace-nowrap">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            آخر حجز منذ {lastBooking} دقيقة
          </span>
        </div>
      </div>

      {/* Header - minimal */}
      <header className="border-b border-gray-100 px-4 py-3 flex items-center justify-between max-w-4xl mx-auto">
        <img src="/lovable-uploads/afda02d7-63e7-4998-92eb-dbe3d776cea3.png" alt="Kleenology" className="h-12 w-auto" />
        <button
          onClick={handleCall}
          className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
        >
          <Phone className="h-4 w-4" />
          <span dir="ltr">0537 - 519 929</span>
        </button>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-bl from-primary/10 to-white px-4 py-14 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 border border-green-200 rounded-full px-4 py-1 text-sm font-semibold mb-5">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            متاح الآن للحجز في الرياض
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            نظافة احترافية تصل إليك
            <span className="text-primary block">في الرياض</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            فريق معتمد، مواد آمنة للأطفال، وضمان رضا ١٠٠٪
            <br />
            <span className="font-semibold text-foreground">+٦٩٠ عميل سعيد في الرياض</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg px-8 py-4 gap-2 h-auto shadow-lg"
            >
              <MessageCircle className="h-6 w-6" />
              احجز الآن عبر واتساب
            </Button>
            <Button
              onClick={handleCall}
              variant="outline"
              size="lg"
              className="text-base px-6 py-4 gap-2 h-auto border-2"
            >
              <Phone className="h-5 w-5" />
              اتصل بنا مباشرة
            </Button>
          </div>

          <p className="text-xs text-gray-400">لا حاجة لبطاقة ائتمان — تواصل مجاني</p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-foreground py-6 px-4">
        <div className="max-w-3xl mx-auto grid grid-cols-4 gap-4 text-center">
          {[
            { v: "+690", l: "عميل" },
            { v: "٣", l: "سنوات" },
            { v: "٤.٩★", l: "تقييم" },
            { v: "١٠٠٪", l: "ضمان" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-xl md:text-2xl font-bold text-brand-yellow">{s.v}</div>
              <div className="text-xs text-white/70">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services included */}
      <section className="py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">
            ماذا نقدم لك؟
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {includes.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-10 bg-primary/5 px-4">
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          {[
            { icon: <Shield className="h-7 w-7 text-primary mx-auto mb-2" />, title: "ضمان الرضا", desc: "نعود مجاناً خلال ٢٤ ساعة إذا لم تكن راضياً" },
            { icon: <Clock className="h-7 w-7 text-primary mx-auto mb-2" />, title: "التزام بالمواعيد", desc: "نصل في الوقت المحدد بدون تأخير" },
            { icon: <MapPin className="h-7 w-7 text-primary mx-auto mb-2" />, title: "جميع أحياء الرياض", desc: "نخدم كل أحياء ومناطق الرياض" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
              {item.icon}
              <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">
            ماذا قال عملاؤنا؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reviews.map((r, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-5 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">"{r.text}"</p>
                <p className="text-sm font-bold text-foreground">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 bg-gray-50 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-foreground mb-6">أسئلة شائعة</h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-right font-semibold text-foreground text-sm"
                >
                  {faq.q}
                  <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform flex-shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-gray-600">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-foreground text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2">احجز الآن قبل امتلاء المواعيد</h2>
          <p className="text-white/60 text-sm mb-6">
            تبقى <span className="text-brand-yellow font-bold">{slots} مواعيد فقط</span> هذا الأسبوع — احجز قبل الامتلاء
          </p>
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg px-10 py-4 gap-2 h-auto w-full sm:w-auto"
          >
            <MessageCircle className="h-6 w-6" />
            احجز عبر واتساب الآن
          </Button>
        </div>
      </section>

      {/* Sticky WhatsApp */}
      <Button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-float hover:shadow-lg transform hover:scale-110 transition-all duration-300"
        size="icon"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </Button>
    </div>
  );
}
