import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
      width: 450px;
  }
`;

const Person = ({name, age, onClick, onChange}) => {
    return (
    <StyledDiv>
        <p onClick={onClick}>My name is {name} and my age is {age}</p>
        <input type="text" value={name} onChange={onChange}/>
    </StyledDiv>)
}

export default Person;