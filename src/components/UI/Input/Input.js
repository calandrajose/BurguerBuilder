import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if(props.touched){
        if(props.valid){
            inputClasses.push(classes.Valid)
        }else{
            inputClasses.push(classes.Invalid)
        }
    }


    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;

        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;

        case ('email'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;

        case ('select'):
            inputElement = (
                <select
                    onChange={props.changed}
                    className={inputClasses.join(' ')}
                    value={props.value}>
                    {props.elementConfig.options.map(option => (
                        <option

                            key={option.value}
                            value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;

        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
    }

    return (
        <div>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;