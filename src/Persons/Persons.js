import React, { Component } from 'react';
import Person from './Person';

class Persons extends Component{

  state = {}

  static getDerivedStateFromProps(props, state){
    console.log('Persons getDerivdedStateFromProps');
    return state;
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('Persons shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('Persons getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState){
    console.log('Persons componentDidUpdate');
  }

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
