import express from "express";
const router = express.Router();
import { reg } from "../controllers/registration.controller.js";

router.post("/", reg);

export default router;
