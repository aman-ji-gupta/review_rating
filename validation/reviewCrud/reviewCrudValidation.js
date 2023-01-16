const crudCompany = require("./reviewCrudSchema");

module.exports ={
    reviewCrudValidation : async (req, res, next)=>{
        const value = crudCompany.addReview.validate(req.body , {AbortEarly : false});
        if(value.error){
            res.json({
                status : 200,
                message : value.error.details[0].message
            })
        }else{
            next()
        }
    },

     updateReviewValidation : async (req, res, next)=>{
        const value = crudCompany.updateReview.validate(req.body , {AbortEarly : false});
        if(value.error){
            res.json({
                status : 0,
                message : value.error.details[0].message
            })
        }else{
            next()
        }
    },
}