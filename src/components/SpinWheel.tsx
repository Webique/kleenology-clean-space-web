import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Gift } from "lucide-react";

const N = 6;
const PRIZE = { label: "كاش باك ١٠٪", desc: "على أول طلب" };
const PRIZES = Array.from({ length: N }, (_, i) => ({
  label: "🎁",
  desc: PRIZE.desc,
  bg: i % 2 === 0 ? "#0ea5e9" : "#1e293b",
}));

const WINNER_POOL = [0, 1, 2, 3, 4, 5];

const toRad = (deg: number) => (deg * Math.PI) / 180;
const CX = 150, CY = 150, R = 138, INNER_R = 22;
const SEG = 360 / N;

function WheelSVG({ rotation, spinning }: { rotation: number; spinning: boolean }) {
  return (
    <div className="relative" style={{ width: 300, height: 300 }}>
      {/* Pointer */}
      <div
        className="absolute left-1/2 -top-3 z-10"
        style={{ transform: "translateX(-50%)" }}
      >
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: "14px solid transparent",
            borderRight: "14px solid transparent",
            borderTop: "28px solid #f59e0b",
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
          }}
        />
      </div>

      <svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: spinning ? "transform 4.5s cubic-bezier(0.17, 0.67, 0.12, 0.99)" : "none",
          transformOrigin: "center",
        }}
      >
        {/* Outer shadow ring */}
        <circle cx={CX} cy={CY} r={R + 6} fill="#e2e8f0" />

        {PRIZES.map((prize, i) => {
          const startDeg = i * SEG - 90;
          const endDeg = (i + 1) * SEG - 90;
          const x1 = CX + R * Math.cos(toRad(startDeg));
          const y1 = CY + R * Math.sin(toRad(startDeg));
          const x2 = CX + R * Math.cos(toRad(endDeg));
          const y2 = CY + R * Math.sin(toRad(endDeg));
          const midDeg = startDeg + SEG / 2;
          const tx = CX + R * 0.63 * Math.cos(toRad(midDeg));
          const ty = CY + R * 0.63 * Math.sin(toRad(midDeg));

          return (
            <g key={i}>
              <path
                d={`M ${CX} ${CY} L ${x1} ${y1} A ${R} ${R} 0 0 1 ${x2} ${y2} Z`}
                fill={prize.bg}
                stroke="white"
                strokeWidth="2"
              />
              <text
                x={tx}
                y={ty}
                fill="white"
                fontSize="30"
                fontWeight="bold"
                textAnchor="middle"
                dominantBaseline="middle"
                transform={`rotate(${midDeg + 90}, ${tx}, ${ty})`}
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                {prize.label}
              </text>
            </g>
          );
        })}

        {/* Center circle */}
        <circle cx={CX} cy={CY} r={INNER_R + 4} fill="#f1f5f9" />
        <circle cx={CX} cy={CY} r={INNER_R} fill="white" stroke="#e2e8f0" strokeWidth="2" />
      </svg>
    </div>
  );
}

interface SpinWheelProps {
  onClose: () => void;
}

export function SpinWheel({ onClose }: SpinWheelProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [stage, setStage] = useState<"form" | "spinning" | "result">("form");
  const [rotation, setRotation] = useState(0);
  const [winner, setWinner] = useState(0);
  const rotationRef = useRef(0);

  const handleSpin = () => {
    if (!name.trim() || !phone.trim()) return;

    // Pick winner
    const idx = WINNER_POOL[Math.floor(Math.random() * WINNER_POOL.length)];
    setWinner(idx);

    // Calculate rotation to land on winner segment
    const midAngle = idx * SEG + SEG / 2; // mid of winning segment (from top clockwise)
    const landAngle = (360 - midAngle) % 360;
    const totalRotation = rotationRef.current + 360 * 6 + landAngle;

    rotationRef.current = totalRotation;
    setRotation(totalRotation);
    setStage("spinning");

    setTimeout(() => setStage("result"), 5000);
  };

  const handleWhatsApp = () => {
    const msg = `مرحباً، اسمي ${name}. فزت بـ ${PRIZE.label} (${PRIZE.desc}) عبر عجلة الحظ في موقع كلينولوجي. أريد الاستفادة من العرض والحجز.`;
    window.open(`https://wa.me/966537519929?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm relative overflow-hidden" dir="rtl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 left-3 z-10 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <X className="h-4 w-4 text-gray-600" />
        </button>

        {/* Header */}
        <div className="bg-foreground text-center py-4 px-6">
          <div className="flex items-center justify-center gap-2 text-brand-yellow font-bold text-lg">
            <Gift className="h-5 w-5" />
            {stage === "result" ? "مبروك! 🎉" : "دوّر واربح خصم"}
          </div>
          {stage === "form" && (
            <p className="text-white/70 text-xs mt-1">أدخل بياناتك وادوّر العجلة</p>
          )}
        </div>

        <div className="p-5 flex flex-col items-center gap-4">
          {/* Wheel */}
          <WheelSVG rotation={rotation} spinning={stage === "spinning"} />

          {stage === "form" && (
            <div className="w-full space-y-3">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">الاسم</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="أدخل اسمك"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-right outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">رقم الهاتف</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="05X XXX XXXX"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-right outline-none focus:border-primary transition-colors"
                  dir="ltr"
                />
              </div>
              <Button
                onClick={handleSpin}
                disabled={!name.trim() || !phone.trim()}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 text-base"
              >
                التدوير الآن 🎰
              </Button>
            </div>
          )}

          {stage === "spinning" && (
            <p className="text-sm text-muted-foreground animate-pulse">جاري التدوير...</p>
          )}

          {stage === "result" && (
            <div className="w-full text-center space-y-3">
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                <p className="text-sm text-muted-foreground">لقد فزت بـ</p>
                <p className="text-3xl font-bold text-primary mt-1">{PRIZE.label}</p>
                <p className="text-sm text-muted-foreground">{PRIZE.desc}</p>
              </div>
              <Button
                onClick={handleWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-3 gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                استخدم الخصم الآن
              </Button>
              <p className="text-xs text-gray-400">سنتواصل معك على واتساب لتفعيل الخصم</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
