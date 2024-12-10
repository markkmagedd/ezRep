import React from "react";
import { CalendarCheck } from "lucide-react";
const CheckInCard = () => {
  return (
    <div className="card bg-base-100 text-primary-content text-center w-80 h-65 shadow-2xl hover:scale-105">
      <div className="card-body text-white">
        <div className="justify-items-center">
          <CalendarCheck />
        </div>
        <h2 className="card-title justify-center">Daily Check-in</h2>
        <div className="divider mt-0.5 divider-white"></div>
        <p className="mt-0.5">
          Stay on top of your fitness journey by checking in each day and
          tracking your consistency and performance.
        </p>
      </div>
    </div>
  );
};

export default CheckInCard;
