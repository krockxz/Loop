/**
 * Problem Section - Theme-aware split view
 *
 * Before/After code comparison that adapts to light/dark theme.
 */

'use client';

import { SplitView } from './.';

export function ProblemSection() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-sm font-mono-display mb-4">
            The Problem
          </span>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Async teamwork is broken
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modern tools weren&apos;t built for distributed teams. See the difference.
          </p>
        </div>

        <SplitView
          beforeLabel="Without TaskFlow"
          beforeCode={`// Lost in Slack threads
const task = await findTask()
  .dig('slack')
  .search('who owns this?')
  .maybe('email thread?')
  .catch('guess');

// Result: hours wasted`}
          afterLabel="With TaskFlow"
          afterCode={`// Clear ownership & handoffs
const task = await taskflow.get('id');
console.log(task.assignedTo); // "maria@"
console.log(task.status);    // "in_progress"
console.log(task.handoffTo);  // "yuki@"

// Result: instant clarity`}
        />
      </div>
    </section>
  );
}
