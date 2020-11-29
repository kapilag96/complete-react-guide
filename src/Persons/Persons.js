import React from 'react';
import Person from './Person';

const Persons = (props) => props.persons.map(
    (person, personIndex) => (
      <Person
        key={person.id}
        name={person.name}
        onClick={() => props.clicked(personIndex)}
        age={person.age}
        onChange={(event) => {props.nameChanged(event, person.id)}}/>)
);

export default Persons;