import React from 'react';


const ChatHeader = ({ initial, name,color }) => {
  return (
    <div className='h-[10%] flex items-center gap-4 px-6 bg-[#001F8B]'>
      <div className=" text-white w-[50px] h-[50px] flex items-center justify-center rounded-full font-bold"  style={{ backgroundColor: color }} >
        {initial}
      </div>
      <div className='text-xl font-semibold text-white'>{name}</div>
    </div>
  );
};

export default ChatHeader;
