// Button.js
import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
    const buttonClasses = [styles.button];

    if (props.primary) {
        buttonClasses.push(styles['primary-btn']);
    } else if (props.secondary) {
        buttonClasses.push(styles['secondary-btn']);
    } else if (props.primary_lg) {
        buttonClasses.push(styles['primary-btn-large']);
    }

    return (
        <button
            className={buttonClasses.join(' ')}
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;
