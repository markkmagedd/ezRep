"use client";
import React, { useState, useEffect } from "react";
import MyRoutineCard from "@/components/MyRoutineCard";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  PlusCircle,
  Calendar,
  BarChart3,
  Loader2,
  Search,
  Dumbbell,
  Clock,
  Settings,
  AlertCircle,
} from "lucide-react";

const RoutinePage = () => {
  const [routines, setRoutines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("all"); // all, current, recent, archived
  const [searchQuery, setSearchQuery] = useState("");
  const [workoutStats, setWorkoutStats] = useState({
    totalWorkouts: 0,
    completedThisWeek: 0,
    currentStreak: 0,
  });

  // Get all routines from API
  const getRoutines = async () => {
    setLoading(true);
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
        const sortedRoutines = data.data.sort((a, b) => {
          if (a.current && !b.current) return -1;
          if (!a.current && b.current) return 1;
          return 0;
        });
        setRoutines(sortedRoutines);

        // Calculate some basic stats (simulated)
        const currentRoutine = sortedRoutines.find((r) => r.current);
        setWorkoutStats({
          totalWorkouts: sortedRoutines.reduce(
            (sum, r) => sum + r.days.length,
            0
          ),
          completedThisWeek: Math.floor(Math.random() * 5), // Simulated data
          currentStreak: currentRoutine ? Math.floor(Math.random() * 10) : 0, // Simulated data
        });
      }
    } catch (error) {
      console.error("Failed to fetch routines:", error);
    } finally {
      setLoading(false);
    }
  };

  // Filter routines based on active tab and search
  const getFilteredRoutines = () => {
    if (!routines.length) return [];

    let filtered = [...routines];

    // Apply tab filter
    if (activeTab === "current") {
      filtered = filtered.filter((r) => r.current);
    } else if (activeTab === "recent") {
      // Simulating recent routines - in real app would use lastUsed timestamp
      filtered = filtered.slice(0, Math.min(3, filtered.length));
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((r) => r.name.toLowerCase().includes(query));
    }

    return filtered;
  };

  useEffect(() => {
    getRoutines();
  }, []);

  const filteredRoutines = getFilteredRoutines();
  const currentRoutine = routines.find((r) => r.current);

  return (
    <div className="min-h-screen bg-zinc-900 pb-24">
      <div className="bg-gradient-to-r from-zinc-900 via-black to-zinc-900 py-4 border-b border-zinc-800">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Dumbbell className="text-blue-500 mr-3 h-7 w-7" />
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Workout Tracker
              </h1>
            </div>
            <Link
              href="./add-routine"
              className="bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-md px-4 py-2 flex items-center"
            >
              <PlusCircle className="w-4 h-4 mr-2" />
              New Routine
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-16">
        {/* Current streak and workout overview */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">
            Performance Dashboard
          </h2>

          {/* Stats cards row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Current routine card */}
            <div className="bg-zinc-800 rounded-md p-4 flex flex-col border border-zinc-700">
              <span className="text-gray-400 text-sm mb-1 flex items-center">
                <Clock className="w-4 h-4 mr-1" /> Current Routine
              </span>
              <span className="text-white font-semibold text-lg truncate">
                {currentRoutine ? currentRoutine.name : "None set"}
              </span>
            </div>

            {/* Streak card */}
            <div className="bg-zinc-800 rounded-md p-4 flex flex-col border border-zinc-700">
              <span className="text-gray-400 text-sm mb-1 flex items-center">
                <Calendar className="w-4 h-4 mr-1" /> Current Streak
              </span>
              <span className="text-blue-500 font-bold text-lg">
                {workoutStats.currentStreak} days
              </span>
            </div>

            {/* This week card */}
            <div className="bg-zinc-800 rounded-md p-4 flex flex-col border border-zinc-700">
              <span className="text-gray-400 text-sm mb-1 flex items-center">
                <Dumbbell className="w-4 h-4 mr-1" /> This Week
              </span>
              <span className="text-white font-semibold text-lg">
                {workoutStats.completedThisWeek} workouts
              </span>
            </div>

            {/* Total workouts card */}
            <div className="bg-zinc-800 rounded-md p-4 flex flex-col border border-zinc-700">
              <span className="text-gray-400 text-sm mb-1 flex items-center">
                <BarChart3 className="w-4 h-4 mr-1" /> Total Workouts
              </span>
              <span className="text-white font-semibold text-lg">
                {workoutStats.totalWorkouts} exercises
              </span>
            </div>
          </div>
        </div>

        {/* Routine management section */}
        <div className="flex flex-wrap items-center justify-between mb-5 gap-y-4">
          <div className="flex items-center">
            <h2 className="text-xl font-bold text-white">My Routines</h2>
            <div className="ml-6 flex space-x-1 p-1 bg-zinc-800 rounded-md">
              <button
                className={`px-3 py-1.5 text-sm font-medium rounded ${
                  activeTab === "all"
                    ? "bg-zinc-700 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab("all")}
              >
                All
              </button>
              <button
                className={`px-3 py-1.5 text-sm font-medium rounded ${
                  activeTab === "current"
                    ? "bg-zinc-700 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab("current")}
              >
                Current
              </button>
              <button
                className={`px-3 py-1.5 text-sm font-medium rounded ${
                  activeTab === "recent"
                    ? "bg-zinc-700 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab("recent")}
              >
                Recent
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search routines"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 bg-zinc-800 border border-zinc-700 text-white rounded-md text-sm w-full max-w-[200px] focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Routines grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="w-8 h-8 text-blue-500 animate-spin mb-4" />
            <p className="text-gray-400">Loading your routines...</p>
          </div>
        ) : filteredRoutines.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredRoutines.map((routine) => (
              <MyRoutineCard
                key={routine._id}
                routine={routine}
                check={getRoutines}
              />
            ))}
          </div>
        ) : routines.length > 0 ? (
          <div className="bg-zinc-800 rounded-md p-8 text-center border border-zinc-700">
            <Search className="w-12 h-12 text-gray-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">
              No matching routines
            </h3>
            <p className="text-gray-400 mb-4">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveTab("all");
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-500 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="bg-zinc-800 rounded-md py-16 px-4 text-center border border-zinc-700">
            <div className="bg-blue-900/20 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <AlertCircle className="w-10 h-10 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              No routines yet
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Start building your workout regimen by creating your first routine
            </p>
            <Link
              href="./add-routine"
              className="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-md"
            >
              <PlusCircle className="w-5 h-5 mr-2" />
              Create Your First Routine
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoutinePage;
