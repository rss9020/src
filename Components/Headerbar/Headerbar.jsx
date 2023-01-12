import logo from "../../logo.svg";
import HModule from './Header.module.css'

function Headerbar() {
    return (

        <header className={HModule.Headerbar}>
            <img src={logo} alt="logo"/>
           Tristagramm
        </header>
);
}

export default Headerbar;