import express from "express";
import { getRoutines, addRoutine } from "../controllers/routine.controller.js";
const router = express.Router();

router.get("/", getRoutines);
router.post("/", addRoutine);

export default router;
