import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Headerbar from "./Components/Headerbar/Headerbar";
import Flowbar from "./Components/Flowbar/Flowbar";
import Footerbar from "./Components/Footerbar/Footerbar";

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
