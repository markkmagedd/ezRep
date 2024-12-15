import React from "react";
import { Award } from "lucide-react";

const GoalsCard = () => {
  return (
    <div className="card bg-base-100 text-primary-content text-center w-80 h-65 shadow-2xl hover:scale-105">
      <div className="card-body text-white">
        <div className="justify-items-center text-secondary">
          <Award />
        </div>
        <h2 className="card-title justify-center">Set and Achieve Goals</h2>
        <div className="divider mt-0.5 divider-white"></div>
        <p className="mt-0.5">
          Set personalized fitness goals, and stay motivated as you crush them
          with tailored progress tracking.
        </p>
      </div>
    </div>
  );
};

export default GoalsCard;
