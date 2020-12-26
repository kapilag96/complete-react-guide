import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AuthContext from '../context/auth-context';

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

    componentDidMount(){
        this.inputElement.focus();
        console.log(this.context.authenticated);
    }

    static contextType = AuthContext;

    render(){
        return (
            <StyledDiv>
                {this.context.authenticated ? <p>Authenticated!</p>: <p>Please Login!</p>}
                <p onClick={this.props.onClick}>My name is {this.props.name} and my age is {this.props.age}</p>
                <input
                  ref={inpEl => this.inputElement = inpEl}
                  type="text"
                  value={this.props.name}
                  onChange={this.props.onChange}/>
            </StyledDiv>)
    }
}

Person.propTypes = {
    click  : PropTypes.func,
    name   : PropTypes.string,
    age    : PropTypes.number,
    changed: PropTypes.func
};

export default Person;
