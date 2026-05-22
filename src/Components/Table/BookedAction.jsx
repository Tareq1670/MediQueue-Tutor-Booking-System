"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { ImCancelCircle } from "react-icons/im";
import { RiDeleteBin6Line } from "react-icons/ri";

const BookedAction = ({ book }) => {
    const router = useRouter();
    const [isLoading, setLoading] = useState(false);

    const removeBook = async () => {
        setLoading(true);
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/user-book-update/${book._id}`,
            {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ tutorId: book.tutorId }),
            },
        );
        const data = await res.json();
        setLoading(false);
        if (data.modifiedCount > 0) {
            toast.success("Booked cancel successfully!", {
                duration: 3000,
                position: "top-center",
                style: {
                    background: "var(--toast-bg, #ffffff)",
                    color: "var(--toast-color, #1e293b)",
                    borderRadius: "12px",
                    border: "1px solid #e2e8f0",
                },
                className:
                    "dark:bg-zinc-800 dark:text-white dark:border-zinc-700 font-sans shadow-xl",
            });
            router.refresh();
        }
    };

    return (
        <div>
            <AlertDialog>
                <AlertDialog.Trigger>
                    <Button
                        isDisabled={book.status === "Cancel"}
                        isIconOnly
                        size="sm"
                        variant="flat"
                        className="w-8 h-8 rounded-lg bg-red-50/50 dark:bg-red-950/10 text-red-600 dark:text-red-400 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 dark:hover:text-white border border-red-100 dark:border-red-950/30 hover:border-transparent transition-all duration-200 font-bold"
                    >
                        <ImCancelCircle size={14} />
                    </Button>
                </AlertDialog.Trigger>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>
                                    Cancel booking?
                                </AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    Are you sure you want to cancel with{" "}
                                    <strong>{book.tutorName}</strong>
                                    This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button
                                    isDisabled={isLoading}
                                    slot="close"
                                    variant="tertiary"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    isDisabled={isLoading}
                                    onClick={removeBook}
                                    slot="close"
                                    variant="danger"
                                >
                                    {isLoading
                                        ? "Canceling..."
                                        : "Cancel Booking"}
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default BookedAction;
