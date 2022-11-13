import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import React from "react";

function Todo({ todo, toggleComplete, removeTodo }){
    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }

    return (
        <ListItem style = {{display: "flex"}}>
            <Checkbox
                checked={todo.completed}
                size = "small"
                color = "textPrimary"
                onClick = {handleCheckboxClick} />
            <Typography
                variant="overline"
                color = "textPrimary"
                style = {{
                    textDecoration: todo.completed ? "line-through" : null
                }}
            >
                {todo.task}
                </Typography>
            <IconButton color = "secondary" onClick = {handleRemoveClick}><DeleteIcon /></IconButton>    
        </ListItem>
    );
}
export default Todo;