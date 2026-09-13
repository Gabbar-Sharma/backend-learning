const mongoose = require('mongoose');
// yeha schema banye hai
const noteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
   description: {
        type: String,
        required: true
    }
})

// yeha ek model banayenge 
const NotesModel = mongoose.model('notes', noteSchema)
module.exports = NotesModel;  