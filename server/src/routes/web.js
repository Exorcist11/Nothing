import express from "express";
const router = express.Router();

let initWebRoutes = (app) => {
  app.use("/", router);
};

export default initWebRoutes;
