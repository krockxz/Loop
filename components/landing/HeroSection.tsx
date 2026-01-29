/**
 * Hero Section - Theme-aware design
 *
 * Clean, focused hero with product screenshot and CTA.
 * Adapts to light/dark theme.
 */

'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/ui/terminal";
import { NotificationsDemo } from './NotificationsDemo';
import { AuthModal } from "@/components/ui/auth-modal";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-background flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted border border-border"
            >
              <span className="text-sm font-mono-display text-muted-foreground">
                Open Source
              </span>
            </motion.div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
              Async teams,
              <br />
              <span className="text-sky-500">synchronized.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Track handoffs across timezones. Get notified when tasks move forward.
            </p>

            {/* CTA - Auth Modal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <AuthModal
                triggerText="Get started free"
                triggerClassName="!rounded-md px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground !h-auto font-semibold"
                redirectTo="/dashboard"
              />
            </motion.div>

            {/* Command snippet */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Terminal>
                <TypingAnimation>npm install taskflow@latest</TypingAnimation>
                <AnimatedSpan delay={1500} className="text-green-500">
                  <span>✔ Installed successfully.</span>
                </AnimatedSpan>
              </Terminal>
            </motion.div>
          </motion.div>

          {/* Right: Product Screenshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-lg bg-muted border border-border overflow-hidden shadow-2xl">
              {/* Screenshot placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-background to-muted flex items-center justify-center p-8">
                <div className="w-full">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                      <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                      <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                    </div>
                    <div className="flex-1 mx-4 h-2 bg-muted-foreground/20 rounded-full max-w-xs" />
                  </div>
                  {/* Dashboard preview using NotificationsDemo */}
                  <div className="space-y-3 relative h-[300px] overflow-hidden">
                    <NotificationsDemo className="scale-90 origin-top p-0 bg-transparent min-h-0" />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
