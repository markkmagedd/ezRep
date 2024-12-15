import express from "express";
import {
  getRoutines,
  getCertainRoutine,
  addRoutine,
  setCurrentRoutine,
  updateRoutine,
} from "../controllers/routine.controller.js";
const router = express.Router();

router.get("/get-routines", getRoutines);
router.get("/:_id", getCertainRoutine);
router.post("/add-routine", addRoutine);
router.post("/set-current-routine", setCurrentRoutine);
router.put("/:_id", updateRoutine);

export default router;
