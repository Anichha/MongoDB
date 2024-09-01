const express=require("express");
const UserRouter=express.Router();

UserRouter.get("/",(req,res)=>{
    res.send({message:"user router working."})
})

module.exports={UserRouter}