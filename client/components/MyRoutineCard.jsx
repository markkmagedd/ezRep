import React, { useEffect, useState } from "react";
import { Edit2, Star } from "lucide-react"; // Importing necessary icons
import Link from "next/link";
import { useParams } from "next/navigation";
const RoutineCard = ({ routine }, isCurrent, setCurrent) => {
  const { username } = useParams();
  const [loading, setLoading] = useState(false);

  // Function to handle the star button click
  const handleStarClick = async (e) => {
    e.stopPropagation();

    try {
      await setCurrent;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="bg-primary p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer relative"
      onClick={() => {}}
    >
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-2xl font-semibold text-white bg-secondary rounded-lg px-3 py-1">
          {routine.name}
        </span>
        <div className="flex flex-col gap-2 text-center">
          <Link
            className="bg-secondary text-white font-semibold py-1 px-3 rounded-lg hover:scale-125 transition-transform"
            href={`./myroutines/edit-routine/${routine._id}`}
            aria-label="Edit Routine"
          >
            <Edit2 className="w-4 h-4" />
          </Link>
          <button
            className={`bg-secondary text-white font-semibold py-1 px-3 rounded-lg transition-transform ${
              loading ? "opacity-50" : "hover:scale-125"
            }`}
            onClick={handleStarClick}
            aria-label={
              isCurrent ? "Routine is current" : "Set as current routine"
            }
          >
            <Star className={`w-4 h-4 ${isCurrent ? "text-yellow-400" : ""}`} />
          </button>
        </div>
      </div>

      {/* Description */}
      <p className="text-white mb-4">
        {routine.description || "No description provided."}
      </p>
    </div>
  );
};

export default RoutineCard;
