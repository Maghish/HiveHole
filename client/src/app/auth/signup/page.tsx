"use client";

import SetCookie from "@/app/util/SetCookie";
import axios from "axios";
import { redirect } from "next/navigation";
import { useState } from "react";
import { RedirectUser } from "./RedirectUser";

function page() {
  const [username, setUsername] = useState<string>("testsubject");
  const [displayName, setDisplayName] = useState<string>("Test Subject");
  const [email, setEmail] = useState<string>("testsubject@hive.com");
  const [password, setPassword] = useState<string>("testsubject");

  async function SignupUser() {
    let anyError = false;

    axios
      .post("/auth/signup", {
        displayName: displayName,
        username: username,
        email: email,
        password: password,
      })
      .then((response: any) => {
        SetCookie("token", response.data.token);
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.token;

        anyError = false;
      })
      .catch((error) => {
        anyError = true;
      });

    if (!anyError) {
      // Redirect not working
      RedirectUser();
    }
  }

  return (
    <div className="bg-black min-w-full h-screen flex items-center justify-center font-jetbrains-mono-bold text-white">
      <button
        className=" bg-black border-2 border-white w-auto h-auto rounded-2xl text-white font-jetbrains-mono-regular text-sm px-6 py-3"
        onClick={() => SignupUser()}
      >
        Sign up!
      </button>
    </div>
  );
}

export default page;
