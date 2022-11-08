
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
   // profilepic: String,
    
    isActive:{
        type: Boolean,
        default:true
    },
    role:{
        type:String,
        default:"user"
    }

})

//diff bet/ encryption and hashing is enc. is two way process..and hashing is one way process no one can deccrypt hash code
//name ko hash kr rhe h
// userSchema.pre('save',async function(next){ //pre method ka mtlb ki ..save method ko call krne ke pehle ye chalo...next ka mtlb h ki ye kam krke save kr do
// console.log(`the current name is ${this.name}`);
// this.name= await bcrypt.hash(this.name,10);
// console.log(`the current name is ${this.name}`);
// this.email= await bcrypt.hash(this.email,10);
// this.number= await bcrypt.hash(this.number,10);
// this.city= await bcrypt.hash(this.city,10);
// this.state= await bcrypt.hash(this.state,10);
// next();

// })
//ab isko check krne krke compare krne ke liye
//const nameHash=await bcrypt.hash(name,10);  // hash method me name hum pas krenge jisko hash krna h ..or 10 uski security h kitna krna h
//const nameMatch=await bcrypt.compare(name,nameHash);  //ab ye jo name pass kiya tha usko nameHash se jo hash hua h usse compate krake true false me op dega




//timestamp createdAt and updatedAt dono kr dega khud se....or isActive to upr likh hi diya h
userSchema.set('timestamps',true);
module.exports=mongoose.model("user",userSchema);