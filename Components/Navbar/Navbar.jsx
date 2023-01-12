import NModules from './Navbar.module.css';

function Navbar () {
    return (
        <div className={NModules.Navbar}>
            <ul>
                <li><a href={"#t"}>News</a></li>
                <li><a href={"#t"}>Music</a></li>
                <li><a href={"#t"}>Foto</a></li>
            </ul>
        </div>
    );
}

export default Navbar;