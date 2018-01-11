import React, { Component } from 'react'; 
import { Link } from "react-router-dom";

/*DO NOT NEED*/
// import axios from "axios";

import logo from './logo.svg';
import './App.css';

import routes from "./routes";

class App extends Component {
  /*DO NOT NEED*/
// constructor(props){
//   super(props);

//   this.state = {
//     test: null
//   };
// }
// componentDidMount(){
//   axios.get('/api/me')
//   .then(response => {
//     console.log( response );
//     this.setState({ test: response.data });
//   })
//   .catch(console.log);
// }
//because we are on App.js any code in this header will show up on every page.
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">COSPLAY COMMUNITY(un-named)</h1>
          <div className = "App-bar">
          <Link to = "/">
          <a>HOME</a>
          </Link>
          <Link to = "/About">
          <a>ABOUT</a>
          </Link>
          <Link to = "/Contact">
          <a>CONTACT US</a>
          </Link>
          </div>
        </header>
        {routes}
      </div>
    );
  }
}

export default App;
