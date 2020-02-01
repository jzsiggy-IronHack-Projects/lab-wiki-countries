import React, { Component } from 'react';
import { Route } from "react-router-dom";

import axios from 'axios';

import FlagList from "./components/FlagList";
import CountryDisplay from "./components/CountryDisplay";

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    axios.get('http://localhost:5000/countries').
      then(
        (result) => {
          this.setState({
            countries : result.data,
          });
          console.log(result.data);
        }
      );
  };

  render() {
    return (
      this.state.countries ?
      <div className="page">
        <FlagList countries={this.state.countries} />
        <Route
          path="/:id"
          render={(props) => {
            return (
              <CountryDisplay {...props} countries={this.state.countries}/>
            )
          }}
        /> 
      </div>
      :
      <h1>Loading</h1>
    );
  };
};

export default App;
