import express from "express";
import bodyParser from "body-parser";
import initWebRoutes from "./routes/web";
import cors from "cors";
import cookieParser from "cookie-parser";
require("dotenv").config();

const app = express();
const connectDB = require("./configs/connectDB");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());
app.use(cookieParser());

initWebRoutes(app);

connectDB();

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`NodeJS is running on http://localhost:${port}`);
});
