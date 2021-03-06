import React, {useState,useEffect} from 'react';
import './App.css';
import Post from './Post';
import {auth, db} from './firebase';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import ImageUpload from './ImageUpload';
import InstagramEmbed from 'react-instagram-embed';

function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));



function App() {

  const classes= useStyles();
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  const [opensignin, setOpensignin] = useState(false);  

  useEffect(()=>{

  
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{

      if (authUser){
        console.log(authUser);
        setUser(authUser);

      }else{

          setUser('');
      }
    })
     return ()=>{
       unsubscribe();
     }

}, [user,username]); 
  
  
  
    useEffect(()=>{

          db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot=>{

            setPosts(snapshot.docs.map(doc=>({

            id:doc.id,
            post:doc.data()


            })) );

          })

      }, []);

     const signUp = (event)=>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((authUser)=>{
         return authUser.user.updateProfile({
          
              displayName:username
          })

        })
        .catch((error)=>alert(error.message))
     }

     const signIn =(event) =>{

        event.preventDefault();
        auth
          .signInWithEmailAndPassword(email,password)
          .catch((error)=>alert(error.message));

          setOpensignin(false);
    
     }

  return (
    <div className="App">

    

<Modal
  open={open}
  onClose={()=>setOpen(false)}
  
>
<div style={modalStyle} className={classes.paper}>

  <form className="app_signup">
      <center>

      <img

      className="app_headerImage"
      src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
      alt=""

      />
</center>
        <Input

        placeholder="username"
        type="text"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}

        />

      <Input

        placeholder="email"
        type="text"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
       
        />

        <Input

        placeholder="password"
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}

        />
     <Button type="submit" onClick={signUp}> SIGN UP </Button>
      
 </form>
    
</div>

</Modal>


<Modal
  open={opensignin}
  onClose={()=>setOpensignin(false)}
  
>
<div style={modalStyle} className={classes.paper}>

  <form className="app_signup">
      <center>

      <img

      className="app_headerImage"
      src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
      alt=""

      />
</center>
        

      <Input

        placeholder="email"
        type="text"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
       
        />

        <Input

        placeholder="password"
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}

        />
     <Button type="submit" onClick={signIn}> SIGN IN </Button>
      
 </form>
    
</div>

</Modal>



      <div className="app_header">

        <img

          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""

          />

          {user ? (
                  <div>
                  <Button onClick={()=>auth.signOut()}> LOG OUT </Button>
                  
          </div>
                ):(
                  
                  <div className="app_logincontainer">
                  <Button onClick={()=>setOpensignin(true)}> SIGN IN </Button>

                  <Button onClick={()=>setOpen(true)}> SIGN UP </Button>
                  </div>

                )}


      </div>

      

    
    <div className="app_posts">

      <div className="app_postLeft">

      {posts.map(({id,post}) =>(

        <Post key={id} postId={id} username= {post.username} user={user} caption = {post.caption} imageUrl={post.imageUrl} />

      ))}

      </div>
  
  <div className="app_postRight"> 

      <InstagramEmbed
      url='https://instagr.am/p/Zw9o4/'
      maxWidth={320}
      hideCaption={false}
      containerTagName='div'
      protocol=''
      injectScript
      onLoading={() => {}}
      onSuccess={() => {}}
      onAfterRender={() => {}}
      onFailure={() => {}}
    />

  </div>



</div>




{user?.displayName ? (

<ImageUpload username ={user.displayName} />

):
(

null

)

}


      
    </div>
  );
}

export default App;
