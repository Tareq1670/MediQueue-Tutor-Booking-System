import { homeData } from "@/lib/data";
import TutorsCard from "./Card/TutorsCard";

const HomeTutors = async () => {
    const tutors = await homeData();

    return (
        <section className="container mx-auto w-full pt-16 md:pt-24 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">
                        Meet Our Expert Tutors
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base font-normal max-w-xl mx-auto leading-relaxed">
                        Connect with verified top-performing educators curated to match your academic goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {tutors?.map((tutor) => (
                        <TutorsCard key={tutor._id} tutor={tutor} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeTutors;