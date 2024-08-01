import Topsearchbar from "./Topsearchbar";

function Topbar() {
  return (
    <div className="flex fixed top-0 left-0 w-full h-[60px] px-16 py-3 z-10 bg-black">
      <Topsearchbar />
    </div>
  );
}

export default Topbar;
