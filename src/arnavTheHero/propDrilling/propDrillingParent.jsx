import React, { useState } from 'react'
import PropDrilling from './propDrilling'
import PropDrilling2 from './propDrilling2'

const PropDrillingParent = () => {
    const [text,setText]=useState("")
  return (
    <div className=' bg-blue-100 h-[100vh] w-full flex flex-col justify-center items-center'>
    <PropDrilling setText={setText}/>
    <PropDrilling2 text={text}/>
    </div>
  )
}

export default PropDrillingParent