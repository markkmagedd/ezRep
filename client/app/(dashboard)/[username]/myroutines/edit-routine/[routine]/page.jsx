// app/myroutines/[id]/edit/page.jsx

"use client"; // Enable client-side rendering

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import EditCard from "@/components/EditCard";

const EditRoutinePage = () => {
  const router = useRouter();
  const id = useParams().routine;
  const [routine, setRoutine] = useState({});
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const fetchRoutine = async () => {
    try {
      const res = await fetch(`http://localhost:8080/my-routines/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      if (data.success) {
        setRoutine(data.data);
      } else {
        setError(data.error || "Failed to fetch routine.");
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchRoutine();
  }, []);
  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-red-500 mb-4">{error}</p>
        <Link href="/myroutines" className="text-secondary">
          Go Back to Routines
        </Link>
      </div>
    );
  }

  return <EditCard routine={routine} />;
};

export default EditRoutinePage;
