import React from 'react';
import './index.css';
import store from "./redux/state";
import App from "./App";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderTree = (store) => {
    root.render(
        <React.StrictMode>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    );
};

rerenderTree(store);
store.subscribe(rerenderTree);
