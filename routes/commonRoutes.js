const express =require("express");
const router=express.Router();
const userRouter = require("./userRoutes");
const companyRouter = require("./companyRoutes");
const crudRouter = require("./reviewCrudRoutes");


router.use('/user',userRouter);  // sirf "/" isliye nhi diya bcz user ka jo bhi kam krenge uska url /user se start hoga
router.use('/company',companyRouter); //same as user
router.use('/reviewcrud',crudRouter); 

module.exports=router;
