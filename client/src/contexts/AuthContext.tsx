"use client";
import { createContext, useState, useEffect } from "react";
import GetCookie from "@/util/GetCookie";

export const AuthContext = createContext<any>(null);

export const AuthContextProvider = ({ children }: any) => {
  const [requestComplete, setRequestComplete] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");
  const [userData, setUserData] = useState<any>();

  useEffect(() => {
    const token = GetCookie("token");

    async function getCurrentUser() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVERURL}/user/getcurrentuser`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              // prettier-ignore
              "Authorization": 'Bearer ' + token,
            },
          }
        );
        const data = await response.json();

        if (data.user) {
          setUserData(data.user);
          return true;
        } else {
          return false;
        }
      } catch (error) {
        return false;
      }
    }

    if (token) {
      getCurrentUser().then((response: boolean) => {
        if (response) {
          setResult("User");
          setRequestComplete(true);
        } else {
          setResult("Guest");
          setRequestComplete(true);
        }
      });
    } else {
      setUserData(null);
      setResult("Guest");
      setRequestComplete(true);
    }
  }, []);

  if (requestComplete && result === "User") {
    return (
      <AuthContext.Provider value={{ mode: "User", userData: userData }}>
        {children}
      </AuthContext.Provider>
    );
  } else if (requestComplete && result === "Guest") {
    return (
      <AuthContext.Provider value={{ mode: "Guest" }}>
        {children}
      </AuthContext.Provider>
    );
  }
};
