import React from "react";
import { useParams } from "next/navigation";
const LastWorkoutCard = () => {
  const { username } = useParams();
  return (
    <div className="bg-primary shadow-xl rounded-lg p-6 mb-6 mt-16 w-full max-w-2xl text-white">
      <h1 className="text-2xl font-extrabold mb-10 ">
        Welcome back, {username} Ready to crush today’s goals? 💪
      </h1>
      <div className="text-lg">
        Your Current Routine is {"  "}:{" "}
        <span className="text-white bg-secondary text-1xl font-extrabold">
          Push Pull Legs
        </span>
      </div>
    </div>
  );
};

export default LastWorkoutCard;
