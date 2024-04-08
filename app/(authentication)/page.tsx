'use client'
import Link from "next/link";
import {FormEvent, useState} from "react";
import {baseURL} from "@/src/utils/baseURL";
import {useRouter, useSearchParams} from "next/navigation";
import {getSession, signIn as nextSignIn, signOut, useSession} from "next-auth/react";


export default function Login() {

    let [username, setUsername]: [string, Function] = useState('');
    let [password, setPassword]: [string, Function] = useState('');
    const sess = useSession();

    const router  = useRouter();
    const serarchParam = useSearchParams();

    async function loginHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const callBackURL = serarchParam.get("callbackUrl");
        try{
            const res: any = await nextSignIn('credentials', {
                redirect: false,
                username: username,
                password: password
            })
            if(res.error) throw new Error(res.error);
            //Get current user details
           // console.log(await getSession());
            router.push("/middleware")


            //router.push(!callBackURL ? "/student" : callBackURL, {})
            // router.push(!callBackURL ? `/login/setavtiveuser?theBankerTag=${theBankerTag}` : `/login/setavtiveuser?theBankerTag=${theBankerTag}&callBackURL=${callBackURL}`)

        }catch (e) {
            console.log("error login user in.", e)
        }finally {
            setPassword("");
            setUsername("");
        }
    }

    return (
         <div className="main-wrapper login-body">
              <div className="login-wrapper">
                  <div className="container">
                      <div className="loginbox">
                          <div className="login-left">
                              <img className="img-fluid" src="/assets/img/login.png" alt="Logo"/>
                          </div>
                          <div className="login-right">
                              <div className="login-right-wrap">
                                  <h1>Welcome back</h1>
                                  <h2>Sign in</h2>
                                  <form onSubmit={(e) => loginHandler(e)}>
                                      <div className="form-group">
                                          <label htmlFor="username">Username <span className="login-danger">*</span></label>
                                          <input className="form-control"
                                                 type="text" id="username"
                                                 value={username}
                                                 onChange={(e) =>setUsername(e.currentTarget.value)}
                                          />
                                          <span className="profile-views"><i className="fas fa-user-circle"></i></span>
                                      </div>
                                      <div className="form-group">
                                          <label htmlFor="password">Password <span className="login-danger">*</span></label>
                                          <input className="form-control pass-input"
                                                 type="text"
                                                 id="password"
                                                 value={password}
                                                 onChange={(e) => setPassword(e.currentTarget.value)}
                                          />
                                          <span className="profile-views feather-eye toggle-password"></span>
                                      </div>
                                      <div className="forgotpass">
                                          <div className="remember-me">
                                              <label
                                                  className="custom_check mr-2 mb-0 d-inline-flex remember-me"> Remember
                                                  me
                                                  <input type="checkbox" name="radio"/>
                                                  <span className="checkmark"></span>
                                              </label>
                                          </div>
                                          <Link href="/forgot-password">Forgot Password?</Link>
                                      </div>
                                      <div className="form-group">
                                          <button className="btn btn-primary btn-block" type="submit">Login</button>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  );
}