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

            <Link to="/ProfilePage">
                <button className = "User-Submit">SUBMIT</button>
            </Link>
        </div>
      );
   }
}