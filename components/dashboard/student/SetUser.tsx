'use client'

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IUser, userAction} from "@/src/store/userSlice";
import {useRouter, useSearchParams} from "next/navigation";
import Link from "next/link";

function SetUser({activeUser, children} : { activeUser: any, children: React.ReactNode}) {
    const dispatch = useDispatch();
    const user: IUser = useSelector((state: any) => state.user.reguser);
    const router = useRouter();
    const serarchParam = useSearchParams();


    useEffect(() => {
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
   })
    return (
        children
    );
}

export default SetUser;