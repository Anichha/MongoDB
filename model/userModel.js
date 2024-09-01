const mongoose=require("mongoose");
//schema declaration
const userSchema= new mongoose.Schema({
    Name:String,
    Age:Number,
    isActive:Boolean,
    Address:{
        City:String,
        Pin:Number,
        State:String
    }
})
//model connection
const userModel=mongoose.model("USER",userSchema);

module.exports=userModel