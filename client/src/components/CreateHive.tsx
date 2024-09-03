"use client";

import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import FormErrorBox from "./FormErrorBox";

interface CreateHiveProps {
  setCreateHiveFormVisibility: (v: boolean) => void;
}

function CreateHive({ setCreateHiveFormVisibility }: CreateHiveProps) {
  const [displayName, setDisplayName] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [errorBox, setErrorBox] = useState<false | string>(false);

  return (
    <div className="absolute z-50 inset-0 min-w-screen min-h-screen backdrop-blur-lg bg-black bg-opacity-10 flex justify-center items-center">
      <form className="relative max-w-[450px] max-h-[550px] w-[450px] h-[550px] bg-ModalBackgroundColor rounded-2xl flex flex-col px-12 py-10">
        <IoMdClose
          onClick={() => setCreateHiveFormVisibility(false)}
          className="absolute top-4 right-4 cursor-pointer transition-all ease-out duration-100 hover:bg-white hover:bg-opacity-15 rounded-full p-1.5"
          size="28px"
          color="#FFFFFF"
        />
        <h3 className="text-white font-jetbrains-mono-regular text-center text-base">
          Create Hive
        </h3>
        {errorBox != false ? <FormErrorBox error={errorBox} /> : ""}
        <div className="mt-3 flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <label className="text-ModalSecondaryTextColor font-jetbrains-mono-regular text-sm ml-1">
              Display Name
            </label>
            <input
              className="w-full rounded-lg h-8 font-jetbrains-mono-regular px-4 py-2 outline-none text-xs sm:text-sm bg-ModalBackgroundColor text-ModalPrimaryTextColor ring-2 ring-ModalRingColor"
              id="displayname"
              type="text"
              placeholder="Enter the hive's display name"
              onChange={(e) => {
                setDisplayName(e.target.value);
              }}
              required
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-ModalSecondaryTextColor font-jetbrains-mono-regular text-sm ml-1">
              Name
            </label>
            <input
              className="w-full rounded-lg h-8 font-jetbrains-mono-regular px-4 py-2 outline-none text-xs sm:text-sm bg-ModalBackgroundColor text-ModalPrimaryTextColor ring-2 ring-ModalRingColor"
              id="name"
              type="text"
              placeholder="Enter the hive's name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-ModalSecondaryTextColor font-jetbrains-mono-regular text-sm ml-1">
              Description
            </label>
            <textarea
              className="w-full rounded-lg h-32 font-jetbrains-mono-regular px-4 py-2 outline-none text-xs sm:text-sm bg-ModalBackgroundColor text-ModalPrimaryTextColor ring-2 ring-ModalRingColor"
              id="description"
              placeholder="Enter the hive's description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              required
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-ModalSecondaryTextColor font-jetbrains-mono-regular text-sm ml-1">
              Tags <span className="text-xs">(Maximum 3 tags)</span>
            </label>
            <div className="flex flex-row gap-x-4 items-center w-full overflow-x-clip rounded-lg h-14 font-jetbrains-mono-regular px-4 py-2 outline-none text-xs sm:text-sm bg-ModalBackgroundColor text-ModalPrimaryTextColor ring-2 ring-ModalRingColor">
              {/* <div className="inline-flex items-center gap-x-2 w-max h-max pl-4 pr-2 py-1 rounded-lg font-jetbrains-mono-regular text-xs bg-ModalBackgroundColor text-ModalPrimaryTextColor ring-2 ring-ModalRingColor cursor-pointer">
                Tag 1
                <IoMdClose
                  className="cursor-pointer transition-all ease-out duration-100 hover:bg-white hover:bg-opacity-15 rounded-full p-1.5"
                  size="24px"
                  color="#FFFFFF"
                />
              </div> */}
              <div className="flex-shrink-0 w-max h-max px-4 py-1.5 rounded-lg font-jetbrains-mono-regular text-xs bg-ModalBackgroundColor text-ModalPrimaryTextColor ring-2 ring-ModalRingColor cursor-pointer">
                Tag 2
              </div>
              <div className="flex-shrink-0 w-max h-max px-4 py-1.5 rounded-lg font-jetbrains-mono-regular text-xs bg-ModalBackgroundColor text-ModalPrimaryTextColor ring-2 ring-ModalRingColor cursor-pointer">
                Tag 3
              </div>
              <div className="flex-shrink-0 w-max h-max px-4 py-1.5 rounded-lg font-jetbrains-mono-regular text-xs bg-ModalBackgroundColor text-ModalPrimaryTextColor ring-2 ring-ModalRingColor cursor-pointer">
                Tag 2
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateHive;
