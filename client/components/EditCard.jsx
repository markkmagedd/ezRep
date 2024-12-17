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
    <div className="max-w-2xl mx-auto p-8 bg-primary rounded-xl shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-white mb-6">Edit Routine</h1>

      {success && <p className="text-green-500 mb-4">{success}</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={updateRoutine} className="flex flex-col gap-4">
        <div>
          <label className="block text-white mb-2">Routine Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded-lg bg-secondary text-white"
            required
          />
        </div>

        <div>
          <label className="block text-white mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 rounded-lg bg-secondary text-white"
            rows="4"
          ></textarea>
          <div>
            {days.length != 0 &&
              days.map((day, index) => (
                <h1 className="bg-secondary" key={index}>
                  Day {index + 1} {day.dayName}
                </h1>
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
  );
};

export default EditCard;
