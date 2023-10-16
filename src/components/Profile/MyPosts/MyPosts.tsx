import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'

export const MyPosts = (props: any) => {
    return (
        <div className={s.postsBlock}>
           <h3>My posts</h3>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button> Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hi ,how are you?' count='20'/>
                <Post message="It's my first post" count='44'/>
            </div>
        </div>
    );
};