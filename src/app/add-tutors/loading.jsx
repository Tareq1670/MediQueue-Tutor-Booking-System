"use client";

import { Skeleton } from "@heroui/react";

const AddTutorLoading = () => {
    return (
        <div className="min-h-[90vh] flex items-center justify-center px-4 py-8 md:py-16">
            <div className="w-full max-w-2xl border border-zinc-200/80 dark:border-zinc-800/60 rounded-2xl p-6 md:p-10 backdrop-blur-md space-y-8">
                <div className="flex flex-col items-center space-y-3">
                    <Skeleton className="h-9 w-48 rounded-lg" />
                    <Skeleton className="h-4 w-72 rounded-lg" />
                </div>

                <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-24 rounded" />
                            <Skeleton className="h-12 w-full rounded-xl" />
                        </div>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-24 rounded" />
                            <Skeleton className="h-12 w-full rounded-xl" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-32 rounded" />
                            <Skeleton className="h-12 w-full rounded-xl" />
                        </div>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-28 rounded" />
                            <Skeleton className="h-12 w-full rounded-xl" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-28 rounded" />
                            <Skeleton className="h-12 w-full rounded-xl" />
                        </div>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-36 rounded" />
                            <Skeleton className="h-12 w-full rounded-xl" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-24 rounded" />
                            <Skeleton className="h-12 w-full rounded-xl" />
                        </div>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-20 rounded" />
                            <Skeleton className="h-12 w-full rounded-xl" />
                        </div>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-32 rounded" />
                            <Skeleton className="h-12 w-full rounded-xl" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-40 rounded" />
                            <Skeleton className="h-12 w-full rounded-xl" />
                        </div>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-36 rounded" />
                            <Skeleton className="h-12 w-full rounded-xl" />
                        </div>
                    </div>

                    <Skeleton className="h-12 w-full rounded-xl mt-4" />
                </div>
            </div>
        </div>
    );
};

export default AddTutorLoading;