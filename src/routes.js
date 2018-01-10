import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Create from "./components/Create/Create";


export default(
    <Switch>
        <Route exact path = "/" component = { Home } />
        <Route path = "/login" component = { Login } />
        <Route path = "/create" component = { Create } />
    </Switch>
);