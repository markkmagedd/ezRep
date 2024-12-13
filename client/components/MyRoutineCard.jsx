import React, { useState } from "react";

const RoutineCard = ({ routine }) => {
  const [isOpen, setIsOpen] = useState(false); // Track open/close state for the routine

  // Function to toggle open/close state for the routine
  const toggleOpenState = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Function to handle the edit button click
  const handleEditClick = (e) => {
    e.stopPropagation();
    console.log("Edit routine");
  };

  return (
    <div
      className="bg-primary p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border-l-4 border-primary cursor-pointer"
      onClick={toggleOpenState} // Click on the whole card to toggle open/close
    >
      <div className="flex justify-between items-center mb-4">
        <span className="text-2xl font-semibold text-white bg-secondary rounded-lg px-3 py-1">
          {routine.name}
        </span>
        <button
          className="bg-secondary text-white font-semibold py-1 px-3 rounded-lg hover:scale-125"
          onClick={handleEditClick} // Handle the edit button click
        >
          Edit
        </button>
      </div>
      <p className="text-white mb-4">{routine.description}</p>

      {/* Collapsible Days Section */}
      {routine.days.map((day, index) => (
        <div key={index} className="mb-4">
          <span className="text-lg font-medium text-white rounded-lg bg-secondary">
            {day.dayName}
          </span>
          {isOpen && (
            <div className="mt-2 bg">
              {day.exercises.map((exercise, idx) => (
                <div key={idx} className="border-l-4 border-white pl-4 py-2">
                  <li key={idx}>
                    <span className="text-md font-semibold text-white bg-secondary">
                      {exercise.name}
                    </span>
                  </li>

                  <ul className="list-disc pl-6 mt-2">
                    {exercise.sets.map((set, setIndex) => (
                      <li key={setIndex}>
                        <span className="text-sm text-white ">
                          {set.reps} reps - {set.weight || "Bodyweight"}{" "}
                          {set.weightUnit && `(${set.weightUnit})`}
                          <br />
                          Rest: {set.rest} seconds
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RoutineCard;
