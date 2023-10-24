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

    let dialogsData = [
        {id: 1, name: 'Valera'},
        {id: 2, name: 'Misha'},
        {id: 3, name: 'Gena'},
        {id: 4, name: 'Andrey'},
        {id: 5, name: 'Artur'},
        {id: 6, name: 'Nikita'},
    ]


    let messagesData = [
        {id: 1, message: 'How are you?'},
        {id: 2, message: 'This message will be delete'},
        {id: 3, message: 'YO BRO!'},
        {id: 4, message: 'I.m fine thx you'},
        {id: 5, message: 'message five'},
        {id: 6, message: 'when were you go?'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h2>Dialogs</h2>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>

            </div>
            <div className={s.messages}>
                <h2>Messages</h2>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>

                    </div>
                    </div>
                    );
                };