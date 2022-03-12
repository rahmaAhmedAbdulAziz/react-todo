import React , {useState, useRef, useEffect} from 'react';
import './App.css';
import TodoList from './TodoList'

const localKey = 'todoApp.todo'

function App() {
 const [todo,setTodo] = useState([])
 const todoName = useRef()


useEffect(() => {
  localStorage.setItem(localKey)},
  [todo])
}


 function handleAdd(e){
const name= todoName.current.value
if (name === '') return
setTodo(prevTodo => {
  return[...prevTodo, {id:1 , name: name, complete:false}]
})
todoName.current.value = null
 }

  return (
    <div className="App">
      <TodoList todo={todo}/>
      <input ref={todoName} type="text"/>
      <button onClick={handleAdd}> Add</button>
      <button>delete</button>
    </div>
  );
}

export default App;
