import { Skeleton } from "@heroui/react";
import { ChevronRight } from "lucide-react";

export default function Loading() {
    return (
        <div className="min-h-screen text-zinc-900 dark:text-zinc-50 relative overflow-x-clip font-sans antialiased pb-20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.06),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.12),transparent_50%)] pointer-events-none z-0" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10 py-8 md:py-12">
                <div className="inline-flex items-center space-x-2 bg-white/70 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/60 backdrop-blur-xl px-4 py-2 rounded-full text-xs font-medium mb-10 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                    <span className="text-zinc-400">Home</span>
                    <ChevronRight
                        size={12}
                        className="text-zinc-300 dark:text-zinc-700"
                    />
                    <span className="text-zinc-400">Tutors</span>
                    <ChevronRight
                        size={12}
                        className="text-zinc-300 dark:text-zinc-700"
                    />
                    <Skeleton className="h-4 w-24 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-900/40 dark:to-zinc-900/20 border border-zinc-200 dark:border-zinc-800/50 backdrop-blur-xl rounded-lg p-4 md:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
                            <div className="relative w-full aspect-[4/3] md:aspect-[20/10] rounded-lg overflow-hidden mb-6">
                                <Skeleton className="w-full h-full bg-zinc-200 dark:bg-zinc-800" />
                            </div>
                            <div className="space-y-4 px-1">
                                <Skeleton className="h-10 w-2/3 rounded-xl bg-zinc-200 dark:bg-zinc-800" />
                                <Skeleton className="h-4 w-1/3 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
                            </div>
                        </div>

                        <div className="bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/50 backdrop-blur-xl rounded-lg p-6 shadow-sm flex flex-col justify-between h-[160px]">
                            <Skeleton className="h-10 w-10 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
                            <div className="space-y-2">
                                <Skeleton className="h-3 w-16 rounded-md bg-zinc-200 dark:bg-zinc-800" />
                                <Skeleton className="h-6 w-3/4 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
                            </div>
                        </div>

                        <div className="bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/50 backdrop-blur-xl rounded-lg p-6 shadow-sm flex flex-col justify-between h-[160px]">
                            <Skeleton className="h-10 w-10 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
                            <div className="space-y-2">
                                <Skeleton className="h-3 w-20 rounded-md bg-zinc-200 dark:bg-zinc-800" />
                                <Skeleton className="h-6 w-1/2 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
                            </div>
                        </div>

                        <div className="md:col-span-2 bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/50 backdrop-blur-xl rounded-lg p-6 shadow-sm space-y-6">
                            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800/40 pb-4">
                                <Skeleton className="h-5 w-40 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
                                <Skeleton className="h-5 w-24 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[...Array(4)].map((_, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-4 p-4 rounded-lg border border-zinc-100 dark:border-zinc-800/40 bg-zinc-50/50 dark:bg-zinc-950/10"
                                    >
                                        <Skeleton className="h-11 w-11 rounded-lg bg-zinc-200 dark:bg-zinc-800 flex-shrink-0" />
                                        <div className="space-y-2 w-full">
                                            <Skeleton className="h-3 w-16 rounded-md bg-zinc-200 dark:bg-zinc-800" />
                                            <Skeleton className="h-4 w-3/4 rounded-md bg-zinc-200 dark:bg-zinc-800" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="sticky top-24 w-full">
                        <div className="bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/60 backdrop-blur-2xl rounded-lg p-6 shadow-[0_12px_40px_rgba(0,0,0,0.03)] space-y-6">
                            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800/40 pb-4">
                                <Skeleton className="h-4 w-28 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
                                <Skeleton className="h-5 w-20 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
                            </div>
                            <div className="flex items-center justify-between">
                                <Skeleton className="h-3 w-24 rounded-md bg-zinc-200 dark:bg-zinc-800" />
                                <Skeleton className="h-9 w-20 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
                            </div>
                            <div className="p-4 rounded-lg bg-zinc-50/50 dark:bg-zinc-950/20 border border-zinc-100 dark:border-zinc-800/40 space-y-3">
                                <div className="flex justify-between">
                                    <Skeleton className="h-3 w-24 rounded-md bg-zinc-200 dark:bg-zinc-800" />
                                    <Skeleton className="h-4 w-16 rounded-md bg-zinc-200 dark:bg-zinc-800" />
                                </div>
                                <Skeleton className="h-1.5 w-full rounded-full bg-zinc-200 dark:bg-zinc-800" />
                            </div>
                            <Skeleton className="h-10 w-full rounded-xl bg-zinc-200 dark:bg-zinc-800" />
                            <div className="flex justify-center">
                                <Skeleton className="h-3 w-40 rounded-md bg-zinc-200 dark:bg-zinc-800" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
