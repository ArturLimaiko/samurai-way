import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {posts} from "../../../index";

export const MyPosts = (props: any) => {


    let postsElements = posts
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>)


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
                {postsElements}
            </div>
        </div>
    );
};