import { motion } from "framer-motion";
import { Award, Trophy, Medal, Star } from "lucide-react";

export function Achievements() {
    const achievements = [
        {
            id: 1,
            title: "Best UI/UX Design",
            event: "Global Tech Hackathon 2023",
            description: "Awarded for designing the most intuitive and accessible interface for a healthcare application.",
            icon: Trophy,
            color: "text-yellow-500"
        },
        {
            id: 2,
            title: "Open Source Contributor",
            event: "React Native Community",
            description: "Recognized as a top contributor for optimizing performance in core navigation libraries.",
            icon: Star,
            color: "text-primary"
        },
        {
            id: 3,
            title: "1st Place - AI Challenge",
            event: "Innovate AI 2024",
            description: "Developed a novel generative model for creating accessible web layouts from text descriptions.",
            icon: Medal,
            color: "text-accent"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
        >
            <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient">Achievements</h2>
                <div className="h-1 w-20 bg-accent rounded-full" />
            </div>

            <div className="grid gap-6">
                {achievements.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-panel p-6 rounded-2xl flex items-start gap-6 hover:bg-white/5 transition-colors"
                    >
                        <div className={`p-4 rounded-xl bg-background/50 ${item.color} shadow-sm`}>
                            <item.icon className="w-8 h-8" />
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-sm font-mono text-primary">{item.event}</p>
                            <p className="text-muted-foreground">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="glass-panel p-8 rounded-3xl mt-12 border-t-4 border-t-primary">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Award className="w-6 h-6 text-primary" />
                    Certifications
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["AWS Certified Solutions Architect", "Google UX Design Professional", "Meta Front-End Developer", "TensorFlow Developer Certificate"].map((cert) => (
                        <div key={cert} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="w-2 h-2 rounded-full bg-accent" />
                            <span className="font-medium">{cert}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
