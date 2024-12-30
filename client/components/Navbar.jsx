import { Dumbbell } from "lucide-react";
const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 flex sticky shadow-2xl justify-center h-24 ">
        <div className="navbar-start"></div>
        <span className=" text-5xl py-1 px-3 rounded-lg h-18 hover:bg-base-200 navbar-center cursor-pointer">
          ezRep
          <Dumbbell className="text-white fill-secondary" />
        </span>
        <div className="navbar-end"></div>
      </div>
    </>
  );
};
export default Navbar;
