import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './Todoslice'
import './App.css'



const Addtodo = () => {
    const dispatch=useDispatch()
    const [Input,setInput]=useState("")

    const handlesubmit=(e)=>{
        e.preventDefault();
       dispatch(addTodo(Input))
       setInput("");

      
    }


  return (  
    <>
    <form onSubmit={handlesubmit}>
        <input onChange={(e)=>setInput(e.target.value)} value={Input} type="text"/>

        <button type='submit'>button</button>
    </form>


    </>
  )
}

export default Addtodo