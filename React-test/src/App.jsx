import './style.css'

export default function App(){
  return(
    <>
      <form className='new-item-form'>
        <div className='form-row'>
          <label htmlFor='item'> New item: </label>
          <input id='item'/>
        </div>
        <button className='btn'> Add Task </button>
      </form>
      <h1 className='header'> Task List</h1>
    </>
  )
}
