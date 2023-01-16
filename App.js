import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Headerbar from "./Components/Headerbar/Headerbar";
import Flowbar from "./Components/Flowbar/Flowbar";
import Footerbar from "./Components/Footerbar/Footerbar";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Profile from "./Components/Profile/Profile";

const App = (props) => {
    return (
         <BrowserRouter>
            <div className="Wrapper">
                <Headerbar/>
                <Navbar/>
                <div className="Wrapper-App">


                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs UsersNameDialogProps={props.StateProps.DialogsPage.UsersNameDialog}
                                                                   MessagesValueProps={props.StateProps.DialogsPage.MessagesValue}/>}/>
                      <Route path="/flowbar" element={<Flowbar
                            UsersNamePostProps={props.StateProps.FlowbarPage.UsersNamePost}/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                    </Routes>
                </div>
                <Footerbar/>

            </div>
        </BrowserRouter>
    );
}


export default App;
