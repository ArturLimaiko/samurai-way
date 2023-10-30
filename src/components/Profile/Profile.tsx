import React from 'react';
import {MyPosts, PostPropsType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";

export type ProfileType = {
    posts: PostPropsType
}

export const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts.posts} />
        </div>
    );
};