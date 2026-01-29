"use client"

import * as React from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { X, Mail, ArrowRight, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

// OAuth Icons
const GoogleIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
    >
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
)

const GitHubIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
    >
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
)

type Provider = 'google' | 'github'

interface AuthModalProps {
    /**
     * The text to display on the trigger button
     */
    triggerText?: string
    /**
     * Optional className for the trigger button
     */
    triggerClassName?: string
    /**
     * Where to redirect after successful auth
     */
    redirectTo?: string
}

function AuthModal({
    triggerText = "Sign up / Sign in",
    triggerClassName,
    redirectTo = "/dashboard"
}: AuthModalProps) {
    const router = useRouter()
    const [isOpen, setIsOpen] = React.useState(false)
    const [email, setEmail] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState<string | null>(null)
    const [message, setMessage] = React.useState<string | null>(null)

    const container: Variants = {
        hidden: { opacity: 0, scale: 0.95 },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                staggerChildren: 0.05
            }
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    const socialButtons = [
        { icon: GoogleIcon, label: "google", provider: "google" as Provider },
        { icon: GitHubIcon, label: "GitHub", provider: "github" as Provider },
    ]

    const handleOAuthLogin = async (provider: Provider) => {
        setIsLoading(true)
        setError(null)

        try {
            const supabase = createClient()
            const { error } = await supabase.auth.signInWithOAuth({
                provider,
                options: {
                    redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(redirectTo)}`,
                },
            })

            if (error) {
                setError(error.message)
            }
            // OAuth redirect happens automatically
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred")
        } finally {
            setIsLoading(false)
        }
    }

    const handleEmailAuth = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)
        setMessage(null)

        if (!email || !email.includes("@")) {
            setError("Please enter a valid email address")
            setIsLoading(false)
            return
        }

        try {
            const supabase = createClient()
            const { error } = await supabase.auth.signInWithOtp({
                email,
                options: {
                    emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(redirectTo)}`,
                },
            })

            if (error) {
                setError(error.message)
            } else {
                setMessage("Check your email for the magic link!")
                setEmail("")
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className={cn(
                    "inline-flex h-10 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                    triggerClassName
                )}
            >
                {triggerText}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                        />

                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            className="relative w-full max-w-[360px] overflow-hidden rounded-3xl bg-background p-6 shadow-2xl border border-border"
                        >
                            <div className="absolute right-4 top-4">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>

                            <motion.div variants={item} className="mb-8 text-center">
                                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                                    Welcome to TaskFlow
                                </h2>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Sign in to your account to continue
                                </p>
                            </motion.div>

                            {error && (
                                <motion.div variants={item} className="mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                                    <p className="text-sm text-destructive">{error}</p>
                                </motion.div>
                            )}

                            {message && (
                                <motion.div variants={item} className="mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                                    <p className="text-sm text-green-600 dark:text-green-400">{message}</p>
                                </motion.div>
                            )}

                            <motion.div variants={item} className="grid grid-cols-2 gap-3 mb-8">
                                {socialButtons.map((btn) => (
                                    <button
                                        key={btn.label}
                                        onClick={() => handleOAuthLogin(btn.provider)}
                                        disabled={isLoading}
                                        className={cn(
                                            "flex aspect-square items-center justify-center rounded-2xl border border-border bg-card transition-all hover:scale-105 active:scale-95 hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
                                        )}
                                        aria-label={`Sign in with ${btn.label}`}
                                    >
                                        {isLoading ? (
                                            <Loader2 className="h-5 w-5 animate-spin" />
                                        ) : (
                                            <btn.icon className="h-5 w-5" />
                                        )}
                                    </button>
                                ))}
                            </motion.div>

                            <motion.div variants={item} className="relative mb-8">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t border-border" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-background px-2 text-muted-foreground">
                                        Or continue with email
                                    </span>
                                </div>
                            </motion.div>

                            <motion.div variants={item}>
                                <form onSubmit={handleEmailAuth}>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="name@example.com"
                                            disabled={isLoading}
                                            className="h-10 w-full rounded-full border border-input bg-background pl-10 pr-10 text-sm outline-none transition-all focus:border-ring focus:ring-1 focus:ring-ring disabled:opacity-50"
                                        />
                                        <button
                                            type="submit"
                                            disabled={isLoading || !email}
                                            className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-8 w-8 flex items-center justify-center bg-primary text-primary-foreground transition-transform hover:scale-95 active:scale-90 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isLoading ? (
                                                <Loader2 className="h-4 w-4 animate-spin" />
                                            ) : (
                                                <ArrowRight className="h-4 w-4" />
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </motion.div>

                            <motion.div variants={item} className="mt-8 text-center">
                                <p className="text-xs text-muted-foreground">
                                    By clicking continue, you agree to our{" "}
                                    <a href="#" className="underline hover:text-foreground">
                                        Terms of Service
                                    </a>{" "}
                                    and{" "}
                                    <a href="#" className="underline hover:text-foreground">
                                        Privacy Policy
                                    </a>
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}

export { AuthModal, type AuthModalProps }
