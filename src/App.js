// import PropDrilling from'./arnavTheHero/propDrilling/propDrilling'
// import PropDrilling2 from './arnavTheHero/propDrilling/propDrilling2'

// import React, { useState } from "react";
// import React from "react";

// import Parent from './arnavTheHero/hooks_basic/dreamBoy';

// import Home from "./arnavTheHero/routing_concept/Home";
// import About from "./arnavTheHero/routing_concept/About";
// import Page2 from "./arnavTheHero/routing_concept/page2";
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import Page1 from "./arnavTheHero/routing_concept/page1";
import AllInfo from './arnavTheHero/allInfo';
import Parent from './arnavTheHero/hooks_basic/dreamBoy';
import PropDrillingParent from './arnavTheHero/propDrilling/propDrillingParent';
import Login from './assignment/login';
import Fullimage from './assignment/fullimage';
import Image  from './assignment/image';
import AdvanceHooks from './advanceHooks/advanceHooks';
import Home from './pocketNotes/pages/home';
import GroupChat from './pocketNotes/pages/groupChat';

import Layout from './pocketNotes/layout';

function App() {
  // const [text, setText] = useState(""); 
  const router = createBrowserRouter(
    [
      {
        path:"/",
        element:<AllInfo/>
      },
      {
        path:"/prop",
        element:<PropDrillingParent/>
      },
      {
        path:"/hook",
        element:<Parent/>
      },
      {
        path:"/advHook",
        element:<AdvanceHooks/>
      },
      {
        path:"/route",
        element:<Page1/>
      },
      ,
      {
        path:"/assignment",
        element:<Login/>
      },
      {
        path:'/images/:username',
        element:<Image/>
      },
      {
        path:'/full-image',
        element:<Fullimage/>
      },
      {
        path:"/pocketNotes",
        element:<Layout/>
       
      },
      {
        path:"/*",
        element:<AllInfo/>
      }
    ]
  );

return (
 <>
 <RouterProvider router={router}/>
 
 </>
) 
}

export default App;


//  <Router>
  //     <Routes>
  //       <Route path="/" element={<Page1/>} />
  //       <Route path="/page2" element={<Page2/>} />
  // </Routes>
  // </Router>
//   <Router>
//   <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#eee' }}>
//     <Link to="/">Home</Link>
//     <Link to="/about">About</Link>
   
//   </nav>

//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/about" element={<About />} />

//   </Routes>
// </Router>



  //   <Router>
  //   <Routes>
  //   <Route path="/" element={<Page1 />} />
  //   <Route path="/page2" element={<Page2 />} />
  // </Routes>
  // </Router>
    //  <div className="App">

    //   <PropDrilling setText={setText}/>
    //   <PropDrilling2 text={text}/>  
     
    //   {/* <Parent/>  */}

    //    {/* <div className='header'>
    //     <h1>Todolist-App </h1>
    //     <div><form todos={todos} setTodos={setTodos}></form></div>
       
          
    //   </div>  */}
    // </div>