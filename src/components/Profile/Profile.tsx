import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";


type postsType = {
    post: {id: number, message: string, likesCount: number}[],
}

export const Profile = (props: postsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.post} />
        </div>
    );
};