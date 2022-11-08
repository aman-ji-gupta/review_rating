const mongoose=require('mongoose')
const companySchema= new mongoose.Schema({
   //sbse pehle foreign key bnate h pichle wali schema ke id ka referance leke
    userId:{
        type:mongoose.Schema.Types.ObjectId, //yha se us table ka object id nikala h
        required : true,
        ref : 'user' //ye user schema walo table ka ref liye h uske collection ka name humne user rkha tha
    }
    ,companyName:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true      
    },
    foundedAt:{
        type:String,
        require:true
    },
    isActive:{
        type:Boolean,
        default:true
    }
})

companySchema.set('timestamps',true);
module.exports=mongoose.model('company',companySchema);
