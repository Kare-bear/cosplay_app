import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class About extends Component {
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
            <h1>this is the about page</h1>
        </div>
      );
   }
}