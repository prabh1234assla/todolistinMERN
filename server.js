"use strict"

const [express, mongoose, cors] = [require("express"), require("mongoose"), require("cors")];
const app = express();
const Todo = require("./models/Todo");
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.json())
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

mongoose.connect("mongodb://127.0.0.1:27017/mern-todo-list", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected to MONGODB")
}).catch(() => {
    console.error()
})

app.listen(port, () => {
    console.log("server started on PORT ", port)
})

app.get("/todos", async(req, res) => {
    const todos = await Todo.find()
    res.json(todos)
})

app.post("/todo/new", async(req, res) => {
    const todo = await new Todo({
        text: req.body.text
    })
    todo.save()
    res.json(todo)
})

app.delete("/todo/delete/:id", async(req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id)
    res.json(result)
})

app.get("/todo/complete/:id", async(req, res) => {
    const todo = await Todo.findById(req.params.id)
    console.log(todo, req.params.id)
    todo.completed = !todo.completed
    todo.save()
    res.json(todo)
})