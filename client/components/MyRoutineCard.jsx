import React, { useState } from "react";
import { Calendar, Star, BarChart2, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const RoutineCard = ({ routine, check }) => {
  const { username } = useParams();
  const [loading, setLoading] = useState(false);
  const [isCurrent, setIsCurrent] = useState(routine.current);

  const handleStarClick = async (e) => {
    e.stopPropagation();
    setLoading(true);

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
    } finally {
      setLoading(false);
    }
  };

  // Generate a visual calendar representation
  const generateCalendarVisual = () => {
    // Create a 7-day week representation
    const totalDays = 7;
    const activeDays = Math.min(routine.days.length, 7);

    return (
      <div className="flex gap-1 justify-center mt-3">
        {Array.from({ length: totalDays }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 w-4 rounded-full ${
              i < activeDays ? "bg-blue-600" : "bg-zinc-700"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <Link href={`./myroutines/edit-routine/${routine._id}`} className="block">
      <div
        className={`relative rounded-xl overflow-hidden h-full transition-all duration-300 
          ${
            isCurrent
              ? "bg-gradient-to-br from-zinc-900 to-gray-900 border-2 border-blue-600"
              : "bg-zinc-800 border border-zinc-700 hover:border-zinc-600"
          }`}
      >
        {/* Header with workout pattern visual */}
        <div className="p-5 pb-3">
          <div className="flex justify-between items-start mb-1">
            <h2 className="text-xl font-bold text-white">{routine.name}</h2>
            {isCurrent && (
              <div className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-md flex items-center">
                <Star className="w-3 h-3 mr-1 fill-white" />
                Active
              </div>
            )}
          </div>

          {/* Calendar frequency visualization */}
          {generateCalendarVisual()}

          {/* Workout stats */}
          <div className="flex items-center justify-between mt-6 text-sm">
            <div className="flex items-center text-gray-300">
              <Calendar className="w-4 h-4 mr-1.5 text-blue-500" />
              <span>{routine.days.length} sessions</span>
            </div>

            <div className="flex items-center text-gray-300">
              <BarChart2 className="w-4 h-4 mr-1.5 text-blue-500" />
              <span>Progress tracker</span>
            </div>
          </div>
        </div>

        {/* Bottom action bar */}
        <div
          className={`px-5 py-3 mt-2 flex justify-between items-center ${
            isCurrent ? "bg-zinc-900" : "bg-zinc-900/60"
          }`}
        >
          {isCurrent ? (
            <div className="flex items-center text-blue-500 text-sm font-semibold">
              <Clock className="w-4 h-4 mr-1.5" />
              <span>Current Routine</span>
            </div>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                handleStarClick(e);
              }}
              disabled={loading}
              className="text-sm font-medium text-white hover:text-blue-400 transition-colors disabled:opacity-50 flex items-center"
            >
              <Star className="w-4 h-4 mr-1.5" />
              Set as Current
            </button>
          )}

          <div className="text-white text-sm flex items-center">
            View Details <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RoutineCard;
