/**
 * Theme Toggle Component
 *
 * A button to toggle between light and dark mode.
 * Shows sun icon in dark mode, moon icon in light mode.
 */

'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/providers/theme-provider';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function ThemeToggle({
  className,
  variant = 'icon',
}: {
  className?: string;
  variant?: 'icon' | 'button';
}) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === 'dark';
  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  if (variant === 'button') {
    return (
      <motion.button
        onClick={toggleTheme}
        className={className}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isDark ? (
          <span className="flex items-center gap-2">
            <Sun className="w-4 h-4" />
            Light
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Moon className="w-4 h-4" />
            Dark
          </span>
        )}
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className={className}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {isDark ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </motion.div>
    </motion.button>
  );
}
