/**
 * Features Section - Theme-aware
 *
 * Interactive FeatureCard components with single accent color.
 * Adapts to light/dark theme.
 */

'use client';

import { useRef } from 'react';
import { Bell, Filter, Users, BarChart3, Zap } from 'lucide-react';
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid';

const features = [
  {
    Icon: Bell,
    name: 'Real-time Notifications',
    description: 'Get instant alerts when tasks are assigned or status changes.',
    href: '#',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-1',
    background: <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent" />,
  },
  {
    Icon: Filter,
    name: 'Smart Filtering',
    description: 'Filter by status, priority, assignee, or date range.',
    href: '#',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-1',
    background: <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent" />,
  },
  {
    Icon: Users,
    name: 'Presence Indicators',
    description: 'See who is viewing each task right now.',
    href: '#',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-1',
    background: <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent" />,
  },
  {
    Icon: BarChart3,
    name: 'Team Analytics',
    description: 'Visual insights into team workload and completion rates.',
    href: '#',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-2',
    background: <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent" />,
  },
  {
    Icon: Zap,
    name: 'Bulk Operations',
    description: 'Update multiple tasks in one action.',
    href: '#',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-1',
    background: <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-sky-500/10 text-sky-500 text-sm font-mono-display mb-4">
            Features
          </span>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Everything you need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features that keep your distributed team aligned.
          </p>
        </div>

        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
