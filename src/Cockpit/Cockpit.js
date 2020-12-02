import React from 'react';
import styled from 'styled-components';
import './Cockpit.css';


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


const Cockpit = (props) => (
    <div className='Cockpit'>
      <h1>Hi, I'm a React App!</h1>
      <StyledButton alt={props.showPersons ? 1 : 0} onClick={props.togglePersonsHandler}>Toggle Persons</StyledButton>
    </div>);


export default Cockpit;
