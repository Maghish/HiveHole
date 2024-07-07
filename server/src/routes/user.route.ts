import { Router } from "express";

const router = Router();

router.get("/getuser/:username");
router.post("/createuser");
router.post("/edituser");
router.delete("/deleteuser");
router.get("/getuserfollowings/:username");
router.post("/followuser");
router.post("/unfollowuser");

export default router;
