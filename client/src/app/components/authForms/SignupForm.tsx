function SignupForn() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <form className="max-w-[400px] w-[400px] max-h-[500px] h-[500px] bg-SecondaryBackgroundColor rounded-2xl shadow-FormModal flex flex-col px-12 py-10">
        <h3 className="text-white font-jetbrains-mono-regular text-center text-lg">
          Sign Up
        </h3>
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
              required
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <label className="text-ModalSecondaryTextColor font-jetbrains-mono-regular text-sm ml-1">
              Display Name
            </label>
            <input
              className="w-full rounded-lg h-8 font-jetbrains-mono-regular px-4 py-2 outline-none text-sm bg-ModalBackgroundColor text-ModalPrimaryTextColor ring-2 ring-ModalRingColor"
              id="displayname"
              type="text"
              placeholder="Enter your display name"
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
              required
            />
          </div>
        </div>

        <button className="mt-auto self-center w-28 h-10 rounded-lg px-5 py-2 font-jetbrains-mono-regular bg-blue-600 ring-4 ring-blue-700 text-ModalPrimaryTextColor transition-all ease-linear duration-100 hover:bg-opacity-20 hover:ring-opacity-80">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupForn;
