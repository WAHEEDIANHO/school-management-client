import {AuthOptions} from "next-auth";
import axios from "axios";

import CredentialsProvider from "next-auth/providers/credentials"
import {randomBytes, randomUUID} from "crypto";
import {baseURL} from "@/src/utils/baseURL";


export  const options: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "WS School Management Sysytem",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials, req){
               try {
                   const res = await baseURL.post("/user/login", credentials)
                   const user = res.data
                   // If no error and we have user data, return it
                   if (user){
                       return user
                   }
                   // Return null if user data could not be retrieved
                   return null
               }catch (e: any) {
                   console.log(e)
                   throw new Error(e.response.data);
               }
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET as string,
    session: {
        strategy: "jwt",
        maxAge:  3 * 60 * 60,
    },
    pages: {
        signIn: '/',
    },
    callbacks: {
        async jwt({ token, user, account }) {
            if (account && user) {
                return {
                    ...token,
                    ...user,
                };
            }
            return token;
        },

       async session({ session, token }) {
            // Modify the session object as per your requirements
            session.user = {
                ...session.user,
                ...token,
            };
            return session;
        },
    },
}