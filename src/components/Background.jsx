import { motion } from "framer-motion";

export function Background() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
            {/* Primary Blob */}
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px]"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Accent Blob */}
            <motion.div
                className="absolute bottom-[0%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent/20 blur-[120px]"
                animate={{
                    x: [0, -50, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />

            {/* Secondary Blob */}
            <motion.div
                className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-[80px]"
                animate={{
                    x: [0, -30, 30, 0],
                    y: [0, -50, 50, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Grid Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-[0.09]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
}
