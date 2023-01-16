const joi = require("@hapi/joi");

const Schema = {
    addReview : joi.object({
        userId : joi.objectId().required(),
        companyId : joi.objectId().required(),
        subject : joi.string().max(20).min(3).required(),
        review : joi.string().min(5).max(100).required(),
        rating : joi.number().integer().min(1).max(5).required(),
    }).unknown(true),

    updateReview : joi.object({
        review : joi.string().min(5).max(100).required()
    }).unknown(true),
}

module.exports=Schema;
