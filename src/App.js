import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList'

const localKey = 'todoApp.todo'

function App() {
  const [todo, setTodo] = useState([{ id: 1, name: '', complete: true }])
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
    <div>
      <h1 style={{fontStyle:"italic" , textAlign:"center" }}>Todo</h1>
    <div className="App" style={{background:"green"  , margin:"10px" , height:"200px", color:"white" }}>

      <TodoList todos={todo} />
      <input ref={todoName} type="text" style={{ height:"60px" , width:"880px", margin:"60px" }}/>
      </div>
      <button onClick={handleAdd} style={{width:"90px" , height:"40px", background:"green" }}> Add</button>
      <button onClick={handelClearTodo} style={{width:"90px" , height:"40px", background:"green"}}>delete</button>
      <div>{todo.filter(todo => !todo.complete).length}</div>
      </div>

  )
}

export default App;
