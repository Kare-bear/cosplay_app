import React, { Component } from "react";
import { Link } from "react-router-dom";

import UserImg from "./UserImg.jpg";
import "./ProfileUser.css";

export default class ProfileUser extends Component {
    constructor(props){
        super(props);

        this.state = {
            
        };
    }

componentDidMount(){
    console.log(process.env);
}

    render(){
      return(
        <div>
            <h1>You're a user</h1>
            <a>
            <img src={UserImg} className="User-Temp" alt="temp" />
            </a>
        </div>
      );
   }
}