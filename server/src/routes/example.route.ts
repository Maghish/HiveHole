import { Router } from "express";
import { sayHello } from "../controllers/example.controller";

const router = Router();

router.get("/sayhello", sayHello);

export default router;
