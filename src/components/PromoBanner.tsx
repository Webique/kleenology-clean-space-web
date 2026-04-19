import { useState } from "react";
import { X, Tag } from "lucide-react";
import { useTranslation } from "react-i18next";

export const PromoBanner = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-primary text-white py-2.5 px-4 relative z-50" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-3 text-sm font-medium">
        <Tag className="h-4 w-4 flex-shrink-0" />
        <span>
          {isRTL
            ? "🎉 احجز الآن واحصل على استشارة مجانية + تقييم موقعك بدون أي التزام!"
            : "🎉 Book now and get a free consultation + site assessment with no obligation!"}
        </span>
        <a
          href="/booking"
          className="underline font-bold hover:text-brand-yellow transition-colors whitespace-nowrap"
        >
          {isRTL ? "احجز الآن" : "Book Now"}
        </a>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute top-1/2 -translate-y-1/2 end-4 text-white/80 hover:text-white transition-colors"
        aria-label="Close"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};
