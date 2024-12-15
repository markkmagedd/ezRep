// app/myroutines/[id]/edit/page.jsx

"use client"; // Enable client-side rendering

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import EditCard from "@/components/EditCard";

const EditRoutinePage = () => {
  const router = useRouter();
  const { id } = useParams(); // Get the routine ID from the URL

  const [routine, setRoutine] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch the existing routine data
  useEffect(() => {
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
        console.log(data);
        if (data.success) {
          setRoutine(data.data);
          setName(data.data.name);
          setDescription(data.data.description || "");
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

    fetchRoutine();
  }, [id]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic validation
    if (!name.trim()) {
      setError("Routine name is required.");
      return;
    }

    //   try {
    //     const res = await fetch(`http://localhost:8080/my-routines/${id}`, {
    //       method: "PUT", // Assuming PUT method for updates
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       credentials: "include",
    //       body: JSON.stringify({ name, description }),
    //     });

    //     const data = await res.json();

    //     if (res.ok && data.success) {
    //       setSuccess("Routine updated successfully!");
    //       // Optionally, redirect to another page after a delay
    //       // setTimeout(() => {
    //       //   router.push(`/myroutines/${id}`);
    //       // }, 2000);
    //     } else {
    //       setError(data.error || "Failed to update routine.");
    //     }
    //   } catch (err) {
    //     console.error(err);
    //     setError("An unexpected error occurred.");
    //   }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

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

  return <EditCard />;
};

export default EditRoutinePage;
