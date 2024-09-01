const express=require("express");
const { userSignup } = require("../controllers/userController");
const UserRouter=express.Router();
//test api
UserRouter.get("/",(req,res)=>{
    res.send({message:"user router working."})
})
// signup
UserRouter.post("/signup",userSignup)
module.exports={UserRouter}