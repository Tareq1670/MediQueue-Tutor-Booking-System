"use client";

import {
    Button,
    Form,
    Input,
    Label,
    TextField,
    FieldError,
} from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const router = useRouter();
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        
        const formData = new FormData(e.currentTarget);
        const loginData = Object.fromEntries(formData.entries());

        console.log(loginData);

        // try {
        //     if ("") {
        //         router.push("/");
        //     } else {
        //         throw new Error("Invalid email or password");
        //     }
        // } catch (err) {
        //     setError(err.message || "Something went wrong. Please try again.");
        // }
    };

    const handleGoogleLogin = async () => {
        setError("");
        try {
            router.push("/");
        } catch (err) {
            setError("Google sign-in failed. Please try again.");
        }
    };

    return (
        <div className="min-h-[calc(100vh-300px)] flex items-center justify-center md-0 md:px-4 py-4 md:py-12 transition-colors duration-300">
            <div className="w-full max-w-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-xl p-6 md:p-8">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                        Welcome Back
                    </h2>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
                        Login to your MediQueue account
                    </p>
                </div>

                {/* {error && (
                    <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-600 dark:text-red-400">
                        {error}
                    </div>
                )} */}

                <Form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        className="w-full"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
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
                        name="password"
                        type="password"
                        className="w-full"
                    >
                        <div className="flex justify-between items-center mb-1">
                            <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 block">
                                Password
                            </Label>
                            <p 
                                className="text-xs font-medium text-green-600 dark:text-green-500 hover:underline"
                            >
                                Forgot Password?
                            </p>
                        </div>
                        <Input
                            placeholder="Enter your password"
                            className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800"
                        />
                        <FieldError className="text-xs text-red-500 mt-1" />
                    </TextField>

                    <Button
                        type="submit"
                        className="w-full rounded-lg bg-green-600 text-white font-semibold py-2.5 hover:bg-green-700 transition flex items-center justify-center gap-2 mt-2"
                    >
                        Login
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
                    onClick={handleGoogleLogin}
                    variant="flat"
                    className="w-full rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium py-2.5 hover:bg-zinc-200 dark:hover:bg-zinc-700/80 transition flex items-center justify-center gap-2"
                >
                    <FcGoogle size={20} />
                    Continue with Google
                </Button>

                <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-6">
                    Don&apos;t have an account?{" "}
                    <Link
                        href="/register"
                        className="text-green-600 dark:text-green-500 font-medium hover:underline"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;