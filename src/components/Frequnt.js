import React, { useState } from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Frequnt = ({Qustion,Answer}) => {
    const [answer,setanswer] = useState(false)
  return (
    <div className='qustion'>
    <h3>{Qustion} 
    <button onClick={()=>{setanswer(!answer)}}>
    {
        answer ? <AiFillMinusCircle/> : <AiFillPlusCircle/>  
    }        
    </button></h3>
    {answer && <p className='ans'>{Answer}</p>}
    </div>
  )
}

export default Frequnt