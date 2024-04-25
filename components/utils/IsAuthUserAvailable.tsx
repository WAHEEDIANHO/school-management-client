'use client'
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IUser, userAction} from "@/src/store/userSlice";
import {usePathname, useRouter} from "next/navigation";
import {baseURL} from "@/src/utils/baseURL";
import {getServerSession} from "next-auth";
import {options} from "@/app/api/auth/[...nextauth]/options";
import {useSession} from "next-auth/react";

function IsAuthUserAvailable({children} : {children: React.ReactNode}) {
    const user: IUser = useSelector((state: any) => state.user.reguser);
    const router = useRouter();
    const pathname = usePathname()
    const { data: userAuth } : { data: any, status: string }  = useSession();
    const dispatch = useDispatch();

    useEffect(() => {
        //check if user is authenticated and user state null redirect back to middleware
        (async () => {
            if (!user && userAuth?.user) {
                const { data } = await baseURL.get("/user/current-user", {
                    headers: {
                        Authorization: `Bearer ${userAuth?.user.token || ''}`
                    }
                })
                dispatch(userAction.setUsers(data?.result));
            }
        })()
    }, [userAuth]);
    return (
        children
    );
}

export default IsAuthUserAvailable;