import React from 'react'
import { useNavigate } from 'react-router-dom';

const Page2 = () => {
    const navigate = useNavigate();

    const goToPage1 = () => {
      navigate('/');
    };
  
    return (
      <div className=' bg-blue-500 h-full w-full '>
        <h1>Page 2</h1>
        <button onClick={goToPage1}>Go to Page 1</button>
      </div>
    );
}

export default Page2