const mongoose = require("mongoose")
const schema = mongoose.Schema

const todoSchema = new schema(
    {
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
    }
)

const Todo = mongoose.model("todo", todoSchema)
module.exports = Todo