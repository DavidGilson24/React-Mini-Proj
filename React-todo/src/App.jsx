import './style.css'
import { useState } from "react"

export default function App(){
  const [task, setTask] = useState([])
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => setInputValue(event.target.value);

  const addTask = () => {
    setTask([...task, inputValue]);
    setInputValue('');
  }
  
  return(
    <>
      <h1> The to-do list! </h1>

      <form id = 'task-form' className='task-form'>
        <input 
          value={inputValue} 
          onChange={handleInputChange} 
          type = 'text' 
          id = 'text-field'
        />

        <div className='btn-style'>
          <button 
            type='button' 
            onClick={addTask}
            id='btn'
            > Add a task !</button>
        </div>
      </form> 

      <ul>
          {task.map((taskItem, index) => (
            <li key={index}>{taskItem}</li>
          ))}
      </ul>

      <h3 id='nothing'> Nothing here! </h3>
    </>
  )
}
