import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'

//подкомпонента DialogItem
const DialogItem = (props: any) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

//подкомпонента Message
const Message = (props: any) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h2>Dialogs</h2>
                <DialogItem name={'Valera'} id={'1'}/>
                <DialogItem name={'Gena'} id={'2'}/>
                <DialogItem name={'Andrey'} id={'3'}/>
                <DialogItem name={'Artur'} id={'4'}/>
                <DialogItem name={'Nikita'} id={'5'}/>
            </div>
            <div className={s.messages}>
                <h2>Messages</h2>
                <Message message={'hi'}/>
                <Message message={'Hey, How are you?'}/>
                <Message message={'Hello man!!!!'}/>
                <Message message={'It"s a very good message'}/>
                <Message message={'HI ALL!!!'}/>
            </div>
        </div>
    );
};