import React, { Component } from "react";

export default class Create extends Component {
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
            <a href = { process.env.REACT_APP_LOGIN}>
                <button>Login</button>
            </a>
        </div>
      );
   }
}