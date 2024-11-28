import React from "react";
import classes from '../styles/TodoItem.module.css';

const TodoListItem: React.FC<{ text: string, key: string,  onRemoveTodo: () => void }> = (props) => {
    return (
        <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>
    )
}

export default TodoListItem;