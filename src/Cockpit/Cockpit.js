import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import AuthContext from '../context/auth-context';
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


const Cockpit = (props) => {

    const toggleBtnRef = useRef(null);

    useEffect(() => {
      console.log('Running Cockpit effect');
      toggleBtnRef.current.click();
    }, []);

    return (
      <div className='Cockpit'>
        <h1>Person Manager</h1>
        <StyledButton ref={toggleBtnRef} alt={props.showPersons ? 1 : 0} onClick={props.togglePersonsHandler}>Toggle Persons</StyledButton>
        <AuthContext>
          {context => <button onClick={context.login}>Login</button>}
        </AuthContext>
      </div>
    );
};

export default Cockpit;
