import React, { Component } from "react";
// import { Link } from "react-router-dom";

import tempImg from './upNaway.jpg';
import "./ProfileCreator.css";

export default class ProfileCreator extends Component {
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
            <h1>You're a creator</h1>
            <a>
                <img src={tempImg} className="Profile-Temp" alt="temp" />
            </a>
        </div>
      );
   }
}