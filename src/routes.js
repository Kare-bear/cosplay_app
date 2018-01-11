import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Creator from "./components/Creator/Creator";
import Choose from "./components/Choose/Choose";
import User from "./components/User/User";
import ProfileCreator from "./components/ProfileCreator/ProfileCreator";
import ProfileUser from "./components/ProfileUser/ProfileUser";


export default(
    <Switch>
        <Route exact path = "/" component = { Home } />
        <Route path = "/login" component = { Login } />
        <Route path = "/creator" component = { Creator } />
        <Route path = "/choose" component = { Choose } />
        <Route path = "/user" component = { User } />
        <Route path = "/profileCreator" component = { ProfileCreator } />
        <Route path = "/profileUser" component = { ProfileUser } />
        <Route path = "/about" component = { About } />
        <Route path = "/contact" component = { Contact } />
    </Switch>
);