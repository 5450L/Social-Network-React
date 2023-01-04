import React from "react";

import "./App.css";

import HeaderContainer from "./components/Header.component/HeaderContainer";
import Login from "./components/Login.component/Login";
import Preloader from "./components/shared/Preloader.component/Preloader";
import Nav from "./components/Nav.component/Nav";

import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Component} from "react";
import {connect} from "react-redux";
import {initialize} from "./redux/reducers/app-reducer";
import {Suspense} from "react";

const Dialogs = React.lazy(() => import("./components/Dialogs.component/Dialogs"))
const ContentContainer = React.lazy(() => import("./components/Content.component/ContentContainer"))
const UsersContainer = React.lazy(() => import("./components/Users.component/UsersContainer"))


class App extends Component {

    componentDidMount() {
        this.props.initialize();
    };

    render() {
        if (!this.props.initialized) {
            console.log(this.props);
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Nav/>
                    <div className="app-wrapper-content">
                        <Suspense fallback={<Preloader/>}>
                            <Routes>
                                <Route path="/dialogs" element={<Dialogs store={this.props.store}/>}/>
                                <Route path="/profile/:userId?" element={<ContentContainer/>}/>
                                <Route path="/users" element={<UsersContainer/>}/>
                                <Route path="/login" element={<Login/>}/>
                                <Route path="/" element={<Login/>}/>
                            </Routes>
                        </Suspense>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
};

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initialize})(App);
