const express=require("express");
const app=express();
const{join}=require("path");
const fs= require("fs");
const DBconnect = require("./db/Connect");
const { UserRouter } = require("./routes/userRoute");

//templet engine
app.set("view engine","ejs");
app.set("views",join(__dirname,"view","pages"));
//middelware
app.use(express.json());
app.use(express.static(join(__dirname,"view")));

//route
app.use("/user",UserRouter)

//api
app.get("/",(req,res)=>{
    res.render("home");
})
//server
app.listen(2024,"127.0.0.4",()=>{
    console.log("server started at http://127.0.0.4:2024");
    DBconnect();
})