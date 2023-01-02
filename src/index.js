import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import App from "./App";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderTree = (store) => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App store={store}/>
            </Provider>
        </React.StrictMode>
    );
};

renderTree(store);
// store.subscribe(() => {
//     let state = store.getState();
//     rerenderTree(store);
// });
