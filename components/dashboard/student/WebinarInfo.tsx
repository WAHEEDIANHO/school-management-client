import LearningActivities from "@/components/dashboard/student/LearningActivities";
import LearningHistory from "@/components/dashboard/student/LearningHistory";
import {IStudent} from "@/src/model/IStudent";
import {IWebinar} from "@/src/model/Webinar";
import {getServerSession} from "next-auth";
import {options} from "@/app/api/auth/[...nextauth]/options";
import {redirect} from "next/navigation";
import {ISubject, ITopic} from "@/src/model/ISuject";
import {baseURL} from "@/src/utils/baseURL";
import calculateDateDifferencePercentage from "@/src/utils/countDownToPercent";

async function WebinarInfo({ student } : {student: IStudent}) {
    const session: any = await getServerSession(options) ;
    if(!session || !session?.user) {
        redirect("/")
    }

    const { data: { result: webinar } }: { data: { result: IWebinar } } = await baseURL.get(`/student/webinar/today?GradeNumber=${student.classId}`, {
        headers: {
            Authorization: `Bearer ${session.user?.token || ''}`
        }
    })

    console.log(webinar)
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
        <div className="col-12 col-lg-12 col-xl-8">
            <div className="card flex-fill comman-shadow">
                <div className="card-header">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <h5 className="card-title">Daily Webinar</h5>
                        </div>
                    </div>
                </div>
                <div className="dash-circle">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 dash-widget1">
                            <div className="circle-bar circle-bar2">
                                <div className="circle-graph2" data-percent={calculateDateDifferencePercentage(webinar?.webinarDate)}>
                                    <b>{`${calculateDateDifferencePercentage(webinar?.webinarDate)}%`}</b>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="dash-details">
                                <div className="lesson-activity">
                                    <div className="lesson-imgs">
                                        <img src="assets/img/icons/lesson-icon-01.svg" alt=""/>
                                    </div>
                                    <div className="views-lesson">
                                        <h5>Subject</h5>
                                        <h4>{webinar?.topic?.subjectTitle}</h4>
                                    </div>
                                </div>
                                <div className="lesson-activity">
                                    <div className="lesson-imgs">
                                        <img src="assets/img/icons/lesson-icon-02.svg" alt=""/>
                                    </div>
                                    <div className="views-lesson">
                                        <h5>Topic</h5>
                                        <h4>{webinar?.topic?.topicName}</h4>
                                    </div>
                                </div>
                                <div className="lesson-activity">
                                    <div className="lesson-imgs">
                                        <img src="assets/img/icons/lesson-icon-03.svg" alt=""/>
                                    </div>
                                    <div className="views-lesson">
                                        <h5>Lesson</h5>
                                        <h4>Lesson 5</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="dash-details">
                                <div className="lesson-activity">
                                    <div className="lesson-imgs">
                                        <img src="assets/img/icons/lesson-icon-04.svg" alt=""/>
                                    </div>
                                    <div className="views-lesson">
                                        <h5>Asignment</h5>
                                        <h4>5 Asignment</h4>
                                    </div>
                                </div>
                                <div className="lesson-activity">
                                    <div className="lesson-imgs">
                                        <img src="assets/img/icons/lesson-icon-05.svg" alt=""/>
                                    </div>
                                    <div className="views-lesson">
                                        <h5>Teacher</h5>
                                        <h4>{webinar?.teacherInCharge}</h4>
                                    </div>
                                </div>
                                <div className="lesson-activity">
                                    <div className="lesson-imgs">
                                        <img src="assets/img/icons/lesson-icon-06.svg" alt=""/>
                                    </div>
                                    <div className="views-lesson">
                                        <h5>Lesson Learned</h5>
                                        <h4>10/50</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-md-3 d-flex align-items-center justify-content-center">
                            <div className="skip-group">
                                <button type="submit" className="btn btn-info skip-btn">Join</button>
                                <button type="submit" className="btn btn-info continue-btn">Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <LearningActivities/>
                <LearningHistory/>
            </div>
        </div>);
}

export default WebinarInfo;