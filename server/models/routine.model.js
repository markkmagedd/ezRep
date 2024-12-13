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
    days: {
      type: [
        {
          dayName: {
            type: String,
            required: true,
          },
          exercises: [
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
                type: String,
              },
              sets: [
                {
                  number: {
                    type: Number,
                    required: true,
                  },
                  reps: {
                    type: Number,
                    required: true,
                  },
                  weightUnit: {
                    type: String,
                    required: true,
                  },
                  rest: {
                    type: Number,
                  },
                  weight: {
                    type: Number,
                    required: false,
                  },
                  notes: {
                    type: String,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    current: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Routine =
  mongoose.models.Routine || mongoose.model("Routine", routineSchema);

export default Routine;
