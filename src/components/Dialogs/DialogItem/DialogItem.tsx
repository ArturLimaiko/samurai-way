import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css'


//подкомпонента DialogItem
export const DialogItem = (props: any) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <div>
                <img width="30px" height="30px" src="https://img.freepik.com/premium-vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol-neumorphic-ui-ux-white-user-interface-web-button-neumorphism-vector-eps-10_399089-2757.jpg "/>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}
