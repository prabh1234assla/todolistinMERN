import "./App.css";
import { useState, useEffect } from "react";

const API_BASE = "http://localhost:300n0";

function App() {
  const [todos, setTodos] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    GetTodos();
  }, []);

  const GetTodos = () => {
    console.log('js')
    fetch(API_BASE + "/todos")
      .then((res) => res.json())
      .then((res) => setTodos(res))
      .catch((err) => console.error("Error : ", err));
  };

  return (
    <div className="App">
      <h1>todolist</h1>
      <div className="list">
        {todos.map((todo) => (
            <>
                <div className="task" key={todo._id}>
                    <h2 className="name">{todo.text}</h2>
                    {completed(todo.completed, todo.id)}
                    <h4 className="timestamp">{todo.timeStamp}</h4>
                </div>
            </>
        ))}
      </div>
    </div>
  );
  
  function completed(tag, id){
    console.log(toggleStatus(id))
    if(tag)
      return <div className="checked" onClick={toggleStatus(id)}>✖</div>
    else
      return <div className="checked" onClick={toggleStatus(id)}></div>
  }
  
  function toggleStatus (id){
    const data = fetch(API_BASE + "/todo/complete/" + id).
      then(res => res.json())
    console.log(todos)
  
    setTodos(todos => todos.map(todo => {
      if(todo.id == data.id)
        todo.completed = data.completed
  
      return todo
    }))
  }

}


export default App;
