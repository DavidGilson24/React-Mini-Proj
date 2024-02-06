import './style.css'
import { useState } from "react"

export default function App(){
  const[count, setCount] = useState(0)

  return(
    <>
      <h1> The counter button! </h1>
      <div className='btn-style'>
        <button 
          type='button'
          onClick={() => setCount(count + 1)} 
          id='btn'
          > Increase !</button>
      </div>
      <h1 id='counter'> {count} </h1>
    </>
  )
}
