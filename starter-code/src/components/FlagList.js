import React , { Component } from "react";

import { Link } from "react-router-dom";

import { ListGroup , ListGroupItem } from 'reactstrap';

class FlagList extends Component {
  render () {
    return (
      <ListGroup className="flag-list">
        {
          this.props.countries.map( ( country , index ) => {
            return ( 
              <ListGroupItem key={index}> <Link to={country.cca3}>{country.flag}</Link> </ListGroupItem>
            )
          })
        }
      </ListGroup>
    );
  };
};

export default FlagList;