import MyBookedTable from "@/Components/Table/MyBookedTable";
import { auth } from "@/lib/auth";
import { getUserBook } from "@/lib/data";
import { headers } from "next/headers";

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