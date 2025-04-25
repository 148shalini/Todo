import React from 'react'
import "./propDrilling3.css"


const PropDrilling3 = ({setText,text2}) => {
  return (
    <div className='button-div'>
        <button type='button' className='text-black' onClick={()=>{setText(text2)}}>Submit</button>
    </div>
  )
}

export default PropDrilling3