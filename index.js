const express=require('express');
const app=express();
require('./model/config')
var bodyParser=require('body-parser');
const userSchema = require('./model/userSchema');
const User=require('./model/userSchema');
const bcrypt = require('bcrypt');
const router = require('./routes/userRoutes');

app.use(express.json())
app.use(bodyParser.json())

app.get('/',function(req,res){
     res.send("Welcome to node js world... !");
 })


app.use('/',router)


app.listen(9000,function(req,res){
    console.log("server is running on port : 9000");
});