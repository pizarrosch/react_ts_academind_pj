import React, {useRef, useContext} from "react";
import classes from '../styles/NewTodo.module.css';
import {TodosContext} from "../store/todos-context";

const NewTodo: React.FC = () => {

    const todoTextInput = useRef<HTMLInputElement>(null);
    const todosCtx = useContext(TodosContext);

    function submitHandler(event: React.FormEvent) {
        event.preventDefault();

        const enteredText = todoTextInput.current!.value;

        if (enteredText.trim().length === 0) {
            return;
        }

        todosCtx.addTodo(enteredText);
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor='text'>Todo text</label>
            <input type='text' id='text' ref={todoTextInput}/>
            <button>Add todo</button>
        </form>
    )
}

export default NewTodo;