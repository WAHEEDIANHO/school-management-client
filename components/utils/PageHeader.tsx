'use client'
import React, {useEffect} from 'react';
import {Formatter} from "@/src/utils/formatter";
import {IStudent} from "@/src/model/IStudent";

function PageHeader({ student }: {student: IStudent}) {
    return (
        <div className="page-header">
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-sub-header">
                        <h3 className="page-title">Hi! {Formatter.capitalizeFirstLetter(student?.firstName)}</h3>
                        <ul className="breadcrumb">
                            {/*<li className="breadcrumb-item"><Link href="/student">Home</Link></li>*/}
                            <li className="breadcrumb-item active">{`${Formatter.capitalizeFirstLetter(student.role)}@Grade${student.classId}`}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageHeader;