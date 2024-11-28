import Todo from "./models/todo";
import {ReactNode} from "react";

export type TodosContextObj = {
    items: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void
};

export type TodosContextProviderProps = {
    children: ReactNode; // Define children as part of the props
};