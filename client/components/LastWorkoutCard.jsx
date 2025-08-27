import React from "react";
import { useParams } from "next/navigation";
import { Dumbbell } from "lucide-react";

const LastWorkoutCard = () => {
  const { username } = useParams();

  return (
    <div className="bg-gradient-to-r from-zinc-900 via-black to-zinc-900 rounded-md p-6 border border-zinc-800">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-3">
            Welcome back, <span className="text-blue-500">{username}</span>
          </h1>
          <p className="text-gray-400 mb-6 md:mb-0">
            Ready to crush today's workout goals? 💪
          </p>
        </div>

        <div className="flex items-center bg-zinc-800 px-4 py-3 rounded-md border border-zinc-700">
          <Dumbbell className="text-blue-500 w-5 h-5 mr-3" />
          <div>
            <div className="text-sm text-gray-400">Current Routine</div>
            <div className="text-white font-semibold">Push Pull Legs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastWorkoutCard;
