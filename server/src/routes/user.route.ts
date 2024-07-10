import { Router } from "express";
import { getUser } from "../controllers/user.controller";

const router = Router();

router.get("/getuser/:username", getUser);
router.post("/edituser");
router.get("/getuserfollowings/:username");
router.post("/followuser");
router.post("/unfollowuser");

export default router;
