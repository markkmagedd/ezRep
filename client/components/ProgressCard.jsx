import React from "react";
import { ChartNoAxesCombined } from "lucide-react";
const ProgressCard = () => {
  return (
    <div className="card bg-base-100 text-primary-content text-center w-80 h-60">
      <div className="card-body ">
        <div className="justify-items-center">
          <ChartNoAxesCombined />
        </div>
        <h2 className="card-title justify-center">Track Your Progress</h2>
        <p>
          Easily log your workouts, monitor your sets, reps, and weights, and
          see how far you've come over time.
        </p>
      </div>
    </div>
  );
};

export default ProgressCard;
