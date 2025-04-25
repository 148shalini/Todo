import React, { useState } from 'react'
import "./propDrilling.css"
import PropDrilling3 from './propDrilling3'


const PropDrilling = (prop) => {
    const [text2,setText2] = useState("")
  return (
    <div className='prop-main'>
        <input type="text" className='text-black' onChange={(e)=>{setText2(e.target.value)}} />
        <PropDrilling3 setText={prop.setText} text2={text2}/>
    </div>
  )
}

export default PropDrilling