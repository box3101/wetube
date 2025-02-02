import express from "express";
import { handleSeeVideo, handleGetEditVideo, handlePostEditVideo } from "../controllers/videoControllers";


const videosRouter = express.Router();

videosRouter.get("/:id(\\d+)", handleSeeVideo);
videosRouter.get("/:id(\\d+)/edit", handleGetEditVideo);
videosRouter.post("/:id(\\d+)/edit", handlePostEditVideo);


export default videosRouter;

