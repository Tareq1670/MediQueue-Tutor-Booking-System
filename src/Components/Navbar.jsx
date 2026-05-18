"use client";

import { useState, useEffect, useRef } from "react";
import { Button, Avatar } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Hamburger from "hamburger-react";
import { Moon, Sun } from "@gravity-ui/icons";
import { useTheme } from "next-themes";

const Navbar = () => {
    const pathname = usePathname();
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);


    const navbarRef = useRef(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleOutsideAction = (event) => {
            if (
                navbarRef.current &&
                !navbarRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
                setIsProfileOpen(false);
            }
        };

        if (isMenuOpen || isProfileOpen) {
            document.addEventListener("mousedown", handleOutsideAction);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideAction);
        };
    }, [isMenuOpen, isProfileOpen]);

    const getLinkClass = (path, isMobile = false) => {
        const isActive = pathname === path;
        if (isMobile) {
            return isActive
                ? "text-green-600 dark:text-green-400 font-semibold text-lg"
                : "text-zinc-700 dark:text-zinc-300 hover:text-green-600 dark:hover:text-green-400 transition";
        }
        return isActive
            ? "text-green-600 dark:text-green-400 font-semibold"
            : "text-zinc-600 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 transition";
    };

    const currentTheme = theme === "system" ? resolvedTheme : theme;

    return (
        <div
            ref={navbarRef}
            className="border-b border-zinc-200 dark:border-zinc-800 shadow-sm bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50 overflow-x-clip w-full transition-colors duration-300"
        >
            <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
                <Link
                    href="/"
                    className="uppercase font-bold text-2xl text-green-600 dark:text-green-500 tracking-wider"
                >
                    <h2>MediQueue</h2>
                </Link>

                <ul className="hidden lg:flex items-center space-x-6 font-medium">
                    <li>
                        <Link href="/" className={getLinkClass("/")}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/tutors"
                            className={getLinkClass("/tutors")}
                        >
                            Tutors
                        </Link>
                    </li>
                    {isLoggedIn && (
                        <>
                            <li>
                                <Link
                                    href="/add-tutors"
                                    className={getLinkClass("/add-tutors")}
                                >
                                    Add Tutor
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/my-tutors"
                                    className={getLinkClass("/my-tutors")}
                                >
                                    My Tutors
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/my-booked-sessions"
                                    className={getLinkClass(
                                        "/my-booked-sessions",
                                    )}
                                >
                                    My Booked Sessions
                                </Link>
                            </li>
                        </>
                    )}
                </ul>

                <div className="hidden lg:flex items-center space-x-2">
                    <div className="flex bg-zinc-100 dark:bg-zinc-800 p-1 rounded-full border border-zinc-200 dark:border-zinc-700">
                        {mounted && (
                            <Button
                                variant="light"
                                isIconOnly
                                className="w-6 h-6 text-zinc-600 dark:text-zinc-400"
                                onClick={() =>
                                    setTheme(
                                        currentTheme === "dark"
                                            ? "light"
                                            : "dark",
                                    )
                                }
                            >
                                {currentTheme === "dark" ? (
                                    <Sun size={16} />
                                ) : (
                                    <Moon size={16} />
                                )}
                            </Button>
                        )}
                    </div>

                    {!isLoggedIn ? (
                        <>
                            <Link href="/login">
                                <Button className="rounded-lg bg-green-600 text-white font-medium px-5 py-2 hover:bg-green-700 transition">
                                    Login
                                </Button>
                            </Link>
                            <Link href="/register">
                                <Button className="rounded-lg bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 font-medium px-5 py-2 hover:bg-green-100 dark:hover:bg-green-950/50 transition">
                                    Register
                                </Button>
                            </Link>
                        </>
                    ) : (
                        <div className="relative">
                            <div
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="focus:outline-none flex items-center justify-center cursor-pointer ring-2 ring-transparent hover:ring-green-500 rounded-full p-0.5 transition"
                            >
                                <Avatar className="w-9 h-9">
                                    <Avatar.Image
                                        alt="John Doe"
                                        src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                                    />
                                    <Avatar.Fallback>JD</Avatar.Fallback>
                                </Avatar>
                            </div>

                            {isProfileOpen && (
                                <div className="absolute right-0 mt-4 w-48 bg-white dark:bg-zinc-900 border border-zinc-200 /10 not-first:dark:border-zinc-800 rounded-2xl shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden text-center">
                                    <Link
                                        href="/profile"
                                        className="block px-4 py-2.5 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition text-left"
                                        onClick={() => setIsProfileOpen(false)}
                                    >
                                        Profile Page
                                    </Link>
                                    <hr className="border-zinc-200 dark:border-zinc-800/10 my-1" />
                                    <button
                                        onClick={() => {
                                            setIsLoggedIn(false);
                                            setIsProfileOpen(false);
                                        }}
                                        className="w-full block px-4 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 transition text-left font-medium"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="lg:hidden flex items-center space-x-1">
                    {mounted && (
                        <Button
                            variant="flat"
                            isIconOnly
                            className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                            onClick={() =>
                                setTheme(
                                    currentTheme === "dark" ? "light" : "dark",
                                )
                            }
                        >
                            {currentTheme === "dark" ? (
                                <Sun size={18} />
                            ) : (
                                <Moon size={18} />
                            )}
                        </Button>
                    )}
                    <Hamburger
                        toggled={isMenuOpen}
                        toggle={setIsMenuOpen}
                        size={22}
                        color="#16a34a"
                    />
                </div>
            </div>

            <div
                className={`lg:hidden rounded-lg bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 px-6 pb-8 pt-4 absolute w-full md:w-80 right-0 shadow-xl transition-all duration-300 ease-in-out ${
                    isMenuOpen
                        ? "opacity-100 translate-x-0 visible"
                        : "opacity-0 translate-x-full invisible"
                }`}
            >
                {isLoggedIn && (
                    <div className="flex flex-col items-center justify-center border-b border-zinc-100 dark:border-zinc-800 pb-4 mb-6">
                        <Avatar className="w-16 h-16 mb-2 ring-2 ring-green-500/20">
                            <Avatar.Image
                                alt="John Doe"
                                src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                            />
                            <Avatar.Fallback>JD</Avatar.Fallback>
                        </Avatar>
                        <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                            John Doe
                        </span>
                    </div>
                )}

                <ul className="flex flex-col space-y-4 font-medium mb-8 text-center">
                    <li>
                        <Link
                            href="/"
                            className={getLinkClass("/", true)}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/tutors"
                            className={getLinkClass("/tutors", true)}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Tutors
                        </Link>
                    </li>
                    {isLoggedIn && (
                        <>
                            <li>
                                <Link
                                    href="/add-tutors"
                                    className={getLinkClass(
                                        "/add-tutors",
                                        true,
                                    )}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Add Tutor
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/my-tutors"
                                    className={getLinkClass("/my-tutors", true)}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    My Tutors
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/my-booked-sessions"
                                    className={getLinkClass(
                                        "/my-booked-sessions",
                                        true,
                                    )}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    My Booked Sessions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/profile"
                                    className={getLinkClass("/profile", true)}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Profile
                                </Link>
                            </li>
                        </>
                    )}
                </ul>

                {!isLoggedIn ? (
                    <div className="flex flex-col space-y-3">
                        <Link
                            href="/login"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Button className="w-full rounded-xl bg-green-600 text-white font-medium py-2.5">
                                Login
                            </Button>
                        </Link>
                        <Link
                            href="/register"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Button className="w-full rounded-xl bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 font-medium py-2.5">
                                Register
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <Button
                        onClick={() => {
                            setIsLoggedIn(false);
                            setIsMenuOpen(false);
                        }}
                        className="w-full font-semibold bg-red-50 dark:bg-red-950/20 hover:bg-red-100 dark:hover:bg-red-950/40 rounded-xl py-2.5 text-red-600 dark:text-red-400 transition"
                    >
                        Logout
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
