"use client";

import { Fragment, useContext, useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "@/app/components/Sidebar";
import Topbar from "@/app/components/Topbar";
import SignupForm from "./components/authForms/SignupForm";
import LoginForm from "./components/authForms/LoginForm";

import { AuthContext } from "./contexts/AuthContext";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVERURL;

function Home() {
  const { mode, userData } = useContext(AuthContext);
  const [signupFormVisible, setSignupFormVisible] = useState<boolean>(false);
  const [loginFormVisible, setLoginFormVisible] = useState<boolean>(false);

  useEffect(() => {
    if (mode === "Guest") {
      if (!signupFormVisible) {
        setSignupFormVisible(true);
      }
    }
  }, [mode]);

  return (
    <div className="bg-black min-w-full h-screen">
      {mode === "User" ? (
        <>
          <Sidebar />
          <Topbar />
        </>
      ) : (
        <Fragment>
          <div className="absolute min-w-full h-screen flex items-center justify-center flex-col">
            <p className="text-center text-xl font-jetbrains-mono-bold text-white">
              You need to logged in!
            </p>
            <span
              className="text-blue-500 font-jetbrains-mono-bold underline mt-3 cursor-pointer transition-all ease-linear hover:brightness-125"
              onClick={() => setLoginFormVisible(true)}
            >
              Login
            </span>
          </div>
          {signupFormVisible ? (
            <SignupForm
              setSignupFormVisibility={(v: boolean) => setSignupFormVisible(v)}
              setLoginFormVisibility={(v: boolean) => setLoginFormVisible(v)}
            />
          ) : (
            ""
          )}
          {loginFormVisible ? (
            <LoginForm
              setLoginFormVisibility={(v: boolean) => setLoginFormVisible(v)}
              setSignupFormVisibility={(v: boolean) => setSignupFormVisible(v)}
            />
          ) : (
            ""
          )}
        </Fragment>
      )}
    </div>
  );
}

export default Home;
