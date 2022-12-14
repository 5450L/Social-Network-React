import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import App from "./App";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderTree = (store) => {
    root.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>
    );
};

rerenderTree(store);
store.subscribe(() => {
    let state = store.getState();
    rerenderTree(store);
});
