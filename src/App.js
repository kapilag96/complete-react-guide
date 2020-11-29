import React, { Component } from 'react';
import {Person} from './person/Person';
import styled from 'styled-components';
import './App.css';


const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red': 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon': 'lightgreen'};
    color: black;
  }
`;


class App extends Component {

  state = {
    persons: [
      {id: 'a', name: 'Max'    , age: 29},
      {id: 'b', name: 'Kapil'  , age: 24},
      {id: 'c', name: 'Raphael', age: 32},
      {id: 'd', name: 'Callum' , age: 15}
    ],
    showPersons: false
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }

  deletePersonHandler = (personIndex) => {
    const newPersons = [...this.state.persons];
    newPersons.splice(personIndex, 1);
    this.setState({persons: newPersons});
  }

  nameChangeHandler = (event, id) => {
    const newPersons = this.state.persons.map((person) => {
      if (id !== person.id) return person;
      // If this is the person, change the name based on the event
      const newPerson = {...person};
      newPerson.name = event.target.value;
      return newPerson;
    });
    this.setState({persons: newPersons});
  }

  render() {
    const persons = this.state.showPersons? (
    <div>
      {this.state.persons.map((person, personIndex) => (
      <Person key={person.id} name={person.name} onClick={() => this.deletePersonHandler(personIndex)} age={person.age} onChange={(event) => {this.nameChangeHandler(event, person.id)}}/>))}
    </div>) : null;

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <StyledButton alt={this.state.showPersons ? 1 : 0} onClick={this.togglePersonsHandler}>Toggle Persons</StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
