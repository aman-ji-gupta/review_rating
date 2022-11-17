const express = require('express');
const router = express.Router();
const token = require("../middlewares/auth_ middleware")
const mail = require('../controller/userController')
const {upload} = require("../middlewares/imageStorage");


//yha controller ko leke aa rhe h jo alg bnaya h
const user = require("../controller/userController");
const validation = require('../validation/user/user_validation');
//yha iska fayda ye hua ki route or controller alg alg kr liya
router.post('/register',upload.single("profilepic") ,validation.registerUserValidation, user.userSignup);

router.get('/send', mail.sendMail)
router.post('/login', validation.loginUserValidation, token.checkUserAuth, user.userLogin);
router.post('/send-reset-password-email',user.sendUserResetPasswordEmail);
router.post('/reset-password/:id/:token',user.userPasswordReset);
module.exports = router;