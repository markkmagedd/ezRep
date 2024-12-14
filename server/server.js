import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import registrationRoute from "./routes/registration.route.js";
import loginRoute from "./routes/login.route.js";
import routineRoute from "./routes/routine.route.js";
import dotenv from "dotenv";
import session from "express-session";
import MongoStore from "connect-mongo";

dotenv.config();
const app = express();
app.use(express.json());

// CORS configuration: allow the frontend at http://localhost:3000 and allow credentials
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from frontend
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"], // Allow cookies to be sent with the request
  })
);
app.options("*", cors()); // This will handle preflight OPTIONS requests globally

// Session configuration
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost:27017/ezRep",
      collectionName: "sessions",
      ttl: 24 * 60 * 60, // Session expiry time (24 hours)
    }),
    cookie: {
      httpOnly: true, // Prevent access from JavaScript
      secure: process.env.NODE_ENV === "production", // Use 'true' in production (HTTPS)
      maxAge: 1000 * 60 * 60 * 24,
      sameSite: "Lax",
      domain: "localhost", // Cookie expiration (1 day)
    },
  })
);

// Routes
app.use("/registration", registrationRoute);
app.use("/login", loginRoute);
app.use("/my-routines", routineRoute);

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Error connecting to MongoDB", err));

// Server listening
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
