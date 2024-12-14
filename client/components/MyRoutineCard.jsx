// components/RoutineCard.js

import React, { useState } from "react";
import { Edit2, Star } from "lucide-react"; // Importing necessary icons

const RoutineCard = ({ routine, onSetCurrent }) => {
  const [isCurrent, setIsCurrent] = useState(routine.current);

  // Function to handle the edit button click
  const handleEditClick = (e) => {
    e.stopPropagation();
    console.log("Edit routine:", routine.name);
    // Implement edit functionality here, e.g., navigate to edit page
    // You can pass a callback prop or use routing to handle this
  };

  // Function to handle the star button click
  const handleStarClick = async (e) => {
    e.stopPropagation();
    if (isCurrent) return; // If already current, do nothing
  };

  return (
    <div
      className={`bg-primary p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer relative`}
      onClick={() => {
        // Optionally, handle card click to toggle details or navigate
      }}
    >
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-2xl font-semibold text-white bg-secondary rounded-lg px-3 py-1">
          {routine.name}
        </span>
        <div className="flex flex-col gap-2 text-center">
          <button
            className="bg-secondary text-white font-semibold py-1 px-3 rounded-lg hover:scale-125 transition-transform"
            onClick={handleEditClick}
            aria-label="Edit Routine"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          {!isCurrent && (
            <button
              className="bg-secondary text-white font-semibold py-1 px-3 rounded-lg hover:scale-125 transition-transform"
              onClick={handleEditClick}
              aria-label="Edit Routine"
            >
              <Star className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-white mb-4">
        {routine.description || "No description provided."}
      </p>

      {/* Star Button */}
    </div>
  );
};

export default RoutineCard;
