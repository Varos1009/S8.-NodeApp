const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    competition: {
        type: String,
        required: true,
    },
    place: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model('Event', eventsSchema);
