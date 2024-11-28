import React, {useState} from "react";
import Todo from "../models/todo";
import {TodosContextObj, TodosContextProviderProps} from "../types";

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC<TodosContextProviderProps> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    function addTodoHandler(todoText: string) {
        const newTodo = new Todo(todoText);
        setTodos((prev) => {
            return prev.concat(newTodo);
        })
    }

    function removeTodoHandler(itemId: string) {
        setTodos((prevTodos) => {
            return prevTodos.filter((todoItem) => todoItem.id !== itemId);
        })
    }

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    };

    return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
};

export default TodosContextProvider;