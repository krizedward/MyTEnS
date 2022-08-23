import './Todo.css'
import { useState } from "react";
import TodoList from "../todo-list/TodoList";
import TodoCreate from "../todo-create/TodoCreate";

const Todo = () => {
    const [getTodos, setTodos ] =  useState ([
        { id: 1, title: 'Link 1'},
    ])

    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo))
        console.log(getTodos)
    }

    

    return (
        <div>
            <h3>List repository</h3>
            <TodoCreate onCrateTodo={eventCreateTodo}/>
            <TodoList data={getTodos}/>
        </div>
    )
}

export default Todo