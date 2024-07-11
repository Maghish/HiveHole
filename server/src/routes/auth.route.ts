import { Router } from "express";
import { signupUser } from "../controllers/auth.controller";

const router = Router();

router.post("/signup", signupUser);
router.post("/login");

export default router;
