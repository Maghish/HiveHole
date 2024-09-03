import Topsearchbar from "./Topsearchbar";

import { FaUserCircle } from "react-icons/fa";

import Bell from "@/assets/Bell.svg";
import Star from "@/assets/Star.svg";

import Image from "next/image";

function Topbar() {
  return (
    <div className="flex fixed top-0 left-0 w-full h-[60px] px-10 py-3 z-10 bg-black">
      <Topsearchbar />
      <div className="flex w-auto h-full justify-stretch gap-x-5">
        <button className="cursor-pointer self-center transition duration-100 ease-in hover:brightness-125 focus:scale-110">
          <Image alt="notification" src={Bell} />
        </button>

        <button className="cursor-pointer self-center transition duration-100 ease-in hover:brightness-125 focus:scale-110">
          <Image alt="favorite" src={Star} />
        </button>

        <button className="self-center flex items-center rounded-full bg-black transition duration-100 ease-in hover:brightness-125 focus:scale-110">
          <FaUserCircle color="#D9D9D9" size="22px" />
        </button>
      </div>
    </div>
  );
}

export default Topbar;
