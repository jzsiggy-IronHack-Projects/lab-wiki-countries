import React , { Component } from "react";

import { Link } from "react-router-dom";

class CountryDisplay extends Component {
  
  findCountry = (id) => {
    for ( let country of this.props.countries ) {
      if (country.cca3 == id) {
        return country;
      };
    };
  };
  
  render () {

    const { params } = (this.props.match);
    console.log(this.props.match);
    const id = params.id;

    const country = this.findCountry(id);

    return (
    <div>
      <h1>{country.name.common}</h1>
      <h2>Capital: {country.capital}</h2>
      <h2>Borders :</h2>
      <ul>
        {
          country.borders.map( ( country , index ) => {
            return ( <li key={index}> <Link to={country}> {this.findCountry(country).name.common} </Link> </li> )
          } )
        }
      </ul>
      <h2>Area : {country.area}</h2>
    </div>
    );
  };
};

export default CountryDisplay;