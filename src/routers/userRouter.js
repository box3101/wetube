import express from "express";
import { handleEditUser, handleDeleteUser, handleLogout, handleSeeUser } from "../controllers/userControllers";

const usersRouter = express.Router();

usersRouter.get("/logout", handleLogout);
usersRouter.get("/edit", handleEditUser);
usersRouter.get("/delete", handleDeleteUser);
usersRouter.get("/:id", handleSeeUser);


export default usersRouter;
