"use client";

import { useState, useEffect } from "react";
import TutorsCard from "@/Components/Card/TutorsCard";
import { Button, Skeleton } from "@heroui/react";
import { Search, Calendar, RotateCcw } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getTutors } from "@/lib/data";

const TutorsPage = () => {
    const [tutors, setTutors] = useState([]);
    const [search, setSearch] = useState("");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(tutors);

    useEffect(() => {
        const fetchTutors = async () => {
            setLoading(true);
            try {
                const formattedStartDate = startDate
                    ? startDate.toISOString()
                    : "";
                const formattedEndDate = endDate ? endDate.toISOString() : "";

                const data = await getTutors(
                    search,
                    formattedStartDate,
                    formattedEndDate,
                );
                setTutors(data || []);
            } catch (error) {
                console.error("Error fetching tutors:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTutors();
    }, [search, startDate, endDate]);

    const handleReset = () => {
        setSearch("");
        setStartDate(null);
        setEndDate(null);
    };

    return (
        <section className="container mx-auto w-full py-12 md:py-10 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-8">
                    <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight">
                        All Tutors
                    </h1>
                </div>

                <div className="bg-white dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/60 rounded-lg p-4 md:p-6 mb-8 shadow-sm flex flex-col md:flex-row items-end gap-4 lg:gap-6 relative z-30">
                    <div className="w-full md:flex-1 flex flex-col gap-2">
                        <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                            Search Tutor
                        </label>
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 z-10" />
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search tutor by name..."
                                className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm text-zinc-800 dark:text-zinc-200 focus:outline-none focus:border-green-500 dark:focus:border-green-500 transition-colors"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4 md:flex-1 relative z-40">
                        <div className="w-full flex flex-col gap-2 relative">
                            <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                                Start Date
                            </label>
                            <div className="relative w-full [&>.react-datepicker-wrapper]:w-full">
                                <DatePicker
                                    required
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                    dateFormat="yyyy-MM-dd"
                                    placeholderText="YYYY-MM-DD"
                                    className="w-full h-12 pl-3 pr-10 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 text-sm text-zinc-800 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 cursor-pointer"
                                    popperPlacement="bottom-start"
                                />
                                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none z-10" />
                            </div>
                        </div>

                        <div className="w-full flex flex-col gap-2 relative">
                            <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                                End Date
                            </label>
                            <div className="relative w-full [&>.react-datepicker-wrapper]:w-full">
                                <DatePicker
                                    required
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate}
                                    dateFormat="yyyy-MM-dd"
                                    placeholderText="YYYY-MM-DD"
                                    className="w-full h-12 pl-3 pr-10 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 text-sm text-zinc-800 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 cursor-pointer"
                                    popperPlacement="bottom-start"
                                />
                                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none z-10" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-auto relative z-10">
                        <Button
                            onClick={handleReset}
                            className="w-full md:w-auto h-auto rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-semibold py-3 px-6 transition-colors duration-300 border border-zinc-200 dark:border-zinc-700/50 flex items-center justify-center gap-2"
                        >
                            <RotateCcw className="w-4 h-4" />
                            Reset Filters
                        </Button>
                    </div>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 rounded-lg overflow-hidden flex flex-col shadow-sm transition-colors duration-300"
                            >
                                <Skeleton className="w-full h-48 md:h-52 bg-zinc-200 dark:bg-zinc-800" />
                                <div className="p-5 flex-1 flex flex-col justify-between gap-5">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <Skeleton className="h-4 w-24 rounded bg-zinc-200 dark:bg-zinc-800" />
                                            <Skeleton className="h-4 w-12 rounded bg-zinc-200 dark:bg-zinc-800" />
                                        </div>
                                        <Skeleton className="h-6 w-3/4 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
                                        <div className="space-y-2.5">
                                            <Skeleton className="h-3.5 w-1/2 rounded bg-zinc-200 dark:bg-zinc-800" />
                                            <Skeleton className="h-3.5 w-1/3 rounded bg-zinc-200 dark:bg-zinc-800" />
                                        </div>
                                    </div>
                                    <Skeleton className="h-9 w-full rounded-xl bg-zinc-200 dark:bg-zinc-800" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : tutors.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
                        {tutors.map((tutor) => (
                            <TutorsCard key={tutor._id} tutor={tutor} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-lg">
                        <p className="text-zinc-500 dark:text-zinc-400 font-medium">
                            No tutors found matching your filters.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TutorsPage;
