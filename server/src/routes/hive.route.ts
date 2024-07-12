import { Router } from "express";

// Controller functions
import {
  getHive,
  createHive,
  updateHive,
  deleteHive,
  addHiveMember,
  removeHiveMember,
} from "../controllers/hive.controller";
import protect from "../middleware/auth.middleware";

const router = Router();

router.get("/gethive/:name", getHive);
router.post("/createhive", protect, createHive);
router.post("/updatehive/:name", protect, updateHive);
router.delete("/deletehive/:name", protect, deleteHive);
router.post("/addhivemember/:name", protect, addHiveMember);
router.post("/removehivemember/:name", protect, removeHiveMember);

export default router;
