import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

type DialogsPropsType = {
    dialogs: DialogType[];
    messages: MessageType[];
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    //получаем данные ТИПА с сервера(НЕТ) и мапимся по ним.
// получаем jsx элемент заполненный пропсами name={d.name} id={d.id} и message={m.message} id={m.id}
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)

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