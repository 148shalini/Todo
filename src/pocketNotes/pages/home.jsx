import React from 'react';

const Home = () => {
    const vector = "/Assets/Images/Vector.png";
    const imageremove = "/Assets/Images/homeBgImage.png";

    return (
        
            <div className='bg-[#DAE5F5] p-4 w-[75%] h-[100%] flex flex-col items-center justify-between  text-center '>
               <div/>
               <div>
                <img src={imageremove} alt="Placeholder" className='mb-4' />
                <h1 className='text-2xl font-bold mb-2'>Pocket Notes</h1>
                <p className='mb-6'>
                    Send and receive messages without keeping your phone online.<br />
                    Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
                </p>
                </div>
                {/* < className='w-full h-[30%]'> */}
                <div className='flex items-center mt-14'>
                    <img src={vector} alt="Lock" />
                    <span className="text-sm text-gray-600 ml-2">end-to-end encrypted</span>
                </div>
                
               
            </div>
        
    );
};

export default Home;
