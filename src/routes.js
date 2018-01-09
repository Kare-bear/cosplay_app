import React from "react";
import { Switch, Route } from "react-router-dom";

//dummy route
function Home(){
    return <div>HOME</div>;
}

//dummy route
function Login(){
    return <div>LOGIN</div>;
}

export default(
    <Switch>
        <Route exact path = "/" component = { Home } />
        <Route path = "/login" component = { Login } />
    </Switch>
);