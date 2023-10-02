import React from 'react';
import s from './Post.module.css'

export const Post = (props: any) => {
    return (
        <div className={s.item}>
            {props.message}
            <img
                src="https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg"/>
            <div>
                <span>like {props.count}</span>
            </div>
        </div>
    );
};