import { useState } from 'react'
import student from './data'
import './App.css'

function App() {

 const [ num , setNum ]= useState(0)

  return (
    <>

      <div className="parent">

      {student.map ((student, index ) =>(

        <div key={ student.id } className="card">
          <h1>{student.name}</h1>
          <h3>{student.age }</h3>
          <h3>{student.job}</h3>
          <h4>{student.dec}</h4>
        </div>
      ))}

      </div>




       <button onClick={()=>setNum((num)=>num+1)}>up</button>
       <h2>{num}</h2>
       <button onClick={()=>setNum ((num)=>num-1)}>down</button>




    </>
  )
}

export default App
