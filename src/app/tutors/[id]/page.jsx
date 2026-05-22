import BookingModal from "@/Components/BookingModal";
import { auth } from "@/lib/auth";
import { getAllBooking, getTutorsDetail } from "@/lib/data";
import {
    BookOpen,
    MapPin,
    Calendar,
    Clock,
    Video,
    Monitor,
    DollarSign,
    Layers,
    ChevronRight,
    ArrowUpRight,
    Sparkles,
    ShieldCheck,
    GraduationCap,
    Hourglass,
    Zap,
    Activity,
} from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }) {
    const { id } = await params;
    const tutor = await getTutorsDetail(id);

    if (!tutor) {
        return {
            title: "Tutor Not Found | MediQueue",
            description:
                "The requested medical tutor profile could not be found.",
        };
    }

    return {
        title: `${tutor.name} - Medical Tutor Profile | MediQueue`,
        description: `Book an academic session with ${tutor.name} (${tutor.category}) from ${tutor.institution}. Track active queue tracking metrics and manage learning windows securely.`,
        keywords: [
            "MediQueue",
            `${tutor.name}`,
            `${tutor.category} Tutor`,
            `${tutor.institution}`,
            "Queue Tracking",
            "Academic Session Management",
        ],
        authors: [{ name: "MediQueue Team" }],
    };
}

const DetailsPage = async ({ params }) => {
    const { id } = await params;
    const { token } = await auth.api.getToken({
        headers: await headers(),
    });
    const tutor = await getTutorsDetail(id, token);
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const allBooking = await getAllBooking(token);
    const bookUser = await getAllBooking();

    const user = session?.user;
    const {
        name,
        image,
        category,
        teachingMode,
        availableDays,
        availableTime,
        hourlyFee,
        totalSlot,
        institution,
        location,
        startDate,
    } = tutor;

    const formattedDate = new Date(startDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const slotsCount = parseInt(totalSlot) || 0;
    const isOnline = teachingMode?.toLowerCase() === "online";

    return (
        <div className="min-h-screen  text-zinc-900 dark:text-zinc-50 transition-colors duration-500 relative overflow-x-clip font-sans antialiased pb-20 selection:bg-green-500 selection:text-white">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.06),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.12),transparent_50%)] pointer-events-none z-0" />
            <div className="absolute top-[400px] -right-20 w-96 h-96 bg-green-500/[0.01] dark:bg-green-500/[0.03] rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10 py-8 md:py-12">
                <div className="inline-flex items-center space-x-2 bg-white/70 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/60 backdrop-blur-xl px-4 py-2 rounded-full text-xs font-medium mb-10 shadow-[0_2px_12px_rgba(0,0,0,0.02)] dark:shadow-none overflow-x-auto max-w-full scrollbar-none">
                    <Link
                        href="/"
                        className="text-zinc-500 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-500 transition-colors"
                    >
                        Home
                    </Link>
                    <ChevronRight
                        size={12}
                        className="flex-shrink-0 text-zinc-400 dark:text-zinc-600"
                    />
                    <Link
                        href="/tutors"
                        className="text-zinc-500 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-500 transition-colors"
                    >
                        Tutors
                    </Link>
                    <ChevronRight
                        size={12}
                        className="flex-shrink-0 text-zinc-400 dark:text-zinc-600"
                    />
                    <span className="text-green-600 dark:text-green-500 font-bold bg-green-500/10 dark:bg-green-500/5 px-3 py-0.5 rounded-lg border border-green-500/10 dark:border-green-500/20 shadow-sm truncate">
                        {name}
                    </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-900/40 dark:to-zinc-900/20 border border-zinc-200 dark:border-zinc-800/50 backdrop-blur-xl rounded-lg p-4 md:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.02)] dark:shadow-none relative overflow-hidden group">
                            <div className="relative w-full aspect-[4/3] md:aspect-[20/10] rounded-lg overflow-hidden mb-6 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/40 shadow-inner">
                                <Image
                                    src={image}
                                    alt={name}
                                    fill
                                    priority
                                    className="object-cover object-center group-hover:scale-[1.012] transition-transform duration-1000 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-950/20 to-transparent mix-blend-multiply" />

                                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 z-10">
                                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[11px] font-black uppercase tracking-wider bg-white dark:bg-zinc-900 text-green-600 dark:text-green-500 backdrop-blur-md shadow-lg border border-zinc-200/80 dark:border-zinc-700/30">
                                        <Sparkles
                                            size={12}
                                            className="text-green-500 animate-pulse"
                                        />
                                        {category}
                                    </span>

                                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg shadow-xl">
                                        <div
                                            className={`w-2 h-2 rounded-full relative ${isOnline ? "bg-green-400" : "bg-blue-400"}`}
                                        >
                                            <span
                                                className={`absolute inset-0 rounded-full animate-ping opacity-75 ${isOnline ? "bg-green-400" : "bg-blue-400"}`}
                                            />
                                        </div>
                                        <span className="text-[11px] font-black tracking-widest uppercase text-zinc-100">
                                            {teachingMode} NODE
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2 px-1">
                                <h1 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-none">
                                    {name}
                                </h1>
                                <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-500 text-xs font-semibold uppercase tracking-wider pt-1">
                                    <GraduationCap
                                        size={15}
                                        className="text-green-600 dark:text-green-500"
                                    />
                                    <span>
                                        Verified Academic Consultant Profile
                                        Matrix
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/50 backdrop-blur-xl rounded-lg p-6 shadow-sm flex flex-col justify-between hover:border-green-500/40 dark:hover:border-green-500/20 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/50 transition-all duration-300 group/bento relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-green-500/[0.01] dark:from-green-500/[0.02] to-transparent rounded-full opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500" />
                            <div className="flex items-center justify-between mb-8">
                                <div className="p-3 rounded-lg bg-green-500/10 text-green-600 dark:text-green-500 border border-green-500/10 dark:border-green-500/20 shadow-inner">
                                    <BookOpen size={20} />
                                </div>
                                <ArrowUpRight
                                    size={16}
                                    className="text-zinc-400 dark:text-zinc-600 opacity-0 group-hover/bento:opacity-100 group-hover/bento:translate-x-0.5 group-hover/bento:-translate-y-0.5 transition-all duration-300"
                                />
                            </div>
                            <div>
                                <p className="text-[10px] text-zinc-400 dark:text-zinc-500 font-black uppercase tracking-widest">
                                    Affiliation
                                </p>
                                <p className="text-xl font-black text-zinc-800 dark:text-zinc-100 mt-1 leading-snug tracking-tight">
                                    {institution}
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/50 backdrop-blur-xl rounded-lg p-6 shadow-sm flex flex-col justify-between hover:border-green-500/40 dark:hover:border-green-500/20 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/50 transition-all duration-300 group/bento relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-green-500/[0.01] dark:from-green-500/[0.02] to-transparent rounded-full opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500" />
                            <div className="flex items-center justify-between mb-8">
                                <div className="p-3 rounded-lg bg-green-500/10 text-green-600 dark:text-green-500 border border-green-500/10 dark:border-green-500/20 shadow-inner">
                                    <MapPin size={20} />
                                </div>
                                <ArrowUpRight
                                    size={16}
                                    className="text-zinc-400 dark:text-zinc-600 opacity-0 group-hover/bento:opacity-100 group-hover/bento:translate-x-0.5 group-hover/bento:-translate-y-0.5 transition-all duration-300"
                                />
                            </div>
                            <div>
                                <p className="text-[10px] text-zinc-400 dark:text-zinc-500 font-black uppercase tracking-widest">
                                    Location Hub
                                </p>
                                <p className="text-xl font-black text-zinc-800 dark:text-zinc-100 mt-1 leading-snug tracking-tight">
                                    {location}
                                </p>
                            </div>
                        </div>

                        <div className="md:col-span-2 bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/50 backdrop-blur-xl rounded-lg p-6 shadow-sm space-y-6">
                            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800/40 pb-4">
                                <div className="flex items-center space-x-2.5">
                                    <Hourglass
                                        size={16}
                                        className="text-green-600 dark:text-green-500 animate-spin-slow"
                                    />
                                    <h3 className="text-sm font-black uppercase tracking-wider text-zinc-900 dark:text-white">
                                        Operational Parameters
                                    </h3>
                                </div>
                                <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-widest bg-zinc-100 dark:bg-zinc-800/60 font-black text-zinc-400 dark:text-zinc-400 px-2.5 py-1 rounded-lg border border-zinc-200 dark:border-zinc-700/50">
                                    <Activity
                                        size={10}
                                        className="text-green-600 dark:text-green-500"
                                    />{" "}
                                    Live Data Sync
                                </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center space-x-4 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-950/20 border border-zinc-200 dark:border-zinc-800/40 hover:bg-zinc-100/80 dark:hover:bg-zinc-900/20 transition-all duration-200">
                                    <div className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/50 shadow-sm text-zinc-400 dark:text-zinc-500 flex-shrink-0">
                                        <Calendar size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                                            Active Schedule
                                        </p>
                                        <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200 mt-0.5">
                                            {availableDays}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-950/20 border border-zinc-200 dark:border-zinc-800/40 hover:bg-zinc-100/80 dark:hover:bg-zinc-900/20 transition-all duration-200">
                                    <div className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/50 shadow-sm text-zinc-400 dark:text-zinc-500 flex-shrink-0">
                                        <Clock size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                                            Shift Windows
                                        </p>
                                        <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200 mt-0.5">
                                            {availableTime}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-950/20 border border-zinc-200 dark:border-zinc-800/40 hover:bg-zinc-100/80 dark:hover:bg-zinc-900/20 transition-all duration-200">
                                    <div className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/50 shadow-sm text-zinc-400 dark:text-zinc-500 flex-shrink-0">
                                        {isOnline ? (
                                            <Video size={18} />
                                        ) : (
                                            <Monitor size={18} />
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                                            Transmission Variant
                                        </p>
                                        <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200 mt-0.5">
                                            {teachingMode} Streaming
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-950/20 border border-zinc-200 dark:border-zinc-800/40 hover:bg-zinc-100/80 dark:hover:bg-zinc-900/20 transition-all duration-200">
                                    <div className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/50 shadow-sm text-zinc-400 dark:text-zinc-500 flex-shrink-0">
                                        <Layers size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                                            Cohort Launch
                                        </p>
                                        <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200 mt-0.5">
                                            {formattedDate}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:sticky lg:top-24 space-y-6 w-full">
                        <div className="bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/60 backdrop-blur-2xl rounded-lg p-6 shadow-[0_12px_40px_rgba(0,0,0,0.03)] dark:shadow-none relative overflow-hidden group">
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-500/5 dark:bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/10 dark:group-hover:bg-green-500/15 transition-all duration-700 pointer-events-none" />

                            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800/40 pb-4 mb-6">
                                <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                                    Transaction Ledger
                                </h3>
                                <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider text-green-600 dark:text-green-500 bg-green-500/10 dark:bg-green-500/5 border border-green-500/20 px-2.5 py-0.5 rounded-lg shadow-sm">
                                    <Zap
                                        size={10}
                                        className="fill-current animate-bounce"
                                    />{" "}
                                    Secure Lock
                                </span>
                            </div>

                            <div className="space-y-6 mb-6">
                                <div className="flex items-baseline justify-between">
                                    <span className="text-zinc-400 dark:text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                                        Rate Value Matrix
                                    </span>
                                    <div className="flex items-center text-zinc-900 dark:text-white font-black text-4xl tracking-tighter">
                                        <DollarSign
                                            size={22}
                                            className="text-green-600 dark:text-green-500 -mr-0.5 self-start mt-1"
                                        />
                                        <span>{hourlyFee}</span>
                                        <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500 tracking-normal ml-0.5">
                                            /hr
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-3 bg-zinc-50/60 dark:bg-zinc-950/40 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800/50 shadow-inner">
                                    <div className="flex items-center justify-between text-[11px] font-bold">
                                        <span className="text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                                            Allocated Capacity
                                        </span>
                                        <span className="text-green-600 dark:text-green-500 font-black bg-green-500/10 dark:bg-green-500/5 px-2.5 py-0.5 rounded-lg text-[10px]">
                                            {slotsCount} Active Slots
                                        </span>
                                    </div>

                                    <div className="w-full bg-zinc-200 dark:bg-zinc-800/80 h-1 rounded-lg overflow-hidden">
                                        <div
                                            className="h-full rounded-lg transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(34,197,94,0.2)] dark:shadow-[0_0_8px_rgba(34,197,94,0.4)] bg-gradient-to-r from-green-600 to-teal-400"
                                            style={{
                                                width: `${Math.min((slotsCount / 50) * 100, 100)}%`,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {tutor.totalSlot === 0 && (
                                <div className="p-3 bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-lg text-sm text-amber-700 dark:text-amber-300 mb-4">
                                    <p>
                                        This tutor is currently fully booked and
                                        has no available slots at the moment.
                                        Please check back later for new
                                        availability or explore other tutors to
                                        continue your learning journey without
                                        delay.
                                    </p>
                                </div>
                            )}

                            <BookingModal
                                tutor={tutor}
                                user={user}
                                allBooking={allBooking}
                                bookUser={bookUser}
                            />

                            <div className="mt-5 flex items-center justify-center gap-1.5 text-center text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider">
                                <ShieldCheck
                                    size={12}
                                    className="text-green-500 flex-shrink-0"
                                />
                                <span>Secured via MediQueue Escrow Layer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
