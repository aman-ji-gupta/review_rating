const express = require('express');
const app = express();
require('./model/config')
var bodyParser = require('body-parser');
const router = require('./routes/userRoutes');
const cron = require("node-cron");
const { sendmail, sendMailAt5pm } = require('./controller/userController');
app.use(express.json())
app.use(bodyParser.json())


app.get('/', function(req, res) {
    res.send("Welcome to node js world... !");
})

app.use('/', router);

// cron.schedule('*/5 * * * * *', () => {
//     sendmail();
// });

cron.schedule('07 12 * * *', () => {
    console.log("sending..");
    sendMailAt5pm();
})

app.listen(9000, function(req, res) {
    console.log("server is running on port : 9000");
});