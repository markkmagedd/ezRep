import React from "react";
import { BarChart3 } from "lucide-react";

const ProgressCard = () => {
  return (
    <div className="bg-zinc-800 rounded-md overflow-hidden border border-zinc-700 transition-all hover:border-blue-600">
      <div className="p-6 text-center">
        <div className="bg-blue-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-5">
          <BarChart3 className="w-8 h-8 text-blue-500" />
        </div>

        <h2 className="text-xl font-semibold text-white mb-3">
          Track Your Progress
        </h2>

        <div className="h-0.5 w-16 bg-blue-600 mx-auto mb-4"></div>

        <p className="text-gray-300">
          Easily log your workouts, monitor your sets, reps, and weights, and
          see how far you've come over time.
        </p>
      </div>
    </div>
  );
};

export default ProgressCard;
