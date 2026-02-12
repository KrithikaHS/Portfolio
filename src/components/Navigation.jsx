import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Award, Briefcase, Code, Github, Home, Mail, User } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Logo } from "./Logo";

const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: User },
    { href: "/skills", label: "Skills", icon: Code },
    { href: "/projects", label: "Projects", icon: Briefcase },
    { href: "/achievements", label: "Experience & Achievements", icon: Award },
    { href: "/contact", label: "Contact", icon: Mail },
];

export function Navigation() {
    const [location] = useLocation();

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 flex justify-center p-4 pointer-events-none">
            <div className="glass-panel rounded-full px-2 py-2 pointer-events-auto flex items-center gap-1 overflow-x-auto max-w-[95vw] md:max-w-none no-scrollbar">
                {/* Logo */}
                <Link href="/">
                    <div className="px-3 py-2 hover:bg-muted/50 rounded-full transition-colors cursor-pointer">
                        <Logo className="w-6 h-6" />
                    </div>
                </Link>

                <div className="w-px h-6 bg-border mx-1" />

                {links.map((link) => {
                    const isActive = location === link.href;
                    const Icon = link.icon;

                    return (
                        <Link key={link.href} href={link.href}>
                            <div
                                className={cn(
                                    "relative px-4 py-2 rounded-full flex items-center gap-2 transition-colors duration-200 cursor-pointer select-none",
                                    isActive ? "text-white" : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-primary rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2 font-medium text-sm md:text-base">
                                    <Icon className="w-4 h-4" />
                                    <span className={cn("hidden md:inline", isActive && "inline")}>{link.label}</span>
                                </span>
                            </div>
                        </Link>
                    );
                })}

                <div className="w-px h-6 bg-border mx-2 hidden md:block" />

                <a
                    href="https://github.com/KrithikaHS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50 rounded-full"
                >
                    <Github className="w-5 h-5" />
                </a>
            </div>
        </nav>
    );
}
