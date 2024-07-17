import { Router } from "express";
import {
  getUser,
  getCurrentUser,
  followUser,
  unfollowUser,
} from "../controllers/user.controller";
import protect from "../middleware/auth.middleware";

const router = Router();

router.get("/getuser/:username", protect, getUser);
router.post("/edituser", protect);
router.post("/followuser/:username", protect, followUser);
router.post("/unfollowuser/:username", protect, unfollowUser);
router.get("/getcurrentuser", protect, getCurrentUser);

export default router;
