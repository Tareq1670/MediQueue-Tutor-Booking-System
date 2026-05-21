
import "./globals.css";
import Navbar from "@/Components/Navbar";
import ThemeProviders from "@/Providers/ThemeProviders";
import Footer from "@/Components/Footer";
import { Toaster } from "react-hot-toast";
import { Outfit } from "next/font/google";

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
});


export const metadata = {
    title: "MediQueue | Smart Learning Platform",
    description: "Streamline your medical academic sessions, join dynamic healthcare queues, and connect with expert tutors seamlessly.",
    keywords: [
        "MediQueue", 
        "Medical Queue", 
        "Healthcare Education", 
        "Tutor Management", 
        "Student Portal",
        "Queue Tracking"
    ],
    authors: [{ name: "MediQueue Team" }],
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${outfit.className} h-full antialiased`}
        >
            <body className={`antialiased bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-300 selection:bg-green-500 selection:text-white`}>
                <ThemeProviders>
                    <Navbar />
                    <main>{children}</main>
                    <Footer/>
                    <Toaster />
                </ThemeProviders>
            </body>
        </html>
    );
}
