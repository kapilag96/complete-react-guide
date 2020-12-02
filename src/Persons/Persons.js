import React, { Component } from 'react';
import Person from './Person';

class Persons extends Component{
  render(){
    return this.props.persons.map(
    (person, personIndex) => (
      <Person
        key={person.id}
        name={person.name}
        onClick={() => this.props.clicked(personIndex)}
        age={person.age}
        onChange={(event) => {this.props.nameChanged(event, person.id)}}/>));
  }
}

export default Persons;
