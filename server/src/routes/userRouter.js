import express from "express";
import * as userController from "../controllers/userController";

const router = express.Router();

router.get("/fakeUser", userController.fakeData);
router.get("/:page",userController.getAll);

export default router;
