import React from 'react'
import { useState } from 'react'
import "./App.css"

export default function App() {
    const [count,setcount] = useState(0)

    const Increment = ()=>{
        if(count < 10){
            setcount(count+1);
        }

       
    }
    const Decrement = ()=>{
        if(count > 0){
            setcount(count-1);
        
        }
        
    }
    let myStyle = {
        color:'green'
    }
    if(count >= 5 && count <= 9){
        myStyle = {
            color:'blue'
        }
    }
    if(count === 10){
        myStyle = {
            color:'red'
        }
    }

  return (
    <div className='App-header'>
      <h1 style={myStyle}>Counter : {count}</h1>
      <button style = {myStyle} onClick={Increment}>Increment</button>
      <button style = {myStyle} onClick={Decrement}>Decrement</button>
    </div>
  )
}
