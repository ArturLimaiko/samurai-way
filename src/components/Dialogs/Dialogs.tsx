import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'
import {message} from "antd";

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

    let dialogs = [
        {id: 1, name: 'Valera'},
        {id: 2, name: 'Misha'},
        {id: 3, name: 'Gena'},
        {id: 4, name: 'Andrey'},
        {id: 5, name: 'Artur'},
        {id: 6, name: 'Nikita'},
    ]

    let messages = [
        {id: 1, message: 'How are you?'},
        {id: 2, message: 'This message will be delete'},
        {id: 3, message: 'YO BRO!'},
        {id: 4, message: 'I.m fine thx you'},
        {id: 5, message: 'message five'},
        {id: 6, message: 'when were you go?'}
    ]


    //получаем данные ТИПА с сервера(НЕТ) и мапимся по ним.
// получаем jsx элемент заполненный пропсами name={d.name} id={d.id} и message={m.message} id={m.id}
    let dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages
        .map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h2>Dialogs</h2>
                <div>{dialogsElements}</div>
            </div>
            <div className={s.messages}>
                <h2>Messages</h2>
                <div>{messagesElements}</div>
            </div>
        </div>
    );
};