"use client";

import axios from "axios";
import Sidebar from "@/app/components/Sidebar";
import Topbar from "@/app/components/Topbar";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVERURL;

function Home() {
  return (
    <div className="bg-black min-w-full h-screen">
      <Sidebar />
      <Topbar />
    </div>
  );
}

export default Home;
