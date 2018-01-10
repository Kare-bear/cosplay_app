import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Creator extends Component {
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
                <button className = "Creator-Submit">SUBMIT</button>
            </Link>
        </div>
      );
   }
}