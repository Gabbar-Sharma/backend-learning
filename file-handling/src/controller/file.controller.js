 const mongoose = require("mongoose")

 const filSchema = new mongoose.Schema({
    file:{
        originalName: {
            type: String,
        },
        filename:{
            type: String,
        },
         path: {
                type: String,
            },

            mimetype: {
                type: String,
            },

            size: {
                type: Number,
            },
    }
 },
{
        timestamps: true,
})

const fileModel = mongoose.model('file', filSchema )

module.exports = fileModel