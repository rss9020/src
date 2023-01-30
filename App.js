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
                <Navbar FriendsListProps={props.StateProps.Friends.FriendsList}/>
                <div className="Wrapper-App">


                    <Routes>
                        <Route path="/dialogs/*"
                               element={<Dialogs UsersNameDialogProps={props.StateProps.DialogsPage.UsersNameDialog}
                                                 MessagesValueProps={props.StateProps.DialogsPage.MessagesValue}
                                                 SendMessageProps={props.SendMessageProps}
                               />}
                        />
                        <Route path="/flowbar" element={<Flowbar
                            UsersNamePostProps={props.StateProps.FlowbarPage.UsersNamePost}/>}/>
                        <Route path="/profile/my" element={<Profile name={'Stalker'}/>}/>
                        <Route path="/profile/Ziba" element={<Profile name={'Ziba'}/>}/>
                        <Route path="/profile/Buba" element={<Profile name={'Buba'}/>}/>
                        <Route path="/profile/Zhuzha" element={<Profile name={'Zhuzha'}/>}/>
                        <Route path="/profile/Druka" element={<Profile name={'Druka'}/>}/>
                        <Route path="/profile/Kret" element={<Profile name={'Kret'}/>}/>

                        <Route path="/*" element={<Profile/>}/>
                    </Routes>
                </div>
                <Footerbar/>

            </div>
        </BrowserRouter>
    );
}


export default App;
