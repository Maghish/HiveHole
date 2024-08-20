"use client";

import { useContext, useEffect } from "react";
import axios from "axios";
import Sidebar from "@/app/components/Sidebar";
import Topbar from "@/app/components/Topbar";

import { AuthContext } from "./contexts/AuthContext";
import { redirect } from "next/navigation";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVERURL;

function Home() {
  const { mode, userData } = useContext(AuthContext);

  useEffect(() => {
    if (mode !== "User") {
      redirect("/auth/signup");
    }
  }, []);

  return (
    <div className="bg-black min-w-full h-screen">
      {mode === "User" ? (
        <>
          <Sidebar />
          <Topbar />
        </>
      ) : (
        <div className="absolute min-w-full h-screen flex items-center justify-center">
          <p className="text-center text-xl font-jetbrains-mono-bold text-white">
            You need to logged in!
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
