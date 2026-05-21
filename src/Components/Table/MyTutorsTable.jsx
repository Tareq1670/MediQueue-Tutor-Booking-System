"use client";

import { Button } from "@heroui/react";
import { Table } from "@heroui/react";
import { Plus } from "lucide-react";
import Action from "./Action";
import Link from "next/link";

const MyTutorsTable = ({ myTutors }) => {
    const isEmpty = !myTutors || myTutors.length === 0;

    return (
        <section className="container mx-auto w-full py-12 md:py-16 px-4 md:px-6 max-w-7xl transition-colors duration-300">
            <div className="mb-8 space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
                    My Managed Tutors
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base font-normal max-w-xl leading-relaxed">
                    Overview and manage all the expert tutors you have
                    registered in the system.
                </p>
            </div>

            {isEmpty ? (
                <div className="w-full flex flex-col items-center justify-center text-center py-20 px-4 bg-zinc-50/30 dark:bg-zinc-900/10 border border-zinc-200/60 dark:border-zinc-800/40 rounded-2xl shadow-sm backdrop-blur-md transition-colors duration-300">
                    <div className="relative w-72 h-44 mb-8 flex items-center justify-center select-none scale-110">
                        <div className="absolute left-[15%] bottom-[22%] w-16 h-20 bg-zinc-200 dark:bg-zinc-800 border border-zinc-300/40 dark:border-zinc-700/40 rounded-xl p-2.5 flex flex-col justify-between -rotate-12 transform origin-bottom shadow-sm">
                            <div className="w-7 h-7 rounded-full bg-zinc-300/70 dark:bg-zinc-700/70 flex items-center justify-center self-center mt-2">
                                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-zinc-400 dark:border-l-zinc-500 ml-0.5" />
                            </div>
                            <div className="space-y-1 mt-auto">
                                <div className="w-full h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
                                <div className="w-2/3 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
                            </div>
                        </div>

                        <div className="absolute right-[15%] bottom-[22%] w-16 h-20 bg-zinc-200 dark:bg-zinc-800 border border-zinc-300/40 dark:border-zinc-700/40 rounded-xl p-2.5 flex flex-col justify-between rotate-12 transform origin-bottom shadow-sm">
                            <span className="text-zinc-400 dark:text-zinc-500 font-black text-sm tracking-tight ml-0.5">
                                A
                            </span>
                            <div className="space-y-1 mt-auto">
                                <div className="w-full h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
                                <div className="w-5/6 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
                                <div className="w-2/3 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
                            </div>
                        </div>

                        <div className="absolute bottom-[28%] w-[76px] h-[92px] bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-2 flex flex-col justify-between shadow-md z-10 -translate-y-2">
                            <div className="w-full h-10 rounded-lg bg-zinc-200 dark:bg-zinc-700 overflow-hidden relative flex items-end justify-center">
                                <div className="absolute bottom-0 w-full h-5 bg-zinc-300 dark:bg-zinc-600 flex items-end">
                                    <div className="w-full h-full bg-zinc-300 dark:bg-zinc-600 transform skew-y-12 origin-bottom-left" />
                                    <div className="w-full h-full bg-zinc-400 dark:bg-zinc-500 transform -skew-y-12 origin-bottom-right absolute right-0" />
                                </div>
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-500 absolute top-1.5 right-1.5 shadow-inner" />
                            </div>
                            <div className="space-y-1.5 mb-1">
                                <div className="w-full h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
                                <div className="w-full h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
                                <div className="w-3/4 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
                            </div>
                        </div>

                        <div className="absolute bottom-2 w-40 h-[104px] bg-zinc-200 dark:bg-zinc-800/90 border border-zinc-300/40 dark:border-zinc-700/50 rounded-2xl shadow-xl z-20 flex flex-col items-center justify-center p-4">
                            <div className="w-3.5 h-3.5 rounded-full bg-zinc-400 dark:bg-zinc-500 mb-2 mt-2" />
                            <div className="w-14 h-4 rounded-full border-b-[3px] border-zinc-400 dark:border-zinc-500 bg-transparent" />
                        </div>

                        <div className="absolute left-[8%] bottom-[25%] w-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                        <div className="absolute left-[16%] bottom-[12%] w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-800 opacity-70" />
                        <div className="absolute right-[10%] bottom-[15%] w-3.5 h-3.5 rounded-full bg-zinc-200 dark:bg-zinc-800 opacity-60" />
                        <div className="absolute right-[6%] bottom-[35%] w-1.5 h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800 opacity-40" />
                    </div>

                    <h3 className="text-2xl font-bold text-zinc-600 dark:text-zinc-300 tracking-tight mb-2">
                        There are no items here!
                    </h3>

                    <p className="text-base text-zinc-400 dark:text-zinc-500 max-w-sm mb-8 font-medium">
                        Start adding your tutors
                    </p>

                    <Link href={"/add-tutors"}>
                        <Button className="h-12 px-6 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-green-500/20 flex items-center justify-center gap-2 active:scale-95">
                            <Plus className="w-4 h-4 stroke-[3.5]" />
                            <span>Add Tutors</span>
                        </Button>
                    </Link>
                </div>
            ) : (
                <div className="bg-zinc-50/30 dark:bg-zinc-900/10 border border-zinc-200/60 dark:border-zinc-800/40 rounded-2xl shadow-sm overflow-hidden p-1 backdrop-blur-md">
                    <Table
                        aria-label="Tutors management table"
                        className="w-full"
                    >
                        <Table.ScrollContainer>
                            <Table.Content
                                aria-label="Tutors table"
                                className="min-w-[800px]"
                            >
                                <Table.Header>
                                    <Table.Column
                                        isRowHeader
                                        className="bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 font-semibold h-12 first:rounded-l-xl last:rounded-r-xl"
                                    >
                                        Tutor's Name
                                    </Table.Column>
                                    <Table.Column className="bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 font-semibold h-12">
                                        Subject
                                    </Table.Column>
                                    <Table.Column className="bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 font-semibold h-12">
                                        Available
                                    </Table.Column>
                                    <Table.Column className="bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 font-semibold h-12">
                                        Hourly Fee
                                    </Table.Column>
                                    <Table.Column className="bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 font-semibold h-12">
                                        Total Slot
                                    </Table.Column>
                                    <Table.Column className="bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 font-semibold h-12">
                                        Registration Date
                                    </Table.Column>
                                    <Table.Column className="bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 font-semibold h-12 text-center last:rounded-r-xl">
                                        Action
                                    </Table.Column>
                                </Table.Header>
                                <Table.Body>
                                    {myTutors.map((tutor) => (
                                        <Table.Row
                                            key={tutor._id}
                                            className="border-b border-zinc-200/40 dark:border-zinc-800/20 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/30 transition-colors duration-200 group"
                                        >
                                            <Table.Cell className="py-4 font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                                {tutor.name}
                                            </Table.Cell>
                                            <Table.Cell className="py-4 text-zinc-600 dark:text-zinc-400">
                                                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/50 dark:border-zinc-700/50">
                                                    {tutor.category}
                                                </span>
                                            </Table.Cell>
                                            <Table.Cell className="py-4 text-zinc-600 dark:text-zinc-400 text-sm">
                                                {tutor.availableTime}
                                            </Table.Cell>
                                            <Table.Cell className="py-4 text-zinc-900 dark:text-zinc-100 font-semibold text-sm">
                                                ${tutor.hourlyFee}/hr
                                            </Table.Cell>
                                            <Table.Cell className="py-4 text-zinc-600 dark:text-zinc-400 text-sm">
                                                <span className="font-medium text-zinc-800 dark:text-zinc-200">
                                                    {tutor.totalSlot}
                                                </span>{" "}
                                                Slots
                                            </Table.Cell>
                                            <Table.Cell className="py-4 text-zinc-500 dark:text-zinc-500 text-sm">
                                                {tutor.startDate}
                                            </Table.Cell>
                                            <Table.Cell className="py-4">
                                                <div className="flex justify-center">
                                                    <Action tutor={tutor} />
                                                </div>
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table.Content>
                        </Table.ScrollContainer>
                    </Table>
                </div>
            )}
        </section>
    );
};

export default MyTutorsTable;
