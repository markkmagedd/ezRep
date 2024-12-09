// models/Routine.js
import mongoose from "mongoose";

// Routine schema for user-specific workout routines
const routineSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String, // E.g., "Push-Pull-Legs", "Bro Split", or a custom name
      required: true,
    },
    type: {
      type: String, // Type of routine: "Push-Pull-Legs", "Bro Split", "Custom"
      required: true,
    },
    description: {
      type: String, // Optional description of the routine
    },
    days: [
      {
        dayName: {
          type: String, // E.g., "Push", "Pull", "Legs", etc.
          required: true,
        },
        exercises: [
          {
            exerciseId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Exercise",
              required: true,
            },
            sets: {
              type: Number,
              required: true,
            },
            reps: {
              type: Number,
              required: true,
            },
            rest: {
              type: Number, // Optional: rest time between sets in seconds
            },
            notes: {
              type: String, // Optional: custom notes for the user
            },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const Routine =
  mongoose.models.Routine || mongoose.model("Routine", routineSchema);

export default Routine;
