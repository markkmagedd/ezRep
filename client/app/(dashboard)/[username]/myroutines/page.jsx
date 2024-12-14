"use client";
import React, { useState, useEffect } from "react";
import MyRoutineCard from "@/components/MyRoutineCard"; // Corrected import
import { useRouter } from "next/navigation";

const RoutinePage = () => {
  const [routines, setRoutines] = useState([]);
  const router = useRouter();

  const getRoutines = async () => {
    try {
      const res = await fetch(
        "http://localhost:8080/my-routines/get-routines",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const data = await res.json();
      if (data.success) {
        setRoutines(data.data); // Set the routines
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRoutines(); // Fetch routines on page load
  }, []);

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
          <MyRoutineCard key={routine._id} routine={routine} />
        ))}
      </div>
    </main>
  );
};

export default RoutinePage;
