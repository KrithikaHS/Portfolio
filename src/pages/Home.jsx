import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { Link, Route, Switch, useLocation } from "wouter";
import { About } from "./About";
import { Achievements } from "./Achievements";
import { Contact } from "./Contact";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
// import /logo.pngfrom "@assets/hero.jpg";

export function Home() {
    const [location] = useLocation();
    const isHome = location === "/";

    // Animation variants
    const containerVariants = {
        centered: {
            width: "100%",
            maxWidth: "800px",
            padding: "2rem",
            alignItems: "center",
            textAlign: "center"
        },
        sidebar: {
            width: "100%",
            maxWidth: "100%",
            padding: "2rem",
            alignItems: "flex-start",
            textAlign: "left"
        }
    };
    const [imageError, setImageError] = useState(false);

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-stretch ">

            {/* Dynamic Hero Section */}
            <motion.div
                layout
                className={cn(
                    "flex flex-col justify-center transition-all z-20 duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]",
                    isHome
                        ? "w-full min-h-screen items-center pt-24 md:pt-0"
                        : "w-full md:w-[400px] lg:w-[500px] min-h-auto md:min-h-screen md:fixed md:top-0 md:left-0 border-b md:border-b-0 md:border-r border-border/10 bg-background/5 backdrop-blur-sm pt-24 md:pt-0"
                )}
            >
                <motion.div
                    layout
                    className={cn(
                        "flex flex-col gap-0.5",
                        isHome ? "items-center text-center max-w-4xl px-4 pt-[5rem]" : "items-start text-left px-8 md:pl-12 md:pt-32"
                    )}
                >
                    {/* Avatar / Logo */}
                    <motion.div
                        layoutId="avatar-container"
                        className={cn(
                            "relative rounded-full overflow-hidden bg-black border-background shadow-2xl",
                            isHome ? "w-32 h-32 md:w-48 md:h-48" : "w-40 h-40 md:w-40 md:h-40"
                        )}
                    >
                        {/** image fallback logic */}
                        {!imageError ? (
                            <img
                                src="/logo.jpeg"
                                alt="Krithika"
                                className="w-full h-full object-cover"
                                onError={() => setImageError(true)}
                            />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-4xl font-bold">
                                K
                            </div>
                        )}
                    </motion.div>

                    <div className="space-y-2">
                        <motion.h1
                            layoutId="hero-name"
                            className={cn(
                                "font-display font-bold tracking-tighter !leading-[1.2] text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70",
                                isHome ? "text-5xl md:text-7xl lg:text-8xl" : "text-3xl md:text-5xl "
                            )}
                        >
                            Krithika Shettigar
                        </motion.h1>

                        <motion.p
                            layout
                            className={cn(
                                "font-mono text-primary font-medium",
                                isHome ? "text-lg md:text-2xl" : "text-base md:text-lg"
                            )}
                        >
                            Full-Stack Developer | UI/UX Designer
                        </motion.p>
                    </div>

                    <motion.p
                        layout
                        className={cn(
                            "text-muted-foreground leading-relaxed",
                            isHome ? "text-lg md:text-xl max-w-2xl" : "text-sm md:text-base max-w-xs"
                        )}
                    >
                        I craft digital experiences that blend aesthetic beauty with technical precision.
                        Specializing in React ecosystems, creative interactions and AI integrations.
                    </motion.p>

                    <motion.div
                        layout
                        className="flex gap-4 mt-2"
                    >
                        {[
                            { icon: Github, href: "https://github.com/KrithikaHS" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/krithika-h-shettigar/" },
                            { icon: Mail, href: "mailto:krithikahs14@gmail.com" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 rounded-full bg-muted/50 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </motion.div>

                    {isHome && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="pt-8"
                        >
                            <Link href="/projects">
                                <button className="px-8 py-4 rounded-full bg-foreground text-background font-bold text-lg hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-foreground/20">
                                    View My Work
                                </button>
                            </Link>
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>

            {/* Content Area */}
            <div className={cn(
                "flex-1 relative min-h-screen transition-all duration-700",
                isHome ? "hidden" : "opacity-100 w-full md:pl-[400px] lg:pl-[500px]"
            )}>
                <main className="p-4 md:p-12  pt-28 md:pt-32 max-w-5xl mx-auto">
                    <AnimatePresence mode="wait">
                        <Switch>
                            <Route path="/about" component={About} />
                            <Route path="/skills" component={Skills} />
                            <Route path="/projects" component={Projects} />
                            <Route path="/achievements" component={Achievements} />
                            <Route path="/contact" component={Contact} />
                        </Switch>
                    </AnimatePresence>
                </main>
            </div>

        </div>
    );
}
