
import { useState } from 'react'
import './App.css'

function App() {
  const[count,setcount] = useState(0);

  const Counthandler = () => {
    setcount(count + 1);
  }

  return (
    <div className='container'>
       <button onClick={Counthandler}> Counter++ {count} </button>
    </div>
  )
}

export default App
