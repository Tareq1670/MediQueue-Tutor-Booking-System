import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import {
    User,
    Mail,
    Shield,
    Calendar,
    Clock,
    Key,
    CheckCircle2,
    BookOpen,
    ArrowUpRight,
    Fingerprint,
} from "lucide-react";
import Image from "next/image";


export const metadata = {
    title: "Profile Dashboard | MediQueue",
    description: "Manage your academic healthcare sessions, check your current role permissions, and view active queue tracking metrics securely.",
    keywords: ["MediQueue", "Healthcare Dashboard", "Student Portal", "Queue Tracking", "Academic Session Management"],
    authors: [{ name: "MediQueue Team" }],
   
};





const ProfilePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const user = session?.user;

    return (
        <main className="container mx-auto w-full flex items-center justify-center py-10 md:py-16 px-4 md:px-6 max-w-6xl antialiased relative min-h-[90vh] isolation-isolate">
            
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
                <div className="absolute top-[10%] left-[5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-green-500/10 dark:bg-green-500/5 blur-[80px] md:blur-[120px]" />
                <div className="absolute bottom-[20%] right-[5%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-zinc-500/10 dark:bg-zinc-700/5 blur-[60px] md:blur-[100px]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
                
                <div className="md:col-span-2 border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm group">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                        <div className="relative shrink-0 w-24 h-24">
                            {user?.image ? (
                                <div className="relative w-full h-full rounded-2xl overflow-hidden ring-4 ring-zinc-50 dark:ring-zinc-900 border border-zinc-200 dark:border-zinc-800">
                                    <Image
                                        fill
                                        src={user.image}
                                        alt={user.name || "User"}
                                        className="object-cover"
                                        sizes="(max-width: 768px) 96px, 96px"
                                        priority
                                    />
                                </div>
                            ) : (
                                <div className="w-full h-full rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-2xl font-bold flex items-center justify-center border border-zinc-200 dark:border-zinc-700 uppercase tracking-wider">
                                    {user?.name?.slice(0, 2) || "MQ"}
                                </div>
                            )}
                            <span className="absolute -bottom-1 -right-1 bg-green-600 dark:bg-green-500 text-white rounded-xl p-1.5 ring-4 ring-white dark:ring-zinc-900 shadow-sm z-10">
                                <CheckCircle2 className="w-4 h-4" />
                            </span>
                        </div>

                        <div className="text-center sm:text-left space-y-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/60 dark:border-zinc-700/60">
                                Verified Student
                            </span>
                            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                {user?.name || "MediQueue Member"}
                            </h1>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed">
                                Manage your academic healthcare sessions and active queue tracking dashboard.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-[10px] font-bold text-zinc-400 dark:text-zinc-500 tracking-widest">
                        <span>SECURITY PROTOCOL V2.1</span>
                        <Fingerprint className="w-4 h-4 opacity-70" />
                    </div>
                </div>

                <div className="border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40 backdrop-blur-md rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm">
                    <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 shadow-sm">
                            <Key className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-[10px] font-bold bg-zinc-200/70 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2.5 py-1 rounded-md uppercase tracking-widest">
                            Privilege
                        </span>
                    </div>

                    <div className="space-y-1 mt-8">
                        <p className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase font-bold tracking-wider">
                            Current Role
                        </p>
                        <h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-wide capitalize">
                            {user?.role || "Student"}
                        </h2>
                    </div>

                    <div className="mt-6 flex items-center gap-1.5 text-sm text-green-600 dark:text-green-400 font-bold cursor-pointer group/link w-fit hover:text-green-700 dark:hover:text-green-300 transition-colors">
                        <span>Go to workspace</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </div>
                </div>

                <div className="border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl p-5 flex items-center gap-4 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 flex items-center justify-center text-zinc-500 dark:text-zinc-400 shrink-0 border border-zinc-100 dark:border-zinc-800">
                        <User className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                            Profile Alias
                        </p>
                        <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 truncate">
                            {user?.name || "Not Provided"}
                        </p>
                    </div>
                </div>

                <div className="border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl p-5 flex items-center gap-4 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 flex items-center justify-center text-zinc-500 dark:text-zinc-400 shrink-0 border border-zinc-100 dark:border-zinc-800">
                        <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                            Communication Email
                        </p>
                        <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 truncate">
                            {user?.email || "Not Provided"}
                        </p>
                    </div>
                </div>

                <div className="border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl p-5 flex items-center gap-4 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 flex items-center justify-center text-zinc-500 dark:text-zinc-400 shrink-0 border border-zinc-100 dark:border-zinc-800">
                        <Shield className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                            System Identifier
                        </p>
                        <p className="text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400 truncate max-w-[150px] sm:max-w-none">
                            {user?.id || "N/A"}
                        </p>
                    </div>
                </div>

                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/30 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 flex items-center gap-3.5">
                        <Calendar className="w-4 h-4 text-zinc-400 shrink-0" />
                        <div>
                            <p className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                                Registration Date
                            </p>
                            <p className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
                                {user?.createdAt
                                    ? new Date(user.createdAt).toLocaleDateString("en-US", {
                                          month: "short",
                                          day: "numeric",
                                          year: "numeric",
                                      })
                                    : "Recently"}
                            </p>
                        </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/30 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 flex items-center gap-3.5">
                        <Clock className="w-4 h-4 text-zinc-400 shrink-0" />
                        <div>
                            <p className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                                Last Profile Sync
                            </p>
                            <p className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
                                {user?.updatedAt
                                    ? new Date(user.updatedAt).toLocaleDateString("en-US", {
                                          month: "short",
                                          day: "numeric",
                                          year: "numeric",
                                      })
                                    : "Just Now"}
                            </p>
                        </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-green-50/40 dark:bg-green-950/10 backdrop-blur-md border border-green-100 dark:border-green-900/30 flex items-center gap-3.5">
                        <BookOpen className="w-4 h-4 text-green-600 dark:text-green-400 shrink-0" />
                        <div>
                            <p className="text-[9px] font-bold text-green-600 dark:text-green-400 uppercase tracking-widest">
                                Session Authority
                            </p>
                            <p className="text-xs font-extrabold text-green-600 dark:text-green-400">
                                Active Access Granted
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default ProfilePage;