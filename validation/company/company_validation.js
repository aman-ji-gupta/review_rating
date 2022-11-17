const company = require("./company_schema")

module.exports = {
    registerCompanyValidation : async(req, res, next) => { //next isliye ki agr sb shi h to agle callback fuction ko call kr do
        const value = await company.registerCompany.validate(req.body, { abortEarly: false });
        if (value.error) {
            res.json({
                success : 0,
                message : value.error.details[0].message
            })
        } else {
            next()
        }
    },
    addReviewValidation : async(req, res, next) => { //next isliye ki agr sb shi h to agle callback fuction ko call kr do
        const value = await company.addReview.validate(req.body, { abortEarly: false });
        if (value.error) {
            res.json({
                success : 0,
                message : value.error.details[0].message
            })
        } else {
            next()
        }
    },
}
