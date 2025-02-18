"use client";

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
  const [days, setDays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const fetchRoutine = async () => {
    setLoading(true);
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
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  useEffect(() => {
    if (routine) {
      setName(routine.name || "");
      setDescription(routine.description || "");
      setDays(routine.days || []);
    }
  }, [routine]);
  useEffect(() => {
    fetchRoutine();
  }, []);

  return (
    <>
      <main className="bg-base-100 shadow-2xl p-16 m-16 rounded-xl grid grid-cols-2  ">
        <div>
          <h1 className="text-4xl text-white font-semibold mb-5">
            Routine Name
          </h1>
          <input
            type="text"
            placeholder={`${name}`}
            className="input input-bordered bg-primary text-white input-primary w-full max-w-xs"
            onChange={() => {}}
          />{" "}
          <h1 className="text-4xl text-white font-semibold mb-4 mt-5">
            Description
          </h1>
          <textarea
            type="text"
            placeholder={`${description}`}
            className="input input-bordered bg-primary text-white input-primary w-full h-40 max-w-xs"
          />
        </div>

        <div></div>
      </main>
    </>
  );
};

export default EditRoutinePage;
