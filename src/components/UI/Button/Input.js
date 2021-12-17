import React ,{ useImperativeHandle, useRef } from 'react';

import classes from '../../Login/Login.module.css'; 

const Input = React.forwardRef(({label, id, inputState, inputChangeHandler, inputValidateHandler}, ref) => {

    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    };

    useImperativeHandle(ref ,  () => {
        return {
            focus: activate
        };
    });

    return (
        <div
            className={`${classes.control} ${
            inputState.isValid === false ? classes.invalid : ''
            }`}
        >
            <label htmlFor={id}>{label}</label>
            <input
                ref={inputRef}
                type={id}
                id={id}
                value={inputState.value}
                onChange={inputChangeHandler}
                onBlur={inputValidateHandler}
            />
        </div>
            );
});

export default Input;

