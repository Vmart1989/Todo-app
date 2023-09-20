
import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
import "./styles.css"

export default function App() {
  // in react components, you can only return one element. A trick is to wrap everthing in a div or a fragment: <> </>
  const [todos,setTodos] = useState(()=> {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue === null) return []
    return JSON.parse(localValue)
  })
  
useEffect(()=> {
  localStorage.setItem("ITEMS", JSON.stringify(todos))
}, [todos])
// run this function every time the todos value changes
// store todos in local storage

  function addTodo(title) {
    setTodos((currentTodos) => {
            return [
            ...currentTodos, 
            {id:crypto.randomUUID(), 
            title, 
            completed: false}
            ]
        })
  }


function toggleTodo(id, completed) {
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed}
        // with '...' (spread) I create a new object instead of mutating the original
      }
        return todo
    })
  })
}

function deleteTodo(id) {
  setTodos(currentTodos => {
    return currentTodos.filter(todo => todo.id !== id)
    // if my todo id is not equal to this id I want to keep it otherwise remove it
  })

}
  
  return (
  <>
    <NewTodoForm onSubmit={addTodo}/>
    <h1 className="header">Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo}
    deleteTodo={deleteTodo} />

  </>
  )
}