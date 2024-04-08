import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import "./../../public/assets/css/font.css"
import './../../public/assets/css/bootstrap.min.css';
import './../../public/assets/plugins/fontawesome/css/fontawesome.min.css'
import './../../public/assets/plugins/fontawesome/css/all.min.css'

import './../../public/assets/css/style.css';
import AuthProvider from "@/src/context/AuthProvider";
import StoreProvider from "@/src/store/StoreProvider";
// import '';
// import "../globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WS School Management System",
  description: "Automating School Managing process",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <StoreProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </StoreProvider>
        <Script src={"/assets/js/jquery.min.js"}/>
        <Script src="/assets/js/bootstrap.bundle.min.js"/>
        <Script src="/assets/js/feather.min.js"/>
        <Script src="/assets/js/script.js"/>
        {/*<Script src="/assets/js/test.js"/>*/}
      </body>
    </html>
  );
}
