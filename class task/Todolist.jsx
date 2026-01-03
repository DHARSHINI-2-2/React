import React, { useState } from 'react'

function Todolist() {
  const [tasks, setTask]=useState([])    //([]) to store text input
  const [text,setText]=useState("")      //("") to get text input
  const addtask=()=>{
      setTask([...tasks, {name:text, completed:false}])
      setText("")
  }
  const deletetask=(index)=>{
    setTask(tasks.filter((_, i) => i !== index))
  }
  return (
    <div>
      <h1>To-do List</h1>
      <input value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter task' />
      <button onClick={addtask}>Add</button>

      <ul>
        {tasks.map((task, index)=>(
          <li key={index}>
            <input 
            type='checkbox'
            checked={tasks.completed}
            />
            <span>{task.name}</span>
            <button onClick={()=>deletetask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todolist