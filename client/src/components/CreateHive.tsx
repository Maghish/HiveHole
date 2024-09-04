"use client";

import { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import FormErrorBox from "./FormErrorBox";

interface CreateHiveProps {
  setCreateHiveFormVisibility: (v: boolean) => void;
}

function CreateHive({ setCreateHiveFormVisibility }: CreateHiveProps) {
  const tagsInputRef = useRef(null);

  const [displayName, setDisplayName] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState<string>("");

  const [errorBox, setErrorBox] = useState<false | string>(false);

  return (
    <div className="absolute z-50 inset-0 min-w-screen min-h-screen backdrop-blur-lg bg-black bg-opacity-20 flex justify-center items-center">
      <form className="relative max-w-[450px] max-h-[550px] w-[450px] h-[550px] bg-ModalBackgroundColor rounded-2xl shadow-FormModal2 flex flex-col px-12 py-10">
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
            <div className="relative flex flex-row gap-x-4 items-center w-full rounded-lg h-14 font-jetbrains-mono-regular px-4 py-2 outline-none text-xs sm:text-sm bg-ModalBackgroundColor text-ModalPrimaryTextColor ring-2 ring-ModalRingColor">
              {/* <div className="inline-flex items-center gap-x-2 w-max h-max pl-4 pr-2 py-1 rounded-lg font-jetbrains-mono-regular text-xs bg-ModalBackgroundColor text-ModalPrimaryTextColor ring-2 ring-ModalRingColor cursor-pointer">
                Tag 1
                <IoMdClose
                  className="cursor-pointer transition-all ease-out duration-100 hover:bg-white hover:bg-opacity-15 rounded-full p-1.5"
                  size="24px"
                  color="#FFFFFF"
                />
              </div> */}

              {tags.length > 0
                ? tags.map((value, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-max h-max px-4 py-1.5 rounded-lg font-jetbrains-mono-regular text-xs bg-ModalBackgroundColor text-ModalPrimaryTextColor ring-2 ring-ModalRingColor cursor-pointer"
                      onClick={() => {
                        setTags(tags.filter((tag, i) => i !== index));
                        // @ts-ignore
                        tagsInputRef.current.focus();
                      }}
                    >
                      {value}
                    </div>
                  ))
                : ""}
              {tags.length < 3 ? (
                <input
                  ref={tagsInputRef}
                  className="relative bg-transparent text-sm text-ModalPrimaryTextColor w-full outline-none"
                  onChange={(e) => {
                    let inputFieldContent = e.target.value;
                    if (inputFieldContent.length > 12) {
                      inputFieldContent = inputFieldContent.slice(0, 10);
                    }
                    setCurrentTag(inputFieldContent);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      let inputFieldContent: string =
                        // @ts-ignore
                        tagsInputRef.current.value;

                      if (inputFieldContent.length > 0) {
                        if (!tags.includes(inputFieldContent)) {
                          setTags([...tags, currentTag]);
                          // @ts-ignore
                          tagsInputRef.current.value = "";
                        }
                      }
                    }
                  }}
                  placeholder="Add tag"
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateHive;
