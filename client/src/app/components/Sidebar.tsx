import { MdOutlineStackedLineChart, MdHome } from "react-icons/md";
import Separator from "./Separator";

function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-full bg-[#0c0c0c] w-64 z-30 pt-8 px-6 flex-col justify-center items-center">
      {/* <div className="flex-col justify-center items-center"> */}

      <h2 className="w-full text-center text-2xl font-jetbrains-mono-bold text-white">
        Hive Hole
      </h2>
      <p className="w-full text-center text-white text-opacity-70 font-jetbrains-mono-regular text-xs">
        Inspired By Reddit
      </p>

      <Separator />

      <div className="flex-col gap-y-6 w-full h-auto mt-4">
        <button className="cursor-pointer flex flex-row w-full px-6 py-2 rounded-full bg-transparent hover:bg-stone-800 transition-colors duration-75 ease-linear">
          <MdHome color="#FFFFFF" size="18px" className="self-center" />
          <p className="font-jetbrains-mono-regular text-base ml-2 text-white">
            Home
          </p>
        </button>
        <button className="cursor-pointer flex flex-row w-full px-6 py-2 rounded-full bg-transparent hover:bg-stone-800 transition-colors duration-75 ease-linear">
          <MdOutlineStackedLineChart
            color="#FFFFFF"
            size="18px"
            className="self-center"
          />
          <p className="font-jetbrains-mono-regular text-base ml-2 text-white">
            Popular
          </p>
        </button>
      </div>

      <Separator />

      <div className="flex-col mt-2">
        <h4 className="font-jetbrains-mono-bold text-lg text-white px-3">
          Hives
        </h4>
        {/* List of Hives will be displayed */}
      </div>

      {/* </div> */}
    </div>
  );
}

export default Sidebar;
