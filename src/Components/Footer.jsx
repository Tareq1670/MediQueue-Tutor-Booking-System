import Link from "next/link";
import { Button } from "@heroui/react";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook, FiLinkedin } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md transition-colors duration-300 w-full mt-5">
            <div className="container mx-auto px-2 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

                    <div className="flex flex-col space-y-3">
                        <span className="uppercase font-bold text-xl text-green-600 dark:text-green-500 tracking-wider">
                            MediQueue
                        </span>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xs leading-relaxed">
                            Connecting learners with expert tutors seamlessly across any subject. Streamline your academic schedule.
                        </p>
                    </div>

                    <div className="flex flex-col space-y-3">
                        <h4 className="text-zinc-800 dark:text-zinc-200 font-semibold text-base">Tutor Services</h4>
                        <ul className="flex flex-col space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                            <li>Find Tutors</li>
                            <li>Become a Tutor</li>
                            <li>Booked Sessions</li>
                        </ul>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col space-y-1">
                            <h4 className="text-zinc-800 dark:text-zinc-200 font-semibold text-base">Contact Us</h4>
                            <p className="text-zinc-500 dark:text-zinc-400 text-sm">support@mediqueue.com</p>
                            <p className="text-zinc-500 dark:text-zinc-400 text-sm">+1 (555) 019-2834</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <Button isIconOnly size="sm" variant="flat" className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-lg hover:text-green-600 dark:hover:text-green-400 transition">
                                    <FiFacebook />
                                </Button>
                            </Link>
                            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <Button isIconOnly size="sm" variant="flat" className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-lg hover:text-green-600 dark:hover:text-green-400 transition">
                                    <FaXTwitter />
                                </Button>
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <Button isIconOnly size="sm" variant="flat" className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-lg hover:text-green-600 dark:hover:text-green-400 transition">
                                    <FiLinkedin />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-zinc-200 dark:border-zinc-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-zinc-400 dark:text-zinc-500 text-xs text-center sm:text-left">
                        &copy; {new Date().getFullYear()} MediQueue. All rights reserved.
                    </p>
                    <div className="flex space-x-4 text-xs text-zinc-400 dark:text-zinc-500">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;