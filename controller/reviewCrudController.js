const companySchema = require("../model/companySchema");
const reviewSchema=require("../model/companyReviewSchema");

module.exports ={
    
    addReview : async (req,res)=>{
    const review_data = new reviewSchema(req.body);
    try{
        var addRes = await review_data.save();
        res.json({
            status : 1,
            message : "Review Added Successfully...!"
        })
    }catch(error){
        res.json({
            status : 0,
            message : error.message
        })
    }
}


}