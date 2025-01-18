import Navbar from "../components/Navbar";
import CheckInCard from "../components/CheckInCard";
import ProgressCard from "@/components/ProgressCard";
import GoalsCard from "@/components/GoalsCard";
import RoutineCard from "@/components/RoutineCard";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <div className="flex flex-col justify-center items-center mt-20 gap-24">
          <div className="scale-75 md:scale-90 lg:scale-100">
            <h1 className="text-6xl font-extrabold text-white mb-5 whitespace-nowrap ">
              Make Every{" "}
              <a className="bg-secondary text-transparent bg-clip-text text-7xl ">
                Rep
              </a>{" "}
              Matter
            </h1>
            <div className="text-center max-w-xl">
              <p className="text-lg text-white mb-7 ">
                Unlock your potential with a dedicated platform to track and
                enhance your workout journey. Every rep counts towards your
                goals.
              </p>
              <Link
                href="/auth/login"
                className="btn btn-secondary text-xl text-white h-10 w-32 hover:scale-105 border-transparent shadow-2xl"
              >
                Hop on
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center ">
            <ProgressCard />
            <CheckInCard />
            <GoalsCard />
            <RoutineCard />
          </div>
        </div>

        {/* Grid layout for cards with reduced gap */}
      </main>
    </>
  );
}
