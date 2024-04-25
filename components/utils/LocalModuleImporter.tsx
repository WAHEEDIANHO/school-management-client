import React, {useEffect, useState} from 'react';
import {IUser} from "@/src/store/userSlice";
import {useSelector} from "react-redux";
import Script from "next/script";

function LocalModuleImporter() {

    return (
        <>
            <Script src="/assets/js/bootstrap.bundle.min.js" />
            <Script src="/assets/js/feather.min.js" />
            <Script src="/assets/plugins/slimscroll/jquery.slimscroll.min.js" />
            <Script src="/assets/plugins/apexchart/apexcharts.min.js" />
            <Script src="/assets/plugins/apexchart/chart-data.js" />
            <Script src="/assets/plugins/simple-calendar/jquery.simple-calendar.js" />
            <Script src="/assets/js/calander.js" />
            <Script src="/assets/js/circle-progress.min.js" />
            <Script src="/assets/js/script.js" />
            {/*<Script src="/assets/js/test.js"/>*/}
        </>
        )
}

export default LocalModuleImporter;