import React from 'react';

import classes from '../../Login/Login.module.css'; 

const Input = ({label, id, inputState, inputChangeHandler, inputValidateHandler}) => {
    return (
        <div
            className={`${classes.control} ${
            inputState.isValid === false ? classes.invalid : ''
            }`}
        >
            <label htmlFor={id}>{label}</label>
            <input
                type={id}
                id={id}
                value={inputState.value}
                onChange={inputChangeHandler}
                onBlur={inputValidateHandler}
            />
        </div>
            );
}

export default Input;

