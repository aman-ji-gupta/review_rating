const jwt = require("jsonwebtoken")
const User = require("../model/userSchema")

const checkUserAuth = async(req, res, next) => {
    let token;

    const { authorization } = req.headers;
    console.log(authorization);
    if (authorization && authorization.startsWith("Bearer")) {

        try {
            //get token from header
            token = authorization.split(" ")[1];
            console.log(token);

            //check what we are getiing in token and authorization
            console.log("Token :", token);
            console.log("Authorization :", authorization);

            //verify token
            const {
                userID
            } = jwt.verify(token, process.env.JWT_SECRET_KEY);

            //get user from token
            req.User = await User.findById(userID).select('-password');
            next();

        } catch (error) {
            console.log(error);
            res.status(401).send({
                status: "failed",
                message: "unauthorized user"
            });
        }
    }
}

module.exports = {
    checkUserAuth
}