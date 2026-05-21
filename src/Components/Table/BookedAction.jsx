"use client"

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { ImCancelCircle } from "react-icons/im";

const BookedAction = ({book}) => {
    const router = useRouter()

    const removeBook = async () => {
        console.log("book cancel");

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user-book-update/${book._id}`,{
            method:"PATCH",
            headers : {"Content-Type" : "application/json"}
        });
        const data = await res.json();
        console.log(data);
        if(data.modifiedCount > 0){
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
    }



    return (
        <div>
            <Button
            onClick={removeBook}
            isDisabled={book.status === "Cancel"}
                isIconOnly
                size="sm"
                variant="flat"
                className="w-8 h-8 rounded-lg bg-red-50/50 dark:bg-red-950/10 text-red-600 dark:text-red-400 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 dark:hover:text-white border border-red-100 dark:border-red-950/30 hover:border-transparent transition-all duration-200 font-bold"
            >
                <ImCancelCircle size={14} />
            </Button>
        </div>
    );
};

export default BookedAction;
