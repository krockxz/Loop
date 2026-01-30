/**
 * CTA Section - Vercel Design System
 *
 * Clean conversion section with monochrome palette.
 */

'use client';

import { motion } from 'motion/react';
import { AuthModal } from '@/components/ui/auth-modal';

export function CTASection() {
  return (
    <section className="py-32 px-6 bg-secondary/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold text-foreground mb-5 tracking-tight-vercel"
        >
          Ready to coordinate across timezones?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Self-hosted and open source. Take control of your team&apos;s workflow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <AuthModal
            triggerText="Get started free"
            triggerClassName="!rounded-lg px-10 py-4 bg-foreground hover:bg-foreground/90 text-background !h-auto font-medium text-sm tracking-tight transition-transform hover:scale-[1.02] active:scale-[0.98]"
            redirectTo="/dashboard"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-sm text-muted-foreground/70"
        >
          No credit card required · Free forever for small teams
        </motion.p>
      </div>
    </section>
  );
}
