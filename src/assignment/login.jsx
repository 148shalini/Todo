import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Login = () => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleSignup = () => {
        if (username) {
          navigate(`/images/${username}`);
        }
      };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-200">
        <div className='bg -white p-6  rounded-xl  w-80'>
            <input type="text" placeholder='Enter userName' className='w-full p-2 mb-4 border rounded' value ={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
            <div className='relative mb-4'>
            <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter password"
           className='w-full p-2 mb-4 border rounded'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className='absolute right-3 top-2 cursor-pointer text-gary-600' onClick={()=>setShowPassword(!showPassword)}>
          {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>

            </div>
            {/* <button
          className="bg-blue-500 text-white w-full p-2 mb-4 border rounded hover:bg-blue-600"
          onClick={handleSignup}
        >
          Login
        </button> */}
        <div className="flex justify-normal">
  <button
    className="bg-blue-500 text-white p-2 px-4 border rounded hover:bg-blue-600"
    onClick={handleSignup}
  >
    Login
  </button>
</div>



        </div>
        
    </div>
  )
}

export default Login