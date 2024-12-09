// models/Exercise.js
import mongoose from "mongoose";

// Exercise schema for predefined exercises
const exerciseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    muscle: {
      type: String,
      required: true,
    },
    description: {
      type: String, // Optional: description of the exercise
    },
  },
  { timestamps: true }
);

const Exercise =
  mongoose.models.Exercise || mongoose.model("Exercise", exerciseSchema);

export default Exercise;
