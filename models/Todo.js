const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    timeStamp: {
        type: String,
        default: Date.now()
    }
})

module.exports = mongoose.model("todo", todoSchema)