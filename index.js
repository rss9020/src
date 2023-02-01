import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";
import {SendMessageState} from "./redux/state";
import {RenderTree} from "./render";
import {AddLikeState} from "./redux/state";
import {DisLikeState} from "./redux/state";
import {AddPostState} from "./redux/state";

RenderTree(state, SendMessageState, AddLikeState, DisLikeState, AddPostState);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
