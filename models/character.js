const mongoose = require("mongoose")

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    abilities: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    _id: {
        type: Number,
        required: true
    }

})


module.exports = mongoose.model("Character", characterSchema)