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
    },

    getReview : async (req, res) => {
     const review_id = req.params.id;
     try{
     let reviewdata = await reviewSchema.find({"_id":`${review_id}`},{subject:1,review:1,rating:1,_id:0})
     res.json(reviewdata)
    console.log(reviewdata);
        }catch(error){
            res.json({
                error : error.message
            })
    }
    },

    updateReview : async (req, res) => {
        const review_id = req.params.id;
        try{
        const updatedReview = await reviewSchema.findByIdAndUpdate(review_id , req.body,{new:true})
        res.json(updatedReview)
   
         }catch(error){
        res.json({
            error : error.message
        })
    }
    },

    deleteReview : async (req, res) => {
        const review_id = req.params.id;
        try{
             const deletedReview = await reviewSchema.findByIdAndRemove(review_id);
             res.json({
                status :1,
                Message : "Review deleted successfully..!"
            })

            }catch(error){
                res.json({
                    status :0,
                    Error : error.message
                })
    }
    },

    retriveReview : async (req, res) =>{
        const company_id = req.params.id;
        try{
            const reviews = await reviewSchema.find({companyId:company_id},{subject:1,review:1,rating:1,_id:0})
            res.json(reviews);
        }catch(error){
            res.json({
                status:0,
                Message : error.message
            })
    }
    }
}
