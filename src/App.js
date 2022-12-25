import "./App.css";
import Nav from "./components/Nav.component/Nav";
import Dialogs from "./components/Dialogs.component/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users.component/UsersContainer";
import ContentContainer from "./components/Content.component/ContentContainer";
import HeaderContainer from "./components/Header.component/HeaderContainer";
import Login from "./components/Login.component/Login";

const App = function (props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs" element={<Dialogs store={props.store}/>}/>
                        <Route path="/profile/:userId?" element={<ContentContainer/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
