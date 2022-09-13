import { Router } from "express";
import { usersController } from "../controllers/usersController";


const router = Router();
router.get("/getUsers", usersController.getUsers);
router.post("/createUser", usersController.createUser);
export default router;