function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-full bg-[#0c0c0c] w-60 z-30 pt-8 px-4">
      <div className="flex-col justify-center items-center">
        <h2 className="w-full text-center text-2xl font-jetbrains-mono-bold text-white">
          Hive Hole
        </h2>
        <p className="w-full text-center text-white text-opacity-70 font-jetbrains-mono-regular text-xs">
          Inspired By Reddit
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
