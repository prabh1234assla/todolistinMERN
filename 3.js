const API_BASE = "http://localhost:3000";

const GetTodos = () => {
    const COST = fetch(API_BASE + "/todos")
      .then((res) => res.json())
      .catch((err) => console.error("Error : ", err));
};

GetTodos();