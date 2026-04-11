
import { useState } from 'react'
import './App.css'

function App() {
  const[todos,setTodos] = useState([
  {
      title : "First Title",
      desc : "My First new Desc is ..."
  },
  {
      title : "Second Title",
      desc : "My Second new Desc is ..."
  },
  {
      title : "Third Title",
      desc : "My Third new Desc is ..."
  },
]);


  return (
    <div className='container'>
      <h2> All Todo List - </h2>
       {todos?.map((todo) => {
          return (<div>
             title is - {todo?.title}
             Desc is - {todo?.desc}
            </div> )
       })}
    </div>
  )
}

export default App
