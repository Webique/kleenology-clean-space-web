import { useState } from 'react';
import { ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';
import type { Finding, Severity } from '@/types/scanner';
import { SEVERITY_CONFIG } from '@/lib/scanner/scoring';

function SeverityBadge({ severity }: { severity: Severity }) {
  const cfg = SEVERITY_CONFIG[severity];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-semibold border ${cfg.color} ${cfg.bg} ${cfg.border}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
      {cfg.label}
    </span>
  );
}

function FindingRow({ finding }: { finding: Finding }) {
  const [open, setOpen] = useState(false);
  const cfg = SEVERITY_CONFIG[finding.severity];

  return (
    <div className={`border rounded-lg overflow-hidden transition-colors ${cfg.border} ${open ? cfg.bg : 'bg-slate-900/40'}`}>
      <button
        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-slate-800/40 transition-colors"
        onClick={() => setOpen(o => !o)}
      >
        {open ? <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" /> : <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />}
        <SeverityBadge severity={finding.severity} />
        <span className="text-slate-200 text-sm font-medium flex-1">{finding.title}</span>
        <span className="text-slate-600 text-xs shrink-0">{finding.module}</span>
      </button>
      {open && (
        <div className="px-4 pb-4 space-y-3 border-t border-slate-800">
          <p className="text-slate-300 text-sm mt-3">{finding.description}</p>
          {finding.evidence && (
            <div className="bg-slate-950/60 rounded p-3">
              <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider">Evidence</p>
              <code className="text-xs text-amber-300 font-mono break-all">{finding.evidence}</code>
            </div>
          )}
          {finding.remediation && (
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Remediation</p>
              <p className="text-sm text-emerald-300">{finding.remediation}</p>
            </div>
          )}
          {finding.reference && (
            <a href={finding.reference} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300">
              <ExternalLink className="w-3 h-3" />
              Reference
            </a>
          )}
        </div>
      )}
    </div>
  );
}

const SEVERITY_ORDER: Severity[] = ['critical', 'high', 'medium', 'low', 'info'];

interface Props {
  findings: Finding[];
}

export function FindingsPanel({ findings }: Props) {
  const sorted = [...findings].sort(
    (a, b) => SEVERITY_ORDER.indexOf(a.severity) - SEVERITY_ORDER.indexOf(b.severity),
  );

  const counts = SEVERITY_ORDER.map(s => ({
    s,
    n: findings.filter(f => f.severity === s).length,
  }));

  if (!findings.length) {
    return (
      <div className="text-center py-12 text-slate-600">
        <p className="text-4xl mb-3">🔍</p>
        <p>No findings yet. Run a scan to see results.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Summary counts */}
      <div className="flex flex-wrap gap-2">
        {counts.map(({ s, n }) => n > 0 && (
          <span key={s} className={`px-3 py-1 rounded-full text-xs font-bold border ${SEVERITY_CONFIG[s].color} ${SEVERITY_CONFIG[s].bg} ${SEVERITY_CONFIG[s].border}`}>
            {n} {SEVERITY_CONFIG[s].label}
          </span>
        ))}
      </div>
      {/* Finding cards */}
      <div className="space-y-2">
        {sorted.map(f => <FindingRow key={f.id} finding={f} />)}
      </div>
    </div>
  );
}
