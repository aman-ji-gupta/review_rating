const express = require('express');
const router = express.Router();
const token = require("../middlewares/auth_ middleware")
const mail = require('../controller/userController')
const {upload} = require("../middlewares/imageStorage");
const auth = require("../middlewares/auth_ middleware")


const user = require("../controller/userController");
const validation = require('../validation/user/user_validation');
router.post('/register',upload.single("profilepic") ,validation.registerUserValidation,user.userSignup);
router.get('/send', mail.sendMail)
router.post('/login', validation.loginUserValidation,user.userLogin);
router.post('/send-reset-password-email',auth.checkUserAuth,user.sendUserResetPasswordEmail);
router.post('/reset-password/:id/:token',user.userPasswordReset);
module.exports = router;