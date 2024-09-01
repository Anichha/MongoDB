const userModel = require("../model/userModel");

const userSignup= async (req,res)=>{
    try {
        const { Name, Age, Address, isActive } = req.body;
        if(Name&&Age&&Address&&isActive!=undefined)
        {
            const data=new userModel({ Name, Age, Address, isActive});
            await data.save();
            return res.status(201).send({message:"registration successful!"})
        }
        else{
            return res.status(400).send({message:"provide all the fields before submit."})
        }
    }
    catch (error) {
        return res.status(500).send({Error:"internal server error."})
    }
      
}
module.exports={userSignup}