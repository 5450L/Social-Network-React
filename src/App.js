import './App.css';
import Header from "./components/Header.component/Header";
import Nav from "./components/Nav.component/Nav";
import Content from "./components/Content.component/Content";

const App = function () {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <Content/>
        </div>
    );
}


export default App;
