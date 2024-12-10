import React from "react";
import { Award } from "lucide-react";

const GoalsCard = () => {
  return (
    <div className="card bg-base-100 text-primary-content text-center w-80 h-60">
      <div className="card-body ">
        <div className="justify-items-center">
          <Award />
        </div>
        <h2 className="card-title justify-center">Set and Achieve Goals</h2>
        <p>
          Set personalized fitness goals, and stay motivated as you crush them
          with tailored progress tracking.
        </p>
      </div>
    </div>
  );
};

export default GoalsCard;
