import React, { Component } from "react";
// import { Link } from "react-router-dom";


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
            
            <div>Fill in the required information</div>
            
            <div>UserName</div>
            <input type = "text" />
            
            <div>Name</div>
            <input type = "text" />

            <div>Age</div>
            <input type = "text" />

            <div>Gender</div>
            <input type = "text" />

            <div>Bio</div>
            <input type = "text" />
            
            <div>Upload Profile Picture</div>

            <div>Location</div>
            <input type = "text" /><br/>

            <button>Submit</button>

        </div>
      );
   }
}

//youtube search params: population user data with react with auth0