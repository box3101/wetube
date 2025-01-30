import express from "express";
import { handleEditUser, handleDeleteUser } from "../controllers/userControllers";

const usersRouter = express.Router();

usersRouter.get("/edit", handleEditUser);
usersRouter.get("/delete", handleDeleteUser);

export default usersRouter;
