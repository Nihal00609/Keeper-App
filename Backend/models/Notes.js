require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB Connected!");
}).catch((err) => {
    console.log(err);
});

const notesSchema = new mongoose.Schema({
    title: String,
    content: String
})

const Note = mongoose.model("Note",notesSchema);



module.exports = Note;