'use client'

import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IUser, userAction} from "@/src/store/userSlice";
import {useRouter, useSearchParams} from "next/navigation";
import Link from "next/link";
import Script from "next/script";

function SetUser({activeUser, children} : { activeUser: any, children: React.ReactNode}) {
    const dispatch = useDispatch();
    const user: IUser = useSelector((state: any) => state.user.reguser);
    const router = useRouter();
    const serarchParam = useSearchParams();
    const [loadScript, setLoadScript] = useState(false);


    useEffect(() => {
        setLoadScript(!loadScript)
         console.log(activeUser?.result);
         dispatch(userAction.setUsers(activeUser?.result));
        const callBackURL = serarchParam.get("callbackUrl");

        switch (activeUser?.result.role.toLowerCase()) {
                case "admin":
                    router.push(`${!callBackURL ? "/admin" : callBackURL}`)
                    break;
                case "student":
                    router.push(`${!callBackURL ? "/student" : callBackURL}`)
                    break;
                case "teacher":
                    router.push(`${!callBackURL ? "/teacher" : callBackURL}`)
                    break;
                case "parent":
                    router.push(`${!callBackURL ? "/parent" : callBackURL}`)
                    break;
                default:
                    router.push(`${!callBackURL ? "/" : callBackURL}`)
         }
   }, [user])
    return (
        <>
            {children}
            {/*{loadScript && <Script src="/assets/js/test.js" strategy="afterInteractive"/>}*/}

        </>
    );
}

export default SetUser;