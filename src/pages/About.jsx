import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function About() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
        >
        
            <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient">About Me</h2>
                <div className="h-1 w-20 bg-primary rounded-full" />
            </div>

            <div className="glass-panel p-8 rounded-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                    <strong className="text-foreground">Hello! I'm Krithika.</strong> I started my journey in tech with a simple curiosity about how things work on the web. That curiosity blossomed into a passion for building robust, scalable applications that not only function perfectly but also look stunning.
                </p>
                <p>
                    With a background in both <span className="text-accent">Computer Science</span> and <span className="text-primary">Design</span>, I bridge the gap between engineering and aesthetics. I believe that the best software is invisible - it just works and it feels natural to use.
                </p>
                <p>
                    When I'm not coding, you can find me exploring new AI tools, contributing to open-source projects, or sketching new UI ideas in Figma. I'm constantly learning and evolving with the tech landscape.
                </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
                    <h3 className="text-2xl font-bold mb-4">Download My Resume</h3>
        <p className="text-muted-foreground mb-6">
            A comprehensive snapshot of my technical expertise, project experience, and professional journey. 
            Download the resume to explore my skills, achievements, and the value I bring to impactful teams.
        </p>

        <a
            href="/Krithika H S.pdf"
            download
            className="inline-block px-6 py-3 rounded-xl bg-primary text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
            Download Resume
        </a>
                
            </div>

            <div className="flex justify-between items-center p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <div>
                    <h3 className="font-bold text-xl">Let's work together</h3>
                    <p className="text-muted-foreground">I'm currently open for new opportunities.</p>
                </div>
                <Link href="/contact" className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <ArrowRight />
                </Link>
            </div>
        </motion.div>
    );
}
