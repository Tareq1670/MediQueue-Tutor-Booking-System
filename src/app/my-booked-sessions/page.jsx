import MyBookedTable from "@/Components/Table/MyBookedTable";
import { auth } from "@/lib/auth";
import { getUserBook } from "@/lib/data";
import { headers } from "next/headers";




export const metadata = {
    title: "My Booked Sessions | MediQueue",
    description: "View and manage your booked appointments, medical sessions, and consultations on MediQueue.",
    keywords: [
        "MediQueue Bookings",
        "My Appointments",
        "Medical Sessions",
        "Queue Status"
    ],
    openGraph: {
        title: "My Bookings | MediQueue",
        description: "View and manage your booked appointments on MediQueue.",
        type: "website",
    },
};




const MyBookedPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const allBookUser = await getUserBook(session?.user?.id);


    return (
        <div>
            <MyBookedTable allBook={allBookUser}/>
        </div>
    );
};

export default MyBookedPage;