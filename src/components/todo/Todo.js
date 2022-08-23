import './Todo.css'
import TodoList from "../todo-list/TodoList";
import TodoCreate from "../todo-create/TodoCreate";

const Todo = () => {
    const data =  [
        { id: 1, title: 'Link 1'},
        { id: 2, title: 'Link 2'},
        { id: 3, title: 'Link 3'},
    ]

    return (
        <div>
            <h3>List repository</h3>
            <TodoCreate />
            <TodoList data={data}/>
        </div>
    )
}

export default Todo