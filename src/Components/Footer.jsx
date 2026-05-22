import Link from "next/link";
import { Button } from "@heroui/react";
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-xl mt-12">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="flex flex-col space-y-4">
                        <Link
                            href="/"
                            className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                        >
                            MediQueue
                        </Link>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed max-w-xs">
                            Empowering your learning journey by connecting
                            students with expert tutors globally. Quality
                            education, just a click away.
                        </p>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h4 className="font-semibold text-zinc-900 dark:text-white uppercase tracking-wider text-sm">
                            Services
                        </h4>
                        <ul className="flex flex-col space-y-3 text-sm text-zinc-500 dark:text-zinc-400">
                            <li>
                                <Link
                                    href="/tutors"
                                    className="hover:text-green-600 dark:hover:text-green-400 transition-colors"
                                >
                                    Find a Tutor
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/add-tutors"
                                    className="hover:text-green-600 dark:hover:text-green-400 transition-colors"
                                >
                                    Become a Tutor
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/my-booked-sessions"
                                    className="hover:text-green-600 dark:hover:text-green-400 transition-colors"
                                >
                                    Booked Sessions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h4 className="font-semibold text-zinc-900 dark:text-white uppercase tracking-wider text-sm">
                            Contact
                        </h4>
                        <div className="text-sm text-zinc-500 dark:text-zinc-400 space-y-2">
                            <p>support@mediqueue.com</p>
                            <p>Mymensingh, Bangladesh</p>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h4 className="font-semibold text-zinc-900 dark:text-white uppercase tracking-wider text-sm">
                            Follow Us
                        </h4>
                        <div className="flex items-center gap-3">
                            {[
                                { icon: FaFacebookF, href: "#" },
                                { icon: FaXTwitter, href: "#" },
                                { icon: FaLinkedinIn, href: "#" },
                            ].map((social, idx) => (
                                <Button
                                    key={idx}
                                    isIconOnly
                                    variant="flat"
                                    className="rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-green-100 hover:text-green-600 dark:hover:bg-green-900/30 dark:hover:text-green-400 transition-all"
                                >
                                    <social.icon size={16} />
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between space-y-2 text-sm text-zinc-400">
                    <p>© {currentYear} MediQueue. All rights reserved.</p>
                    <div className="flex items-center gap-8">
                        <Link
                            href="/privacy"
                            className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
