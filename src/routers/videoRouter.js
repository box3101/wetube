import express from "express";
import { handleWatch, handleEdit, handleDelete } from "../controllers/videoControllers";

const videosRouter = express.Router();

videosRouter.get("/watch", handleWatch);
videosRouter.get("/edit", handleEdit);
videosRouter.get("/delete", handleDelete);

export default videosRouter;

