import React, { Component } from "react";
import { Link } from "react-router-dom";
import tempImg from './upNaway.jpg';
import "./ProfilePage.css";

export default class ProfilePage extends Component {
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
            <h1>UP, UP AND AWAY!</h1>
            <a>
                <img src={tempImg} className="Profile-Temp" alt="temp" />
            </a>
        </div>
      );
   }
}