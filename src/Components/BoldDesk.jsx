import {
    ShieldCheck,
    Zap,
    Award,
    RefreshCw,
    BadgePercent,
    Headphones,
} from "lucide-react";

const BoldDesk = () => {
    const features = [
        {
            id: 1,
            icon: (
                <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
            ),
            title: "Effortless to Use",
            description:
                "MediQueue's intuitive interface ensures students and expert tutors connect quickly across any subject—no steep learning curve. Simplicity meets academic efficiency.",
        },
        {
            id: 2,
            icon: (
                <ShieldCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
            ),
            title: "Secure & Reliable",
            description:
                "We deliver enterprise-grade security and reliable session hosting performance, ensuring your study logs, tokens, and personal credentials stay safe at all times.",
        },
        {
            id: 3,
            icon: (
                <Award className="w-5 h-5 text-green-600 dark:text-green-400" />
            ),
            title: "Top-Tier Mentorship",
            description:
                "Built for excellence, bridging the gap between learners and verified top-performing educators with proven professional and academic backgrounds.",
        },
        {
            id: 4,
            icon: (
                <RefreshCw className="w-5 h-5 text-green-600 dark:text-green-400" />
            ),
            title: "Hassle-Free Booking",
            description:
                "Switch to a smarter scheduling system with instant session token tracking, automated slot management, and tailored dashboards ready in seconds.",
        },
        {
            id: 5,
            icon: (
                <BadgePercent className="w-5 h-5 text-green-600 dark:text-green-400" />
            ),
            title: "Cost-Effective & Scalable",
            description:
                "Designed for learners at all levels. MediQueue grows with you, offering unbeatable hourly-rate educational value without compromising on session quality.",
        },
        {
            id: 6,
            icon: (
                <Headphones className="w-5 h-5 text-green-600 dark:text-green-400" />
            ),
            title: "Outstanding Support",
            description:
                "Available 24/7, MediQueue provides expert technical assistance whenever you face an issue during tutor slot booking or scheduling—just a click away.",
        },
    ];

    return (
        <section className="container mx-auto w-full py-16 md:py-24 transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-[fadeIn_0.8s_cubic-bezier(0.16,1,0.3,1)_both]">
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">
                        Why MediQueue?
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base font-normal max-w-xl mx-auto leading-relaxed">
                        An elite academic tutoring solution packed with dynamic
                        session tracking and premium feature flows—without the
                        premium price tag.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            style={{ animationDelay: `${index * 70}ms` }}
                            className="bg-zinc-50/50 dark:bg-zinc-900/20 border border-zinc-200/60 dark:border-zinc-800/40 rounded-2xl p-6 md:p-8 shadow-sm transition-all duration-500 ease-[0.16,1,0.3,1] flex flex-col justify-between items-start group relative overflow-hidden will-change-transform animate-[slideUp_0.7s_cubic-bezier(0.16,1,0.3,1)_both] hover:-translate-y-2 hover:scale-[1.015] hover:shadow-2xl hover:border-green-500/40 dark:hover:border-green-500/30 hover:bg-white dark:hover:bg-zinc-900/40"
                        >
                            <div className="space-y-4 relative z-10">
                                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:scale-110 group-hover:border-green-500/30 dark:group-hover:border-green-500/20">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 tracking-tight transition-colors duration-300 group-hover:text-green-600 dark:group-hover:text-green-400">
                                    {feature.title}
                                </h3>
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-normal">
                                    {feature.description}
                                </p>
                            </div>
                            <div className="absolute top-0 right-0 -translate-y-6 translate-x-6 w-32 h-32 bg-green-500/10 rounded-full blur-3xl opacity-0 transition-opacity duration-700 pointer-events-none group-hover:opacity-100" />
                        </div>
                    ))}
                </div>
            </div>
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(15px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(30px); filter: blur(4px); }
                    to { opacity: 1; transform: translateY(0); filter: blur(0px); }
                }
            `}} />
        </section>
    );
};

export default BoldDesk;