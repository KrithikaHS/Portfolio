import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Route, Switch } from "wouter";
import { Background } from "./components/Background";
import { Navigation } from "./components/Navigation";
import { Splash } from "./components/Splash";
import { ThemeToggle } from "./components/ThemeToggle";
import { queryClient } from "./lib/queryClient";
import { Home } from "./pages/Home";
import NotFound from "./pages/not-found";

function Router() {
    return (
        <Switch>
            {/* 
         We route EVERYTHING to Home, which internally handles sub-routes 
         for the layout transition effect. 
         wouter's <Switch> stops at the first match.
      */}
            <Route path="/" component={Home} />
            <Route path="/about" component={Home} />
            <Route path="/skills" component={Home} />
            <Route path="/projects" component={Home} />
            <Route path="/achievements" component={Home} />
            <Route path="/contact" component={Home} />

            {/* Fallback to 404 */}
            <Route component={NotFound} />
        </Switch>
    );
}

function App() {
    const [loading, setLoading] = useState(true);

    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <div className="relative min-h-screen font-sans text-foreground overflow-x-hidden selection:bg-primary/20">
                    <Background />
                    <Toaster />

                    <AnimatePresence mode="wait">
                        {loading ? (
                            <Splash key="splash" onComplete={() => setLoading(false)} />
                        ) : (
                            <>
                                <Navigation />
                                <div className="fixed top-4 right-4 z-50">
                                    <ThemeToggle />
                                </div>
                                <Router />
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </TooltipProvider>
            <Analytics />
        </QueryClientProvider>
    );
}

export default App;
