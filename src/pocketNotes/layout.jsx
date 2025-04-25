import React, { useEffect, useState } from 'react';
import Sidebar from './component/sidebar';// your reusable Sidebar component
import Home from './pages/home';
import GroupChat from './pages/groupChat';

const Layout = () => {

    const [groups, setGroups] = useState(JSON.parse(localStorage.getItem("groups")) || []);
    // const [selectedGroup, setSelectedGroup] = useState({});
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [groupMessages, setGroupMessages] = useState(JSON.parse(localStorage.getItem("groupsMessages")) || {}); // stores messages per group
   
    useEffect(()=>{
      localStorage.setItem('groups',JSON.stringify(groups));
    },[groups]);

    useEffect(()=>{
      localStorage.setItem('groupsMessages',JSON.stringify(groupMessages));
    },[groupMessages])

    const handleSendMessage = (groupId, messageText) => {
      const formatDate = (date) => {
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        const time = date.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        });
        return `${day} ${month} ${year} . ${time}`;
      };
      const newMessage = {
        text: messageText,
        timestamp: formatDate(new Date()) 
      };
    
      setGroupMessages((prev) => ({
        ...prev,
        [groupId]: [...(prev[groupId] || []), newMessage],
      }));

      console.log(groupMessages);
      
    };
    
    
    return (
    <div className='flex h-screen w-screen'>
      <Sidebar groups={groups} setGroups={setGroups} setSelectedGroup={setSelectedGroup}/>
    
       <>
        {selectedGroup ? (
          <GroupChat
            group={selectedGroup}
            messages={groupMessages[selectedGroup.id] || []}
            onSendMessage={(message) => handleSendMessage(selectedGroup.id,message)}
          />
        ) : (
          <Home />
        )}
      </>
    </div>
  );
};

export default Layout;
