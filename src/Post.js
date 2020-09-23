import { Avatar } from '@material-ui/core';
import React from 'react'
import './Post.css';


function Post() {
    return (
        <div className="post">

            <div className="post_header">

            <Avatar

            className="post_avatar"
            alt="LITO"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
           />

            <h3> username   </h3>

            </div>

            <img className="post_image" src="https://i.morioh.com/200623/6c839150.jpg" alt="" />
            

            <h4 className="post_text"><strong>LITO</strong>  QUE COOL</h4>


        </div>
    )
}

export default Post
