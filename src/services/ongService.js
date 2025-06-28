import { ONG } from "../models/ong.js"


export const findOngByNameService = (Nome) => ONG.findOne({Nome:{$regex: new RegExp(Nome,"i") }})

export const findAllOngsService = () => ONG.find()

export const findOngByIdService = (id) => ONG.findOne({_id:id})

export const createOngService = (body)=>ONG.create(body)

