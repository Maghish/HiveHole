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

const router = Router();

router.get("/gethive/:name", getHive);
router.post("/createhive", createHive);
router.post("/updatehive", updateHive);
router.post("/deletehive", deleteHive);
router.post("/addhivemember", addHiveMember);
router.post("/removehivemember", removeHiveMember);

export default router;
