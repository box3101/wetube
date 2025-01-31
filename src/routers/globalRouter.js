import express from "express";
import { handleJoin, handleLogin } from "../controllers/userControllers";
import { handleTrending, handleSearch } from "../controllers/videoControllers";

const globalRouter = express.Router();

globalRouter.get("/", handleTrending);
globalRouter.get("/join", handleJoin);
globalRouter.get("/login", handleLogin);
globalRouter.get("/search", handleSearch);

export default globalRouter;

