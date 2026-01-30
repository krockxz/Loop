/**
 * Solution Section - Vercel Design System
 *
 * Simplified, focused explanation with monochrome palette.
 */

'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';

export function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const benefits = [
    'Everything in one place',
    'Always know who owns what',
    'Smooth handoffs with full context',
    'Works while you sleep',
  ];

  return (
    <section ref={ref} className="py-32 px-6 bg-background">
      <div className={`max-w-6xl mx-auto ${isInView ? 'reveal visible' : 'reveal'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-3 py-1.5 rounded-full bg-secondary border border-border text-foreground/60 text-xs font-medium tracking-tight-vercel mb-6">
              The Solution
            </span>
            <h2 className="text-4xl font-semibold text-foreground mb-6 tracking-tight-vercel">
              Built for how teams actually work
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              TaskFlow gives your distributed team a single source of truth. No more digging through chat, no more confusion about ownership.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-foreground">
                  <div className="w-5 h-5 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-background" strokeWidth={3} />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Simple workflow visual - monochrome */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {['Create', 'Assign', 'Notify', 'Track'].map((step, i) => (
              <div key={step} className="flex items-center">
                <div className="px-5 py-2.5 rounded-lg bg-secondary border border-border text-foreground font-mono-display text-sm">
                  {step}
                </div>
                {i < 3 && (
                  <div className="w-8 h-px bg-border hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
