const mongoose = require('mongoose');

const playersSchema = new mongoose.Schema({
   
    name: {
        type: String,
        required: true,
    },
    dorsal: {
        type: Number,
        required: true,
        unique: true,
    },
    position: {
        type: String,
        required: true,
    },
    nationality: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    id: {
        type: String,
        required: true,
        unique: true,
    },

}, { timestamps: true });

module.exports = mongoose.model('Player', playersSchema);
