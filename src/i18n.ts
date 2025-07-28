import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      hero: {
        headline: 'Excellence in Every Inch',
        tagline: 'Premium cleaning for modern spaces. Trusted by homes and businesses for quality, reliability, and care.',
        startBooking: 'Start Your Booking',
        learnMore: 'Learn More',
        stats: [
          'Happy Clients',
          'Expert Team',
          'Satisfaction',
        ],
      },
      about: {
        title: 'Why Choose Kleenology?',
        subtitle: 'We are committed to delivering spotless results with a focus on quality, trust, and eco-friendly solutions.',
        features: [
          {
            title: 'Attention to Detail',
            desc: 'We clean every corner, leaving nothing behind.'
          },
          {
            title: 'Trusted Professionals',
            desc: 'Our team is background-checked and highly trained.'
          },
          {
            title: 'Eco-Friendly',
            desc: 'We use safe, green products for your family and the planet.'
          },
          {
            title: 'Transparent Pricing',
            desc: 'No hidden fees. Clear, upfront quotes.'
          }
        ]
      },
      services: {
        title: 'Featured Service',
        subtitle: "Your comfort starts with clean — and we're here to make it effortless",
        description: 'Our services are tailored to fit your lifestyle — whether you need precise home cleaning or professional care for offices and commercial spaces. In Kleenology, we deliver all-around cleaning solutions — accurate, dependable, and held to the highest standards.',
        mostPopular: 'Most Popular Services',
        popular: [
          'Condo Cleaning',
          'House Cleaning',
          'Deep Cleaning',
          'Carpet Cleaning',
          'Appliance Cleaning',
          'Windows Cleaning',
        ],
      },
      showcase: {
        title: 'See the Difference We Make',
        subtitle: 'Experience the transformation through our before & after results and watch our professional team in action.',
        beforeAfter: 'Before & After',
        ourTeam: 'Our Team in Action',
        before: 'Before',
        after: 'After',
        dragToCompare: 'Drag to compare',
        videos: [
          'Deep Cleaning Process',
          'Kitchen Transformation',
          'Office Sanitization',
        ],
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'We are here to help! Reach out to us for bookings, questions, or feedback.',
        whatsapp: 'WhatsApp',
        call: 'Call',
        email: 'Email',
        address: 'Address',
        sendMessage: 'Send Message',
      },
      footer: {
        description: 'Specialized cleaning company committed to delivering spotless results using the latest technologies and eco-friendly products.',
        quickLinks: 'Quick Links',
        home: 'Home',
        about: 'About Us',
        services: 'Services',
        contact: 'Contact',
        contactInfo: 'Contact Info',
        copyright: '© 2024 Kleenology. All rights reserved. | Excellence in every inch.'
      },
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        showcase: 'Showcase',
        contact: 'Contact',
        call: 'Call',
        whatsapp: 'WhatsApp',
      },
      corporate: {
        title: 'Corporate & Office Cleaning',
        subtitle: 'Professional cleaning solutions for businesses, offices, and commercial spaces.',
        features: [
          { title: 'Flexible Scheduling', desc: 'Before hours, after hours, or weekend services to fit your business needs' },
          { title: 'Trained Professionals', desc: 'Certified staff with corporate experience and security clearances' },
          { title: 'Fully Insured', desc: 'Complete liability coverage and bonded employees for your peace of mind' },
          { title: 'Quality Assurance', desc: 'Regular inspections and satisfaction guarantees for consistent results' },
        ],
        solutionsTitle: 'Complete Corporate Cleaning Solutions',
        solutions: [
          'Daily Office Cleaning',
          'Conference Room Sanitization',
          'Reception Area Maintenance',
          'Restroom Deep Cleaning',
          'Kitchen & Break Room Service',
          'Window & Glass Cleaning',
          'Carpet & Upholstery Care',
          'Post-Construction Cleanup',
          'Medical Office Cleaning',
        ],
        ctaTitle: 'Ready to Enhance Your Workplace Environment?',
        ctaDesc: 'Contact us for a customized cleaning plan that fits your corporate needs and schedule.',
        ctaButton: 'Request Corporate Quote',
      },
    },
  },
  ar: {
    translation: {
      hero: {
        headline: 'التميز في كل شبر',
        tagline: 'تنظيف متميز للمساحات العصرية. موثوق من قبل المنازل والشركات للجودة والموثوقية والعناية.',
        startBooking: 'ابدأ الحجز',
        learnMore: 'اعرف المزيد',
        stats: [
          'عملاء سعداء',
          'فريق خبراء',
          'رضا تام',
        ],
      },
      about: {
        title: 'لماذا تختار كلينولوجي؟',
        subtitle: 'نلتزم بتقديم نتائج نظافة مثالية مع التركيز على الجودة والثقة والحلول الصديقة للبيئة.',
        features: [
          {
            title: 'الاهتمام بالتفاصيل',
            desc: 'ننظف كل زاوية ولا نترك شيئاً خلفنا.'
          },
          {
            title: 'محترفون موثوقون',
            desc: 'فريقنا مدرب جيداً وذو خلفية موثوقة.'
          },
          {
            title: 'صديق للبيئة',
            desc: 'نستخدم منتجات آمنة وخضراء لعائلتك وكوكب الأرض.'
          },
          {
            title: 'تسعير شفاف',
            desc: 'لا رسوم خفية. عروض أسعار واضحة ومباشرة.'
          }
        ]
      },
      services: {
        title: 'الخدمة المميزة',
        subtitle: 'راحتك تبدأ بالنظافة — ونحن هنا لجعلها سهلة ومريحة',
        description: 'خدماتنا مصممة لتناسب نمط حياتك — سواء كنت بحاجة لتنظيف منزلي دقيق أو رعاية احترافية للمكاتب والمساحات التجارية. في كلينولوجي نقدم حلول تنظيف شاملة — دقيقة وموثوقة وبأعلى المعايير.',
        mostPopular: 'الخدمات الأكثر طلباً',
        popular: [
          'تنظيف الشقق',
          'تنظيف المنازل',
          'تنظيف عميق',
          'تنظيف السجاد',
          'تنظيف الأجهزة',
          'تنظيف النوافذ',
        ],
      },
      showcase: {
        title: 'شاهد الفرق الذي نصنعه',
        subtitle: 'اكتشف التحول من خلال نتائجنا قبل وبعد وشاهد فريقنا المحترف أثناء العمل.',
        beforeAfter: 'قبل وبعد',
        ourTeam: 'فريقنا في العمل',
        before: 'قبل',
        after: 'بعد',
        dragToCompare: 'اسحب للمقارنة',
        videos: [
          'عملية التنظيف العميق',
          'تحول المطبخ',
          'تعقيم المكتب',
        ],
      },
      contact: {
        title: 'تواصل معنا',
        subtitle: 'نحن هنا لمساعدتك! تواصل معنا للحجز أو الاستفسارات أو الملاحظات.',
        whatsapp: 'واتساب',
        call: 'اتصال',
        email: 'البريد الإلكتروني',
        address: 'العنوان',
        sendMessage: 'إرسال رسالة',
      },
      footer: {
        description: 'شركة تنظيف متخصصة ملتزمة بتقديم نتائج نظافة مثالية باستخدام أحدث التقنيات والمنتجات الصديقة للبيئة.',
        quickLinks: 'روابط سريعة',
        home: 'الرئيسية',
        about: 'من نحن',
        services: 'الخدمات',
        contact: 'تواصل',
        contactInfo: 'معلومات التواصل',
        copyright: '© 2024 كلينولوجي. جميع الحقوق محفوظة. | التميز في كل شبر.'
      },
      nav: {
        home: 'الرئيسية',
        about: 'من نحن',
        services: 'الخدمات',
        showcase: 'معرض الأعمال',
        contact: 'تواصل',
        call: 'اتصال',
        whatsapp: 'واتساب',
      },
      corporate: {
        title: 'تنظيف الشركات والمكاتب',
        subtitle: 'حلول تنظيف احترافية للأعمال والمكاتب والمساحات التجارية.',
        features: [
          { title: 'جدولة مرنة', desc: 'خدمات قبل الدوام أو بعده أو في عطلة نهاية الأسبوع لتناسب احتياجات عملك' },
          { title: 'محترفون مدربون', desc: 'فريق معتمد ذو خبرة في بيئات الشركات وبتصاريح أمان' },
          { title: 'مؤمن بالكامل', desc: 'تغطية تأمينية كاملة وموظفون موثوقون لراحة بالك' },
          { title: 'ضمان الجودة', desc: 'تفتيشات منتظمة وضمان رضاك لنتائج ثابتة' },
        ],
        solutionsTitle: 'حلول تنظيف الشركات الشاملة',
        solutions: [
          'تنظيف المكاتب اليومي',
          'تعقيم غرف الاجتماعات',
          'صيانة منطقة الاستقبال',
          'تنظيف عميق لدورات المياه',
          'خدمة المطبخ وغرفة الاستراحة',
          'تنظيف النوافذ والزجاج',
          'تنظيف السجاد والمفروشات',
          'تنظيف ما بعد البناء',
          'تنظيف العيادات الطبية',
        ],
        ctaTitle: 'جاهز لتعزيز بيئة عملك؟',
        ctaDesc: 'تواصل معنا لخطة تنظيف مخصصة تناسب احتياجات وجدول شركتك.',
        ctaButton: 'طلب عرض سعر للشركات',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 