import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'

export const MyPosts = (props: any) => {

    let postsData = [
        {id: 1, message: 'Valera', likesCount: 22},
        {id: 2, message: 'Misha', likesCount: 413},
        {id: 3, message: 'Gena', likesCount: 212},
        {id: 4, message: 'Andrey', likesCount: 29},
        {id: 5, message: 'Artur', likesCount: 123},
        {id: 6, message: 'Nikita', likesCount: 11},
    ]


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
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
                <Post message={postsData[2].message} likesCount={postsData[2].likesCount}/>
            </div>
        </div>
    );
};