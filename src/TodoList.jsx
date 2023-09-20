import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
        {todos.length === 0 && "No Todos"}
        {/* SHORTCIRCUITING: show "no todos if there aren't any" */}
        {todos.map(todo => {
        return (
            <TodoItem 
            {...todo}
            // spread (...) todo to get its props: todo.title, todo.completed, todo.id
           key = {todo.id} 
           toggleTodo = {toggleTodo}
           deleteTodo={deleteTodo}/>
            )
        })}
  
    </ul>
    )
}