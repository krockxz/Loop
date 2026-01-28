/**
 * Landing Page Component
 *
 * Public homepage for TaskFlow - async team coordination hub
 * Features hero section, features showcase, how it works, pricing, and footer
 */

'use client';

import Link from 'next/link';
import { ArrowRight, Check, Bell, BarChart3, Filter, Users, Globe, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">TaskFlow</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/login" className="text-sm text-slate-300 hover:text-white transition-colors">
              Sign In
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-lg transition-all border border-white/20 hover:border-white/40"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-sky-500/10 to-indigo-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <span className="text-sm text-slate-300">Now with realtime collaboration</span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="block tracking-tight">Coordinate work</span>
            <span className="block bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              across timezones
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            The async team coordination hub. Track task handoffs, get real-time notifications,
            and keep your global team in sync — no matter where they are.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/register"
              className="group relative px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/dashboard"
              className="px-8 py-4 text-white font-semibold text-lg rounded-xl border border-white/20 hover:bg-white/5 transition-all hover:scale-105"
            >
              View Demo
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-8 text-slate-500">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="text-sm">500+ teams</span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span className="text-sm">50+ countries</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Everything you need for
              <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                {" "}async teams
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Powerful features that keep your distributed team aligned and productive.
            </p>
          </div>

          {/* Bento Grid Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 - Large */}
            <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-sky-500/10 to-indigo-500/10 rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all group">
              <div className="h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Bell className="w-6 h-6 text-sky-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Real-time Notifications</h3>
                <p className="text-slate-400 mb-6 flex-grow">
                  Never miss a task handoff. Get instant notifications when tasks are assigned, status changes,
                  or when someone @mentions you. Works across all timezones.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-sky-400 flex-shrink-0" />
                    <span>Push notifications for all task events</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-sky-400 flex-shrink-0" />
                    <span>@mention teammates for quick collaboration</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-sky-400 flex-shrink-0" />
                    <span>Unread count badge on bell icon</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Filter className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Smart Filtering</h3>
              <p className="text-slate-400">
                Filter by status, priority, assignee, date range. Create shareable filtered views with unique URLs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Presence Indicators</h3>
              <p className="text-slate-400">
                See who's viewing each task in real-time. Know when teammates are online and working on the same task.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Team Analytics</h3>
              <p className="text-slate-400">
                Visual insights into team workload, task distribution, and completion rates. Make data-driven decisions.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all group">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Bulk Operations</h3>
                  <p className="text-slate-400">
                    Select multiple tasks and update status, reassign, or delete in one action. Save hours of manual work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How it works
            </h2>
            <p className="text-xl text-slate-400">
              Get started in minutes, not hours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Sign up & invite team',
                description: 'Create your workspace and invite team members with a magic link. Email or Google OAuth — your choice.',
              },
              {
                step: '02',
                title: 'Create & assign tasks',
                description: 'Add tasks with priorities, due dates, and assignees. Set up recurring tasks for routine work.',
              },
              {
                step: '03',
                title: 'Track in real-time',
                description: 'Watch tasks flow through your team. Get notified on handoffs. Never drop the ball again.',
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-8xl font-bold text-white/5 absolute -top-4 -left-2">{item.step}</div>
                <div className="relative z-10 pt-8">
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-slate-400">
              Start free, scale as you grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Free',
                price: '$0',
                period: 'forever',
                description: 'Perfect for small teams getting started',
                features: [
                  'Up to 5 team members',
                  'Unlimited tasks',
                  'Real-time notifications',
                  'Basic analytics',
                  'Email support',
                ],
                cta: 'Get Started',
                highlighted: false,
              },
              {
                name: 'Pro',
                price: '$12',
                period: '/user/month',
                description: 'For growing teams that need more',
                features: [
                  'Up to 50 team members',
                  'Everything in Free',
                  'Advanced analytics',
                  'Bulk operations',
                  'Priority support',
                  'Custom workflows',
                ],
                cta: 'Start Trial',
                highlighted: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                description: 'For large organizations with specific needs',
                features: [
                  'Unlimited team members',
                  'Everything in Pro',
                  'SSO & advanced security',
                  'Dedicated support',
                  'Custom integrations',
                  'SLA guarantee',
                ],
                cta: 'Contact Sales',
                highlighted: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-8 border transition-all hover:scale-105 ${
                  plan.highlighted
                    ? 'bg-gradient-to-b from-sky-500/20 to-indigo-500/20 border-sky-500/50 shadow-2xl shadow-sky-500/20'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-sky-400 to-indigo-400 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="pt-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400">{plan.period}</span>
                  </div>
                  <p className="text-slate-400 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300">
                        <Check className="w-5 h-5 text-sky-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/register"
                    className={`block text-center px-6 py-3 rounded-xl font-semibold transition-all ${
                      plan.highlighted
                        ? 'bg-white text-slate-900 hover:bg-slate-100'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-purple-500/10 rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to coordinate across timezones?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Join hundreds of teams already using TaskFlow to stay aligned.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold text-lg hover:scale-105 transition-all hover:shadow-2xl hover:shadow-white/20"
            >
              Start your free trial
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white">TaskFlow</span>
              </div>
              <p className="text-slate-500 text-sm">
                Coordinate work across timezones with ease.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-slate-400 hover:text-white transition-colors text-sm">Features</Link></li>
                <li><Link href="#pricing" className="text-slate-400 hover:text-white transition-colors text-sm">Pricing</Link></li>
                <li><Link href="#security" className="text-slate-400 hover:text-white transition-colors text-sm">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="#about" className="text-slate-400 hover:text-white transition-colors text-sm">About</Link></li>
                <li><Link href="#blog" className="text-slate-400 hover:text-white transition-colors text-sm">Blog</Link></li>
                <li><Link href="#careers" className="text-slate-400 hover:text-white transition-colors text-sm">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="#privacy" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy</Link></li>
                <li><Link href="#terms" className="text-slate-400 hover:text-white transition-colors text-sm">Terms</Link></li>
                <li><Link href="#contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} TaskFlow. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Users className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
