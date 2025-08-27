"use client";
import LastWorkoutCard from "@/components/LastWorkoutCard";
import React, { useState } from "react";
import {
  Dumbbell,
  Calendar,
  ChevronRight,
  BarChart3,
  Clock,
  Activity,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  // Simulated data
  const workoutStatistics = {
    currentStreak: 3,
    totalWorkouts: 24,
    completedThisWeek: 2,
    nextWorkoutDay: "Push Day",
  };

  return (
    <main className="min-h-screen bg-zinc-900 pb-24 pt-4">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        {/* Welcome section */}
        <div className="mb-8">
          <LastWorkoutCard />
        </div>

        {/* Statistics cards */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-white mb-4">
            Workout Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Current streak card */}
            <div className="bg-zinc-800 rounded-md p-4 flex flex-col border border-zinc-700">
              <span className="text-gray-400 text-sm mb-1 flex items-center">
                <Calendar className="w-4 h-4 mr-1" /> Current Streak
              </span>
              <span className="text-blue-500 font-bold text-lg">
                {workoutStatistics.currentStreak} days
              </span>
            </div>

            {/* Next workout card */}
            <div className="bg-zinc-800 rounded-md p-4 flex flex-col border border-zinc-700">
              <span className="text-gray-400 text-sm mb-1 flex items-center">
                <Clock className="w-4 h-4 mr-1" /> Next Workout
              </span>
              <span className="text-white font-semibold text-lg">
                {workoutStatistics.nextWorkoutDay}
              </span>
            </div>

            {/* This week card */}
            <div className="bg-zinc-800 rounded-md p-4 flex flex-col border border-zinc-700">
              <span className="text-gray-400 text-sm mb-1 flex items-center">
                <Dumbbell className="w-4 h-4 mr-1" /> This Week
              </span>
              <span className="text-white font-semibold text-lg">
                {workoutStatistics.completedThisWeek} workouts
              </span>
            </div>

            {/* Total workouts card */}
            <div className="bg-zinc-800 rounded-md p-4 flex flex-col border border-zinc-700">
              <span className="text-gray-400 text-sm mb-1 flex items-center">
                <BarChart3 className="w-4 h-4 mr-1" /> Total Workouts
              </span>
              <span className="text-white font-semibold text-lg">
                {workoutStatistics.totalWorkouts} completed
              </span>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="./myroutines"
              className="bg-zinc-800 border border-zinc-700 rounded-md p-5 flex justify-between items-center hover:border-blue-600 transition-colors"
            >
              <div className="flex items-center">
                <div className="bg-blue-600/20 p-3 rounded-full mr-4">
                  <Dumbbell className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    My Routines
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Manage your workout routines
                  </p>
                </div>
              </div>
              <ChevronRight className="text-gray-400" />
            </Link>

            <Link
              href="./progress"
              className="bg-zinc-800 border border-zinc-700 rounded-md p-5 flex justify-between items-center hover:border-blue-600 transition-colors"
            >
              <div className="flex items-center">
                <div className="bg-blue-600/20 p-3 rounded-full mr-4">
                  <Activity className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    Progress Tracker
                  </h3>
                  <p className="text-gray-400 text-sm">
                    View your fitness progress
                  </p>
                </div>
              </div>
              <ChevronRight className="text-gray-400" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
