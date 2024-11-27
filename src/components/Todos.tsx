import React from "react";
import Todo from "../models/todo";
import TodoListItem from "./TodoListItem";
import classes from '../styles/Todos.module.css';

const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.items.map((item) => (
                <TodoListItem key={item.id} text={item.text}/>
            ))}
        </ul>
    )
}

export default Todos;