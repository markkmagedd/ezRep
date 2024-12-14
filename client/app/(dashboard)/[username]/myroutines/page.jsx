"use client";
import React from "react";
import RoutineCard from "@/components/MyRoutineCard"; // Import the new RoutineCard component
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const RoutinePage = () => {
  const [message, setMessage] = useState("");
  const [routines, setRoutines] = useState([]);
  const router = useRouter();
  const getRoutines = async (e) => {
    console.log("went into function");
    try {
      const res = await fetch("http://localhost:8080/get-routines", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      
      setMessage(data.error);
      if (data.success === true) {
        setRoutines(data.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getRoutines(); // Fetch the routines when the component is mounted
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
          <RoutineCard key={routine._id} routine={routine} />
        ))}
      </div>
    </main>
  );
};

export default RoutinePage;
