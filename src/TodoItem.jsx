export function TodoItem( {completed, id, title, toggleTodo, deleteTodo}) {
    return (
        <li>
            {/* each element in array needs and id in react */}
            <label>
            <input type="checkbox" 
            checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)} 
            />
            {title}
            </label>
            <button 
            onClick={() => deleteTodo(id)}
            className="btn btn-danger"
            >
                Delete
                </button>
            {/* with () => i am passing a function, without it just the result of the function */}
            </li>
    )
}