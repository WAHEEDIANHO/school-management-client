import {AuthOptions} from "next-auth";
import axios from "axios";

import CredentialsProvider from "next-auth/providers/credentials"
import {randomBytes, randomUUID} from "crypto";


export  const options: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "theBankerApp",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials, req){
               try {
                   const res = await axios.post("https://oluyole.thebanker.app:8042/mobile/api/Account/mobile-login-portal", credentials)
                   const user = res.data
                   // If no error and we have user data, return it
                   if (user) {
                       return user
                   }
                   // Return null if user data could not be retrieved
                   return null
               }catch (e) {
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
        signIn: '/login',
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
            // delete session.user?.name;
            // delete session.user?.email;
            // delete session.user?.image;
            // session.user = token;
            // session.user.refreshToken = token.refreshToken;
            // session.user.accessTokenExpires = token.accessTokenExpires;
            return token;
        },
    },
}