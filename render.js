import App from "./App";
import React from 'react';
import ReactDOM from 'react-dom/client';

export let RenderTree = (state, SendMessageState) => {

    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <App StateProps={state} SendMessageProps={SendMessageState}/>
        </React.StrictMode>
    );

}