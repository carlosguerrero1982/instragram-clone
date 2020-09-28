import { Avatar } from '@material-ui/core';
import React, { useState,useEffect } from 'react'
import './Post.css';
import {db} from './firebase';

function Post({username, caption, imageUrl, postId}) {

    const[comments,setComments] = useState([]);
    const[comment,setComment] = useState('');


    useEffect(() => {
      
        let unsubscribe;
        if(postId){
            unsubscribe=db
                .collection("posts")
                .doc(postId)
                .collection("comments")
                .onSnapshot((snapshot)=> {
                    
                    setComments(snapshot.docs.map((doc)=> doc.data()));

                });

        }


    
        return () => {
            unsubscribe();
        };
    }, [postId])


    const postComment = (event) =>{


    }

    return (
        <div className="post">

            <div className="post_header">

            <Avatar

            className="post_avatar"
            alt="LITO"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
           />

            <h3> {username} </h3>

            </div>

            <img className="post_image" src={imageUrl}alt="" />
            

            <h4 className="post_text"><strong>{username} </strong>{caption}</h4>

            <div className="post_comments">

            {
                comments.map((comment)=>(

                <p> 

                     <strong>{comment.username}</strong> {comment.text}


                </p>


                )

             )      

            }
            </div>

            <form className="post_commentBox">

                <input

                    className="post_input"
                    type="text"
                    placeholder="Enter a comment"
                    value={comment}
                    onChange={(e)=> setComment(e.target.value)}

                    />

                    <button

                        className="post_button"
                        disabled={!comment} 
                        type="submit"
                        onClick={postComment}
                        
                    >

                        POST

                    </button>    
            </form>

        </div>
    )
}

export default Post
