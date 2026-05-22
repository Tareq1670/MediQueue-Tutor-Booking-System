"use client";

import { Table, Skeleton } from "@heroui/react";

const MyTutorsSkeletonTable = () => {
    const skeletonRows = Array.from({ length: 10 });

    return (
        <section className="container min-h-[90vh] mx-auto w-full py-12 md:py-16 px-4 md:px-6 max-w-7xl transition-colors duration-300">
            <div className="mb-8 space-y-2">
                <Skeleton className="h-8 w-64 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
                <Skeleton className="h-4 w-96 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
            </div>

            <div className="bg-zinc-50/30 dark:bg-zinc-900/10 border border-zinc-200/60 dark:border-zinc-800/40 rounded-2xl shadow-sm overflow-hidden p-1 backdrop-blur-md">
                <Table aria-label="Loading tutors table" className="w-full">
                    <Table.ScrollContainer>
                        <Table.Content className="min-w-[800px]  animate-pulse">
                            <Table.Header>
                                <Table.Column isRowHeader className="bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 font-semibold h-12 first:rounded-l-xl last:rounded-r-xl">
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
                                {skeletonRows.map((_, index) => (
                                    <Table.Row key={index} className="border-b border-zinc-200/40 dark:border-zinc-800/20">
                                        <Table.Cell className="py-4">
                                            <Skeleton className="h-5 w-32 rounded-md bg-zinc-200 dark:bg-zinc-800" />
                                        </Table.Cell>
                                        <Table.Cell className="py-4">
                                            <Skeleton className="h-6 w-20 rounded-md bg-zinc-200 dark:bg-zinc-800" />
                                        </Table.Cell>
                                        <Table.Cell className="py-4">
                                            <Skeleton className="h-4 w-28 rounded-md bg-zinc-200 dark:bg-zinc-800" />
                                        </Table.Cell>
                                        <Table.Cell className="py-4">
                                            <Skeleton className="h-4 w-12 rounded-md bg-zinc-200 dark:bg-zinc-800" />
                                        </Table.Cell>
                                        <Table.Cell className="py-4">
                                            <Skeleton className="h-4 w-16 rounded-md bg-zinc-200 dark:bg-zinc-800" />
                                        </Table.Cell>
                                        <Table.Cell className="py-4">
                                            <Skeleton className="h-4 w-24 rounded-md bg-zinc-200 dark:bg-zinc-800" />
                                        </Table.Cell>
                                        <Table.Cell className="py-4">
                                            <div className="flex justify-center space-x-2">
                                                <Skeleton className="w-8 h-8 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
                                                <Skeleton className="w-8 h-8 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
                                            </div>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table.Content>
                    </Table.ScrollContainer>
                </Table>
            </div>
        </section>
    );
};

export default MyTutorsSkeletonTable;