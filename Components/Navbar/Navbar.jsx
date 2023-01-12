import NModules from './Navbar.module.css';

function Navbar () {
    return (
        <div className={NModules.Navbar}>

                <div><a href={"/flowbar"}>Flow</a></div>
                <div><a href={"/dialogs"}>Dialogs</a></div>
                <div><a href={"#t"}>Foto</a></div>

        </div>
    );
}

export default Navbar;