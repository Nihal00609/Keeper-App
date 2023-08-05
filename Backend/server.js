require("dotenv").config();
const express = require("express");
const connectToMongo = require("./models/Notes")
var cors = require('cors')

var app = express()
app.use(cors())
const PORT = process.env.PORT||5000;

app.use(express.json())

app.use("/", require("./routes/notes"))



app.listen(PORT, function (req, res) {
    console.log(`Server started on port ${PORT}`);
});