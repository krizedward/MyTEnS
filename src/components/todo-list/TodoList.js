import './TodoList.css'

const TodoList = (props) => {
    console.log(props.data)
    
    return (
        <ul>
           {
            props.data.map((todo) => {
                return <li key={todo.id}>{todo.title}</li>
            })
           } 
        </ul>
    )
}

export default TodoList