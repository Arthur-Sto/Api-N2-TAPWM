import { Schema,Types,model } from "mongoose";

const ONGSchema = new Schema({
    Nome: {
        type: String,
        required: true,
        unique:true
      },
    Desc:{
        type:String,
        required: true
    },

    representantes:{
        type:[Types.ObjectId],
        ref: "ONGrep",
        default:[]
    },
})


export const ONG = model("ong",ONGSchema)
