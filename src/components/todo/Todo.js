import './Todo.css'
import { useState } from "react";
import TodoList from "../todo-list/TodoList";
import TodoCreate from "../todo-create/TodoCreate";
import LinkMenu from "../link/Link";
import NavigationBar from '../NavigationBar';

// https://santrikoding.com/tutorial-expressjs-dan-reactjs-4-konfigurasi-router


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
            <NavigationBar/>
            <h3>List repository</h3>
            <LinkMenu/>
            <TodoCreate onCrateTodo={eventCreateTodo}/>
            <TodoList data={getTodos}/>
        </div>
    )
}

export default Todo