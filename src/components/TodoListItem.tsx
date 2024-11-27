import React from "react";
import classes from '../styles/TodoItem.module.css';

const TodoListItem: React.FC<{ text: string }> = (props) => {
    return (
        <li className={classes.item}>{props.text}</li>
    )
}

export default TodoListItem;