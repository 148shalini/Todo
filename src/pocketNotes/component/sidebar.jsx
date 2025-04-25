import React, {  useEffect, useRef, useState } from 'react';

const Sidebar = ({ groups, setGroups, setSelectedGroup }) => {
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupColor, setNewGroupColor] = useState('blue');
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null); // Create a reference for the popup container
  const customColors = ['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF'];
  const plus = "/Assets/Images/plus.png";

  const handleAddGroup = () => {
    if (!newGroupName.trim()) return;

   
  
    const getInitials = (name,max=2) => {
      return name
        .split(" ")
        .filter(word => word.length > 0)
        .map(word => word[0].toUpperCase())
        .slice(0, max)
        .join("");
    };

    const newGroup = {
      id:Date.now(),
      initial: getInitials(newGroupName,2),
      name: newGroupName,
      color: newGroupColor
    };
    
    setGroups([newGroup, ...groups]);
    // localStorage.setItem({"groups":JSON.stringify(groups)});

    setShowPopup(false); 
    setNewGroupName('');
    setNewGroupColor('#B38BFA');
  };
  useEffect(() => {
    // Function to handle click outside the popup
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setNewGroupName('');
    setNewGroupColor('#B38BFA');
        setShowPopup(false); // Close the popup if click is outside
      }
      
      
    };

    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (

    <div className='bg-white relative h-[100%] w-[25%] flex flex-col gap-4 '>
      <h1 className="text-3xl flex justify-center items-center font-roboto h-[10%]">Pocket Notes</h1>
      <div className="flex flex-col overflow-y-auto relative w-full h-[90%] p-0 ">

        {groups.map((note, index) => (
          <div key={index} className='flex items-center gap-4 p-5 rounded-xl hover:bg-gray-100'
            onClick={() => setSelectedGroup(note)}
          >
            <div className=" text-white w-[50px] h-[50px] flex items-center justify-center rounded-full font-bold" style={{ backgroundColor: note.color }}>
              {note.initial}
            </div>
            <div className="text-md text-black overflow-hidden text-ellipsis font-medium">{note.name}</div>
          </div>


        ))}
      </div>
      <div className='flex bottom-10 right-10 z-10  justify-end items-center  absolute'>
        <button className=' bg-[#16008B] h-[70px] w-[70px] rounded-full flex items-center justify-center'
          onClick={() => setShowPopup(true)}>
          <img src={plus} alt="Add" />
        </button>
      </div>

      {showPopup && (
        <div className="fixed top-0 z-20 left-0  w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div ref={popupRef} className="bg-white p-5   rounded-lg w-1/3">
            <label className="w-1/3 text-md font-semibold flex" >Create New group</label>
            <div className="flex items-center gap-6 mb-4">
              <label className="w-1/3 text-md font-semibold ">Group Name</label>
              <input
                type="text"
                placeholder="Enter group name"
                value={newGroupName}
                onChange={(e) => setNewGroupName(e.target.value)}
                className="border p-1 pl-4 w-full  mr-2 rounded-full"
              />

            </div>

            <div className="flex gap-3 mb-3">
              <label className="w-1/4 text-md font-semibold">Choose colour</label>
              {customColors.map((color, index) => (
                <div
                  key={index}
                  // className={`w-10 h-10 rounded-full cursor-pointer bg-${color}-500`}
                  className="w-8 h-8 rounded-full cursor-pointer border-2"
                  style={{ backgroundColor: color,
                    borderColor: newGroupColor === color && newGroupName.trim() ? 'black' : 'transparent'
                  }}
                  onClick={() => setNewGroupColor(color)}
                />
              ))}
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleAddGroup}
                disabled={!newGroupName.trim() || !newGroupColor}
                className={`px-4 py-2 rounded-md h-full w-[30%] text-white ${(!newGroupName.trim() || !newGroupColor) ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#001F8B]'
                  }`}
              > Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
