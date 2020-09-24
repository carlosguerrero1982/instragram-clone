import React, {useState} from 'react';
import './App.css';
import Post from './Post';



function App() {

  const [posts, setPosts] = useState([

      {
        username:"LITO",
        caption:"COOLLL",
        imageUrl:"https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg",
      },

      {
        username:"PEPE",
        caption:"SIIII",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
      },

      {
        username:"MANU",
        caption:"YEAHHH",
        imageUrl:"https://benjagarrido.com/wp-content/uploads/2015/07/java_logo.png",
      },
    
  ])
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

      {posts.map(post =>(

        <Post username= {post.username} caption = {post.caption} imageUrl={post.imageUrl} />

      ))}

      


      
    </div>
  );
}

export default App;
