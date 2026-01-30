/**
 * CommandSnippet - Vercel Design System
 *
 * Click to copy with monochrome palette.
 */

'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CommandSnippetProps {
  command: string;
  label?: string;
}

export function CommandSnippet({ command, label = 'npm install' }: CommandSnippetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative">
      <button
        onClick={handleCopy}
        className="flex items-center gap-3 px-4 py-3 rounded-lg bg-card border border-border hover:border-foreground/30 transition-all w-full sm:w-auto"
        aria-label={`Copy ${command}`}
      >
        <span className="text-muted-foreground text-sm font-mono-display">$</span>
        <span className="flex-1 text-left text-foreground font-mono-display text-sm">
          {command}
        </span>
        {copied ? (
          <Check className="w-4 h-4 text-foreground" />
        ) : (
          <Copy className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        )}
      </button>
    </div>
  );
}
