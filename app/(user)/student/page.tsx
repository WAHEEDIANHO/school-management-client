import AppBar from "@/components/utils/AppBar";
import SideBar from "@/components/utils/SideBar";
import PageHeader from "@/components/utils/PageHeader";
import StudentSubjects from "@/components/dashboard/student/StudentSubjects";
import {useSelector} from "react-redux";
import {getServerSession} from "next-auth";
import {options} from "@/app/api/auth/[...nextauth]/options";
import {redirect} from "next/navigation";
import {baseURL} from "@/src/utils/baseURL";
import {IStudent} from "@/src/model/IStudent";
import Events from "@/components/dashboard/student/Events";
import WebinarInfo from "@/components/dashboard/student/WebinarInfo";
import LearningActivities from "@/components/dashboard/student/LearningActivities";
import LearningHistory from "@/components/dashboard/student/LearningHistory";
import React from "react";
import Script from "next/script";
import LocalModuleImporter from "@/components/utils/LocalModuleImporter";

export default async function Student() {
    const session: any =  await getServerSession(options);
    if (!session || !session?.user) {
        redirect("/")
    }
    //Get student details
    const { data: { result: student } }: { data:  { result: IStudent }, } = await baseURL.get(`/student/${session?.user.id}`, {
        headers: {
            Authorization: `Bearer ${session?.user.token || ''}`
        }
    })

    return (
        <div className="page-wrapper">
                <div className="content container-fluid">
                    {/*Page Header*/}
                   <PageHeader student={student}/>

                   <StudentSubjects student={student} />

                    <div className="row">
                        <WebinarInfo student={student}  />
                        <Events/>
                    </div>
                </div>

            {/*Footer*/}
            <footer>
                <p>COPYRIGHT © 2023 .</p>
            </footer>
        </div>
    )
}