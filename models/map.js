const mongoose = require('mongoose');

const mapSchema = new mongoose.Schema({
    club: {
        type: String,
        required: true,
        unique: true,
    },
    stadium: {
        type: String,
        required: true,
    },
    capacity : {
        type: Number,
        required: true,
    },
    direction: {
        type: String,
        required: true,
    },
    lat: {
        type: Number,
        required: true,
    },
    lng: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    community: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model('Map', mapSchema);

