import React from 'react';

function LearningHistory() {
    return (
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
    );
}

export default LearningHistory;