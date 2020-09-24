import React, {useState,useEffect} from 'react';
import './App.css';
import Post from './Post';
import {db} from './firebase';


function App() {

  const [posts, setPosts] = useState([])

      useEffect(()=>{

          db.collection('posts').onSnapshot(snapshot=>{

            setPosts(snapshot.docs.map(doc=>({

            id:doc.id,
            post:doc.data()


            })) );

          })

      }, []);

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

      {posts.map(({id,post}) =>(

        <Post key={id} username= {post.username} caption = {post.caption} imageUrl={post.imageUrl} />

      ))}

      


      
    </div>
  );
}

export default App;
