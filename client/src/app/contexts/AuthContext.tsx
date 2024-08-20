"use client";
import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import GetCookie from "../util/GetCookie";

export const AuthContext = createContext<any>(null);

export const AuthContextProvider = ({ children }: any) => {
  const [requestComplete, setRequestComplete] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");
  const [userData, setUserData] = useState<any>();

  useEffect(() => {
    async function getCurrentUser() {
      try {
        const response = await axios.get("/user/getcurrentuser");
        if (response.data.user) {
          setUserData(response.data.user);
          return true;
        } else {
          return false;
        }
      } catch (error) {
        return false;
      }
    }

    const token = GetCookie("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
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
      delete axios.defaults.headers.common["Authorization"];
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
