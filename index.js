import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//данные для списка пользователей в UserList
let UserName = 'Kira';

//список пользователей для формирования постов в flowbar
let UsersNamePost = [
    {name: 'Kerjik', like: 3},
    {name: 'Sturjik', like: 5},
    {name: 'Fufik', like: 6},
    {name: 'Hanorik', like: 6},
    {name: 'Bublik', like: 6}
];

//сообщения для flowbar
let MessagesValue = [
    {id: 1, MessageValue: 'Hello'},
    {id: 2, MessageValue: 'Where you from'},
    {id: 3, MessageValue: 'I from Canada'},
    {id: 4, MessageValue: 'It is great!'},
    {id: 5, MessageValue: 'I want travel to Canada'}
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App UserNameProps={UserName} UsersNamePostProps={UsersNamePost}
        MessagesValueProps={MessagesValue}
        />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
