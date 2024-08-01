import { FaMagnifyingGlass } from "react-icons/fa6";

function Topsearchbar() {
  return (
    <div className="flex bg-[#1a1a1a] m-auto w-[400px] h-full mx-auto rounded-lg">
      <div className="bg-inherit w-16 h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center cursor-pointer">
        <FaMagnifyingGlass color="#FFFFFF" />
      </div>
      <input
        type="text"
        placeholder="Search anything"
        className="w-full h-full bg-inherit text-white rounded-tr-lg rounded-br-lg outline-none pr-3 text-sm placeholder:text-[#cccccc]"
      />
    </div>
  );
}

export default Topsearchbar;
