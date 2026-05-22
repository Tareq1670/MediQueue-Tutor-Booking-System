import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import {
    Fingerprint,
    CalendarDays,
    Clock3,
    ArrowRight,
    Settings,
} from "lucide-react";

const ProfilePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const user = session?.user;

    return (
        <div className="min-h-[90vh]  p-6 md:p-12 transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-row justify-between items-start sm:items-end mb-10 gap-4">
                    <div className="flex-1">
                        <h1 className="text-3xl font-extrabold tracking-tight ">
                            Profile
                        </h1>
                        <p className="text-zinc-500 dark:text-zinc-400 mt-2">
                            Manage your account settings and preferences.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-green-800 dark:bg-zinc-50 text-white dark:text-zinc-950 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity cursor-pointer">
                        <Settings className="w-4 h-4" /> Edit Profile
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
                    <div className="md:col-span-2 bg-white dark:bg-zinc-900 rounded-lg p-8 border border-zinc-200 dark:border-zinc-800 flex items-center gap-8 shadow-sm">
                        <div className="relative aspect-square w-32 rounded-lg overflow-hidden ring-4 ring-zinc-100 dark:ring-zinc-800">
                            {user?.image ? (
                                <Image
                                    src={user.image}
                                    alt={user.name || "User"}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-3xl font-bold text-zinc-400">
                                    {user?.name?.slice(0, 2).toUpperCase() ||
                                        "US"}
                                </div>
                            )}
                        </div>
                        <div>
                            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-bold uppercase tracking-widest border border-emerald-500/20">
                                Verified User
                            </span>
                            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white mt-3">
                                {user?.name || "Member"}
                            </h2>
                            <p className="text-zinc-500 dark:text-zinc-400">
                                {user?.email}
                            </p>
                        </div>
                    </div>

                    <div className="bg-green-900 dark:bg-zinc-800 rounded-lg p-8 text-white flex flex-col justify-between border border-zinc-800 dark:border-zinc-700">
                        <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
                            Access Role
                        </p>
                        <h3 className="text-3xl font-black capitalize">
                            {user?.role || "Student"}
                        </h3>
                        <button className="flex items-center justify-between w-full mt-4 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                            Workspace <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {[
                        {
                            title: "User ID",
                            val: user?.id?.slice(0, 10) || "N/A",
                            icon: Fingerprint,
                        },
                        {
                            title: "Registration",
                            val: user?.createdAt
                                ? new Date(user.createdAt).toLocaleDateString(
                                      "en-US",
                                      {
                                          month: "short",
                                          day: "numeric",
                                      },
                                  )
                                : "N/A",
                            icon: CalendarDays,
                        },
                        { title: "Last Sync", val: "Just Now", icon: Clock3 },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 flex gap-4 items-center"
                        >
                            <div className="p-3.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                                <item.icon className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                                    {item.title}
                                </p>
                                <p className="font-bold text-zinc-900 dark:text-white">
                                    {item.val}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
