const express = require("express");
const router = express.Router();
const crudController = require("../controller/reviewCrudController");
const crudValidation = require("../validation/reviewCrud/reviewCrudValidation");

router.post('/create',crudValidation.reviewCrudValidation,crudController.addReview)
router.patch('/update/:id',crudValidation.updateReviewValidation,crudController.updateReview)
router.delete('/delete/:id',crudController.deleteReview);
router.get('/retrive/:id',crudController.retriveReview);
module.exports=router;
