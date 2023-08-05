const express = require("express");
const router = express.Router();

const Note = require("../models/Notes");
//Route 1: Get all Notes using GET 
router.get("/", async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
//Route 2: Add a new Note using POST 
router.post("/add", async (req, res) => {
    try {
        const { title, content } = req.body;
        // Create New Note.
        const newNote = new Note({
            title, content
        })
        const savedNote = await newNote.save();
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

//Route 3: Delete an existing Note using DELETE.
router.delete("/delete/:id", async (req, res) => {
    //Find the note to be deleted and delete it.
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        res.json({ "Success": " Note Deleted", note: note }); 
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


module.exports = router; 
