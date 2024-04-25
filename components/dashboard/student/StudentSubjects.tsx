import React, {useEffect} from 'react';
import {IStudent} from "@/src/model/IStudent";
import {getServerSession} from "next-auth";
import { options } from '@/app/api/auth/[...nextauth]/options';
import {redirect} from "next/navigation";
import {baseURL} from "@/src/utils/baseURL";
import {ISubject, ITopic} from "@/src/model/ISuject";
import {Formatter} from "@/src/utils/formatter";

async function StudentSubjects({ student } : {student: IStudent}) {
    const session: any = await getServerSession(options) ;
    if(!session || !session?.user) {
        redirect("/")
    }

    const { data: { result: subjects } }: { data: { result: ISubject[] } } = await baseURL.get(`/student/subject?GradeNumber=${student.classId}`, {
            headers: {
                Authorization: `Bearer ${session.user?.token || ''}`
            }
        })

    console.log(subjects)
    let topic: ITopic = {
        lessons: [],
        topicId: "",
        topicName: "",
        description: "",
        subjectTitle: "",
        term: 0,
        gradeNumber: 0,
    }
    return (
        <div className="row">
            {
                subjects.length > 0 ? (
                    subjects.map((subject: ISubject) => (
                        <div className="col-xl-3 col-sm-6 col-12 d-flex" key={subject.subjectTitle}>
                            <div className="card bg-comman w-100">
                                <div className="card-body">
                                    <div className="db-widgets d-flex justify-content-between align-items-center">
                                        <div className="db-info">
                                            <p className="fw-bold">{Formatter.capitalizeFirstLetter(subject.subjectTitle)}</p>
                                            <p className="small">{subject?.topics.length} <span className="text-primary">Topics</span> - <span> </span>
                                                {subject?.topics.reduce((a , b ) => {
                                                     a.lessons.push(b.lessons);
                                                     return a;
                                                }, topic).lessons.length} <span className="text-primary">Lessons</span></p>
                                        </div>
                                        <div className="db-icon position-absolute top-0 end-0 m-3">
                                            <img src="assets/img/icons/teacher-icon-02.svg" alt="Dashboard Icon"/>
                                        </div>

                                    </div>
                                    <div className="progress progress-sm">
                                        <div className="progress-bar bg-success" role="progressbar"
                                             style={{width: "25%"}}
                                             aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}/>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ): (
                    <div className="col-12 d-flex card p-5 align-items-center">
                        <h3>No subject available for you now!!!</h3>
                    </div>

                    )
            }
            {}
        </div>
    );
}

export default StudentSubjects;