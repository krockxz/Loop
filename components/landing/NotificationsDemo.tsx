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
        color: "#00C9A7",
    },
    {
        name: "Status Updated",
        description: "Backend API > In Progress",
        time: "10m ago",
        icon: "🔄",
        color: "#FFB800",
    },
    {
        name: "New Comment",
        description: "Sarah posted in General",
        time: "5m ago",
        icon: "💬",
        color: "#FF3D71",
    },
    {
        name: "Task Completed",
        description: "Homepage Redesign",
        time: "2m ago",
        icon: "✅",
        color: "#1E86FF",
    },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
    return (
        <figure
            className={cn(
                "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4 transition-all duration-200 ease-in-out hover:scale-[103%] bg-card border border-border shadow-sm",
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <div
                    className="flex h-10 w-10 items-center justify-center rounded-2xl"
                    style={{
                        backgroundColor: color,
                    }}
                >
                    <span className="text-lg">{icon}</span>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-foreground">
                        <span className="text-sm sm:text-lg">{name}</span>
                        <span className="mx-1">·</span>
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
                "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg bg-muted/50",
                className,
            )}
        >
            <AnimatedList delay={500}>
                {notifications.map((item, idx) => (
                    <Notification {...item} key={idx} />
                ))}
            </AnimatedList>
        </div>
    );
}
