import { Table, Skeleton } from "@heroui/react";

const MyBookedTableSkeleton = () => {
    const skeletonRows = Array.from({ length: 10 });

    return (
        <section className="container min-h-[90vh] mx-auto w-full py-12 md:py-16 px-4 md:px-6 max-w-7xl transition-colors duration-300">
            <div className="mb-8 space-y-3">
                <Skeleton className="h-8 w-48 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
                <Skeleton className="h-4 w-full max-w-xl rounded-md bg-zinc-200 dark:bg-zinc-800" />
            </div>

            <div className="bg-zinc-50/30 dark:bg-zinc-900/10 border border-zinc-200/60 dark:border-zinc-800/40 rounded-2xl shadow-sm overflow-hidden p-1 backdrop-blur-md">
                <Table
                    aria-label="Loading booked tutors data"
                    className="w-full"
                >
                    <Table.ScrollContainer>
                        <Table.Content className="min-w-[800px] animate-pulse">
                            <Table.Header>
                                <Table.Column className="bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 font-semibold h-12 first:rounded-l-xl last:rounded-r-xl">
                                    Name
                                </Table.Column>
                                <Table.Column className="bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 font-semibold h-12">
                                    Phone
                                </Table.Column>
                                <Table.Column className="bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 font-semibold h-12">
                                    Tutor Name
                                </Table.Column>
                                <Table.Column className="bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 font-semibold h-12">
                                    Email
                                </Table.Column>
                                <Table.Column className="bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 font-semibold h-12">
                                    Status
                                </Table.Column>
                                <Table.Column className="bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 font-semibold h-12 text-center last:rounded-r-xl">
                                    Cancel
                                </Table.Column>
                            </Table.Header>
                            <Table.Body>
                                {skeletonRows.map((_, index) => (
                                    <Table.Row
                                        key={index}
                                        className="border-b border-zinc-200/40 dark:border-zinc-800/20"
                                    >
                                        <Table.Cell className="py-4">
                                            <Skeleton className="h-5 w-36 rounded-md bg-zinc-200 dark:bg-zinc-800" />
                                        </Table.Cell>
                                        <Table.Cell className="py-4">
                                            <Skeleton className="h-6 w-28 rounded-md bg-zinc-200 dark:bg-zinc-800" />
                                        </Table.Cell>
                                        <Table.Cell className="py-4">
                                            <Skeleton className="h-5 w-24 rounded-md bg-zinc-200 dark:bg-zinc-800" />
                                        </Table.Cell>
                                        <Table.Cell className="py-4">
                                            <Skeleton className="h-5 w-44 rounded-md bg-zinc-200 dark:bg-zinc-800" />
                                        </Table.Cell>
                                        <Table.Cell className="py-4">
                                            <Skeleton className="h-6 w-16 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                                        </Table.Cell>
                                        <Table.Cell className="py-4 flex justify-center items-center">
                                            <Skeleton className="h-6 w-6 rounded-full bg-zinc-200 dark:bg-zinc-800" />
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

export default MyBookedTableSkeleton;
