import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter, Route} from 'react-router-dom';
import {Friends} from "./components/Friends/Friends";


function App(props: any) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                {/*<Profile/>*/}

                <div className='app-wrapper-content'>

                    {/*что бы передать пропсы. Route может получить props через метод render и передаем туда стрелочную функцию в которую мы передадим функцию Dialogs и Profile*/}
                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>}/>
                    <Route path='/profile' render={() => <Profile posts={props.state.profilePage}/>}/>

                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/friends' component={Friends}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;

