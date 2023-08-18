import { useEffect, useState } from 'react'
 
import './App.css'
import ListTodo from './components/ListTodo'
import InputTodo from './components/InputTodo'

function App() {
  const [todos, setTodos] = useState([])
//   useEffect(async () => {
//     const res = await fetch("https://localhostA:5000/todos", {
//       method: "GET",
//       body:JSON.stringify()
//    })
//  })

 
  return (
    <>
      <InputTodo/>
     <ListTodo/>
         hi
    </>
  )
}

export default App
