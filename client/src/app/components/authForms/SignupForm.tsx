function SignupForn() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <form className="max-w-[400px] w-[400px] max-h-[450px] h-[450px] bg-SecondaryBackgroundColor rounded-2xl shadow-FormModal flex flex-col px-12 py-10 gap-y-[20px]">
        <h3 className="text-white font-jetbrains-mono-regular text-center">
          Sign Up
        </h3>
        <input
          className="w-full rounded-lg h-8 font-jetbrains-mono-regular px-4 py-2 outline-none text-sm bg-[#2a2a2a] text-white ring-2 ring-[#555555]"
          id="username"
          placeholder="Enter your username"
        />
        <input
          className="w-full rounded-lg h-8 font-jetbrains-mono-regular px-4 py-2 outline-none text-sm bg-[#2a2a2a] text-white ring-2 ring-[#555555]"
          id="displayname"
          placeholder="Enter your display name"
        />
        <input
          className="w-full rounded-lg h-8 font-jetbrains-mono-regular px-4 py-2 outline-none text-sm bg-[#2a2a2a] text-white ring-2 ring-[#555555]"
          id="email"
          placeholder="Enter your email"
        />
        <input
          className="w-full rounded-lg h-8 font-jetbrains-mono-regular px-4 py-2 outline-none text-sm bg-[#2a2a2a] text-white ring-2 ring-[#555555]"
          id="password"
          type="password"
          placeholder="Enter your password"
        />
        <button className="mt-auto self-center w-28 h-10 rounded-lg px-5 py-2 font-jetbrains-mono-regular bg-[#2949fe] ring-4 ring-[#162feb] text-white">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupForn;
