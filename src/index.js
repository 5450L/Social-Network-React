import React from 'react';
import './index.css';
import store from "./redux/state";
import App from "./App";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    );
};

rerenderTree(store.getState());
store.subscribe(rerenderTree);
