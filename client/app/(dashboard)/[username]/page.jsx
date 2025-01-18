"use client";
import LastWorkoutCard from "@/components/LastWorkoutCard";
import React, { useState } from "react";

export default function DashboardPage() {
  return (
    <main className="flex flex-col items-center bg-transparent ">
      <div className="flex gap-3 place-items-center">
        <LastWorkoutCard />
        <LastWorkoutCard />
      </div>
    </main>
  );
}
