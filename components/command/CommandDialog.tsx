/**
 * Command Dialog
 *
 * Main command palette component with keyboard shortcuts.
 * Opens with Cmd+K / Ctrl+K, closes with Escape.
 */

'use client';

import * as React from 'react';
import { Command } from 'cmdk';
import { Search } from 'lucide-react';
import { useCommand } from './CommandProvider';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import type { CommandAction } from '@/lib/types';

export function CommandDialog() {
  const { isOpen, setIsOpen, actions } = useCommand();

  // Handle keyboard shortcut
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [isOpen, setIsOpen]);

  const handleSelect = (action: CommandAction) => {
    action.onSelect();
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="p-0 shadow-lg">
        <Command className="rounded-lg border shadow-md">
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Command.Input
              placeholder="Type a command or search..."
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <Command.List>
            <Command.Empty>No results found.</Command.Empty>
            {actions.map((action) => (
              <Command.Item
                key={action.id}
                onSelect={() => handleSelect(action)}
                value={`${action.label} ${action.keywords?.join(' ') || ''}`}
              >
                <action.icon className="mr-2 h-4 w-4" />
                <span>{action.label}</span>
              </Command.Item>
            ))}
          </Command.List>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
