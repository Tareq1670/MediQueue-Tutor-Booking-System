import { Star, ShieldCheck, Milestone, Award } from "lucide-react";

const TrustAndPartners = () => {
    const partners = ["EduPulse", "Global-Hub", "SkillNet", "LearnFlow"];
    
    const stats = [
        {
            icon: <ShieldCheck className="w-5 h-5" />,
            title: "4.9/5 Rating",
            desc: "Verified Reviews",
            bgClass: "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/30"
        },
        {
            icon: <Milestone className="w-5 h-5" />,
            title: "10K+ Sessions",
            desc: "Tokens Generated",
            bgClass: "bg-teal-50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400 border-teal-100 dark:border-teal-900/30"
        },
        {
            icon: <Award className="w-5 h-5" />,
            title: "Top EdTech",
            desc: "Scheduler of the Year",
            bgClass: "bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-900/30"
        }
    ];

    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-zinc-50 to-zinc-100/50 dark:from-zinc-950 dark:to-zinc-900/50 border-y border-zinc-200/80 dark:border-zinc-800/50 py-16 md:py-20 transition-colors duration-300">
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-emerald-500/5 dark:bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />
            
            <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    
                    <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
                        <div className="space-y-4">
                           
                            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight max-w-xl mx-auto lg:mx-0 leading-[1.15]">
                                The world's trusted platform for{" "}
                                <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                                    academic excellence
                                </span>{" "}
                                &{" "}
                                <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
                                    expert mentorship
                                </span>
                            </h2>
                        </div>

                        <div className="space-y-3 max-w-md mx-auto lg:mx-0">
                            <p className="text-xs uppercase font-bold tracking-widest text-zinc-400 dark:text-zinc-500">
                                Official Partners
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                                {partners.map((partner, index) => (
                                    <div 
                                        key={index}
                                        className="flex items-center justify-center p-3 rounded-lg bg-white dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm text-sm font-bold tracking-wide text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 cursor-default"
                                    >
                                        {partner}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center space-y-8">
                        <div className="text-center lg:text-right space-y-2">
                            <div className="flex items-center justify-center lg:justify-end gap-0.5 text-amber-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current drop-shadow-[0_2px_4px_rgba(251,191,36,0.2)]" />
                                ))}
                            </div>
                            <p className="text-xs text-zinc-400 dark:text-zinc-500 font-semibold tracking-wider uppercase">
                                Verified Social Proof
                            </p>
                            <h3 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
                                50,000+ Ambitious Students
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-xl lg:max-w-none">
                            {stats.map((stat, index) => (
                                <div 
                                    key={index} 
                                    className="group bg-white dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 flex flex-row sm:flex-col items-center sm:items-start justify-start gap-4 transition-all duration-300"
                                >
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 transition-transform duration-300 group-hover:scale-105 ${stat.bgClass}`}>
                                        {stat.icon}
                                    </div>
                                    <div className="space-y-0.5">
                                        <h4 className="text-sm md:text-base font-bold text-zinc-800 dark:text-zinc-200 tracking-tight">
                                            {stat.title}
                                        </h4>
                                        <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                                            {stat.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TrustAndPartners;