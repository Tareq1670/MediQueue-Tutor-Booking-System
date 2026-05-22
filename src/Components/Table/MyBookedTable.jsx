import { Button, Table } from "@heroui/react";
import Action from "./Action";
import BookedAction from "./BookedAction";
import { CalendarX } from "lucide-react";
import Link from "next/link";

const MyBookedTable = ({ allBook = [] }) => {
    return (
        <section className="container mx-auto w-full py-12 md:py-16 px-4 md:px-6 md:max-w-7xl transition-colors duration-300">
            <div className="mb-8 space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
                    My Booked Tutors
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base font-normal max-w-xl leading-relaxed">
                    Overview and manage all the expert tutors you have booked in
                    the system.
                </p>
            </div>

            {allBook.length > 0 ? (
                <div className="bg-zinc-50/30 dark:bg-zinc-900/10 border border-zinc-200/60 dark:border-zinc-800/40 rounded-2xl shadow-sm overflow-hidden p-1 backdrop-blur-md">
                    <Table
                        aria-label="Booked tutors management table"
                        className="w-full"
                    >
                        <Table.ScrollContainer>
                            <Table.Content
                                aria-label="Booked tutors table"
                                className="min-w-[800px]"
                            >
                                <Table.Header>
                                    <Table.Column
                                        isRowHeader
                                        className="bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 font-semibold h-12 first:rounded-l-xl last:rounded-r-xl"
                                    >
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
                                    {allBook.map((book) => (
                                        <Table.Row
                                            key={book._id}
                                            className="border-b border-zinc-200/40 dark:border-zinc-800/20 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/30 transition-colors duration-200 group"
                                        >
                                            <Table.Cell className="py-4 font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                                {book.studentName}
                                            </Table.Cell>
                                            <Table.Cell className="py-4 text-zinc-600 dark:text-zinc-400">
                                                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/50 dark:border-zinc-700/50">
                                                    {book.phone}
                                                </span>
                                            </Table.Cell>
                                            <Table.Cell className="py-4 text-zinc-600 dark:text-zinc-400 text-sm">
                                                {book.tutorName}
                                            </Table.Cell>
                                            <Table.Cell className="py-4 text-zinc-600 dark:text-zinc-400 text-sm">
                                                <span className="font-medium text-zinc-800 dark:text-zinc-200">
                                                    {book.studentEmail}
                                                </span>
                                            </Table.Cell>
                                            <Table.Cell className="py-4 text-zinc-600 dark:text-zinc-400 text-sm">
                                                <span
                                                    className={`${book.status === "Cancel" ? "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 dark:bg-red-900/30 text-amber-800 dark:text-red-400 asset-status border border-red-200/50 dark:border-red-800/30" : "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 asset-status border border-amber-200/50 dark:border-amber-800/30"}`}
                                                >
                                                    {book.status || "Pending"}
                                                </span>
                                            </Table.Cell>
                                            <Table.Cell className="py-4">
                                                <BookedAction book={book} />
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table.Content>
                        </Table.ScrollContainer>
                    </Table>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-zinc-50/40 dark:bg-zinc-900/20 border border-dashed border-zinc-300 dark:border-zinc-800 rounded-2xl backdrop-blur-md">
                    <div className="p-4 bg-zinc-100 dark:bg-zinc-800/60 text-zinc-400 dark:text-zinc-500 rounded-full mb-4 ring-8 ring-zinc-50 dark:ring-zinc-900/50">
                        <CalendarX className="w-10 h-10 stroke-[1.5]" />
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                        No Tutors Booked Yet
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-sm mb-6 leading-relaxed">
                        It looks like you haven't scheduled any tutoring
                        sessions yet. Explore our expert tutors to get started!
                    </p>
                    <Link href={"/tutors"}>
                        <Button className="px-5 h-auto py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 font-medium text-sm rounded-lg transition-all duration-200 shadow-sm active:scale-[0.98]">
                            Find a Tutor
                        </Button>
                    </Link>
                </div>
            )}
        </section>
    );
};

export default MyBookedTable;
