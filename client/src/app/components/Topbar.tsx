import Topsearchbar from "./Topsearchbar";
import { FaBell } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

function Topbar() {
  return (
    <div className="flex fixed top-0 left-0 w-full h-[60px] px-10 py-3 z-10 bg-black">
      <Topsearchbar />
      <div className="flex w-auto h-full justify-stretch gap-x-5">
        <button className="self-center flex items-center cursor-pointer focus:animate-pulse">
          <FaBell color="#D9D9D9" size="22px" />
        </button>
        <button className="self-center flex items-center cursor-pointer focus:animate-pulse">
          <FaStar color="#D9D9D9" size="22px" />
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
