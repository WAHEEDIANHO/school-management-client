'use client'
import React, {useState} from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";

function SideBar() {
    const pathname = usePathname();

    const [isAdmin, steIsAdmin] : [boolean, Function] = useState(false)
    const [role, setRole] : [string, Function] = useState("teacher")



    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    {
                        role === "student" ? (
                            <ul>
                                <li className="menu-title">
                                    <span>Main Menu</span>
                                </li>
                                <li className="active">
                                    <Link href="/student">
                                        <i className="feather-grid"></i>
                                        <span> Dashboard</span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href="/student">
                                        <i className="feather-message-square"></i>
                                        <span> Messages</span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href="/student">
                                        <i className="feather-inbox"></i>
                                        <span>Notification</span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href="/student">
                                        <i className="feather-calendar"></i>
                                        <span>School Event</span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href="/student">
                                        <i className="feather-users"></i>
                                        <span>Class Mate</span>
                                    </Link>
                                </li>

                                {/*Academics*/}
                                <li className="menu-title">
                                    <span>Academics</span>
                                </li>
                                <li className="submenu">
                                    <Link href="#">
                                        <i className="fas fa-file-invoice-dollar"></i> <span> Assignments</span></Link>
                                </li>
                                <li>
                                    <Link href="/holiday"><i className="fas fa-holly-berry"></i>
                                        <span>Class Routine</span></Link>
                                </li>
                                <li>
                                    <Link href="/fees"><i className="fas fa-comment-dollar"></i> <span>Fees</span></Link>
                                </li>
                                <li>
                                    <Link href="/exam"><i className="fas fa-clipboard-list"></i> <span>E-Library</span></Link>
                                </li>
                                <li>
                                    <Link href="/event"><i className="fas fa-calendar-day"></i> <span>Assessment</span></Link>
                                </li>
                                <li>
                                    <Link href="time-/table"><i className="fas fa-table"></i>
                                        <span>Time Table</span></Link>
                                </li>

                                <li className="menu-title">
                                    <span>Others</span>
                                </li>
                                <li>
                                    <Link href="/sports"><i className="fas fa-baseball-ball"></i>
                                        <span>Sports</span></Link>
                                </li>
                                <li>
                                    <Link href="/hostel"><i className="fas fa-hotel"></i> <span>Hostel</span></Link>
                                </li>
                                <li>
                                    <Link href="/transport"><i className="fas fa-bus"></i> <span>Transport</span></Link>
                                </li>
                                <li className="menu-title">
                                    <span>Management</span>
                                </li>
                                <li>
                                    <Link href="/settings"><i className="fas fa-cog"></i> <span>Settings</span></Link>
                                </li>
                            </ul>
                        ) : role === "teacher" ? (
                            <ul>
                                <li className="menu-title">
                                    <span>Main Menu</span>
                                </li>
                                <li className="active">
                                    <Link href="/student">
                                        <i className="feather-grid"></i>
                                        <span> Dashboard</span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href="/student">
                                        <i className="feather-inbox"></i>
                                        <span>Notification</span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href="/student">
                                        <i className="feather-calendar"></i>
                                        <span>School Event</span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href="/student">
                                        <i className="feather-users"></i>
                                        <span>Students</span>
                                    </Link>
                                </li>

                                {/*Academics*/}
                                <li className="menu-title">
                                    <span>Academics</span>
                                </li>
                                <li className="submenu">
                                    <Link href="#">
                                        <i className="fas fa-file-invoice-dollar"></i> <span> Pending Task</span></Link>
                                </li>
                                <li className="submenu">
                                    <Link href="#">
                                        <i className="fas fa-file-invoice-dollar"></i> <span> Assignments</span></Link>
                                </li>
                                <li>
                                    <Link href="/holiday"><i className="fas fa-holly-berry"></i>
                                        <span>Class Routine</span></Link>
                                </li>
                                <li className="">
                                    <Link href="/student">
                                        <i className="feather-message-square"></i>
                                        <span> Attendance</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/fees"><i className="fas fa-comment-dollar"></i> <span>Fees</span></Link>
                                </li>
                                <li>
                                    <Link href="/exam"><i className="fas fa-clipboard-list"></i> <span>E-Library</span></Link>
                                </li>
                                <li>
                                    <Link href="/event"><i className="fas fa-calendar-day"></i> <span>Assessment</span></Link>
                                </li>
                                <li>
                                    <Link href="time-/table"><i className="fas fa-table"></i>
                                        <span>Time Table</span></Link>
                                </li>
                                <li>
                                    <Link href="time-/table"><i className="fas fa-table"></i>
                                        <span>Lesson Plan</span></Link>
                                </li>
                                <li>
                                    <Link href="time-/table"><i className="fas fa-table"></i>
                                        <span>Grade</span></Link>
                                </li>
                                <li>
                                    <Link href="time-/table"><i className="fas fa-table"></i>
                                        <span>Lesson Plan</span></Link>
                                </li>
                                <li>
                                    <Link href="time-/table"><i className="fas fa-table"></i>
                                        <span>Promotion</span></Link>
                                </li>


                                <li className="menu-title">
                                    <span>Management</span>
                                </li>
                                <li>
                                    <Link href="/settings"><i className="fas fa-cog"></i> <span>Settings</span></Link>
                                </li>
                            </ul>
                        ) : (
                            <div>Admin</div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default SideBar;