import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Splash({ onComplete }) {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        // Sequence of animations
        const timer1 = setTimeout(() => setStage(1), 500); // Start
        const timer2 = setTimeout(() => setStage(2), 2500); // Morph to logo
        const timer3 = setTimeout(() => {
            onComplete(); // Done
        }, 3500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden">

                {/* Watermark Background */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none overflow-hidden"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 3 }}
                >
                    <div className="text-[15vw] font-black leading-none text-foreground whitespace-nowrap -rotate-12">
                        FULL STACK UI/UX AI/ML
                    </div>
                </motion.div>

                {/* Main Name Animation */}
                <motion.div
                    layoutId="hero-name"
                    className="relative z-10"
                >
                    <motion.h1
                        className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
                        initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
                        animate={{
                            y: 0,
                            opacity: stage >= 1 ? 1 : 0,
                            filter: "blur(0px)",
                            scale: stage === 2 ? 0.5 : 1
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Krithika
                    </motion.h1>
                </motion.div>

                {/* Loading Bar */}
                <motion.div
                    className="mt-12 w-64 h-1 bg-muted rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: stage >= 1 && stage < 2 ? 1 : 0 }}
                >
                    <motion.div
                        className="h-full bg-primary"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
}
