import { Skeleton } from "@heroui/react";

export default function Loading() {
    return (
        <div className="container mx-auto min-h-screen bg-zinc-950 text-white">
            <section className="relative  w-full h-[400px] sm:h-[500px] md:h-[500px] lg:h-[650px] flex items-center justify-start overflow-hidden px-4 sm:px-6 md:px-12 lg:px-24 py-20 md:py-32">
                <div className="absolute inset-0 z-0 bg-zinc-900/40" />
                
                <div className="relative z-10 w-full max-w-4xl space-y-6 md:space-y-8">
                    <Skeleton className="h-6 w-32 rounded-full bg-zinc-800/80" />
                    
                    <div className="space-y-3">
                        <Skeleton className="h-10 sm:h-12 md:h-16 w-11/12 sm:w-3/4 md:w-2/3 rounded-xl bg-zinc-800/80" />
                        <Skeleton className="h-10 sm:h-12 md:h-16 w-3/4 sm:w-1/2 rounded-xl bg-zinc-800/80" />
                    </div>
                    
                    <div className="space-y-2 max-w-xl">
                        <Skeleton className="h-4 w-full rounded-md bg-zinc-800/60" />
                        <Skeleton className="h-4 w-11/12 rounded-md bg-zinc-800/60" />
                        <Skeleton className="h-4 w-4/5 rounded-md bg-zinc-800/60" />
                    </div>
                    
                    <Skeleton className="h-12 w-44 rounded-xl bg-zinc-800/90" />
                    
                    <div className="pt-8 flex items-center justify-center lg:justify-start gap-2.5">
                        <Skeleton className="h-2.5 w-10 rounded-full bg-zinc-700" />
                        <Skeleton className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
                        <Skeleton className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
                        <Skeleton className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
                        <Skeleton className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-7xl">
                <div className="flex flex-col items-center text-center space-y-4 mb-12 md:mb-16">
                    <Skeleton className="h-8 md:h-10 w-64 md:w-80 rounded-xl bg-zinc-800" />
                    <Skeleton className="h-4 w-full max-w-md rounded-md bg-zinc-800/60" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="border border-zinc-800 rounded-2xl p-4 space-y-4 bg-zinc-900/20">
                            <Skeleton className="aspect-square w-full rounded-xl bg-zinc-800" />
                            <div className="space-y-2">
                                <Skeleton className="h-5 w-2/3 rounded-md bg-zinc-800" />
                                <Skeleton className="h-4 w-1/2 rounded-md bg-zinc-800/60" />
                            </div>
                            <div className="flex items-center justify-between pt-2">
                                <Skeleton className="h-4 w-16 rounded-md bg-zinc-800/60" />
                                <Skeleton className="h-8 w-24 rounded-lg bg-zinc-800" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}