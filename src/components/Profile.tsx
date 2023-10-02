import React from 'react';
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <div>
                    <img
                        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                        width="900" height="auto"/>
                </div>
            </div>
            <div>
                <img
                    src="https://www.journalduweb.org/wp-content/uploads/2023/02/intelligence-artificielle-midjourney-860x484.jpg"
                    width="300" height="200"/>
            </div>
            <p>Avatar + Description</p>
            <div>
                My posts
                <div>
                    New post
                </div>

                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>

                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
};