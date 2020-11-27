import React from 'react';

export const Person = ({name, age, onClick, onChange}) => {
    return (
    <div>
        <p onClick={onClick}>My name is {name} and my age is {age}</p>
        <input type="text" value={name} onChange={onChange}/>
    </div>)
}