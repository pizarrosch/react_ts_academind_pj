import React, {useContext} from "react";
import TodoListItem from "./TodoListItem";
import classes from '../styles/Todos.module.css';
import {TodosContext} from "../store/todos-context";

const Todos: React.FC = () => {

    const todosCtx = useContext(TodosContext);

    return (
        <ul className={classes.todos}>
            {todosCtx.items.map((item) => (
                <TodoListItem key={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}/>
            ))}
        </ul>
    )
}

export default Todos;