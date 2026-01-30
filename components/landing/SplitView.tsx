/**
 * SplitView - Vercel Design System before/after comparison
 *
 * Side-by-side code comparison with monochrome palette and subtle borders.
 */

'use client';

interface SplitViewProps {
  beforeLabel: string;
  beforeCode: string;
  afterLabel: string;
  afterCode: string;
}

export function SplitView({ beforeLabel, beforeCode, afterLabel, afterCode }: SplitViewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Before */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-foreground/30" />
          <span className="text-sm font-medium text-muted-foreground">{beforeLabel}</span>
        </div>
        <div className="rounded-lg bg-card border border-border p-5 font-mono-display text-sm">
          <pre className="text-foreground/50 whitespace-pre-wrap overflow-x-auto">
            {beforeCode}
          </pre>
        </div>
      </div>

      {/* After */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
          <span className="text-sm font-medium text-foreground">{afterLabel}</span>
        </div>
        <div className="rounded-lg bg-card border border-foreground/20 p-5 font-mono-display text-sm">
          <pre className="text-foreground whitespace-pre-wrap overflow-x-auto">
            {afterCode}
          </pre>
        </div>
      </div>
    </div>
  );
}
