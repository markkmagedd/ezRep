"use client";
import { useParams } from "next/navigation";
import React from "react";
import LastWorkoutCard from "@/components/LastWorkoutCard";
import MyProgressCard from "@/components/MyProgressCard";
import MyRoutinesCard from "@/components/MyRoutineCard";

export default function DashboardPage() {
  const { username } = useParams();

  return (
    <main className="flex-col justify-items-center bg-transparent ">
      <h1 className="text-5xl font-bold mb-20 mt-20">
        Welcome Back {username} 👋
      </h1>
    </main>
  );
}
