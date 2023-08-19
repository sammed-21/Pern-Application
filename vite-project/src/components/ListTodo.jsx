import React, { Fragment, useEffect, useState } from "react";
// import Button from "@mui/material/Button";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import EditTodo from "./EditTodo";
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
  const handleDelete = async (id) => {
    try {
      console.log(id);

      const deletedTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos((prev) => prev.filter((todo) => todo.todo_id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      
      {/* {todos.map((todo) => (
        <div key={todo.todo_id} className="flex gap-3">
          <p className="text-black ">{todo.description}</p>
          <Button variant="contained" color="primary">
            Edit
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleDelete(todo.todo_id)}
          >
            Delete
          </Button>
        </div>
      ))} */}
     <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="left">description</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right"  >Delete</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo) => (
            <TableRow
              key={todo.todo_id}
 
            >
              <TableCell  >
                {todo.description}
              
              </TableCell>
              
              <TableCell align="right"><EditTodo editDesc={todo}/></TableCell>
              <TableCell align="right"><Button  variant="contained"
            color="error"
            onClick={() => handleDelete(todo.todo_id)}>Delete</Button></TableCell>
            
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default ListTodo;
