import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class User extends Component {
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
            <div>
                As a User, you aren't interested in making your own designs but instead prefer buying your look piece by piece. Whether you prefer simple looks or more detail oriented designs, you know what you want. 
            </div>
            <div>As a User you have access to all the main features of [unnamed site], minus the Creator extra features.</div>

            <Link to="/ProfileUser">
                <button className = "User-Submit">I AM A USER OF GOODS AND SERVICES!</button>
            </Link>
            <Link to="/Choose">
                <button className = "User-reroute">I THINK I MIGHT BE A CREATOR...</button>
            </Link>
        </div>
      );
   }
}