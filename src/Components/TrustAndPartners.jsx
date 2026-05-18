import { Star, ShieldCheck, Milestone, Award } from "lucide-react";

const TrustAndPartners = () => {
    return (
        <section className="w-full bg-zinc-50 dark:bg-zinc-950/40 border-y border-zinc-200/60 dark:border-zinc-800/40 py-12 md:py-16 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    
                    {/* Left Column: Heading & Tech/Edu Brand Partners */}
                    <div className="space-y-6 text-center lg:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight max-w-md mx-auto lg:mx-0 leading-tight">
                            The world's trusted platform for{" "}
                            <span className="text-green-600 dark:text-green-500 font-extrabold">
                                academic excellence
                            </span>{" "}
                            and{" "}
                            <span className="text-teal-600 dark:text-teal-500 font-extrabold">
                                expert mentorship
                            </span>
                        </h2>
                        

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-8 pt-2 grayscale opacity-60 dark:opacity-40 hover:grayscale-0 transition-all duration-300">
                            <span className="text-lg font-bold tracking-wider text-zinc-800 dark:text-zinc-200">EduPulse</span>
                            <span className="text-lg font-bold tracking-wider text-zinc-800 dark:text-zinc-200">Global-Hub</span>
                            <span className="text-lg font-bold tracking-wider text-zinc-800 dark:text-zinc-200">SkillNet</span>
                            <span className="text-lg font-bold tracking-wider text-zinc-800 dark:text-zinc-200">LearnFlow</span>
                        </div>
                    </div>


                    <div className="flex flex-col items-center lg:items-end justify-center space-y-6">
                        <div className="text-center lg:text-right space-y-1">
                            <div className="flex items-center justify-center lg:justify-end gap-1 text-amber-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
                                Trusted by
                            </p>
                            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
                                50,000+ Ambitious Students
                            </h3>
                        </div>

                        <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 w-full">
                            

                            <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 rounded-xl p-4 shadow-sm flex items-center gap-3 min-w-[160px] max-w-[200px]">
                                <div className="w-9 h-9 rounded-lg bg-green-50 dark:bg-green-950/30 flex items-center justify-center text-green-600 dark:text-green-400 border border-green-100 dark:border-green-900/30">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-zinc-800 dark:text-zinc-200">4.9/5 Rating</h4>
                                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Verified Reviews</p>
                                </div>
                            </div>


                            <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 rounded-xl p-4 shadow-sm flex items-center gap-3 min-w-[160px] max-w-[200px]">
                                <div className="w-9 h-9 rounded-lg bg-teal-50 dark:bg-teal-950/30 flex items-center justify-center text-teal-600 dark:text-teal-400 border border-teal-100 dark:border-teal-900/30">
                                    <Milestone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-zinc-800 dark:text-zinc-200">10K+ Sessions</h4>
                                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Tokens Generated</p>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 rounded-xl p-4 shadow-sm flex items-center gap-3 min-w-[160px] max-w-[200px]">
                                <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-900/30">
                                    <Award className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-zinc-800 dark:text-zinc-200">Top EdTech</h4>
                                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Scheduler of the Year</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TrustAndPartners;