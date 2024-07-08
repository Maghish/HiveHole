import { Router } from "express";
import { getUser, createUser } from "../controllers/user.controller";

const router = Router();

router.get("/getuser/:username", getUser);
router.post("/createuser", createUser);
router.post("/edituser");
router.delete("/deleteuser");
router.get("/getuserfollowings/:username");
router.post("/followuser");
router.post("/unfollowuser");

export default router;
