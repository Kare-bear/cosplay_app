import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Creator from "./components/Creator/Creator";
import Choose from "./components/Choose/Choose";
import User from "./components/User/User";
import ProfilePage from "./components/ProfilePage/ProfilePage";


export default(
    <Switch>
        <Route exact path = "/" component = { Home } />
        <Route path = "/login" component = { Login } />
        <Route path = "/creator" component = { Creator } />
        <Route path = "/choose" component = { Choose } />
        <Route path = "/user" component = { User } />
        <Route path = "/profilePage" component = { ProfilePage } />
    </Switch>
);