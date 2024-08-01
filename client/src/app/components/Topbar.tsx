import Topsearchbar from "./Topsearchbar";

import { FaUserCircle } from "react-icons/fa";

import Bell from "@/app/assets/Bell.svg";
import OutlineBell from "@/app/assets/OutlineBell.svg";
import Star from "@/app/assets/Star.svg";
import OutlineStar from "@/app/assets/OutlineStar.svg";

import Image from "next/image";
import { useState } from "react";

function Topbar() {
  const [bellFocused, setBellFocused] = useState(false);
  const [favoriteFocused, setFavoriteFocused] = useState(false);

  return (
    <div className="flex fixed top-0 left-0 w-full h-[60px] px-10 py-3 z-10 bg-black">
      <Topsearchbar />
      <div className="flex w-auto h-full justify-stretch gap-x-5">
        <button
          className="cursor-pointer self-center"
          onFocus={() => setBellFocused(true)}
          onBlur={() => setBellFocused(false)}
        >
          <Image alt="notification" src={bellFocused ? OutlineBell : Bell} />
        </button>

        <button
          className="cursor-pointer self-center"
          onFocus={() => setFavoriteFocused(true)}
          onBlur={() => setFavoriteFocused(false)}
        >
          <Image alt="favorite" src={favoriteFocused ? OutlineStar : Star} />
        </button>

        <button className="self-center flex items-center rounded-full bg-gradient-to-r from-green-700 to-green-500 p-[3px] cursor-pointer focus:from-yellow-600 focus:to-yellow-300">
          <div className="w-full h-full bg-black rounded-full">
            <FaUserCircle color="#D9D9D9" size="22px" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Topbar;
