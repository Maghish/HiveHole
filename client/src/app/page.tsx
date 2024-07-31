"use client";

import Paragraph from "@/components/paragraph";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVERURL;

export default function Home() {
  return (
    <div>
      <Paragraph />
    </div>
  );
}
