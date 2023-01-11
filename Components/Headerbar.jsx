import logo from "../logo.svg";
import Navbar from "./Navbar";

function Headerbar() {
    return (

        <header className="Headerbar">
            <img src={logo} alt="logo"/>
            Learn React
        </header>
    );
}

export default Headerbar;