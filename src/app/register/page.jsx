"use client";

import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {



    const handleRegister = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const registerData = Object.fromEntries(formData.entries());
        console.log(registerData);
    } 





    return (
        <div className="min-h-[calc(100vh-300px)] flex items-center justify-center md-0 md:px-4 py-4 md:py-12  transition-colors duration-300">
            <div className="w-full max-w-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-xl p-6 md:p-8">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                        Create an Account
                    </h2>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
                        Join MediQueue to connect with medical tutors
                    </p>
                </div>

                <Form onSubmit={handleRegister} className="flex flex-col gap-4">
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                        className="w-full"
                    >
                        <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1 block">
                            Name
                        </Label>
                        <Input
                            placeholder="Enter your name"
                            className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800"
                        />
                        <FieldError className="text-xs text-red-500 mt-1" />
                    </TextField>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        className="w-full"
                        validate={(value) => {
                            if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                    value,
                                )
                            ) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1 block">
                            Email
                        </Label>
                        <Input
                            placeholder="john@example.com"
                            className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800"
                        />
                        <FieldError className="text-xs text-red-500 mt-1" />
                    </TextField>

                    <TextField
                        isRequired
                        name="image"
                        type="text"
                        className="w-full"
                    >
                        <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1 block">
                            Profile Image URL
                        </Label>
                        <Input
                            placeholder="Enter your valid imageUrl"
                            className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800"
                        />
                        <FieldError className="text-xs text-red-500 mt-1" />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        className="w-full"
                        validate={(value) => {
                            if (value.length < 8)
                                return "Password must be at least 8 characters";
                            if (!/[A-Z]/.test(value))
                                return "Password must contain at least one uppercase letter";
                            if (!/[0-9]/.test(value))
                                return "Password must contain at least one number";
                            return null;
                        }}
                    >
                        <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1 block">
                            Password
                        </Label>
                        <Input
                            placeholder="Enter your password"
                            className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800"
                        />
                        <Description className="text-xs text-zinc-400 dark:text-zinc-500 mt-1 block">
                            Must be at least 8 characters with 1 uppercase and 1
                            number
                        </Description>
                        <FieldError className="text-xs text-red-500 mt-1" />
                    </TextField>

                    <Button
                        type="submit"
                        className="w-full rounded-lg bg-green-600 text-white font-semibold py-2.5 hover:bg-green-700 transition flex items-center justify-center gap-2 mt-2"
                    >
                        Register
                    </Button>
                </Form>

                <div className="relative flex py-4 items-center justify-center">
                    <div className="flex-grow border-t border-zinc-200 dark:border-zinc-800"></div>
                    <span className="flex-shrink mx-4 text-zinc-400 dark:text-zinc-500 text-xs font-medium uppercase tracking-wider">
                        Or
                    </span>
                    <div className="flex-grow border-t border-zinc-200 dark:border-zinc-800"></div>
                </div>

                <Button
                    variant="flat"
                    className="w-full rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium py-2.5 hover:bg-zinc-200 dark:hover:bg-zinc-700/80 transition flex items-center justify-center gap-2"
                >
                    <FcGoogle size={20} />
                    Continue with Google
                </Button>

                <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-6">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="text-green-600 dark:text-green-500 font-medium hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
