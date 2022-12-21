import "./App.css";
import Header from "./components/Header.component/Header";
import Nav from "./components/Nav.component/Nav";
// import Content from "./components/Content.component/Content";
import Dialogs from "./components/Dialogs.component/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users.component/UsersContainer";
import ContentContainer from "./components/Content.component/ContentContainer";

const App = function (props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs" element={<Dialogs store={props.store}/>}/>
                        <Route path="/profile/:userId?" element={<ContentContainer/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
