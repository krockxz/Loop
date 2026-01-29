/**
 * SplitView - Theme-aware before/after comparison
 *
 * Side-by-side code comparison that adapts to light/dark theme.
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
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <span className="text-sm font-medium text-muted-foreground">{beforeLabel}</span>
        </div>
        <div className="rounded-lg bg-muted border border-red-500/20 p-4 font-mono-display text-sm">
          <pre className="text-red-500 whitespace-pre-wrap overflow-x-auto">
            {beforeCode}
          </pre>
        </div>
      </div>

      {/* After */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="text-sm font-medium text-muted-foreground">{afterLabel}</span>
        </div>
        <div className="rounded-lg bg-muted border border-emerald-500/20 p-4 font-mono-display text-sm">
          <pre className="text-emerald-500 whitespace-pre-wrap overflow-x-auto">
            {afterCode}
          </pre>
        </div>
      </div>
    </div>
  );
}
