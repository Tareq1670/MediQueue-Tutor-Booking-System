"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertDialog, Button } from "@heroui/react";
import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import toast from "react-hot-toast";
import { EditTutorModal } from "./EditModal";

const Action = ({ tutor }) => {
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();

    const tutorDelete = async (id) => {
        setLoading(true);
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/tutor-delete/${id}`,
                {
                    method: "DELETE",
                },
            );
            const data = await res.json();
            setLoading(false)

            if (data.deletedCount > 0 || data.success) {
                toast.success("Tutor deleted successfully!", {
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
            } else {
                toast.error("Failed to delete tutor or tutor not found.");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="flex items-center space-x-2">
            <Button
                isIconOnly
                size="sm"
                variant="flat"
                className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 border border-zinc-200/60 dark:border-zinc-700/60 hover:border-green-500/20 dark:hover:border-green-500/20 shadow-sm transition-all duration-200"
                aria-label="Edit tutor"
                onClick={() => setIsEditOpen(true)}
            >
                <FaPencil size={13} />
            </Button>

            <AlertDialog>
                <AlertDialog.Trigger>
                    <Button
                        isIconOnly
                        size="sm"
                        variant="flat"
                        className="w-8 h-8 rounded-lg bg-red-50/50 dark:bg-red-950/10 text-red-600 dark:text-red-400 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 dark:hover:text-white border border-red-100 dark:border-red-950/30 hover:border-transparent transition-all duration-200"
                        aria-label="Delete tutor"
                    >
                        <RiDeleteBin6Line size={14} />
                    </Button>
                </AlertDialog.Trigger>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>
                                    Delete tutor permanently?
                                </AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete{" "}
                                    <strong>
                                        {tutor?.name || "this tutor"}
                                    </strong>{" "}
                                    and all of their data. This action cannot be
                                    undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button isDisabled={isLoading} slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button
                                isDisabled={isLoading}
                                    onClick={() => tutorDelete(tutor._id)}
                                    slot="close"
                                    variant="danger"
                                >
                                    {
                                        isLoading ? "Deleting..." : "Delete Tutor"
                                    }
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>

            <EditTutorModal
                tutor={tutor}
                isOpen={isEditOpen}
                onClose={() => setIsEditOpen(false)}
            />
        </div>
    );
};

export default Action;
