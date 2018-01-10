import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import coverImg from './heroes_cover.jpg';
import "./Home.css";

import { retrieveUser, updateUsername } from "../../ducks/user";

class Home extends Component {
    constructor(props){
        super(props);

        //*****/
        this.state = {
            
        };

        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.retrieveUser();
    }

    //*****/
    handleChange(val){
        this.setState({ textInput: val })
    }

    //*****/
    handleSubmit(){
        this.props.updateUsername(this.state.textInput, this.props.user.authid);
    }

    render(){
        console.log(this.props)
      return(
        <div>
            <div>
                <h1>PlaceHolder</h1>
                <Link to="/Choose">
                <button className = "Button-Choose">Create Account</button>
                </Link>
                <a href = { process.env.REACT_APP_LOGIN}>
                <button className = "Button-Login">Login</button>
                </a>
                {/* <input 
                type = "text" 
                onChange = {e => this.handleChange(e.target.value)}
                />
                <button onClick = {this.handleSubmit}>Submit</button> */}
                <a>
                <img src={coverImg} className="CoverImg" alt="cover" />
                </a>
            </div>
            {this.props.isLoading && (
                <div>
                    <h1>Loading Content...</h1>
                </div>
            )}
            {this.props.user && (
              <div>
                { this.props.user.name }
              </div>
            )}
        </div>            
      );   
   }
}


const mapStateToProps = state => state;

export default connect(mapStateToProps, { retrieveUser, updateUsername})( Home );