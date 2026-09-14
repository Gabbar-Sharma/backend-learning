const express = require("express");
const NotesModel = require("./models/noteModel");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Notes API is running...");
});

app.post("/create", async (req, res) => {
    try {
        const { title, description } = req.body;

        const newNote = await NotesModel.create({
            title,
            description,
        });

        res.status(201).json({
            success: true,
            message: "Note created successfully",
            data: newNote,
        });

    } catch (error) {
        console.error("Create note error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to create note",
            error: error.message,
        });
    }
});

module.exports = app;