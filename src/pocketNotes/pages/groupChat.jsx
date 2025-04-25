import React, { useState } from 'react';
import ChatHeader from '../component/chatHeader';
import ChatPanel from '../component/chatPanel';


const GroupChat = ({ group, messages, onSendMessage }) => {
    const [input, setInput] = useState('');
    
    const handleSend = () => {
        if (input.trim() === '') return;

        onSendMessage(input);
        setInput('');
    };

    return (
        <div className='flex flex-col h-full w-[75%]'>
            <ChatHeader initial={group.initial} name={group.name} color={group.color} />
            <ChatPanel messages={messages} />
            
            <div className='bg-[#001F8B] w-full h-[30%] relative p-5 rounded-bl-xl'>
                <textarea
                    className='relative w-full h-full p-4 pr-12 rounded-xl border border-gray-300 resize-none'
                    placeholder="Enter your text here..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === '' && !e.ctrlKey) {
                            e.preventDefault();
                            handleSend();
                        }
                    }}
                />
                <button
                    className="absolute right-5 bottom-6 font-semibold bg-transparent border-none outline-none focus:outline-none active:outline-none"
                    onClick={handleSend}
                    disabled={input.trim() === ''}
                >
                    <img
                        src={input.trim() === '' ? '/Assets/Images/grey.png' : '/Assets/Images/blue.png'}
                        alt="Send"
                        className="w-6 h-6 cursor-pointer"
                    />
                </button>
            </div>
        </div>
    );
};

export default GroupChat;
