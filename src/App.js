import React from 'react';
import './App.css';
import Menu from "./MenuComponent/MenuComponent";
import Dashboard from "./DashboardComponent/DashboardComponent";
import Businesses from "./BusinessesComponent/BusinessesComponent";
import Profile from "./ProfileComponent/ProfileComponent";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ProfileEditIdent from "./ProfileComponent/ProfileEditIdetComponent/ProfileEditIdentComponent";


function App() {
  return (
    <BrowserRouter>
        <div className="wrap">
            <Menu/>
            <div className="wrapper">
                <Switch>
                    <Route exact path='/dashboard'>
                        <Dashboard/>
                    </Route>
                    <Route path='/businesses'>
                        <Businesses/>
                    </Route>
                    <Route path='/profile/' component={Profile} />
                </Switch>
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
