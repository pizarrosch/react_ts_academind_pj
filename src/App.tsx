import React, {useState} from 'react';
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    function addTodoHandler(todoText: string) {
        const newTodo = new Todo(todoText);
        setTodos((prev) => {
            return prev.concat(newTodo);
        })
    }

    return (
        <div>
            <NewTodo onAddTodo={addTodoHandler}/>
            <Todos items={todos}/>
        </div>
    );
}

export default App;
