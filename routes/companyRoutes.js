const express =require("express");
const router = express.Router();
const {upload} = require("../middlewares/imageStorage");
const company =require("../controller/companyController")
// const companyReview =require("../controller/companyController")
const validation=require("../validation/company/company_validation")


router.post('/create',upload.single("company_logo"),validation.registerCompanyValidation ,company.createCompany)
router.post('/addReview',validation.addReviewValidation,company.addReview);
router.get('/find',company.companyList);
router.get('/reviews/:id',company.companyReviewDetails);

module.exports=router;
