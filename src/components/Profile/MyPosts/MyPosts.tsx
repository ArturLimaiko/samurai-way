import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'


type  postPropsType = {
    posts: {id: number, message: string, likesCount: number}[]
}

export const MyPosts:React.FC<postPropsType> = (props: postPropsType) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
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