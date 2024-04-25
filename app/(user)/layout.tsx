import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import "./../../public/assets/css/font.css"
import './../../public/assets/css/bootstrap.min.css';
import './../../public/assets/plugins/feather/feather.css'
import './../../public/assets/plugins/fontawesome/css/fontawesome.min.css'
import './../../public/assets/plugins/fontawesome/css/all.min.css'
import './../../public/assets/plugins/simple-calendar/simple-calendar.css'
import './../../public/assets/css/style.css';
import StoreProvider from "@/src/store/StoreProvider";
import IsAuthUserAvailable from "@/components/utils/IsAuthUserAvailable";
import AppBar from "@/components/utils/AppBar";
import SideBar from "@/components/utils/SideBar";
import LocalModuleImporter from "@/components/utils/LocalModuleImporter";
import React from "react";
import {SessionProvider} from "next-auth/react";
import AuthProvider from "@/src/context/AuthProvider";


// import {getServerSession} from "next-auth";
// import {redirect} from "next/navigation";
// import '';
// import "../globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "WS School Management System",
    description: "Automating School Managing process",
};

export default async function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    // const session = await getServerSession();
    // if (!session || !session?.user) {
    //     redirect("/")
    // }
    return (
        <StoreProvider>
            <AuthProvider>
                    <html lang="en">
                    <body>
                      <div className="main-wrapper">
                          {/*Header*/}
                          <AppBar />
                          {/*SideBar*/}
                          <SideBar />
                          {children}
                        </div>
                      <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive"/>
                    <LocalModuleImporter />
                    </body>
                    </html>
            </AuthProvider>
        </StoreProvider>
    );
}
