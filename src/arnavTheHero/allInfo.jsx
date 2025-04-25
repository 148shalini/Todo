import React from 'react'
import { useNavigate } from 'react-router-dom'

const AllInfo = () => {
    const navigate = useNavigate();
  return (
    <div className=' bg-blue-900 h-[100vh] flex flex-col items-center justify-center w-[100vw]'>
        <button className=' bg-black text-white border border-white' onClick={()=>{navigate("/prop")}}>Prop Drilling</button>
        <button className=' bg-black text-white border border-white' onClick={()=>{navigate("/hook")}}>Hooks Basic</button>
        <button className=' bg-black text-white border border-white' onClick={()=>{navigate("/advHook")}}>Hooks Advance</button>
        <button className=' bg-black text-white border border-white' onClick={()=>{navigate("/route")}}>Routing Concept</button>
        <button className='bg-black text-white border border-white' onClick={()=>{navigate("/assignment")}}>Assignment</button>
        <button className='bg-black text-white border-white' onClick={()=>navigate("/pocketNotes")}>Pocket Notes</button>
    </div>
  )
}

export default AllInfo