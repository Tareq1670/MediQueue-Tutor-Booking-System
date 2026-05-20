import MyTutorsTable from "@/Components/Table/MyTutorsTable";
import { auth } from "@/lib/auth";
import { getMyTutors } from "@/lib/data";
import { headers } from "next/headers";

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