import React from "react";
import { Dumbbell } from "lucide-react";

const RoutineCard = () => {
  return (
    <div className="card bg-base-100 text-primary-content text-center w-80 h-65 shadow-2xl hover:scale-105">
      <div className="card-body text-white">
        <div className="justify-items-center">
          <Dumbbell />
        </div>
        <h2 className="card-title justify-center">Customizable Routines</h2>
        <div className="divider mt-0.5 divider-white"></div>
        <p className="mt-0.5">
          Easily create and customize your own workout routines, designed to
          help you stay consistent and achieve your fitness goals.
        </p>
      </div>
    </div>
  );
};

export default RoutineCard;
