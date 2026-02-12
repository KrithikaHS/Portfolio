import { skills } from "@/data/skills";
import { motion } from "framer-motion";
import { Code, Database, Layers, Layout, Terminal } from "lucide-react";

export function Skills() {
    // Use static data instead of API

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    const categories = [
        { id: "languages", label: "Programming Languages", icon: Code },
        { id: "frameworks", label: "Frameworks & Libraries", icon: Layers },
        { id: "web", label: "Web Technologies", icon: Layout },
        { id: "databases", label: "Databases", icon: Database },
        { id: "tools", label: "Tools & Platforms", icon: Terminal },
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
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient">Skills & Expertise</h2>
                <div className="h-1 w-20 bg-accent rounded-full" />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="space-y-12"
            >
                {categories.map((cat) => {
                    const catSkills = skills.filter(s => s.category === cat.id);
                    if (!catSkills.length) return null;

                    const Icon = cat.icon;

                    return (
                        <div key={cat.id} className="space-y-6">
                            <div className="flex items-center gap-3 text-xl font-bold text-foreground/80">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3>{cat.label}</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {catSkills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        variants={item}
                                        className="glass-panel p-4 rounded-xl flex items-center gap-4 group hover:border-primary/50 transition-colors"
                                    >
                                        <div className="flex-1">
                                            <div className="flex justify-between mb-2">
                                                <span className="font-medium">{skill.name}</span>
                                                <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                                            </div>
                                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.proficiency}%` }}
                                                    transition={{ duration: 1, ease: "easeOut" }}
                                                    className="h-full bg-gradient-to-r from-primary to-accent"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </motion.div>
        </motion.div>
    );
}
