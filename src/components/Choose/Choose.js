import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Choose extends Component {
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
            <h1>CHOOSE YOUR CLASS</h1>

            <div>Are you the creative type or do you prefer to purchase your look?</div>
                
                <Link to="/Creator">
                <button className = "Choose-Creator">CREATOR</button>
                </Link>

                <Link to="/User">
                <button className = "Choose-User">USER</button>
                </Link>
            
        </div>
      );
   }
}