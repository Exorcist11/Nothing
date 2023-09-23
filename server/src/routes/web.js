import express from "express";
import userRouter from "./userRouter";

const router = express.Router();

let initWebRoutes = (app) => {
  app.use("/admin/user", userRouter);
  app.use("/", router);
};

export default initWebRoutes;
