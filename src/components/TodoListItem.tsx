import React from "react";
import Todo from "../models/todo";

const TodoListItem: React.FC<{ text: string }> = (props) => {
    return (
        <li>{props.text}</li>
    )
}

export default TodoListItem;