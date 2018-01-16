import React, { Component } from "react";
// import { Link } from "react-router-dom";


import "./ProfileCreator.css";
import { retrieveUser, updateUsername } from "../../ducks/user";

export default class ProfileCreator extends Component {
    constructor(props){
        super(props);

        this.state = {
            input: ""
        };

        // this.handleSubmit = this.handleSubmit.bind(this);
    }

componentDidMount(){
    this.props.retreiveUser;
}

handleChange(val){
    this.setState({ textInput: val })
}

// handleSubmit(){
//     this.props.updateUsername(this.state.textInput, this.props.user.authid);
// }

    render(){
      return(
        <div>
            <h1>You are a creator</h1>
            <div>Fill in the required information</div>
            
            
            <div>UserName</div>
            <input type = "text" onChange = {e => this.handleChange(e.target.value)} />
           
            <div>Name</div>
            <input type = "text" onChange = {e => this.handleChange(e.target.value)}/>

            <div>Age</div>
            <input type = "text" onChange = {e => this.handleChange(e.target.value)}/>

            <div>Gender</div>
            <input type = "text" onChange = {e => this.handleChange(e.target.value)}/>

            <div>Bio</div>
            <input type = "text" onChange = {e => this.handleChange(e.target.value)}/>
            
            <div>Upload Profile Picture</div>

            <div>Location</div>
            <input type = "text" /><br/>

            <button onClick = {this.handleSubmit}>Submit</button>
            
        
        </div>
      );
   }
}