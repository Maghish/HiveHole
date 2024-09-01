function WelcomeHome() {
  return (
    <div className="w-auto h-full bg-inherit flex flex-col px-8 py-6">
      <h1 className="text-center text-3xl text-white font-jetbrains-mono-bold">
        Welcome to HiveHole!
      </h1>
      <div className="px-[200px]">
        <p className="mt-6 text-center text-sm text-white font-jetbrains-mono-regular">
          This is the initial message you will get when you first enter
          HiveHole! This won't show again!
        </p>
        <p className="mt-6 text-center text-sm text-white font-jetbrains-mono-regular">
          HiveHole a platform inspired by Reddit and this website is created by{" "}
          <a
            href="https://github.com/Maghish"
            className="text-blue-500 cursor-pointer hover:underline hover:text-blue-400"
          >
            Maghish
          </a>
          . You can pretty much create, join hives, view posts inside them and
          even comment on those posts, etc. View the website's repository{" "}
          <a
            href="https://github.com/Maghish/HiveHole"
            className="text-blue-500 cursor-pointer hover:underline hover:text-blue-400"
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default WelcomeHome;
