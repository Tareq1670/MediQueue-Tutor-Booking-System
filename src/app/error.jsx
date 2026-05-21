"use client";

import Link from "next/link";
import { RotateCw, Activity, ShieldAlert, Home, LayoutDashboard } from "lucide-react";

const ErrorPage = ({ error, reset }) => {
    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 transition-colors duration-300 relative overflow-hidden">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-500/5 dark:bg-red-500/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-emerald-500/5 dark:bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative flex flex-col items-center max-w-2xl w-full text-center z-10">
                
                <div className="relative mb-10 w-full max-w-md group">
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-zinc-300 dark:from-zinc-700 via-zinc-400 dark:via-zinc-500 to-transparent animate-[pulse_2s_infinite]" />
                    
                    <div className="relative border border-zinc-200/80 dark:border-zinc-800/80 rounded-3xl bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl shadow-[0_24px_60px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_24px_60px_-15px_rgba(0,0,0,0.5)] p-6 overflow-hidden transition-all duration-500 group-hover:scale-[1.01] group-hover:border-zinc-300 dark:group-hover:border-zinc-700">
                        
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-50/50 via-transparent to-zinc-100/30 dark:from-zinc-800/10 dark:to-transparent pointer-events-none" />
                        
                        <div className="flex items-center justify-between pb-4 border-b border-zinc-200/60 dark:border-zinc-800/60 text-zinc-400 dark:text-zinc-500 text-[10px] font-mono tracking-wider">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500 dark:bg-red-400 animate-pulse" />
                                <span>SYS_STATUS: 500</span>
                            </div>
                            <div className="flex gap-1.5 items-center">
                                <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                <span className="w-4 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
                            </div>
                        </div>

                        <div className="py-12 relative flex flex-col items-center justify-center">
                            <h1 className="text-7xl md:text-8xl font-light tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-600 dark:from-zinc-50 dark:via-zinc-200 dark:to-zinc-500 font-sans select-none drop-shadow-sm">
                                404
                            </h1>
                            <span className="absolute right-12 bottom-10 text-[10px] font-mono text-zinc-400/70 dark:text-zinc-500/50 select-none">
                                ERR_CORE
                            </span>
                            
                            <div className="mt-4 flex items-center justify-center gap-1 text-zinc-300 dark:text-zinc-800 w-full max-w-xs h-6">
                                <Activity className="w-4 h-4 text-zinc-400 dark:text-zinc-600 opacity-40 animate-[pulse_1.5s_infinite]" />
                                <Activity className="w-5 h-5 text-red-500 dark:text-red-400/80 stroke-[2] animate-[pulse_1s_infinite]" />
                                <Activity className="w-4 h-4 text-zinc-400 dark:text-zinc-600 opacity-40 animate-[pulse_1.5s_infinite]" />
                            </div>
                        </div>

                        <div className="pt-3 border-t border-zinc-100 dark:border-zinc-900 flex justify-between items-center text-[9px] font-mono text-zinc-400 dark:text-zinc-600">
                            <span>MEDIQUEUE // REG_TLM</span>
                            <span>DIAG_COMPLETE</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-3 mb-10 px-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-red-500/5 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/10 backdrop-blur-md">
                        <ShieldAlert className="w-3.5 h-3.5" /> System Connection Disrupted
                    </span>
                    <h2 className="text-2xl md:text-3xl font-semibold text-zinc-500 dark:text-zinc-500 tracking-tight">
                        Synchronization Instance Paused
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base font-normal max-w-md mx-auto leading-relaxed">
                        An internal processing anomaly interrupted the live medical session queues. The diagnostic record has been forwarded to administration.
                    </p>
                </div>

                <div className="flex flex-col gap-3 w-full max-w-sm px-4">
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={() => reset()}
                            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-950 font-medium text-xs rounded-xl transition-all duration-200 hover:bg-zinc-800 dark:hover:bg-zinc-200 active:scale-[0.98] shadow-md shadow-zinc-900/5"
                        >
                            <RotateCw className="w-3.5 h-3.5 animate-[spin_4s_infinite_linear]" /> Hot Reload
                        </button>
                        
                        <button
                            onClick={() => reset()}
                            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-zinc-200/60 dark:bg-zinc-800/60 text-zinc-800 dark:text-zinc-200 font-medium text-xs rounded-xl transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 active:scale-[0.98]"
                        >
                            Sync System
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 font-medium text-xs rounded-xl transition-all duration-200 border border-zinc-200/60 dark:border-zinc-800/60 active:scale-[0.98]"
                        >
                            <LayoutDashboard className="w-3.5 h-3.5" /> Dashboard
                        </Link>
                        
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 font-medium text-xs rounded-xl transition-all duration-200 border border-zinc-200/60 dark:border-zinc-800/60 active:scale-[0.98]"
                        >
                            <Home className="w-3.5 h-3.5" /> Go to Hub
                        </Link>
                    </div>
                </div>

                <div className="mt-16 text-[11px] font-mono text-zinc-400/60 dark:text-zinc-500/40 tracking-wider select-none">
                    MediQueue Registry Telemetry // Pending User Action
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;