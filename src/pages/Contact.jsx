import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Schema for form validation
const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = (data) => {
        setIsSubmitting(true);

        // Simulate submission delay
        setTimeout(() => {
            toast({
                title: "Form Submitted!",
                description: "Note: This is a frontend-only demo. To enable form submissions, integrate a service like Formspree, EmailJS, or Netlify Forms.",
            });
            form.reset();
            setIsSubmitting(false);
        }, 1000);
    };


    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-12 max-w-2xl"
        >
            <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient">Get In Touch</h2>
                <div className="h-1 w-20 bg-primary rounded-full" />
                <p className="text-muted-foreground text-lg">
                    Have a project in mind or just want to say hi? Drop me a message below.
                </p>
            </div>

            {/* <div className="glass-panel p-8 rounded-3xl">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium ml-1">Name</label>
                        <input
                            {...form.register("name")}
                            className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/50"
                            placeholder="Your Name"
                        />
                        {form.formState.errors.name && (
                            <p className="text-sm text-destructive ml-1">{form.formState.errors.name.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium ml-1">Email</label>
                        <input
                            {...form.register("email")}
                            className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/50"
                            placeholder="hello@example.com"
                        />
                        {form.formState.errors.email && (
                            <p className="text-sm text-destructive ml-1">{form.formState.errors.email.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
                        <textarea
                            {...form.register("message")}
                            rows={5}
                            className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/50 resize-none"
                            placeholder="Tell me about your project..."
                        />
                        {form.formState.errors.message && (
                            <p className="text-sm text-destructive ml-1">{form.formState.errors.message.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send className="w-5 h-5" />
                                Send Message
                            </>
                        )}
                    </button>
                </form>
            </div> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-panel p-6 rounded-2xl text-center">
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">krithikahs14@gmail.com</p>
                </div>
                <div className="glass-panel p-6 rounded-2xl text-center">
                    <h3 className="font-bold mb-1">Location</h3>
                    <p className="text-muted-foreground text-sm">Karnataka, India</p>
                </div>
            </div>
        </motion.div>
    );
}
