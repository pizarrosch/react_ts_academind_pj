import React from "react";
import Todo from "../models/todo";
import TodoListItem from "./TodoListItem";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <ul>
            {props.items.map((item) => (
                <TodoListItem key={item.id} text={item.text}/>
            ))}
        </ul>
    )
}

export default Todos;