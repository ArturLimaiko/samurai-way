import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";


export const Profile = (props : any) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};