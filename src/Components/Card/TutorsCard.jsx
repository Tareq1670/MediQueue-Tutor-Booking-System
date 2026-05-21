"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { MapPin, BookOpen } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const TutorsCard = ({ tutor, index }) => {
    const { _id, name, image, category, hourlyFee, institution, location } = tutor;

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 40,
            scale: 0.96,
            filter: "blur(8px)" 
        },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            filter: "blur(0px)",
            transition: { 
                duration: 0.8, 
                delay: index * 0.07, 
                ease: [0.16, 1, 0.3, 1] 
            } 
        }
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            whileHover={{ 
                y: -10,
                scale: 1.015,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
            }}
            className="bg-zinc-50/50 dark:bg-zinc-900/20 border border-zinc-200/60 dark:border-zinc-800/40 rounded-lg shadow-sm hover:shadow-2xl hover:border-green-500/40 dark:hover:border-green-500/30 hover:bg-white dark:hover:bg-zinc-900/40 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden h-full will-change-transform"
        >
            <div className="space-y-4 relative z-10 w-full">
                <div className="relative w-full h-48 overflow-hidden">
                    <div className="relative aspect-4/3">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            loading="eager"
                            className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                        />
                    </div>
                </div>

                <div className="space-y-2 px-4">
                    <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center uppercase font-medium text-green-600 dark:text-green-400 text-xs tracking-wider">
                            {category}
                        </span>
                        <p className="text-zinc-800 dark:text-zinc-200 font-bold text-lg">
                            ${hourlyFee}
                            <span className="text-xs font-normal text-zinc-400 ml-0.5">
                                /hr
                            </span>
                        </p>
                    </div>

                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight truncate group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                        {name}
                    </h3>

                    <div className="flex flex-col space-y-1 text-zinc-500 dark:text-zinc-400 text-sm">
                        <div className="flex items-center space-x-2">
                            <BookOpen
                                size={14}
                                className="text-zinc-400 flex-shrink-0"
                            />
                            <span className="truncate">{institution}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MapPin
                                size={14}
                                className="text-zinc-400 flex-shrink-0"
                            />
                            <span className="truncate">{location}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-5 w-full relative z-10 px-4 pb-4">
                <Link href={`/tutors/${_id}`} className="block w-full">
                    <Button className="w-full h-auto rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 transition-all duration-300 shadow-sm shadow-green-600/10 group-hover:shadow-green-600/20">
                        Book Session
                    </Button>
                </Link>
            </div>
        </motion.div>
    );
};

export default TutorsCard;