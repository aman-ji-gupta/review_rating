const mongoose = require("mongoose");


const url = process.env.URL;

//yha hum monogo db se connectiviy ka code likhenge
mongoose.connect("mongodb://127.0.0.1:27017/review", { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB connection Extablished Successfully...!");
})