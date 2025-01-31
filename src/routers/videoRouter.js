import express from "express";
import { handleSeeVideo, handleEditVideo, handleDeleteVideo, handleUploadVideo } from "../controllers/videoControllers";

const videosRouter = express.Router();

videosRouter.get("/upload", handleUploadVideo);
videosRouter.get("/:id(\\d+)", handleSeeVideo);
videosRouter.get("/:id(\\d+)/edit", handleEditVideo);
videosRouter.get("/:id(\\d+)/delete", handleDeleteVideo);

export default videosRouter;

