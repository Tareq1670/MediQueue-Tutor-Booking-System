"use client";

import {
    Button,
    Form,
    Input,
    Label,
    Modal,
    Surface,
    TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const BookingModal = ({ tutor, user }) => {
    const [error, setError] = useState();
    const router = useRouter()

    const currentDate = new Date();
    const sessionStartDate = new Date(tutor?.startDate);
    const startDateTime = sessionStartDate.setHours(23, 59, 59, 999);

    useEffect(() => {
        if (currentDate > startDateTime) {
            setError(
                "Booking session has expired! Please try another available session.",
            );
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const bookData = Object.fromEntries(formData.entries());


        const bookingData = {
            studentName : bookData.name,
            phone : bookData.phone,
            tutorId : tutor?._id,
            tutorName : tutor?.name,
            studentEmail : user?.email

        }
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/book-session`,{
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(bookingData)
        });
        const data = await res.json();
        console.log(data);



        
        if (data.success) {
            toast.success(data.message, {
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

    console.log(tutor.totalSlot);

    return (
        <div>
            <Modal>
                <Button isDisabled={tutor.totalSlot === 0} className="w-full h-auto rounded-lg bg-green-600 hover:bg-green-500 active:scale-[0.98] text-white font-black py-4 transition-all duration-300 shadow-xl shadow-green-600/10 dark:shadow-none text-xs uppercase tracking-widest border border-green-400/20">
                    {tutor.totalSlot === 0 ? "No available slots left" : "Book Session"}
                </Button>
                <Modal.Backdrop className="bg-zinc-950/40 backdrop-blur-md">
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="w-full max-w-lg bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/60 rounded-lg shadow-2xl p-2 m-4">
                            <Modal.Header className="flex flex-col items-center justify-center text-center pt-8 pb-2 px-6">
                                <Modal.Heading className="text-2xl font-extrabold text-zinc-800 dark:text-zinc-200 tracking-tight">
                                    Book Session
                                </Modal.Heading>
                                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 max-w-[280px] leading-relaxed font-normal">
                                    Fill out the details below to secure your
                                    medical learning slot.
                                </p>
                                {error && (
                                    <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-600 dark:text-red-400">
                                        {error}
                                    </div>
                                )}
                            </Modal.Header>

                            <Modal.Body className="p-6">
                                <Surface
                                    variant="default"
                                    className="bg-transparent shadow-none border-none p-0"
                                >
                                    <Form
                                        onSubmit={handleSubmit}
                                        className="flex flex-col gap-4"
                                    >
                                        <TextField
                                            isRequired
                                            name="name"
                                            type="text"
                                            defaultValue={user?.name}
                                            className="w-full"
                                        >
                                            <Label className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5 block">
                                                Name
                                            </Label>
                                            <Input className="w-full h-12 px-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 text-sm text-zinc-800 dark:text-zinc-200 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none transition-all duration-200 shadow-none" />
                                        </TextField>

                                        <TextField
                                            isRequired
                                            name="phone"
                                            type="tel"
                                            className="w-full"
                                        >
                                            <Label className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5 block">
                                                Phone Number
                                            </Label>
                                            <Input
                                                placeholder="017XX-XXXXXX"
                                                className="w-full h-12 px-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 text-sm text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none transition-all duration-200 shadow-none"
                                            />
                                        </TextField>

                                        <TextField
                                            isRequired
                                            name="tutorName"
                                            type="text"
                                            defaultValue={
                                                tutor?.name ||
                                                "TARIQUL ISLAM TAREQ"
                                            }
                                            className="w-full"
                                        >
                                            <Label className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5 block">
                                                Tutor Name
                                            </Label>
                                            <Input className="w-full h-12 px-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 text-sm text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none transition-all duration-200 shadow-none" />
                                        </TextField>

                                        <TextField
                                            isRequired
                                            name="email"
                                            type="email"
                                            defaultValue={user?.email}
                                            className="w-full"
                                        >
                                            <Label className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5 block">
                                                Email
                                            </Label>
                                            <Input className="w-full h-12 px-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 text-sm text-zinc-800 dark:text-zinc-200 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none transition-all duration-200 shadow-none" />
                                        </TextField>
                                        <div className="flex justify-end items-center gap-3 pt-4">
                                            <Button
                                                slot="close"
                                                variant="secondary"
                                                className="px-5 h-11 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200/70 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-bold tracking-wide active:scale-[0.98] transition-all duration-200"
                                            >
                                                Cancel
                                            </Button>
                                            <Button
                                                isDisabled={error}
                                                slot="close"
                                                type="submit"
                                                className="px-5 h-11 rounded-xl  bg-green-600 hover:bg-green-500 text-white text-xs font-bold tracking-wide shadow-md shadow-emerald-600/10 dark:shadow-none active:scale-[0.98] transition-all duration-200"
                                            >
                                                {error
                                                    ? "Go Back"
                                                    : "Confirm Booking"}
                                            </Button>
                                        </div>
                                    </Form>
                                </Surface>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default BookingModal;
