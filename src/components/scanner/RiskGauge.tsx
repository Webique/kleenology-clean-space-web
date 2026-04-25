import { getRiskColor, getRiskLabel } from '@/lib/scanner/scoring';

interface Props {
  score: number;
}

export function RiskGauge({ score }: Props) {
  const color = getRiskColor(score);
  const arcTotal = 220;
  const filled = (score / 100) * arcTotal;

  return (
    <div className="flex flex-col items-center select-none">
      <svg width="160" height="95" viewBox="0 0 160 95">
        {/* Track */}
        <path
          d="M 10 80 A 70 70 0 0 0 150 80"
          fill="none"
          stroke="#1e293b"
          strokeWidth="14"
          strokeLinecap="round"
        />
        {/* Fill */}
        <path
          d="M 10 80 A 70 70 0 0 0 150 80"
          fill="none"
          stroke={color}
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={`${filled} ${arcTotal}`}
          style={{ transition: 'stroke-dasharray 1.2s cubic-bezier(0.4,0,0.2,1), stroke 0.6s ease' }}
        />
        {/* Score */}
        <text x="80" y="70" textAnchor="middle" fill="white" fontSize="30" fontWeight="800" fontFamily="monospace">
          {score}
        </text>
        <text x="80" y="84" textAnchor="middle" fill="#475569" fontSize="11">
          / 100
        </text>
      </svg>
      <span style={{ color }} className="text-sm font-bold tracking-widest uppercase mt-1">
        {getRiskLabel(score)} Risk
      </span>
    </div>
  );
}
