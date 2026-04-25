import { useState } from 'react';
import { Key } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { ApiKeys } from '@/types/scanner';

interface Props {
  apiKeys: ApiKeys;
  onSave: (keys: ApiKeys) => void;
}

export function ApiKeyDialog({ apiKeys, onSave }: Props) {
  const [draft, setDraft] = useState<ApiKeys>(apiKeys);
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    onSave(draft);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="border-slate-600 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white gap-2">
          <Key className="w-4 h-4" />
          API Keys
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-slate-100 flex items-center gap-2">
            <Key className="w-5 h-5 text-cyan-400" />
            Configure API Keys
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-5 pt-2">
          <div className="space-y-2">
            <Label className="text-slate-400 text-xs uppercase tracking-wider">VirusTotal API Key</Label>
            <Input
              value={draft.virustotal}
              onChange={e => setDraft(d => ({ ...d, virustotal: e.target.value }))}
              placeholder="Enter VirusTotal API key..."
              className="bg-slate-800 border-slate-600 text-slate-200 placeholder:text-slate-600 font-mono text-sm"
            />
            <p className="text-slate-500 text-xs">Free at virustotal.com — domain reputation + malware detection</p>
          </div>
          <div className="space-y-2">
            <Label className="text-slate-400 text-xs uppercase tracking-wider">URLScan.io API Key</Label>
            <Input
              value={draft.urlscan}
              onChange={e => setDraft(d => ({ ...d, urlscan: e.target.value }))}
              placeholder="Enter URLScan.io API key..."
              className="bg-slate-800 border-slate-600 text-slate-200 placeholder:text-slate-600 font-mono text-sm"
            />
            <p className="text-slate-500 text-xs">Free at urlscan.io — security headers + technology fingerprinting</p>
          </div>
          <div className="flex gap-2 pt-1">
            <Button onClick={handleSave} className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white">
              Save Keys
            </Button>
            <Button variant="ghost" onClick={() => setOpen(false)} className="text-slate-400 hover:text-white">
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
