'use client'
import React, {useEffect} from 'react';
import Link from "next/link";
import {useSelector} from "react-redux";
import {IUser} from "@/src/store/userSlice";
import IsAuthUserAvailable from "@/components/utils/IsAuthUserAvailable";

function AppBar() {
    const user: IUser = useSelector((state: any) => state.user?.reguser);
    return (
        <IsAuthUserAvailable>
            <div className="header">
                <div className="header-left">
                    <Link href={`/${user?.role.toLowerCase()}`}
                          className="logo d-lg-flex flex-row align-items-baseline">
                        <img src="/assets/img/mylogo.png" alt="Logo"/>
                        <h2 className="mb-0">School</h2>
                    </Link>
                    <Link href={`/${user?.role.toLowerCase()}`} className="logo logo-small">
                        <img src="/assets/img/mylogo.png" alt="Logo" width="30" height="30"/>
                    </Link>
                </div>

                <div className="menu-toggle">
                <span id="toggle_btn">
                    <i className="fas fa-bars"></i>
                </span>
                </div>

                <span className="mobile_btn" id="mobile_btn">
                <i className="fas fa-bars"></i>
            </span>

                <ul className="nav user-menu">

                    <li className="nav-item dropdown noti-dropdown me-2">
                        <Link href="#" className="dropdown-toggle nav-link header-nav-list" data-bs-toggle="dropdown">
                            <img src="/assets/img/icons/header-icon-05.svg" alt=""/>
                        </Link>
                        <div className="dropdown-menu notifications">
                            <div className="topnav-dropdown-header">
                                <span className="notification-title">Notifications</span>
                                <Link href="#" className="clear-noti"> Clear All </Link>
                            </div>
                            <div className="noti-content">
                                <ul className="notification-list">
                                    <li className="notification-message">
                                        <Link href="#">
                                            <div className="media d-flex">
                                    <span className="avatar avatar-sm flex-shrink-0">
                                        <img className="avatar-img rounded-circle" alt="User Image"
                                             src="/assets/img/profiles/avatar-02.jpg"/>
                                    </span>
                                                <div className="media-body flex-grow-1">
                                                    <p className="noti-details"><span
                                                        className="noti-title">Carlson Tech</span> has
                                                        approved <span className="noti-title">your estimate</span></p>
                                                    <p className="noti-time"><span
                                                        className="notification-time">4 mins ago</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    {/* Additional notification items go here */}
                                </ul>
                            </div>
                            <div className="topnav-dropdown-footer">
                                <Link href="#">View all Notifications</Link>
                            </div>
                        </div>
                    </li>

                    <li className="nav-item zoom-screen me-2">
                        <Link href="#" className="nav-link header-nav-list">
                            <img src="/assets/img/icons/header-icon-04.svg" alt=""/>
                        </Link>
                    </li>

                    <li className="nav-item dropdown has-arrow new-user-menus">
                        <Link href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                            <div className="user-img">
                                <img className="rounded-circle" src="/assets/img/profiles/avatar-01.jpg" width="31"
                                     alt={`${user?.firstName} ${user?.lastName}`}/>
                                <div className="user-text">
                                    <h6>{`${user?.firstName} ${user?.lastName}`}</h6>
                                    <p className="text-muted mb-0">{user?.role.toLowerCase()}</p>
                                </div>
                            </div>
                        </Link>
                        <div className="dropdown-menu rounded-4">
                            <div className="user-header">
                                <div className="avatar avatar-sm">
                                    <img src="/assets/img/profiles/avatar-01.jpg" alt="User Image"
                                         className="avatar-img rounded-circle"/>
                                </div>
                                <div className="user-text">
                                    <h6>{`${user?.firstName} ${user?.lastName}`}</h6>
                                    <p className="text-muted mb-0">{user?.role.toLowerCase()}</p>
                                </div>
                            </div>
                            <Link className="dropdown-item" href="/profile">My Profile</Link>
                            <Link className="dropdown-item" href="/inbox">Inbox</Link>
                            <Link className="dropdown-item" href="/login">Logout</Link>
                        </div>
                    </li>
                </ul>

            </div>
        </IsAuthUserAvailable>
    );
}

export default AppBar;