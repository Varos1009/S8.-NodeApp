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
        required: false,
    },
    place: {
        type: String,
        required: false,
    },

});

module.exports = mongoose.model('Event', eventsSchema);
