import { Skeleton } from "@heroui/react";


const ProfileSkeleton = () => {
    return (
        <main className="container mx-auto w-full flex items-center justify-center py-10 md:py-16 px-4 md:px-6 max-w-6xl antialiased relative min-h-[90vh] isolation-isolate">
            
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
                <div className="absolute top-[10%] left-[5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-green-500/5 dark:bg-green-500/5 blur-[80px] md:blur-[120px]" />
                <div className="absolute bottom-[20%] right-[5%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-zinc-500/5 dark:bg-zinc-700/5 blur-[60px] md:blur-[100px]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative w-full">
                
                <div className="md:col-span-2 border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                        <div className="relative shrink-0 w-24 h-24">
                            <Skeleton className="w-full h-full rounded-2xl bg-zinc-200/80 dark:bg-zinc-800/80" />
                        </div>

                        <div className="text-center sm:text-left space-y-3 flex-1 w-full flex flex-col items-center sm:items-start">
                            <Skeleton className="h-5 w-28 rounded-full bg-zinc-200/80 dark:bg-zinc-800/80" />
                            <Skeleton className="h-8 w-48 rounded-lg bg-zinc-200/80 dark:bg-zinc-800/80" />
                            <div className="space-y-2 w-full max-w-sm flex flex-col items-center sm:items-start">
                                <Skeleton className="h-4 w-full rounded bg-zinc-200/60 dark:bg-zinc-800/60" />
                                <Skeleton className="h-4 w-5/6 rounded bg-zinc-200/60 dark:bg-zinc-800/60" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between">
                        <Skeleton className="h-3 w-36 bg-zinc-200/60 dark:bg-zinc-800/60" />
                        <Skeleton className="h-4 w-4 rounded-full bg-zinc-200/60 dark:bg-zinc-800/60" />
                    </div>
                </div>

                <div className="border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40 backdrop-blur-md rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm">
                    <div className="flex justify-between items-start">
                        <Skeleton className="w-12 h-12 rounded-2xl bg-zinc-200/80 dark:bg-zinc-800/80" />
                        <Skeleton className="h-6 w-20 rounded-md bg-zinc-200/80 dark:bg-zinc-800/80" />
                    </div>

                    <div className="space-y-2 mt-8">
                        <Skeleton className="h-3 w-20 bg-zinc-200/60 dark:bg-zinc-800/60" />
                        <Skeleton className="h-9 w-32 bg-zinc-200/80 dark:bg-zinc-800/80" />
                    </div>

                    <div className="mt-6">
                        <Skeleton className="h-4 w-28 bg-zinc-200/80 dark:bg-zinc-800/80" />
                    </div>
                </div>

                <div className="border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl p-5 flex items-center gap-4 shadow-sm">
                    <Skeleton className="w-12 h-12 rounded-xl bg-zinc-200/80 dark:bg-zinc-800/80 shrink-0" />
                    <div className="flex-1 space-y-2">
                        <Skeleton className="h-3 w-16 bg-zinc-200/60 dark:bg-zinc-800/60" />
                        <Skeleton className="h-4 w-24 bg-zinc-200/80 dark:bg-zinc-800/80" />
                    </div>
                </div>

                <div className="border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl p-5 flex items-center gap-4 shadow-sm">
                    <Skeleton className="w-12 h-12 rounded-xl bg-zinc-200/80 dark:bg-zinc-800/80 shrink-0" />
                    <div className="flex-1 space-y-2">
                        <Skeleton className="h-3 w-28 bg-zinc-200/60 dark:bg-zinc-800/60" />
                        <Skeleton className="h-4 w-36 bg-zinc-200/80 dark:bg-zinc-800/80" />
                    </div>
                </div>

                <div className="border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl p-5 flex items-center gap-4 shadow-sm">
                    <Skeleton className="w-12 h-12 rounded-xl bg-zinc-200/80 dark:bg-zinc-800/80 shrink-0" />
                    <div className="flex-1 space-y-2">
                        <Skeleton className="h-3 w-24 bg-zinc-200/60 dark:bg-zinc-800/60" />
                        <Skeleton className="h-4 w-32 bg-zinc-200/80 dark:bg-zinc-800/80" />
                    </div>
                </div>

                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/30 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 flex items-center gap-3.5">
                        <Skeleton className="w-4 h-4 rounded-full bg-zinc-200/60 dark:bg-zinc-800/60 shrink-0" />
                        <div className="flex-1 space-y-1.5">
                            <Skeleton className="h-2.5 w-20 bg-zinc-200/60 dark:bg-zinc-800/60" />
                            <Skeleton className="h-3.5 w-24 bg-zinc-200/80 dark:bg-zinc-800/80" />
                        </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/30 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 flex items-center gap-3.5">
                        <Skeleton className="w-4 h-4 rounded-full bg-zinc-200/60 dark:bg-zinc-800/60 shrink-0" />
                        <div className="flex-1 space-y-1.5">
                            <Skeleton className="h-2.5 w-24 bg-zinc-200/60 dark:bg-zinc-800/60" />
                            <Skeleton className="h-3.5 w-20 bg-zinc-200/80 dark:bg-zinc-800/80" />
                        </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/30 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 flex items-center gap-3.5">
                        <Skeleton className="w-4 h-4 rounded-full bg-zinc-200/60 dark:bg-zinc-800/60 shrink-0" />
                        <div className="flex-1 space-y-1.5">
                            <Skeleton className="h-2.5 w-24 bg-zinc-200/60 dark:bg-zinc-800/60" />
                            <Skeleton className="h-3.5 w-28 bg-zinc-200/80 dark:bg-zinc-800/80" />
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default ProfileSkeleton;