import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import LoginFunc from "../LoginFunc";
import SetCookie from "@/app/util/SetCookie";
import FormErrorBox from "../FormErrorBox";

interface LoginFormProps {
  setLoginFormVisibility: (v: boolean) => void;
  setSignupFormVisibility: (v: boolean) => void;
}

function LoginForm({
  setLoginFormVisibility,
  setSignupFormVisibility,
}: LoginFormProps) {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorBox, setErrorBox] = useState<false | string>("");

  async function errorChecks() {
    if (username == "" || email == "" || password == "") {
      setErrorBox("Please fill up all fields");
      return false;
    }

    if (username.length < 6) {
      setErrorBox("Username must be at least 6 characters long");
      return false;
    }

    if (email.length < 5) {
      setErrorBox("Email must be at least 5 characters long");
      return false;
    }

    return true;
  }

  async function LoginUser() {
    if (!(await errorChecks())) {
      return;
    }

    const response = await LoginFunc({ username, email, password });

    // If response has properties like token, it means that it is not undefined and it's well-fetched
    if (response.token) {
      SetCookie("token", response.token);

      setLoginFormVisibility(false);
      window.location.reload();

      return;
    } else {
      setErrorBox(response.message);
      return;
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <form className="relative max-w-[400px] w-[400px] max-h-[560px] h-[560px] bg-SecondaryBackgroundColor rounded-2xl shadow-FormModal flex flex-col px-12 py-10">
        <IoMdClose
          className="absolute top-4 right-4 cursor-pointer transition-all ease-out duration-100 hover:bg-white hover:bg-opacity-15 rounded-full p-1.5"
          onClick={() => {
            setLoginFormVisibility(false);
          }}
          size="28px"
          color="#FFFFFF"
        />
        <h3 className="text-white font-jetbrains-mono-regular text-center text-lg">
          Login
        </h3>
        {errorBox != false ? <FormErrorBox error={errorBox} /> : ""}
        <div className=" mt-3 flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <label className="text-ModalSecondaryTextColor font-jetbrains-mono-regular text-sm ml-1">
              Username
            </label>
            <input
              className="w-full rounded-lg h-8 font-jetbrains-mono-regular px-4 py-2 outline-none text-sm bg-ModalBackgroundColor text-ModalPrimaryTextColor ring-2 ring-ModalRingColor"
              id="username"
              type="text"
              placeholder="Enter your username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-ModalSecondaryTextColor font-jetbrains-mono-regular text-sm ml-1">
              Email
            </label>
            <input
              className="w-full rounded-lg h-8 font-jetbrains-mono-regular px-4 py-2 outline-none text-sm bg-ModalBackgroundColor text-ModalPrimaryTextColor ring-2 ring-ModalRingColor"
              id="email"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-ModalSecondaryTextColor font-jetbrains-mono-regular text-sm ml-1">
              Password
            </label>
            <input
              className="w-full rounded-lg h-8 font-jetbrains-mono-regular px-4 py-2 outline-none text-sm bg-ModalBackgroundColor text-ModalPrimaryTextColor ring-2 ring-ModalRingColor"
              id="password"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <button
          type="button"
          className="mt-auto self-center w-28 h-10 rounded-lg px-5 py-2 font-jetbrains-mono-regular text-sm bg-[#334155] bg-opacity-20 ring-2 ring-blue-500 text-ModalPrimaryTextColor transition-all ease-linear duration-100 hover:bg-opacity-60 hover:ring-opacity-80"
          onClick={() => LoginUser()}
        >
          Login
        </button>

        <p className="text-ModalSecondaryTextColor font-jetbrains-mono-regular text-sm mt-5 text-center">
          Don't have an account?
          <span
            className="text-blue-500 font-jetbrains-mono-regular underline ml-1 cursor-pointer transition-all ease-linear hover:brightness-125"
            onClick={() => {
              setLoginFormVisibility(false);
              setSignupFormVisibility(true);
            }}
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
