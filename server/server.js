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
      httpOnly: true,
      secure: false, // Use true if using https in production
      maxAge: 1000 * 60 * 60 * 24, // Cookie expiration (1 day)
    },
  })
);
app.use(cors());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/registration", registrationRoute);
app.use("/login", loginRoute);
app.use("/get-routines", routineRoute);
app.use("/add-routine", routineRoute);

mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Error connecting to MongoDB", err));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
