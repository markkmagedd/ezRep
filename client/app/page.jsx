import Navbar from "../components/Navbar";
import CheckInCard from "../components/CheckInCard";
import ProgressCard from "@/components/ProgressCard";
import GoalsCard from "@/components/GoalsCard";
import RoutineCard from "@/components/RoutineCard";
import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-zinc-900">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-zinc-900 via-black to-zinc-900 py-20 md:py-32 border-b border-zinc-800">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 flex flex-col items-center">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Dumbbell className="w-12 h-12 text-blue-500 mr-3" />
                <h1 className="text-5xl md:text-6xl font-bold text-white">
                  ez<span className="text-blue-500">Rep</span>
                </h1>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Make Every <span className="text-blue-500">Rep</span> Matter
              </h2>

              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                Unlock your potential with a dedicated platform to track and
                enhance your workout journey. Every rep counts towards your
                fitness goals.
              </p>

              <Link
                href="/auth/login"
                className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-3 rounded-md inline-flex items-center text-lg transition-colors"
              >
                Start Training
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-12 text-center">
              Power Up Your Fitness Journey
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ProgressCard />
              <CheckInCard />
              <GoalsCard />
              <RoutineCard />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
