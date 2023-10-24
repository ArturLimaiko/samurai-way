import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


//Храним тут все данные
export let dialogs = [
    {id: 1, name: 'Valera'},
    {id: 2, name: 'Misha'},
    {id: 3, name: 'Gena'},
    {id: 4, name: 'Andrey'},
    {id: 5, name: 'Artur'},
    {id: 6, name: 'Nikita'},
]

export let messages = [
    {id: 1, message: 'How are you?'},
    {id: 2, message: 'This message will be delete'},
    {id: 3, message: 'YO BRO!'},
    {id: 4, message: 'I.m fine thx you'},
    {id: 5, message: 'message five'},
    {id: 6, message: 'when were you go?'}
]

export let posts = [
    {id: 1, message: 'Valera', likesCount: 22},
    {id: 2, message: 'Misha', likesCount: 413},
    {id: 3, message: 'Gena', likesCount: 212},
    {id: 4, message: 'Andrey', likesCount: 29},
    {id: 5, message: 'Artur', likesCount: 123},
    {id: 6, message: 'Nikita', likesCount: 11},
]


ReactDOM.render(<App/>, document.getElementById('root'));