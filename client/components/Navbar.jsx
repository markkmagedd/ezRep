import { Dumbbell } from "lucide-react";
const Navbar = () => {
  return (
    <>
      <div className="navbar bg-zinc-900 border-b border-zinc-800 flex sticky shadow-md justify-center h-20">
        <div className="navbar-start"></div>
        <div className="navbar-center flex items-center cursor-pointer">
          <span className="text-4xl font-bold text-white">
            ez<span className="text-blue-500">Rep</span>
          </span>
          <Dumbbell className="text-white fill-blue-600 ml-2 h-8 w-8" />
        </div>
        <div className="navbar-end"></div>
      </div>
    </>
  );
};
export default Navbar;
