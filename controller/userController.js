const bcrypt=require("bcrypt");
const User=require('../model/userSchema');
const userSchema=require('../model/userSchema');



const userSignup = async(req,res) => {
    let email=req.body.email;
   
    //const cruddata=new crudeSchema(req,res);
    const userData=new userSchema({
        name:req.body.name,
        email: req.body.email,
        password:req.body.password,
        number:req.body.number,
        city:req.body.city,
        state:req.body.state,
        isActive:req.body.isActive,
        role:req.body.role
    })
    console.log(req.body.name);
    try{

        const{email,password}=req.body;
        const new_user=new userSchema(req.body);

        //sbse pehle check kr rhe h ki user already register h ki ni..email se.  Agr register h to yhi se return kr jao nhi to add krwa do
        const userExists= await User.findOne({email:email});
        if(userExists){
            return res.status(400).json({status:400,error:"Email already exists.."});
        }

        const salt=await bcrypt.genSalt(10);
        new_user.password=await bcrypt.hash(password,salt);

        console.log("inside try");
        const addUser= await new_user.save();
        console.log("after try");
        res.json(addUser);
    }catch(err){
        res.send("Error"+err)
    }
}


//ab upr wale controller ko export krna pdega nhi to use nhi kr payenge..
module.exports={
    userSignup
}