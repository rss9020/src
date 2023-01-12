import NModules from './Navbar.module.css';

function Navbar () {
    return (
        <div className={NModules.Navbar}>

                <div><a href={"#t"}>News</a></div>
                <div><a href={"#t"}>Music</a></div>
                <div><a href={"#t"}>Foto</a></div>

        </div>
    );
}

export default Navbar;