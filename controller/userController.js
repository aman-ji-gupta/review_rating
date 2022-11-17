const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require('../model/userSchema');
const userSchema = require('../model/userSchema');
const { transporter, mailOptions } = require('../service/mailService')

const sendmail = () => {
    console.log("email sent....!");
}

const sendMailAt5pm = async (req, res) => {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("error " + error);
        } else {
            console.log("Email sent successfully...!" + info.res);
        }
    })
}


const sendMail = async (req, res) => {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent successfully...!" + info.res);
        }
    })
}

const userSignup = async (req, res) => {
    let email = req.body.email;

    //const cruddata=new crudeSchema(req,res);
    const userData = new userSchema({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        number: req.body.number,
        city: req.body.city,
        state: req.body.state,
        isActive: req.body.isActive,
        role: req.body.role
    })
    console.log(req.body.name);
    try {

        
        const { email, password } = req.body;
        const new_user = new userSchema(req.body);

        //sbse pehle check kr rhe h ki user already register h ki ni..email se.  Agr register h to yhi se return kr jao nhi to add krwa do
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            return res.status(400).json({ status: 400, error: "Email already exists.." });
        }

        const salt = await bcrypt.genSalt(10);
        new_user.password = await bcrypt.hash(password, salt);

        // console.log("inside try");
        const filePath = `/uploads/${req.file.filename}`;
        new_user.profilepic = filePath;
        const addUser = await new_user.save();
        // console.log("after try");
        res.json(addUser);
    } catch (err) {
        res.send("Error" + err)
    }
}


const userLogin = async (req, res) => {
    // const loginData = new userSchema(req.body);

    try {

        const { email, password } = req.body;
        if (email && password) {
            const user = await User.findOne({ email: email });
            if (user != null) {
                const isMatch = await bcrypt.compare(password, user.password);
                if (user.email === email && isMatch) {
                    //generate jwt
                    const token = jwt.sign({
                        UserID: user._id
                    },
                        process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
                    res.send({
                        status: "success",
                        message: "Login success",
                        "token": token

                    })

                } else {
                    res.send({
                        status: "failed",
                        message: "you are not registerd"

                    })
                }
            }
        }
    } catch (err) {
        console.log("Error: " + err);
    }
}


const sendUserResetPasswordEmail = async (req, res) => {

    const { email } = req.body;
    if (email) {
        console.log("inside try1...", email);
        const emaiExists = await User.findOne({ email: email });
        console.log("inside try2...");
        if (emaiExists) {
            try {

                //  console.log("inside try...");

                const secret = emaiExists._id + process.env.JWT_SECRET_KEY;
                //generate jwt
                const token = jwt.sign({
                    UserID: emaiExists._id
                },
                    secret, { expiresIn: '5d' });

                const link = `http://127.0.0.1:3000/api/user/reset/${emaiExists._id}/${token}`;
                console.log('Link: ', link);

                //send Email
                console.log('email: ', emaiExists.email);
                let info = transporter.sendMail({
                    from: "amanguptaeducation@gmail.com",
                    to: emaiExists.email,
                    subject: "password reset link",
                    html: ` <a href=${link}> Click here to reset password </a>`
                })

                res.json({
                    status: "success",
                    message: "please check your email", info
                })
            } catch (err) {
                console.log("Error: ", err);
            }

        } else {
            res.json({
                status: "failed",
                message: "Email is required..."
            });
        }



    } else {
        res.json({
            status: "failed",
            message: "user not found..."
        });
    }
}



const userPasswordReset = async (req, res) => {
    const { password, confirm_pass } = req.body;
    const { id, token } = req.params;
    console.log(id);
    console.log(token);
    const user = await User.findById(id);
    const new_secret = user._id + process.env.JWT_SECRET_KEY;
    try {
        jwt.verify(token, new_secret)
        if (password && confirm_pass) {

            if (password != confirm_pass) {
                res.send({
                    "status": "failed",
                    "message": "password and confirm password should be same",
                })
            } else {
                const salt = await bcrypt.genSalt(10);
                const new_password = await bcrypt.hash(password, salt);
                console.log("***" + user._id);
                await User.findByIdAndUpdate(user._id, { $set: { password: new_password } })

                res.send({
                    "status": "success",
                    "message": "password reset successfully",
                })
            }

        } else {
            res.send({
                "status": "failed",
                "message": "all fields are required",
            })
        }
    } catch (error) {
        console.log(error);
    }
}



//     try {
//         console.log("inside try");
//         let email = req.body.email;
//         let password1111 = req.body.password;
//         console.log("inside try", password1111);
//         const validPassword = await bcrypt.compare(password, password1111);
//         console.log("inside try", validPassword);
//         // const useremail = await User.findOne({ email: email })
//         console.log("inside try");
//         const user = await User.findOne({ email: email });
//         console.log("inside try");
//         console.log(useremail);
//         if (validPassword) {
//             return res.status(200).json({ status: 200, error: "Login successfull.." });
//         } else {
//             return res.status(400).json({ status: 400, error: "Login Failed.." });
//         }
//     } catch (error) {
//         res.status(400).send("invalid email..", error)
//     }
// }






//ab upr wale controller ko export krna pdega nhi to use nhi kr payenge..
module.exports = {
    userSignup,
    sendMail,
    sendmail,
    sendMailAt5pm,
    userLogin,
    sendUserResetPasswordEmail,
    userPasswordReset
}