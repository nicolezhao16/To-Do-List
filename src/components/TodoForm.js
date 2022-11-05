import { Button, TextField } from "@material-ui/core";
import {v4 as uuid} from "uuid";
import React, {useState} from "react";

function TodoForm({addTodo}) {
    const[todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo({...todo, task:e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id:uuid() });
            setTodo({ ...todo, task: ""});
        }
    }

    return(
        <form className = "todo-form" onSubmit={handleSubmit}>
            <TextField
                label = "To Do Task" 
                name = "task"
                type = "text"
                variant = "outlined"
                multiline = "controlled"
                margin = "normal"
                value = {todo.task}
                onChange = {handleTaskInputChange}
            />
            <Button type="submit" size = "small" variant = "contained" color = "primary">Add</Button>
        </form>
    );
    
}

export default TodoForm;



