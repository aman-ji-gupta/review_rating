const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const app = express();
require('./model/config')
var bodyParser = require('body-parser');
const router = require('./routes/commonRoutes');
const cron = require("node-cron");
const user = require('./controller/userController');
app.use(express.json())
app.use(bodyParser.json())

const testRouter = require("./validation")
app.use('/test',testRouter);

app.get('/', function(req, res) {
    res.send("Welcome to node js world... !");
})

app.use('/', router);

// cron.schedule('*/5 * * * * *', () => {
//     sendmail();
// });

cron.schedule('00 17 * * *', () => {
    console.log("sending..");
    user.sendMailAt5pm();
    console.log("after.");
})

const server = app.listen(9000, function(req, res) {
    console.log(process.env.PORT)
    console.log(`server is running at port: ${process.env.PORT}`);
});

module.exports=server;