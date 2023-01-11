import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="Wrapper">
      <header className="Headerbar">
        <img src={logo} alt="logo" />
         Learn React
      </header>

      <Navbar />

        <div className="Flowbar">Lenta lenta Novosti</div>
        <div className="Footerbar">Contact US +788888 Podval</div>
    </div>
  );
}



export default App;
