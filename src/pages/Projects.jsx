import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Github, ExternalLink, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Projects() {
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
        hidden: { opacity: 0, scale: 0.9 },
        show: { opacity: 1, scale: 1 }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-12 pb-12"
        >
            <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient">Featured Projects</h2>
                <div className="h-1 w-20 bg-primary rounded-full" />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 gap-8"
            >
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        variants={item}
                        className="group relative glass-panel rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-primary/30"
                    >
                        <div className="grid md:grid-cols-2 gap-0 h-full">
                            {/* Image Section */}
                            <div className="relative h-64 md:h-full overflow-hidden">
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
                                {/* HTML Comment: Project visualization */}
                                <img
                                    src={project.imageUrl || ""}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {project.featured && (
                                    <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center gap-1 shadow-lg">
                                        <Star className="w-3 h-3 fill-current" />
                                        FEATURED
                                    </div>
                                )}
                            </div>

                            {/* Content Section */}
                            <div className="p-8 flex flex-col justify-between space-y-6 bg-card/30">
                                <div>
                                    <h3 className="text-2xl font-bold font-display mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags?.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-background/50 border border-border rounded-full text-xs font-medium text-foreground/80">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        {project.githubLink && (
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
                                            >
                                                <Github className="w-4 h-4" />
                                                Code
                                            </a>
                                        )}
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted/50 transition-colors font-medium"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}
