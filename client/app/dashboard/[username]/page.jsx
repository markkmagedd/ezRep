"use client";
import React from "react";

export default function DashboardPage({ params }) {
  const { username } = React.use(params);

  return (
    <div className="hero bg-base-100">
      <div className="hero-content text-center">
        <h1 className="text-5xl font-bold">Welcome Back {username}</h1>
      </div>
    </div>
  );
}
