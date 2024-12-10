import React from "react";
import { Dumbbell } from "lucide-react";

const RoutineCard = () => {
  return (
    <div className="card bg-base-100 text-primary-content text-center w-80 h-60">
      <div className="card-body ">
        <div className="justify-items-center">
          <Dumbbell />
        </div>
        <h2 className="card-title justify-center">Customizable Routines</h2>
        <p>
          Easily create and customize your own workout routines, designed to
          help you stay consistent and achieve your fitness goals.
        </p>
      </div>
    </div>
  );
};

export default RoutineCard;
