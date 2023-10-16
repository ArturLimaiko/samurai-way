import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <h2>Dialogs</h2>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Valera</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Gane</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Sanya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Tanya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Vasya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6'>Grenlandii</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <h2>Messages</h2>
                <div className={s.message}>
                    hi
                </div>
                <div className={s.message}>
                    how are you???
                </div>
                <div className={s.message}>
                    YOOO BOY
                </div>
                <div className={s.message}>
                    hey!
                </div>
            </div>
        </div>
    );
};