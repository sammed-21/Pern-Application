const express = require("express");

const app = express();
const cors = require("cors");
const pool = require("./db");
app.use(cors());

app.use(express.json());

//Routes??

//create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

//get all todo
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (error) {
    console.log(error.message);
  }
});

//get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const {id} = req.params;
    console.log(id);
    
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
        id,
    ]);
    res.json(todo.rows[0]);
} catch (error) {
    console.log(error.message);
}
});

//update a todo
app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params; 
        const { description } = req.body;
        
        let todo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id=$2", [ description,id
        ]);
        res.json("todo is updated")
        // res.json(todo)
 
    } catch (error) {
        console.log(error.message);
        
    }
})
//delete a todo

app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTodo = await pool.query("DELETE FROM todo WHERE todo_id=$1", [id])
        res.json("deleted the todo")
    } catch (error) {
        
        console.log(error.message);
    }
})

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
