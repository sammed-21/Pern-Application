import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
const ListTodo = () => {
  const [todos, setTodos] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("http://localhost:5000/todos");
      const data = await res.json();
      console.log(data);
      setTodos(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {todos.map((todo) => (
        <div>
          <p key={todo.todo_id}>{todo.description}</p>
          <Button variant="contained" color="primary">
            Edit
          </Button>
          
        </div>
      ))}
    </div>
  );
};

export default ListTodo;
