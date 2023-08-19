import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const InputTodo = () => {
  const [description, setDescription] = useState("");
  const handleSubmit = async (e) => {
    console.log(description)
    e.preventDefault();
    try {
      console.log('xxxxxxxxxxxx')
      console.log(description)
      const body = { description };
      console.log(body)
 
      const res = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log("client")
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-3 ">
        <TextField
          margin="normal"
          required
          fullWidth
          id="descriptioniption"
          label="descriptionription"
          name="descriptionription"
          onChange={(e) => setDescription(e.target.value)}
          autoComplete="email"
          autoFocus
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default InputTodo;
