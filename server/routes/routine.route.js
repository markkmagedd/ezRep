import express from "express";
import {
  getRoutines,
  getCertainRoutine,
  addRoutine,
  setCurrentRoutine,
} from "../controllers/routine.controller.js";
const router = express.Router();

router.get("/get-routines", getRoutines);
router.get("/:id", getCertainRoutine);
router.post("/add-routine", addRoutine);
router.post("/set-current-routine", setCurrentRoutine);

export default router;
