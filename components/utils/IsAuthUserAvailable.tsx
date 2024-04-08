'use client'
import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {IUser} from "@/src/store/userSlice";
import {usePathname, useRouter} from "next/navigation";

function IsAuthUserAvailable({children} : {children: React.ReactNode}) {
    const user: IUser = useSelector((state: any) => state.user.reguser);
    const router = useRouter();
    const pathname = usePathname()

    useEffect(() => {
        //check if user is authenticated and user state null redirect back to middleware
        if (!user) {
            router.push(`/middleware?callbackUrl=${pathname}`)
        }
    }, []);
    return (
        children
    );
}

export default IsAuthUserAvailable;