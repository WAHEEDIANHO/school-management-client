import React from 'react';

function Events() {
    return (
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
    );
}

export default Events;