import Link from "next/link";
import { IoHelpCircle } from "react-icons/io5";
import { HiArrowLeft } from "react-icons/hi2";

const NotFound = () => {
    return (
        <section className="min-h-[90vh] w-full flex flex-col items-center justify-center  px-4 transition-colors duration-300">
            <div className="relative flex flex-col items-center max-w-md w-full text-center">
                <div className="flex flex-col items-center mb-8 group">
                    <div className="w-[1px] h-20 bg-zinc-400 dark:bg-zinc-600 origin-top animate-[pulse_2s_infinite]" />

                    <div className="relative w-64 bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-100 rounded-xl shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] dark:shadow-[8px_8px_0px_0px_rgba(250,250,250,1)] p-1 overflow-hidden transition-transform duration-300 group-hover:rotate-1">
                        <div className="flex items-center justify-between px-3 py-2 border-b-2 border-zinc-900 dark:border-zinc-100 bg-zinc-50 dark:bg-zinc-800">
                            <div className="flex space-x-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100" />
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100" />
                            </div>
                            <div className="flex flex-col space-y-0.5 items-end">
                                <div className="w-4 h-[2px] bg-zinc-900 dark:bg-zinc-100" />
                                <div className="w-3 h-[2px] bg-zinc-900 dark:bg-zinc-100" />
                            </div>
                        </div>

                        <div className="bg-zinc-900 dark:bg-zinc-950 py-10 px-4">
                            <h1 className="text-6xl font-black text-white tracking-widest select-none font-mono">
                                404
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="space-y-3 mb-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/30">
                        <IoHelpCircle className="w-4 h-4" /> MediQueue Registry
                        Error
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-zinc-600 dark:text-zinc-500 tracking-tight">
                        Page Not Found
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base font-normal max-w-sm mx-auto leading-relaxed">
                        The clinical dashboard or patient queue you are trying
                        to access is unavailable. Please check the URL or return
                        to the main portal.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-950 font-medium text-sm rounded-xl transition-all duration-200 hover:bg-zinc-800 dark:hover:bg-zinc-200 active:scale-[0.98] shadow-sm"
                    >
                        <HiArrowLeft className="w-4 h-4" /> Return to Dashboard
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
