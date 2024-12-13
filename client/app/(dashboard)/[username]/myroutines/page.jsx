"use client";
import React from "react";
import RoutineCard from "@/components/MyRoutineCard"; // Import the new RoutineCard component

const RoutinePage = () => {
  const routines = [
    {
      _id: "1",
      name: "Full Body Workout",
      description: "A complete workout for full body strength and endurance.",
      days: [
        {
          dayName: "Day 1: Upper Body",
          exercises: [
            {
              name: "Push-up",
              description:
                "A classic bodyweight exercise for the chest, shoulders, and triceps.",
              sets: [
                { reps: 12, weight: "Bodyweight", weightUnit: "", rest: 60 },
                { reps: 10, weight: "Bodyweight", weightUnit: "", rest: 60 },
              ],
            },
            {
              name: "Pull-up",
              description: "An exercise for the back and biceps.",
              sets: [
                { reps: 8, weight: "Bodyweight", weightUnit: "", rest: 90 },
                { reps: 6, weight: "Bodyweight", weightUnit: "", rest: 90 },
              ],
            },
          ],
        },
        {
          dayName: "Day 2: Lower Body",
          exercises: [
            {
              name: "Squat",
              description:
                "A fundamental lower body exercise targeting the quadriceps, hamstrings, and glutes.",
              sets: [
                { reps: 10, weight: "60", weightUnit: "kg", rest: 90 },
                { reps: 8, weight: "60", weightUnit: "kg", rest: 90 },
              ],
            },
            {
              name: "Lunge",
              description:
                "A lower body exercise that works on the legs and glutes.",
              sets: [
                { reps: 12, weight: "40", weightUnit: "kg", rest: 90 },
                { reps: 10, weight: "40", weightUnit: "kg", rest: 90 },
              ],
            },
          ],
        },
      ],
    },
    // Other routines...
  ];

  return (
    <main className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-white">Your Workout Routines</h1>
        <button
          className="bg-secondary text-white font-extrabold py-2 px-4 rounded-lg hover:scale-110 transition"
          onClick={() => console.log("Redirect to Add Routine Page")}
        >
          Add New Routine
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {routines.map((routine) => (
          <RoutineCard key={routine._id} routine={routine} />
        ))}
      </div>
    </main>
  );
};

export default RoutinePage;
