
//user ka schema bna rhe h ..means sql ki table jaise bnate h waise yha mongo ka schema bnate h usme 8 
const mongoose=require('mongoose');
// const bcrypt=require('bcryptjs')
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
    ,
    number:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
   profilepic: String,
    
    isActive:{
        type: Boolean,
        default:true
    },
    role:{
        type:String,
        default:"user"
    }

})



//timestamp createdAt and updatedAt dono kr dega khud se....or isActive to upr likh hi diya h
userSchema.set('timestamps',true);
module.exports=mongoose.model("user",userSchema);