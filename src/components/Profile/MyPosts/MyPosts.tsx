import React from 'react';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>

            <Post message='Hi ,how are you?' count='20'/>
            <Post message="It's my first post" count='44'/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>

        </div>
    );
};