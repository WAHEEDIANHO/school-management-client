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
                        <div className="col-12 col-lg-12 col-xl-8">
                            <div className="card flex-fill comman-shadow">
                                <div className="card-header">
                                    <div className="row align-items-center">
                                        <div className="col-6">
                                            <h5 className="card-title">Upcoming Class</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="dash-circle">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 dash-widget1">
                                            <div className="circle-bar circle-bar2">
                                                <div className="circle-graph2" data-percent="80">
                                                    <b>80%</b>
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
                                                        <h4>Mathematics</h4>
                                                    </div>
                                                </div>
                                                <div className="lesson-activity">
                                                    <div className="lesson-imgs">
                                                        <img src="assets/img/icons/lesson-icon-02.svg" alt=""/>
                                                    </div>
                                                    <div className="views-lesson">
                                                        <h5>Topic</h5>
                                                        <h4>Algebra</h4>
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
                                                        <h4>John Doe</h4>
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
                                        <div className="col-lg-3 col-md-3 d-flex align-items-center justify-content-center">
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
                                <div className="col-12 col-lg-12 col-xl-12 d-flex">
                                    <div className="card flex-fill comman-shadow">
                                        <div className="card-header">
                                            <div className="row align-items-center">
                                                <div className="col-6">
                                                    <h5 className="card-title">Learning Activity</h5>
                                                </div>
                                                <div className="col-6">
                                                    <ul className="chart-list-out">
                                                        <li><span className="circle-blue"></span>Teacher</li>
                                                        <li><span className="circle-green"></span>Student</li>
                                                        <li className="star-menus"><a href="#"><i
                                                            className="fas fa-ellipsis-v"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div id="apexcharts-area"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-12 col-xl-12 d-flex">
                                    <div className="card flex-fill comman-shadow">
                                        <div className="card-header d-flex align-items-center">
                                            <h5 className="card-title">Learning History</h5>
                                            <ul className="chart-list-out student-ellips">
                                                <li className="star-menus"><a href="#"><i
                                                    className="fas fa-ellipsis-v"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="card-body">
                                            <div className="teaching-card">
                                                <ul className="steps-history">
                                                    <li>Sep22</li>
                                                    <li>Sep23</li>
                                                    <li>Sep24</li>
                                                </ul>
                                                <ul className="activity-feed">
                                                    <li className="feed-item d-flex align-items-center">
                                                        <div className="dolor-activity">
                                                            <span className="feed-text1"><a>Mathematics</a></span>
                                                            <ul className="teacher-date-list">
                                                                <li><i className="fas fa-calendar-alt me-2"></i>September
                                                                    5,
                                                                    2022
                                                                </li>
                                                                <li>|</li>
                                                                <li><i className="fas fa-clock me-2"></i>09:00 am -
                                                                    10:00 am
                                                                    (60 Minutes)
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="activity-btns ms-auto">
                                                            <button type="submit" className="btn btn-info">In Progress
                                                            </button>
                                                        </div>
                                                    </li>
                                                    <li className="feed-item d-flex align-items-center">
                                                        <div className="dolor-activity">
                                                            <span className="feed-text1"><a>Geography </a></span>
                                                            <ul className="teacher-date-list">
                                                                <li><i className="fas fa-calendar-alt me-2"></i>September
                                                                    5,
                                                                    2022
                                                                </li>
                                                                <li>|</li>
                                                                <li><i className="fas fa-clock me-2"></i>09:00 am -
                                                                    10:00 am
                                                                    (60 Minutes)
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="activity-btns complete ms-auto">
                                                            <button type="submit" className="btn btn-info">Completed
                                                            </button>
                                                        </div>
                                                    </li>
                                                    <li className="feed-item d-flex align-items-center">
                                                        <div className="dolor-activity">
                                                            <span className="feed-text1"><a>Botony</a></span>
                                                            <ul className="teacher-date-list">
                                                                <li><i className="fas fa-calendar-alt me-2"></i>September
                                                                    5,
                                                                    2022
                                                                </li>
                                                                <li>|</li>
                                                                <li><i className="fas fa-clock me-2"></i>09:00 am -
                                                                    10:00 am
                                                                    (60 Minutes)
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="activity-btns ms-auto">
                                                            <button type="submit" className="btn btn-info">In Progress
                                                            </button>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-12 col-xl-4 d-flex">
                            <div className="card flex-fill comman-shadow">
                                <div className="card-body">
                                    <div id="calendar-doctor" className="calendar-container"></div>
                                    <div className="calendar-info calendar-info1">
                                        <div className="up-come-header">
                                            <h2>Upcoming Events</h2>
                                            <span><a href="#"><i className="feather-plus"></i></a></span>
                                        </div>
                                        <div className="upcome-event-date">
                                            <h3>10 Jan</h3>
                                            <span><i className="fas fa-ellipsis-h"></i></span>
                                        </div>
                                        <div className="calendar-details">
                                            <p>08:00 am</p>
                                            <div className="calendar-box normal-bg">
                                                <div className="calandar-event-name">
                                                    <h4>Botony</h4>
                                                    <h5>Lorem ipsum sit amet</h5>
                                                </div>
                                                <span>08:00 - 09:00 am</span>
                                            </div>
                                        </div>
                                        <div className="calendar-details">
                                            <p>09:00 am</p>
                                            <div className="calendar-box normal-bg">
                                                <div className="calandar-event-name">
                                                    <h4>Botony</h4>
                                                    <h5>Lorem ipsum sit amet</h5>
                                                </div>
                                                <span>09:00 - 10:00 am</span>
                                            </div>
                                        </div>
                                        <div className="calendar-details">
                                            <p>10:00 am</p>
                                            <div className="calendar-box normal-bg">
                                                <div className="calandar-event-name">
                                                    <h4>Botony</h4>
                                                    <h5>Lorem ipsum sit amet</h5>
                                                </div>
                                                <span>10:00 - 11:00 am</span>
                                            </div>
                                        </div>
                                        <div className="upcome-event-date">
                                            <h3>10 Jan</h3>
                                            <span><i className="fas fa-ellipsis-h"></i></span>
                                        </div>
                                        <div className="calendar-details">
                                            <p>08:00 am</p>
                                            <div className="calendar-box normal-bg">
                                                <div className="calandar-event-name">
                                                    <h4>English</h4>
                                                    <h5>Lorem ipsum sit amet</h5>
                                                </div>
                                                <span>08:00 - 09:00 am</span>
                                            </div>
                                        </div>
                                        <div className="calendar-details">
                                            <p>09:00 am</p>
                                            <div className="calendar-box normal-bg">
                                                <div className="calandar-event-name">
                                                    <h4>Mathematics </h4>
                                                    <h5>Lorem ipsum sit amet</h5>
                                                </div>
                                                <span>09:00 - 10:00 am</span>
                                            </div>
                                        </div>
                                        <div className="calendar-details">
                                            <p>10:00 am</p>
                                            <div className="calendar-box normal-bg">
                                                <div className="calandar-event-name">
                                                    <h4>History</h4>
                                                    <h5>Lorem ipsum sit amet</h5>
                                                </div>
                                                <span>10:00 - 11:00 am</span>
                                            </div>
                                        </div>
                                        <div className="calendar-details">
                                            <p>11:00 am</p>
                                            <div className="calendar-box break-bg">
                                                <div className="calandar-event-name">
                                                    <h4>Break</h4>
                                                    <h5>Lorem ipsum sit amet</h5>
                                                </div>
                                                <span>11:00 - 12:00 am</span>
                                            </div>
                                        </div>
                                        <div className="calendar-details">
                                            <p>11:30 am</p>
                                            <div className="calendar-box normal-bg">
                                                <div className="calandar-event-name">
                                                    <h4>History</h4>
                                                    <h5>Lorem ipsum sit amet</h5>
                                                </div>
                                                <span>11:30 - 12:00 am</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Footer*/}
                <footer>
                    <p>COPYRIGHT © 2023 DREAMSTECHNOLOGIES.</p>
                </footer>

            </div>
    )
}