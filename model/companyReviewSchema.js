const mongoose=require('mongoose');
const companyReviewSchema = new mongoose.Schema({
    
userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
},
companyId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'company'
},subject:{
        type:String,
        require:true
    },
    review:{
        type:String,
        require:true
    },
    rating:{
        type:Number,
        default:0
    },
    isActive:{
        type:Boolean,
        default:true
    }

})

companyReviewSchema.set('timestamps',true);
module.exports=mongoose.model('companyreview',companyReviewSchema);
