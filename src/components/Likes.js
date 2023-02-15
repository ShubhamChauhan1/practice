import React, { useState } from 'react'

export default function Likes() {
    const [Increase,setIncrease] = useState(0)
    const [message,setmessage] = useState("")
  
  
    const handleIncrease =()=>{
  
       setIncrease(Increase+1)
  
       if(Increase === 9){
        setmessage("congrats for completing your first mile stone");
       }
       else if(Increase === 19){
        setmessage("congrats for completing your second mile stone");
       }
       else{
        setmessage("")
       }
       
    }
    const handleDecrease =()=>{
      if(Increase > 0){
        setIncrease(Increase-1)
      }
      setmessage("")
      
   }
  
    return (
      <div className='App-header'>
        Application
        <div className='button my-3' style ={{color:'black'}}>
        <b>{Increase} likes</b><br />
        <button onClick={handleIncrease} style={{fontSize:'25px',borderRadius:'10px'}}>Increase</button>
        <button className="mx-2" onClick={handleDecrease} style={{fontSize:'25px',borderRadius:'10px'}}>Decrease</button>
        <b> <div style={{color:'green'}}>{message}</div> </b>
        </div>
  
      </div>
    )
}
