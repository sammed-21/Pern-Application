import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({ editDesc }) {
  const [open, setOpen] = React.useState(false);
  const [description, setDescription] = React.useState(editDesc.description);

  const handleClickOpen = () => {
     
    setOpen(true);
  };
 
  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate =async () => {
    try {
     
      const body = { description }
      const res = await fetch(`http://localhost:5000/todos/${editDesc.todo_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
          
        },
        body: JSON.stringify(body)
      })
      console.log(res)
      setOpen(false)
      window.location='/'
      // console.log(body)
      // console.log(editDesc.todo_id)
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Description</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="description"
            defaultValue={editDesc.description}
            label="Edit Description"
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdate}>Edit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
