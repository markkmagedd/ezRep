import express from "express";
const router = express.Router();
import { reg, login } from "../controllers/auth.controller.js";

router.post("/register", reg);
router.post("/login", login);

export default router;
