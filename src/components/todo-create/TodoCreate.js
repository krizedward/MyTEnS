import { useState } from 'react'
import './TodoCreate.css'

const TodoCreate = (props) => {
    const [getInputTodo, setInputTodo] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const newData = {
            id: Math.floor(Math.random() * 100) +1,
            title: getInputTodo
        }

        props.onCrateTodo(newData)

        setInputTodo('')

        // console.log(newData)
    }

    const handleInputTodo = (event) => {
        setInputTodo(event.target.value)
        console.log(getInputTodo)
    }

    return (
        <form className="todo-form" onSubmit = {handleSubmit}>
            <input type="text" value={getInputTodo} onChange={handleInputTodo} placeholder="akun GitHub.."></input>
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoCreate