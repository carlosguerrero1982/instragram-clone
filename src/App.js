import React from 'react';
import './App.css';
import Post from './Post';



function App() {
  return (
    <div className="App">

      <div className="app_header">

        <img

          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""

          />
  
    
    

      </div>

      <h1>HELLO DEVS</h1>

      <Post />
      <Post />
      <Post />
 


      
    </div>
  );
}

export default App;
