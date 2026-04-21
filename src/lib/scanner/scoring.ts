import type { Finding, Severity } from '@/types/scanner';

const WEIGHTS: Record<Severity, number> = {
  critical: 25,
  high: 15,
  medium: 8,
  low: 3,
  info: 0,
};

export function calculateRiskScore(findings: Finding[]): number {
  const raw = findings.reduce((sum, f) => sum + (WEIGHTS[f.severity] ?? 0), 0);
  return Math.min(100, raw);
}

export function getRiskLabel(score: number): string {
  if (score >= 70) return 'Critical';
  if (score >= 50) return 'High';
  if (score >= 30) return 'Medium';
  if (score >= 10) return 'Low';
  return 'Minimal';
}

export function getRiskColor(score: number): string {
  if (score >= 70) return '#ef4444';
  if (score >= 50) return '#f97316';
  if (score >= 30) return '#eab308';
  if (score >= 10) return '#3b82f6';
  return '#22c55e';
}

export const SEVERITY_CONFIG: Record<Severity, {
  label: string;
  color: string;
  bg: string;
  border: string;
  dot: string;
}> = {
  critical: { label: 'Critical', color: 'text-red-400',    bg: 'bg-red-950/40',    border: 'border-red-500/40',    dot: 'bg-red-500' },
  high:     { label: 'High',     color: 'text-orange-400', bg: 'bg-orange-950/40', border: 'border-orange-500/40', dot: 'bg-orange-500' },
  medium:   { label: 'Medium',   color: 'text-yellow-400', bg: 'bg-yellow-950/40', border: 'border-yellow-500/40', dot: 'bg-yellow-500' },
  low:      { label: 'Low',      color: 'text-blue-400',   bg: 'bg-blue-950/40',   border: 'border-blue-500/40',   dot: 'bg-blue-500' },
  info:     { label: 'Info',     color: 'text-slate-400',  bg: 'bg-slate-800/40',  border: 'border-slate-600/40',  dot: 'bg-slate-500' },
};
