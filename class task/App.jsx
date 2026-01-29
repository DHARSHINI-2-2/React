import { useState } from 'react'
import './App.css'

function App() {
  const [num1,setNum1]=useState("")
  const [num2,setNum2]=useState("")

  const a=Number(num1)
  const b=Number(num2)

  return(
    <div>
      <h1 style={{textDecoration:"underline"}}>Calculator</h1>
      <input type="number" placeholder='enter number1' 
      onChange={(e)=>setNum1(e.target.value)}/>
      <input type="number" placeholder='enter number2' 
      onChange={(e)=>setNum2(e.target.value)}/>
      <div style={{height:"200px", width:"350px", border:"1px solid", margin:"20px 465px", background:"lightblue"}}>
        <h4>Result:</h4>
        <p><strong>Addition:</strong>{a+b}</p>
        <p><strong>Subtraction:</strong>{a-b}</p>
        <p><strong>Multiplication:</strong>{a*b}</p>
        <p><strong>Division:</strong>{b==0 ? "cannot divide by 0" : a/b}</p>
      </div>
    </div>
 )
}

export default App
