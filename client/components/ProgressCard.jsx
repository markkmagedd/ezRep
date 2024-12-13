import React from "react";
import { ChartNoAxesCombined } from "lucide-react";
const ProgressCard = () => {
  return (
    <div className="card bg-base-100 text-primary-content text-center w-80 h-65 shadow-2xl hover:scale-105">
      <div className="card-body text-white">
        <div className="justify-items-center">
          <ChartNoAxesCombined />
        </div>
        <h2 className="card-title justify-center">Track Your Progress</h2>
        <div className="divider mt-0.5 divider-white"></div>
        <p className="mt-0.5">
          Easily log your workouts&lsquo; monitor your sets&lsquo; reps&lsquo; and weights&lsquo; and
          see how far youve come over time.
        </p>
      </div>
    </div>
  );
};

export default ProgressCard;
