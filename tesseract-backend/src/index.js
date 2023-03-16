import cors from "cors";
import express from "express";
import { initDB } from "./db/index.js";
import { TodosRouter } from "./routes/to-dos.router.js";
import morgan from "morgan";

const api = express();

const apiPort = process.env["APP_ENV"] || 4000;

api.use(cors());
api.use(morgan("dev"));
api.use(express.json());
api.use(express.urlencoded({ extended: false }));

api.use("/v1", TodosRouter);

api.listen(apiPort, () => {
  console.log(`API RUNNNIG ON PORT ${apiPort}`);
  initDB().then(() => console.log("Base de Datos Iniciada :3 "));
});
