import React, { Component } from 'react'; 
import axios from "axios";
import logo from './logo.svg';
import './App.css';

import routes from "./routes.js";

class App extends Component {
constructor(props){
  super(props);

  this.state = {
    test: null
  };
}
componentDidMount(){
  axios.get('/api/me')
  .then(response => {
    console.log( response );
    this.setState({ test: response.data });
  })
  .catch(console.log);
}
//because we are on App.js any code in this header will show up on every page.
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">COSPLAY COMMUNITY(un-named)</h1>
        </header>
        {routes}
      </div>
    );
  }
}

export default App;
