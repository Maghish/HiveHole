"use client";

import axios from "axios";
import Sidebar from "@/components/Sidebar";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVERURL;

function Home() {
  return (
    <main className="bg-black min-w-full h-screen">
      <Sidebar />
    </main>
  );
}

export default Home;
