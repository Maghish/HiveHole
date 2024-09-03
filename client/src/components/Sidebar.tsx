import { MdOutlineStackedLineChart, MdHome } from "react-icons/md";
import Separator from "@/components/Separator";
import { useEffect, useState } from "react";
import HivesListFunc from "@/components/serverComponents/HivesListFunc";
import GetCookie from "@/util/GetCookie";

interface SidebarProps {
  setCreateHiveFormVisibility: (v: boolean) => void;
}

function Sidebar({ setCreateHiveFormVisibility }: SidebarProps) {
  const [hives, setHives] = useState<any[]>([]);

  useEffect(() => {
    async function getHives() {
      const token = GetCookie("token");
      const response = await HivesListFunc({ token: token! });

      if (response.hives) {
        setHives(response.hives);
      }
    }

    getHives();
  }, []);

  return (
    <div className="fixed top-0 left-0 h-full bg-[#0c0c0c] w-64 z-30 pt-8 px-6 flex-col justify-center items-center">
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
        <div className="mt-5 flex flex-col gap-y-3 pl-3">
          {hives.length > 0 ? (
            hives.map((value: any, index: number) => {
              return (
                <div
                  className="inline-flex gap-x-3 items-center cursor-pointer"
                  key={index}
                >
                  <div className="rounded-full bg-stone-100 w-[24px] h-[24px]"></div>
                  <p
                    className="font-jetbrains-mono-regular text-sm text-white"
                    key={index}
                  >
                    {value.displayName}
                  </p>
                </div>
              );
            })
          ) : (
            <p className="font-jetbrains-mono-regular text-sm text-stone-400">
              You are not in any hives
            </p>
          )}
        </div>

        <button
          onClick={() => setCreateHiveFormVisibility(true)}
          className="mt-4 ml-3 w-full h-10 rounded-lg px-5 py-2 font-jetbrains-mono-regular text-sm bg-[#334155] bg-opacity-20 ring-2 ring-blue-500 text-ModalPrimaryTextColor transition-all ease-linear duration-100 hover:bg-opacity-60 hover:ring-opacity-80"
        >
          Create Hive
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
