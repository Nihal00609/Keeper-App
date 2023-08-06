require("dotenv").config();
const express = require("express");
const connectToMongo = require("./models/Notes")
var cors = require('cors')
const path = require("path");

var app = express()
app.use(cors())
const PORT = process.env.PORT||5000;

app.use(express.json())

// Static Files access
app.use(express.static(path.join(__dirname,'../Frontend/build')))

app.use("/", require("./routes/notes"))

app.get("*", function (req,res) {
    res.sendFile(path.join(__dirname,"../Frontend/build/index.html"))
})



app.listen(PORT, function (req, res) {
    console.log(`Server started on port ${PORT}`);
});