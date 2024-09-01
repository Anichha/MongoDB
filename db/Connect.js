const mongoose=require("mongoose");
const mongoUrl="mongodb://127.0.0.1:27017";
const DBname="Students";
//connection
async function DBconnect(){
    try{
        await mongoose.connect(`${mongoUrl}/${DBname}`)
        console.log("DB connected at mongodb://127.0.0.1:27017");
        
    }
    catch(error){
        console.log("connection not established.");
        
    }
}
module.exports=DBconnect;