import { ServicePageLayout, ServiceContent } from "@/components/ServicePageLayout";
import { Wind, Shield, Leaf, Zap, Thermometer, Star } from "lucide-react";

const ar: ServiceContent = {
  seo: {
    title: "تنظيف مكيفات احترافي | كلينولوجي",
    description: "تنظيف وصيانة المكيفات بأحدث الأجهزة. تنظيف الفلاتر والكويلات والمواسير. هواء نقي وكفاءة أعلى وفاتورة كهرباء أقل.",
    keywords: "تنظيف مكيفات, صيانة مكيفات, تنظيف فلاتر, تنظيف كويل مكيف, كلينولوجي",
    url: "https://kleenology.com/ac-cleaning",
  },
  heroGradient: "bg-gradient-to-br from-cyan-600 via-cyan-500 to-blue-400",
  hero: {
    icon: <Wind className="h-10 w-10 text-white" />,
    title: "تنظيف مكيفات احترافي",
    subtitle: "تنظيف شامل للمكيفات يحسن جودة الهواء، يرفع كفاءة التبريد، ويخفض فاتورة الكهرباء. فريق متخصص بأحدث الأجهزة.",
    whatsappText: "مرحباً، أود الاستفسار عن خدمة تنظيف المكيفات",
  },
  stats: [
    { value: "٣٠٪", label: "توفير في الكهرباء" },
    { value: "١٠٠٪", label: "هواء نقي" },
    { value: "+٤٠٠", label: "مكيف منظف" },
  ],
  includes: {
    title: "ماذا تشمل خدمة تنظيف المكيفات؟",
    items: [
      "تنظيف الفلاتر وإزالة الغبار والأوساخ",
      "غسيل الكويل بالمياه والمنظفات المتخصصة",
      "تنظيف الوحدة الداخلية والخارجية",
      "تعقيم وتطهير داخل المكيف بمواد آمنة",
      "تنظيف صواني التكثيف وأنابيب التصريف",
      "فحص مستوى الفريون وضغط النظام",
      "تنظيف الريش والمراوح الداخلية",
      "إزالة العفن والبكتيريا بالأشعة فوق البنفسجية",
      "اختبار تشغيل المكيف بعد التنظيف",
      "تقرير حالة المكيف وتوصيات الصيانة",
    ],
  },
  benefits: [
    {
      icon: <Leaf className="h-7 w-7 text-cyan-600" />,
      title: "هواء أنقى وأصح",
      desc: "إزالة العفن والبكتيريا والغبار لهواء نظيف يحمي صحة عائلتك.",
    },
    {
      icon: <Zap className="h-7 w-7 text-cyan-600" />,
      title: "توفير في الكهرباء",
      desc: "مكيف نظيف يعمل بكفاءة أعلى بنسبة تصل إلى ٣٠٪.",
    },
    {
      icon: <Thermometer className="h-7 w-7 text-cyan-600" />,
      title: "تبريد أفضل وأسرع",
      desc: "تحسين أداء التبريد وتوزيع الهواء البارد بشكل أمثل.",
    },
  ],
  steps: [
    { num: "١", title: "الفحص والتحضير", desc: "يفحص الفني المكيف ويضع أغطية الحماية قبل البدء." },
    { num: "٢", title: "تنظيف شامل", desc: "تنظيف وغسيل كامل للوحدتين الداخلية والخارجية." },
    { num: "٣", title: "اختبار وتسليم", desc: "تشغيل المكيف والتأكد من الأداء الأمثل قبل المغادرة." },
  ],
  cta: {
    title: "استمتع بهواء نقي وكهرباء أقل",
    subtitle: "نظف مكيفاتك اليوم واستمتع بتبريد أفضل وهواء أصح.",
    whatsappLabel: "تواصل عبر واتساب",
    bookLabel: "احجز الآن",
  },
  breadcrumb: "تنظيف مكيفات",
};

const en: ServiceContent = {
  seo: {
    title: "Professional AC Cleaning Services | Kleenology",
    description: "AC cleaning and maintenance with advanced equipment. Filter, coil, and duct cleaning. Better air quality, higher efficiency, lower electricity bills.",
    keywords: "AC cleaning, air conditioner cleaning, filter cleaning, coil cleaning, kleenology",
    url: "https://kleenology.com/ac-cleaning",
  },
  heroGradient: "bg-gradient-to-br from-cyan-600 via-cyan-500 to-blue-400",
  hero: {
    icon: <Wind className="h-10 w-10 text-white" />,
    title: "Professional AC Cleaning",
    subtitle: "Comprehensive AC cleaning that improves air quality, boosts cooling efficiency, and reduces electricity bills. Specialized team with advanced equipment.",
    whatsappText: "Hello! I'd like to inquire about your AC cleaning service",
  },
  stats: [
    { value: "30%", label: "Electricity Savings" },
    { value: "100%", label: "Clean Air" },
    { value: "400+", label: "ACs Cleaned" },
  ],
  includes: {
    title: "What's Included in AC Cleaning?",
    items: [
      "Filter cleaning and dust removal",
      "Coil washing with specialized solutions",
      "Indoor and outdoor unit cleaning",
      "Full interior sanitization with safe products",
      "Condensate tray and drain pipe cleaning",
      "Freon level and pressure check",
      "Fan blades and internal fan cleaning",
      "Mold and bacteria removal with UV treatment",
      "Post-cleaning operation test",
      "AC condition report and maintenance recommendations",
    ],
  },
  benefits: [
    {
      icon: <Leaf className="h-7 w-7 text-cyan-600" />,
      title: "Cleaner, Healthier Air",
      desc: "Removing mold, bacteria, and dust for clean air that protects your family's health.",
    },
    {
      icon: <Zap className="h-7 w-7 text-cyan-600" />,
      title: "Save on Electricity",
      desc: "A clean AC operates up to 30% more efficiently, lowering your bills.",
    },
    {
      icon: <Thermometer className="h-7 w-7 text-cyan-600" />,
      title: "Better & Faster Cooling",
      desc: "Improved cooling performance and optimal cool air distribution.",
    },
  ],
  steps: [
    { num: "1", title: "Inspect & Prepare", desc: "Technician inspects the AC and places protective covers before starting." },
    { num: "2", title: "Full Cleaning", desc: "Complete washing of both indoor and outdoor units." },
    { num: "3", title: "Test & Handover", desc: "Running the AC and verifying optimal performance before leaving." },
  ],
  cta: {
    title: "Enjoy Clean Air & Lower Bills",
    subtitle: "Clean your ACs today for better cooling and healthier air.",
    whatsappLabel: "Contact via WhatsApp",
    bookLabel: "Book Now",
  },
  breadcrumb: "AC Cleaning",
};

const AcCleaning = () => <ServicePageLayout ar={ar} en={en} />;
export default AcCleaning;
