import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <h2>Dialogs</h2>
                <div className={s.dialog + ' ' + s.active}>
                    Valera
                </div>
                <div className={s.dialog}>
                    Gane
                </div>
                <div className={s.dialog}>
                    Sanya
                </div>
                <div className={s.dialog}>
                    Tanya
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