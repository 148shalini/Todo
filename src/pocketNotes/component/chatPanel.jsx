import React from 'react';


const ChatPanel = ({ selectedGroup, messages }) => {
  
  return (
    // overflow-y-auto
    <div className='bg-[#DAE5F5] overflow-auto h-[20%] flex-1 px-6 py-4'>
      {selectedGroup && (
        <div className="flex items-center gap-4 mb-4">
          <div
            className="w-12 h-12 rounded-full text-white font-bold flex items-center justify-center"
            style={{ backgroundColor: selectedGroup.color }}
          >
            
            {selectedGroup.initial}
          </div>
          <h2 className="text-lg font-semibold">{selectedGroup.name}</h2>
        </div>
      )}

      {messages?.map((msg,idx) => (
        <div key={idx} className="bg-white p-3 rounded shadow mb-2 max-w-l whitespace-pre-wrap break-words  ">
           <p className="text-gray-800 text-wrap overflow-hidden break-words">{msg.text}</p>
           <p className="text-xs text-gray-500 text-right mt-1">{msg.timestamp}</p>
        </div>
      ))}
    </div>
  );
};


export default ChatPanel;
