import { createUser,updateUser,findAll, findById, setUserHair,getUserInfo } from "../controllers/userController.js";
import { Router } from "express";

const userRoute = Router()

userRoute.get("/", findAll)
userRoute.post("/create",createUser)
userRoute.post("/update",updateUser)
userRoute.get("/:id",findById)
userRoute.post("/sethair",setUserHair)

export default userRoute