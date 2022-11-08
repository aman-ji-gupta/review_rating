const express=require('express');
const router=express.Router();

//yha controller ko leke aa rhe h jo alg bnaya h
const user=require("../controller/userController");
const validation = require('../validation/user/user_validation');
//yha iska fayda ye hua ki route or controller alg alg kr liya
router.post('/registerUser', validation.registerUserValidation ,user.userSignup);

module.exports=router;