import React, { Component } from 'react';
import Persons from '../Persons/Persons';
import Cockpit from '../Cockpit/Cockpit';
import AuthContext from '../context/auth-context';

import './App.css';





class App extends Component {

  constructor(props) {
    super(props);
    console.log('App constructor');
  }

  static getDerivedStateFromProps(props, state){
    console.log('App getDerivedStateFromProps');
    console.log(state, props);
    return state;
  }

  componentDidMount(){
    console.log('App componentDidMount');
  }

  state = {
    persons: [
      {id: 'a', name: 'Max'    , age: 29},
      {id: 'b', name: 'Kapil'  , age: 24},
      {id: 'c', name: 'Raphael', age: 32},
      {id: 'd', name: 'Callum' , age: 15},
      {id: 'e', name: 'Runan'  , age: 38}
    ],
    showPersons: false,
    authenticated: false
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

  loginHandler = () => {
    this.setState({authenticated: true})
  }

  render() {
    console.log('App render');
    const persons = this.state.showPersons ?
      <Persons
        clicked={this.deletePersonHandler}
        persons={this.state.persons}
        nameChanged={this.nameChangeHandler} /> : null;
    return (
      <div>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler}}>
          <Cockpit
            showPersons={this.state.showPersons}
            togglePersonsHandler={this.togglePersonsHandler}
            login={this.loginHandler}/>
          {persons}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
