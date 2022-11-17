const joi = require('@hapi/joi');
joi.objectId=require('joi-objectid')(joi)

const schema = {
    registerCompany : joi.object({
        companyName : joi.string().max(30).required(),
        location : joi.string().required(),
        city : joi.string().required(),
        founded_on : joi.required(),
       // company_logo : joi.string().required(),
        userId : joi.string().required()
    }).unknown(true),

    addReview:joi.object({
        userId : joi.objectId().required(),
        companyId : joi.objectId().required(),
        subject : joi.string().max(20).min(3).required(),
        review : joi.string().min(5).max(100).required(),
        rating : joi.number().integer().min(1).max(5).required(),
    }).unknown(true),

}

module.exports = schema;
