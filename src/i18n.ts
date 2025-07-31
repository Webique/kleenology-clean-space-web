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
        description: '',
        mostPopular: 'Most Popular Services',
        popular: [
          'Condo Cleaning',
          'House Cleaning',
          'Deep Cleaning',
          'Carpet Cleaning',
          'Rehabilitation Cleaning',
          'Windows Cleaning',
        ],
        descriptions: {
          'Deep Cleaning': 'Complete top-to-bottom cleaning including baseboards, light fixtures, inside cabinets, and hard-to-reach areas.',
          'House Cleaning': 'Weekly or bi-weekly home maintenance including dusting, vacuuming, mopping, and bathroom sanitization.',
          'Rehabilitation Cleaning': 'Detailed cleaning of ovens, refrigerators, dishwashers, and small appliances inside and out.',
          'Carpet Cleaning': 'Steam cleaning and stain removal for carpets, rugs, and upholstered furniture using professional equipment.',
          'Condo Cleaning': 'Specialized cleaning for condominiums and apartments. Efficient service for modern living spaces.',
          'Windows Cleaning': 'Crystal-clear window cleaning inside and out. Bringing natural light back to your space.',
        },
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
        headline: 'الفرق يُرى… في كل لمسة',
        tagline: 'نظافة عميقة، تنظيم مثالي، وتعقيم شامل يعكس احترافية كلينولوجي',
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
        subtitle: 'نحن ملتزمون بتقديم نتائج نظافة مثالية مع التركيز على الجودة والثقة والحلول الصديقة للبيئة.',
        features: [
          {
            title: 'دقة في التنفيذ',
            desc: 'نهتم بأدق التفاصيل لضمان نظافة شاملة ومثالية.'
          },
          {
            title: 'فريق محترف ومعتمد',
            desc: 'خبراء مدربون ومؤهلون بأعلى معايير الجودة والثقة.'
          },
          {
            title: 'منتجات آمنة وطبيعية',
            desc: 'نحافظ على صحة عائلتك والبيئة بمواد تنظيف صديقة وآمنة.'
          },
          {
            title: 'أسعار واضحة ومعلنة',
            desc: 'لا مفاجآت في التكلفة - أسعار شفافة وعادلة مقدماً.'
          }
        ]
      },
      services: {
        title: 'الخدمة المميزة',
        subtitle: 'راحتك تبدأ بالنظافة — ونحن هنا لجعلها سهلة',
        description: '',
        mostPopular: 'الخدمات الأكثر شعبية',
        popular: [
          'تنظيف الشقق',
          'تنظيف المنازل',
          'تنظيف عميق',
          'تنظيف السجاد',
          'تنظيف تأهيلي',
          'تنظيف النوافذ',
        ],
        descriptions: {
          'تنظيف عميق': 'تنظيف شامل من الأعلى للأسفل يشمل الألواح الجانبية، وحدات الإضاءة، داخل الخزائن، والمناطق صعبة الوصول.',
          'تنظيف المنازل': 'صيانة منزلية أسبوعية أو نصف شهرية تشمل التغبير، الكنس، المسح، وتعقيم الحمامات.',
          'تنظيف تأهيلي': 'تنظيف تفصيلي للأفران، الثلاجات، غسالات الصحون، والأجهزة الصغيرة من الداخل والخارج.',
          'تنظيف السجاد': 'تنظيف بالبخار وإزالة البقع للسجاد، البُسط، والأثاث المنجد باستخدام معدات احترافية.',
          'تنظيف الشقق': 'تنظيف متخصص للشقق السكنية. خدمة فعالة للمساحات العصرية.',
          'تنظيف النوافذ': 'تنظيف النوافذ الصافي من الداخل والخارج. لإعادة الضوء الطبيعي لمساحتك.',
        },
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
        copyright: '© 2024 كلينولوجي. جميع الحقوق محفوظة. | الفرق يُرى… في كل لمسة.'
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
        subtitle: 'حلول تنظيف احترافية للشركات والمكاتب والمساحات التجارية.',
        features: [
          { title: 'جدولة مرنة', desc: 'خدمات قبل الدوام، بعد الدوام، أو في عطلة نهاية الأسبوع لتناسب احتياجات شركتك' },
          { title: 'محترفون مدربون', desc: 'فريق معتمد ذو خبرة في بيئة الشركات وتصاريح أمنية' },
          { title: 'مؤمن بالكامل', desc: 'تغطية تأمينية شاملة وموظفون مضمونون لراحة بالك' },
          { title: 'ضمان الجودة', desc: 'فحوصات منتظمة وضمانات رضا للحصول على نتائج ثابتة' },
        ],
        solutionsTitle: 'حلول تنظيف شركات شاملة',
        solutions: [
          'تنظيف مكاتب يومي',
          'تعقيم غرف المؤتمرات',
          'صيانة منطقة الاستقبال',
          'تنظيف عميق للحمامات',
          'خدمة المطبخ وغرفة الراحة',
          'تنظيف النوافذ والزجاج',
          'العناية بالسجاد والمفروشات',
          'تنظيف ما بعد البناء',
          'تنظيف المكاتب الطبية',
        ],
        ctaTitle: 'مستعد لتحسين بيئة مكان عملك؟',
        ctaDesc: 'تواصل معنا للحصول على خطة تنظيف مخصصة تناسب احتياجات وجدولة شركتك.',
        ctaButton: 'طلب عرض سعر للشركات',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 