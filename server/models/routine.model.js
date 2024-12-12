import mongoose from "mongoose";

const routineSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    days: [
      {
        dayName: {
          type: String,
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
              type: Number,
            },
            notes: {
              type: String,
            },
          },
        ],
      },
    ],
    current: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Routine =
  mongoose.models.Routine || mongoose.model("Routine", routineSchema);

export default Routine;
