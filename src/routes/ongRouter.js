import {createOng, findAllOngs, findONGbyName, findOngById } from "../controllers/ongController.js";


import { Router } from "express";

const ongRouter = Router()

ongRouter.post("/create",createOng)
ongRouter.get("/",findAllOngs)
ongRouter.get("/name/:ONGname", findONGbyName) 
ongRouter.get("/id/:ongId", findOngById)


export default ongRouter