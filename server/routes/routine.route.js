import express from "express";
import {
  getRoutines,
  getCertainRoutine,
  addRoutine,
  setCurrentRoutine,
  updateRoutine,
  getCurrentRoutine,
} from "../controllers/routine.controller.js";
const router = express.Router();

router.get("/get-routines", getRoutines);
router.get("/:_id", getCertainRoutine);
router.post("/add-routine", addRoutine);
router.post("/set-current-routine", setCurrentRoutine);
router.put("/:_id", updateRoutine);
router.put("/get-current-routine", getCurrentRoutine);

export default router;
