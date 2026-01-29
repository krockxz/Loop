/**
 * CTA Section - Theme-aware
 *
 * Clean conversion section with single CTA.
 * Adapts to light/dark theme.
 */

'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { CommandSnippet } from './.';
import { AuthModal } from '@/components/ui/auth-modal';

export function CTASection() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          Ready to coordinate across timezones?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Self-hosted and open source. Take control of your team&apos;s workflow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <AuthModal
            triggerText="Get started free"
            triggerClassName="!rounded-md px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground !h-auto font-semibold"
            redirectTo="/dashboard"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <CommandSnippet command="npm install taskflow" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-sm text-muted-foreground"
        >
          No credit card required · Free forever for small teams
        </motion.p>
      </div>
    </section>
  );
}
