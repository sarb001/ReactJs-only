
import { useState } from 'react'
import './App.css'

function App() {
  const[maininput,setmaininput] = useState('');

  const Changehandler = (finalval) => {
     setmaininput(finalval);
     console.log('change value -',maininput);
  }

  const[todos,setTodos] = useState([
  {
      id :  1,
      title : "First Title done ",
  },]);

  const Addtodohandler = () => {
     setTodos([...todos , {
       title : maininput
     }])
  }

  return (
    <div className='container'>
      <div>
         <input type = "text" placeholder='Enter text.....'  value = {maininput} 
           onChange={(e) => Changehandler(e.target.value)}
         />
      </div>
      <div>
         <button onClick={Addtodohandler}> Add tODO nOW </button>
      </div>
      <div className = "todolist">
       {todos?.map((todo,i) => {
         return (
         <div key = {i}>
            <div>  title is - {todo?.title} </div> 
            </div> )
       })}
      </div>
    </div>
  )
}

export default App
