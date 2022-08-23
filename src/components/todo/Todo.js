import './Todo.css'
import TodoList from "../todo-list/TodoList";

const Todo = () => {
    const data =  [
        { id: 1, title: 'Link 1'},
        { id: 2, title: 'Link 2'},
        { id: 3, title: 'Link 3'},
    ]

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList />
        </div>
    )
}

export default Todo