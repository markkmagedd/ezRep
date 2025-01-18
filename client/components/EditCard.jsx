  import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
const EditCard = ({ routine }) => {
  const { username } = useParams();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [description, setDescription] = useState(" ");
  const [name, setName] = useState("");
  const [days, setDays] = useState([]);

  useEffect(() => {
    if (routine) {
      setName(routine.name || "");
      setDescription(routine.description || "");
      setDays(routine.days || []);
    }
  }, [routine]);

  const updateRoutine = async () => {
    try {
      const res = await fetch(`http://localhost:8080/my-routines/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ name, description, days }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccess("Routine updated successfully!");
      } else {
        setError(data.error || "Failed to update routine.");
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred.");
    }
  };

  return (
    <main className="grid grid-cols-1 ">
      <div className="m-10 p-10 bg-primary rounded-xl shadow-lg mt-5">
        <form onSubmit={updateRoutine} className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-white mb-6">Edit Routine</h1>

          <div>
            <div>
              {days.length != 0 &&
                days.map((day, index) => (
                  <div className="" key={day._id}>
                    {" "}
                    <h1>Day {index + 1} :</h1>
                    <h2>{day.dayName}</h2>
                  </div>
                ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-secondary text-white py-2 px-4 rounded-lg hover:scale-105 transition-transform"
            >
              Update Routine
            </button>
            <Link
              href="../"
              className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:scale-105 transition-transform"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default EditCard;
