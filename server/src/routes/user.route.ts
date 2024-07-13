import { Router } from "express";
import { getUser, getCurrentUser } from "../controllers/user.controller";
import protect from "../middleware/auth.middleware";

const router = Router();

router.get("/getuser/:username", protect, getUser);
router.post("/edituser", protect);
router.post("/followuser/:username", protect);
router.post("/unfollowuser", protect);
router.get("/getcurrentuser", protect, getCurrentUser);

export default router;
