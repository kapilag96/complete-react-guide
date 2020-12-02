import React, { Component } from 'react';
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

class Person extends Component{

    render(){
        return (
            <StyledDiv>
                <p onClick={this.props.onClick}>My name is {this.props.name} and my age is {this.props.age}</p>
                <input type="text" value={this.props.name} onChange={this.props.onChange}/>
            </StyledDiv>)
    }
}

export default Person;
