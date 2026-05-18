"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Button } from "@heroui/react";
import Link from "next/link";

const Hero = () => {
    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1920",
            tag: "Empower Your Mind",
            title: "Learn From The Best Tutors Worldwide",
            description:
                "Connect with expert mentors and accelerate your learning journey with personalized 1-on-1 sessions designed just for your success.",
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1920",
            tag: "Flexible Learning",
            title: "Master New Skills At Your Own Pace",
            description:
                "Explore interactive live courses, comprehensive study resources, and get real-time guidance from industry professionals.",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1920",
            tag: "Achieve Excellence",
            title: "Transform Your Future With SkillSphere",
            description:
                "Join thousands of students achieving their academic and professional goals through our next-generation online learning platform.",
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1920",
            tag: "Smart Healthcare",
            title: "Skip The Waiting Room With MediQueue",
            description:
                "Book your doctor appointments instantly and track your serial queue in real-time. No more endless waiting at the chamber.",
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1920",
            tag: "Expert Care",
            title: "Connect With Top Certified Specialists",
            description:
                "Find and consult with experienced doctors across multiple specialties, tailored to your specific health needs and schedule.",
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1920",
            tag: "Effortless Booking",
            title: "Your Health Journey, Simplified",
            description:
                "Manage prescriptions, booking history, and live queue updates all from one single, easy-to-use digital dashboard.",
        },
    ];

    return (
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[500px] lg:h-[650px] overflow-hidden bg-slate-950 rounded-lg">
            <Swiper
                key="hero-swiper-unique"
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                grabCursor={true}
                loop={true}
                observer={true}
                observeParents={true}
                resizeObserver={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    bulletClass:
                        "swiper-pagination-bullet !bg-white/40 !w-2 sm:!w-2.5 !h-2 sm:!h-2.5 !opacity-100 transition-all duration-300",
                    bulletActiveClass:
                        "swiper-pagination-bullet-active !w-6 sm:!w-8 !bg-teal-400 !rounded-full",
                }}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide
                        key={slide.id}
                        className="relative w-full h-[50vh] md:h-full flex items-center"
                    >
                        <div className="absolute inset-0 w-full h-full">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                priority={index === 0}
                                sizes="100vw"
                                className="object-cover object-center scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40 md:to-transparent" />
                        </div>

                        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full z-20 flex items-center h-full">
                            <div className="max-w-3xl space-y-4 sm:space-y-6 text-left pt-12 sm:pt-0">
                                <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-500/10 border border-teal-500/20 backdrop-blur-md">
                                    {slide.tag}
                                </span>

                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight drop-shadow-sm">
                                    {slide.title}
                                </h1>

                                <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl font-light leading-relaxed">
                                    {slide.description}
                                </p>

                                <div className="pt-2 sm:pt-4">
                                    <Link href={"/tutors"}>
                                        <Button className="w-full h-auto w-auto sm:w-auto px-6 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white text-sm sm:text-base font-medium rounded-lg shadow-lg shadow-teal-500/10 hover:shadow-teal-500/20 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ">
                                            Find Best Tutors
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Hero;
