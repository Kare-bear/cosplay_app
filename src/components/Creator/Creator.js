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
            <div>
                As a Creator, you prefer to bring your ideas to life. Whether its sewing costumes, shaping armor parts, designing unique cosplay pieces or any other creative expression this is the place for you.
            </div>
            <div>As a Creator you have a few extra options, such as...</div>
            <ul>
                <li>Upload pictures of your work</li>
                <li>Set prices for your comissions</li>
                <li>Sell your creations to other users</li>
            </ul>
            <Link to="/ProfileCreator">
                <button className = "Creator-Submit">I AM A CREATOR!</button>
            </Link>
            <Link to="/Choose">
                <button className = "Creator-reroute">I THINK I MIGHT BE A USER...</button>
            </Link>
        </div>
      );
   }
}