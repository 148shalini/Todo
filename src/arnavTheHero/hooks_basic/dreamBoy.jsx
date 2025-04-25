import React, {  useEffect, useState } from 'react'
import './dreamBoy.css'

const Parent = () => {
    const [a,setA] = useState(0);
    const [text,setText] = useState("");

    const increment = ()=>{
        const temp = a+1;
        setA(temp)
    }
    const decrement = ()=>{
        if(a==0){
            // alert("Chutiye ne bola dalne ko");
            return        
        }

        const temp = a-1;
        setA(temp)
    }

    useEffect(() => {
    //   increment()
      
    }, [text])
    

    
  return (
    <div className='main'>
        <h1>Dream Boy {a}</h1>
        <div className='main2'>
            
        <button type='button' onClick={()=>{increment()}}>Increment
            </button>
        {/* <button type='button' onClick={()=>{setA(a+1)}}>Increment
        </button> */}
        {/* without using function call */}

        <button type='button' onClick={()=>{decrement()}}>Decrement
            </button>
            
            </div>

            {
                a == 5 ? <div> <p>Hi I am 5 </p> </div> :
                a == 11? <div><p>Hi I am 11 yuhuuu </p></div>:
                <div>
                    Hi I am everything else
                </div>
            }

            <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
            <p>{text}</p>
    </div>
  )
}

export default Parent