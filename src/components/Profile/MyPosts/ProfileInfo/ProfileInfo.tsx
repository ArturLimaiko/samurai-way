import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://www.journalduweb.org/wp-content/uploads/2023/02/intelligence-artificielle-midjourney-860x484.jpg"
                    width="300" height="200"/>
            </div>
            <div className={s.descriptionBlock}>
                <p>Avatar + Description</p>
            </div>
        </div>
    );
};