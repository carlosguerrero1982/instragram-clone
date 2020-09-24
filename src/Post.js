import { Avatar } from '@material-ui/core';
import React from 'react'
import './Post.css';


function Post({username, caption, imageUrl}) {
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


        </div>
    )
}

export default Post
