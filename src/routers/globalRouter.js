import express from "express";
import { handleHome, handleJoin } from "../controllers/videoControllers";

const globalRouter = express.Router();

globalRouter.get("/", handleHome);
globalRouter.get("/join", handleJoin);

export default globalRouter;

