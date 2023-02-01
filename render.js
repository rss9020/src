import App from "./App";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {AddPostState} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let RenderTree = (state, SendMessageState, AddLikeState, DisLikeState) => {

    root.render(
        <React.StrictMode>
            <App StateProps={state} SendMessageProps={SendMessageState} AddLikeProps={AddLikeState} DisLikeProps={DisLikeState} AddPostProps={AddPostState}/>
        </React.StrictMode>
    );

}