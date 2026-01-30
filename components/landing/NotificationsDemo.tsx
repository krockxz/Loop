"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";

interface Item {
    name: string;
    description: string;
    icon: string;
    color: string;
    time: string;
}

let notifications = [
    {
        name: "New Task Assigned",
        description: "Loop Web Design",
        time: "15m ago",
        icon: "👤",
        color: "#000000",
    },
    {
        name: "Status Updated",
        description: "Backend API > In Progress",
        time: "10m ago",
        icon: "🔄",
        color: "#000000",
    },
    {
        name: "New Comment",
        description: "Sarah posted in General",
        time: "5m ago",
        icon: "💬",
        color: "#000000",
    },
    {
        name: "Task Completed",
        description: "Homepage Redesign",
        time: "2m ago",
        icon: "✅",
        color: "#000000",
    },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
    return (
        <figure
            className={cn(
                "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-lg p-4 transition-all duration-200 ease-in-out hover:scale-[101%] bg-card border border-border",
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <div
                    className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary"
                >
                    <span className="text-sm">{icon}</span>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="flex flex-row items-center whitespace-pre text-base font-medium text-foreground">
                        <span className="text-sm">{name}</span>
                        <span className="mx-1.5">·</span>
                        <span className="text-xs text-muted-foreground">{time}</span>
                    </figcaption>
                    <p className="text-sm font-normal text-muted-foreground">
                        {description}
                    </p>
                </div>
            </div>
        </figure>
    );
};

export function NotificationsDemo({
    className,
}: {
    className?: string;
}) {
    return (
        <div
            className={cn(
                "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg bg-secondary/30 border border-border",
                className,
            )}
        >
            <AnimatedList delay={2400}>
                {notifications.map((item, idx) => (
                    <Notification {...item} key={idx} />
                ))}
            </AnimatedList>
        </div>
    );
}
