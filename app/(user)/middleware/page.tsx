import React from 'react';
import {getServerSession} from "next-auth";
import {options} from "@/app/api/auth/[...nextauth]/options";
import {baseURL} from "@/src/utils/baseURL";
import SetUser from "@/components/dashboard/student/SetUser";
import {redirect} from "next/navigation";

async function Page() {
    const session: any = await getServerSession(options) ;
    if (!session || !session?.user) {
      // handle the case when session or session.user is null or undefined
      redirect("/")
    }
    //Get current user
    const { data } = await baseURL.get("/user/current-user", {
        headers: {
            Authorization: `Bearer ${session.user?.token || ''}`
        }
    })
    // console.log(data)
    // revalidatePath('/student') // Update cached posts
    // redirect(`/student`) // Navigate to the new post page

    return (
        <SetUser activeUser={data}>
            <div>Loading and redirecting user </div>
        </SetUser>
    );


}
export default Page;