import React, { useEffect, useState } from "react";
import { Edit2, Star } from "lucide-react"; // Importing necessary icons
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
const RoutineCard = ({ routine, check }) => {
  const { username } = useParams();
  const [loading, setLoading] = useState(false);
  const [isCurrent, setIsCurrent] = useState(routine.current);
  const router = useRouter();
  // Function to handle the star button click
  const handleStarClick = async (e) => {
    e.stopPropagation();

    try {
      const res = await fetch(
        "http://localhost:8080/my-routines/set-current-routine",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ routineId: routine._id }),
        }
      );
      const data = await res.json();
      if (data.success === true) {
        setIsCurrent(true);
        check();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleRoutineView = () => {
    router.push(`./myroutines/edit-routine/${routine._id}`);
  };

  return (
    <div
      className="bg-primary p-6 rounded-xl shadow-lg hover:shadow-2xl border-4 border-primary hover:border-secondary transition-transform transform hover:scale-105 cursor-pointer relative"
      onClick={handleRoutineView}
    >
      {/* Header Section */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl flex font-semibold text-white bg-secondary rounded-lg px-3 py-1 ">
          {routine.name}
        </h1>

        <div className="flex flex-col gap-2 text-center">
          <Link
            className="bg-secondary text-white font-semibold py-1 px-3 rounded-lg hover:scale-125 transition-transform"
            href={`./myroutines/edit-routine/${routine._id}`}
            aria-label="Edit Routine"
          >
            <Edit2 className="w-4 h-4" />
          </Link>
          {!isCurrent && (
            <button
              className={`bg-secondary text-white font-semibold py-1 px-3 rounded-lg transition-transform ${
                loading ? "opacity-50" : "hover:scale-125"
              }`}
              onClick={handleStarClick}
              aria-label={
                isCurrent ? "Routine is current" : "Set as current routine"
              }
            >
              <Star className={`w-4 h-4 }`} />
            </button>
          )}
        </div>
      </div>

      <div className="text-white font-bold mb-4 mt-4 ">
        Routine Days :&nbsp;&nbsp;
        <span className="text-2xl text-white bg-base-100 rounded-lg px-3 py-1">
          {routine.days.length}
        </span>
      </div>

      {isCurrent && (
        <div className="badge px-3 py-4 mt-4 font-bold absolute bottom-2 right-2">
          Current Routine&nbsp;
          <Star className="text-yellow-400  fill-yellow-400 w-4 h-4" />
        </div>
      )}
    </div>
  );
};

export default RoutineCard;
