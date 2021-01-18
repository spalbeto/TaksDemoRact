import {Schema, model } from "mongoose";

const todoSchema = new Schema({
    name: String,
    title: String,
    completed: Boolean
   
},{
    timestamps: true,
    versionKey:false
})

export default model("Todos", todoSchema);