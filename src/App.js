import './App.css';
import Header from "./components/Header.component/Header";
import Nav from "./components/Nav.component/Nav";
import Content from "./components/Content.component/Content";
import Dialogs from "./components/Dialogs.component/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = function (props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs'
                               element={<Dialogs dialogsData={props.state.dialogsPage}/>}/>
                        <Route path='/profile' element={<Content profileData={props.state.profilePage}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
