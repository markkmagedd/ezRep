import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import registrationRoute from "./routes/registration.route.js";
import loginRoute from "./routes/login.route.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // React frontend URL
  })
);

app.use("/registration", registrationRoute);
app.use("/login", loginRoute);

mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Error connecting to MongoDB", err));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
