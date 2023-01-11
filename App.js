import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import Headerbar from "./Components/Headerbar";
import Flowbar from "./Components/Flowbar";
import Footerbar from "./Components/Footerbar";

function App() {
    return (
        <div className="Wrapper">
            <Headerbar/>
            <Navbar/>
            <Flowbar/>
            <Footerbar/>

        </div>
    );
}


export default App;
