'use client';

import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { TaskForm } from './TaskForm';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NewTaskDialogProps {
    users: { id: string; email: string }[];
}

export function NewTaskDialog({ users }: NewTaskDialogProps) {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    New Task
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Create a Task</DialogTitle>
                    <DialogDescription>
                        Fill in the details below to create a new task.
                    </DialogDescription>
                </DialogHeader>
                <TaskForm
                    users={users}
                    onSuccess={() => setOpen(false)}
                    onCancel={() => setOpen(false)}
                />
            </DialogContent>
        </Dialog>
    );
}
