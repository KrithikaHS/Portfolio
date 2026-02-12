import { motion } from "framer-motion";
import { Award, Medal, Star, Trophy } from "lucide-react";

export function Achievements() {
    const internships = [
    {
        id: 1,
        role: "Graphic Designer Intern",
        company: "IT Cell, KLS GIT",
        location: "Belagavi, Karnataka",
        duration: "9th Sep 2024 – 9th Oct 2024",
        description:
            "Designed promotional materials and collaborated with technical teams to improve communication assets.",
        icon: Star,
        color: "text-primary"
    }
];

const certifications = [
    {
        id: 1,
        title: "NPTEL – Introduction to Cloud Computing",
        issuer: "NPTEL",
        year: "July - October 2024",
        description:
            "Completed a foundational course covering cloud computing concepts, service models (IaaS, PaaS, SaaS), virtualization, and cloud security basics.",
        icon: Award,
        color: "text-primary"
    },

    {
        id: 3,
        title: "PwC Salesforce Launchpad Program",
        issuer: "PwC",
        year: "24th July 2025",
        description:
            "Hands-on training in Salesforce fundamentals including Lightning components, CRM workflows, automation, and real-world business use cases.",
        icon: Award,
        color: "text-yellow-500"
    }
];



const achievements = [
    {
        id: 1,
        title: "Winner – Code; Without Barriers Hackathon 2025",
        event: "Microsoft Asia-Pacific",
        description:
            "Won the hackathon for developing MailAI, an intelligent email automation system using AI-driven workflows.",
        icon: Trophy,
        color: "text-yellow-500"
    },
    {
        id: 2,
        title: "Web Head",
        event: "ACM Club, KLS GIT (Dec 2024 – Present)",
        description:
            "Led web development initiatives, managed technical assets, and supported digital presence for club activities.",
        icon: Medal,
        color: "text-accent"
    },
    {
        id: 3,
        title: "Graphics Designer",
        event: "Astronomy Club, KLS GIT (May 2024 – Apr 2025)",
        description:
            "Led Designing initiatives, managed posters, and montly calenders for club activities.",
        icon: Medal,
        color: "text-accent"
    },
    {
        id: 4,
        title: "Problem Solving – LeetCode",
        event: "LeetCode",
        description:
            "Solved 150+ Data Structures and Algorithms problems, strengthening problem-solving and coding proficiency.",
        icon: Star,
        color: "text-primary"
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
            <div className="space-y-6">
        <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient">Internships</h2>
                <div className="h-1 w-20 bg-accent rounded-full" />
            </div>

    <div className="grid gap-6">
        {internships.map((item, index) => (
            <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-6 rounded-2xl flex items-start gap-6"
            >
                <div className={`p-4 rounded-xl bg-background/50 ${item.color}`}>
                    <item.icon className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                    <h4 className="text-xl font-bold">{item.role}</h4>
                    <p className="text-sm font-mono text-primary">
                        {item.company} · {item.duration}
                    </p>
                    <p className="text-muted-foreground">{item.description}</p>
                </div>
            </motion.div>
        ))}
    </div>
</div>


<div className="space-y-6">
        <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient">Certification</h2>
                <div className="h-1 w-20 bg-accent rounded-full" />
            </div>

    <div className="grid gap-6">
    {certifications.map((item, index) => (
        <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-panel p-6 rounded-2xl flex items-start gap-6"
        >
            <div className={`p-4 rounded-xl bg-background/50 ${item.color}`}>
                <item.icon className="w-8 h-8" />
            </div>

            <div className="space-y-1">
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="text-sm font-mono text-primary">
                    {item.issuer} · {item.year}
                </p>
                <p className="text-muted-foreground">{item.description}</p>
            </div>
        </motion.div>
    ))}
</div>

</div>



            <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient">Achievements & Leadership</h2>
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

        </motion.div>
    );
}
