import "./App.css";
import Nav from "./components/Nav.component/Nav";
import Dialogs from "./components/Dialogs.component/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users.component/UsersContainer";
import ContentContainer from "./components/Content.component/ContentContainer";
import HeaderContainer from "./components/Header.component/HeaderContainer";
import Login from "./components/Login.component/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {setAuthUserData} from "./redux/reducers/auth-reducer";
import Preloader from "./components/shared/Preloader.component/Preloader";
import {initialize} from "./redux/reducers/app-reducer";

class App extends Component {

    componentDidMount() {
        this.props.initialize()     ;
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
                        <Routes>
                            <Route path="/dialogs" element={<Dialogs store={this.props.store}/>}/>
                            <Route path="/profile/:userId?" element={<ContentContainer/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/login" element={<Login/>}/>
                        </Routes>
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
