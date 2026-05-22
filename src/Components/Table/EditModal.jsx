"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Button,
    Input,
    Label,
    TextField,
    FieldError,
    Modal,
} from "@heroui/react";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function EditTutorModal({ tutor, isOpen, onClose }) {
    const router = useRouter();
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [selectedDate, setSelectedDate] = useState(
        tutor?.startDate ? new Date(tutor.startDate) : new Date(),
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        const formElement = e.currentTarget;
        const formData = new FormData(formElement);
        const updatedFields = Object.fromEntries(formData.entries());
        const tutorData = { ...updatedFields };

        if (selectedDate) {
            tutorData.startDate = selectedDate.toISOString().split("T")[0];
        }

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/edit-tutor/${tutor._id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(tutorData),
                },
            );
            const data = await res.json();
            setLoading(false);

            if (data.modifiedCount > 0 || data.success) {
                toast.success("Tutor updated successfully!", {
                    duration: 4000,
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
                onClose();
            } else {
                setError("No changes were made or failed to update.");
            }
        } catch (err) {
            setLoading(false);
            setError("Failed to update tutor. Please try again.");
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="w-full max-w-2xl border border-zinc-200/80 dark:border-zinc-800/60 rounded-2xl shadow-xl backdrop-blur-md">
                        <Modal.Header>
                            <Modal.Heading className="text-2xl font-extrabold tracking-tight text-zinc-800 dark:text-zinc-200">
                                Edit Tutor Details
                            </Modal.Heading>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                                Update the credentials and information for this
                                tutor.
                            </p>
                        </Modal.Header>

                        <Modal.Body className="p-6 overflow-y-auto max-h-[70vh]">
                            {error && (
                                <div className="mb-5 p-4 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 rounded-xl text-sm text-red-600 dark:text-red-400 font-medium">
                                    {error}
                                </div>
                            )}

                            <form
                                id="edit-tutor-form"
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-5"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <TextField
                                        isRequired
                                        name="name"
                                        type="text"
                                        defaultValue={tutor?.name}
                                        className="w-full"
                                    >
                                        <Label className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5 block">
                                            Tutor Name
                                        </Label>
                                        <Input
                                            placeholder="John Doe"
                                            className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50"
                                        />
                                        <FieldError className="text-xs text-red-500 mt-1" />
                                    </TextField>

                                    <TextField
                                        isRequired
                                        name="image"
                                        type="url"
                                        defaultValue={tutor?.image}
                                        className="w-full"
                                        validate={(value) => {
                                            if (!value) return null;

                                            try {
                                                const url = new URL(value);
                                                return url.protocol ===
                                                    "http:" ||
                                                    url.protocol === "https:"
                                                    ? null
                                                    : "Please enter a valid URL (http or https)";
                                            } catch {
                                                return "Please enter a valid URL";
                                            }
                                        }}
                                    >
                                        <Label className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5 block">
                                            Photo URL
                                        </Label>
                                        <Input
                                            placeholder="https://example.com/image-link"
                                            className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 px-3 py-2"
                                        />
                                        <FieldError className="text-xs text-red-500 mt-1" />
                                    </TextField>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="flex flex-col">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5 block">
                                            Subject / Category
                                        </label>
                                        <select
                                            required
                                            name="category"
                                            defaultValue={tutor?.category || ""}
                                            className="w-full h-12 px-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 text-sm text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 cursor-pointer app-none"
                                        >
                                            <option
                                                value=""
                                                className="dark:bg-zinc-900 text-zinc-400"
                                            >
                                                Select Subject
                                            </option>
                                            <option
                                                value="Anatomy"
                                                className="dark:bg-zinc-900"
                                            >
                                                Anatomy
                                            </option>
                                            <option
                                                value="Physiology"
                                                className="dark:bg-zinc-900"
                                            >
                                                Physiology
                                            </option>
                                            <option
                                                value="Biochemistry"
                                                className="dark:bg-zinc-900"
                                            >
                                                Biochemistry
                                            </option>
                                            <option
                                                value="Pathology"
                                                className="dark:bg-zinc-900"
                                            >
                                                Pathology
                                            </option>
                                            <option
                                                value="Pharmacology"
                                                className="dark:bg-zinc-900"
                                            >
                                                Pharmacology
                                            </option>
                                            <option
                                                value="Physics"
                                                className="dark:bg-zinc-900"
                                            >
                                                Physics
                                            </option>
                                            <option
                                                value="Chemistry"
                                                className="dark:bg-zinc-900"
                                            >
                                                Chemistry
                                            </option>
                                            <option
                                                value="Biology"
                                                className="dark:bg-zinc-900"
                                            >
                                                Biology
                                            </option>
                                            <option
                                                value="Mathematics"
                                                className="dark:bg-zinc-900"
                                            >
                                                Mathematics
                                            </option>
                                            <option
                                                value="Higher Mathematics"
                                                className="dark:bg-zinc-900"
                                            >
                                                Higher Mathematics
                                            </option>
                                            <option
                                                value="English"
                                                className="dark:bg-zinc-900"
                                            >
                                                English
                                            </option>
                                            <option
                                                value="ICT"
                                                className="dark:bg-zinc-900"
                                            >
                                                ICT
                                            </option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5 block">
                                            Teaching Mode
                                        </label>
                                        <select
                                            required
                                            name="teachingMode"
                                            defaultValue={
                                                tutor?.teachingMode || "Online"
                                            }
                                            className="w-full h-12 px-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 text-sm text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 cursor-pointer"
                                        >
                                            <option
                                                value="Online"
                                                className="dark:bg-zinc-900"
                                            >
                                                Online
                                            </option>
                                            <option
                                                value="Offline"
                                                className="dark:bg-zinc-900"
                                            >
                                                Offline
                                            </option>
                                            <option
                                                value="Both"
                                                className="dark:bg-zinc-900"
                                            >
                                                Both
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <TextField
                                        isRequired
                                        name="availableDays"
                                        type="text"
                                        defaultValue={tutor?.availableDays}
                                        className="w-full"
                                    >
                                        <Label className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5 block">
                                            Available Days
                                        </Label>
                                        <Input
                                            placeholder="Sun - Thu"
                                            className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50"
                                        />
                                        <FieldError className="text-xs text-red-500 mt-1" />
                                    </TextField>

                                    <TextField
                                        isRequired
                                        name="availableTime"
                                        type="text"
                                        defaultValue={tutor?.availableTime}
                                        className="w-full"
                                    >
                                        <Label className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5 block">
                                            Available Time Slot
                                        </Label>
                                        <Input
                                            placeholder="5:00 PM - 8:00 PM"
                                            className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50"
                                        />
                                        <FieldError className="text-xs text-red-500 mt-1" />
                                    </TextField>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                    <TextField
                                        isRequired
                                        name="hourlyFee"
                                        type="number"
                                        defaultValue={tutor?.hourlyFee}
                                        className="w-full"
                                    >
                                        <Label className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5 block">
                                            Hourly Fee ($)
                                        </Label>
                                        <Input
                                            placeholder="50"
                                            min="0"
                                            className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50"
                                        />
                                        <FieldError className="text-xs text-red-500 mt-1" />
                                    </TextField>

                                    <TextField
                                        isRequired
                                        name="totalSlot"
                                        type="number"
                                        defaultValue={tutor?.totalSlot}
                                        className="w-full"
                                    >
                                        <Label className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5 block">
                                            Total Slots
                                        </Label>
                                        <Input
                                            placeholder="5"
                                            min="1"
                                            className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50"
                                        />
                                        <FieldError className="text-xs text-red-500 mt-1" />
                                    </TextField>

                                    <div className="flex flex-col [&>.react-datepicker-wrapper]:w-full">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5 block">
                                            Session Start Date
                                        </label>
                                        <DatePicker
                                            required
                                            selected={selectedDate}
                                            onChange={(date) =>
                                                setSelectedDate(date)
                                            }
                                            dateFormat="yyyy-MM-dd"
                                            className="w-full h-12 px-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 text-sm text-zinc-800 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 cursor-pointer"
                                            popperClassName="custom-react-datepicker-popper"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <TextField
                                        isRequired
                                        name="institution"
                                        type="text"
                                        defaultValue={tutor?.institution}
                                        className="w-full"
                                    >
                                        <Label className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5 block">
                                            Institution & Experience
                                        </Label>
                                        <Input
                                            placeholder="DMC, 3 Years Experience"
                                            className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50"
                                        />
                                        <FieldError className="text-xs text-red-500 mt-1" />
                                    </TextField>

                                    <TextField
                                        isRequired
                                        name="location"
                                        type="text"
                                        defaultValue={tutor?.location}
                                        className="w-full"
                                    >
                                        <Label className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5 block">
                                            Location (Area/City)
                                        </Label>
                                        <Input
                                            placeholder="Dhaka, Bangladesh"
                                            className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50"
                                        />
                                        <FieldError className="text-xs text-red-500 mt-1" />
                                    </TextField>
                                </div>
                            </form>
                        </Modal.Body>

                        <Modal.Footer className="flex justify-end gap-3 p-6 border-t border-zinc-100 dark:border-zinc-800/80">
                            <Button
                                variant="secondary"
                                onClick={onClose}
                                className="px-5 h-11 rounded-xl text-sm text-black dark:text-white font-medium"
                            >
                                Cancel
                            </Button>
                            <Button
                                form="edit-tutor-form"
                                type="submit"
                                isLoading={isLoading}
                                className="px-6 h-11 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-emerald-600/20 dark:shadow-none transition-all duration-200"
                            >
                                {isLoading
                                    ? "Saving Changes..."
                                    : "Save Changes"}
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
