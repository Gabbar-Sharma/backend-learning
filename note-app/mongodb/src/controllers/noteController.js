const NotesModel = require("../models/noteModel");

const createNotesController = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newNote = await NotesModel.create({
      title,
      description,
    });
    return res.status(201).json({
      message: "Note create successfully",
      data: newNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Bhai erorr se nipat lo phele",
    });
  }
};

// getAllNotes
const getAllNotesController = async (req, res) => {
  try {
    const getAllNotes = await NotesModel.find();
    return res.status(200).json({
      message: "Get all note successFully",
      data: getAllNotes,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Again erorr aa rha bhai",
    });
  }
};

//getSingleNotes

const getSingleNoteController = async (req, res) => {
  try {
    const noteId = req.params.id;
    const getSingleNotes = await NotesModel.findById(noteId);
    return res.status(200).json({
      message: "Get single notes successfully",
      data: getSingleNotes,
    });
  } catch (error) {
    return res.status(500).json({
      message: "getSingleNote successfully",
    });
  }
};

//UpdateNotes

const updatedNotesController = async (req, res) => {
  try {
    const noteId = req.params.id;
    const body = req.body;
    const updateNotes = await NotesModel.findByIdAndUpdate(noteId, body, {
      new: true,
    });

    return res.status(200).json({
      message: "notes update successfully",
      data: updateNotes,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server erorr",
    });
  }
};

const singleEntityUpdateController = async (req, res) => {
  try {
    let noteId = req.params.id;
    let body = req.body;

    let updatedNote = await NotesModel.findByIdAndUpdate(noteId, body, {
      new: true,
    });

    return res.status(200).json({
      message: "Note updated successfully",
      data: updatedNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

// DeleteNotes api
const deleteNoteController = async (req, res) => {
  try {
    const noteId = req.params.id;
    const deleteNotes = await NotesModel.findByIdAndDelete(noteId);
    return res.status(200).json({
      message: "Notes delete successfully",
      data: deleteNotes,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal erorr from delete",
    });
  }
};

module.exports = {
  createNotesController,
  getAllNotesController,
  getSingleNoteController,
  updatedNotesController,
  singleEntityUpdateController,
  deleteNoteController,
};
