import React from 'react';

function LearningActivities() {
    return (
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
    );
}

export default LearningActivities;