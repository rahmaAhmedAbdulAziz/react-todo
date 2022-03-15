import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList'

const localKey = 'todoApp.todo'

function App() {
  const [todo, setTodo] = useState([{ id: 1, name: 'Todo', complete: false }])
  const todoName = useRef()

  // useEffect(() => {
  //   const staredTodo = JSON.parse(localStorage.getItem(localKey))
  //   if (setTodo) setTodo(staredTodo)
  // }, [])


  // useEffect(() => {
  //   localStorage.setItem(localKey)
  // }, [todo])

  function handleAdd(e) {
    const name = todoName.current.value
    if (name === '') return
    setTodo(prevTodo => {
      return[...prevTodo, {id:1 , name: name, complete:false}]
    })
    todoName.current.value = null
  }

  function handelClearTodo() {
    setTodo([])
  }

  return (
    <div className="App">

      <TodoList todos={todo} />
      <input ref={todoName} type="text" />
      <button onClick={handleAdd}> Add</button>
      <button onClick={handelClearTodo}>delete</button>
      <div>{todo.filter(todo => !todo.complete).length}</div>
    </div>

  )
}

export default App;
