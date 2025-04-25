import React, { useEffect } from 'react'
import "./page1.css"
import { useNavigate } from 'react-router-dom';

const Page1 = () => {
    const navigate = useNavigate();
    
    
    const goToPage2 = () => {
      navigate('/page2');
    };
  
    return (
      <div className='bg-blue-100 h-[100vh]  w-[100vw]'>
        <h1 className='text-black'>Page 1</h1>
        <button className='border text-black border-black p-4 ' onClick={goToPage2}>Go to Page 2</button>
      </div>
    );
}

export default Page1