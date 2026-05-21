import MyTutorsTable from "@/Components/Table/MyTutorsTable";
import { auth } from "@/lib/auth";
import { getMyTutors } from "@/lib/data";
import { headers } from "next/headers";


export const metadata = {
    title: "My Tutors | MediQueue",
    description: "Manage your listed medical tutors, update session availability, and track your educational appointments on MediQueue.",
    keywords: [
        "MediQueue Tutors",
        "My Tutors",
        "Medical Educators",
        "Tutor Management"
    ],
    openGraph: {
        title: "My Tutors | MediQueue",
        description: "Manage your listed medical tutors and educational appointments on MediQueue.",
        type: "website",
    },
};




const MyTutors =async () => {
    const session = await auth.api.getSession({
        headers : await headers()
    })

    const myTutors = await getMyTutors(session?.user?.id);
    return (
        <div>
            <MyTutorsTable myTutors={myTutors}/>
        </div>
    );
};

export default MyTutors;