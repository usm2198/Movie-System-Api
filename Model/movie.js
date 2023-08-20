const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    creatAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Movie3',movieSchema)