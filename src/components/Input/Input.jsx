import React from 'react';

const Input = ({ onChange, type, value }) => {
    return (
        <div className="counter-input">
            <button
                className="counter-input__btn counter-input__btn--decrement"
                onClick={event => onChange(type, parseFloat(value) - 1)}
            ></button>
            <input
                className="counter-input__input input input--primary"
                type="number"
                value={value}
                pattern="\d*"
                onChange={event => onChange(type, event.target.value)}
            />
            <button
                className="counter-input__btn counter-input__btn--increment"
                onClick={event => onChange(type, parseFloat(value) + 1)}
            >
            </button>
        </div>
    );
};

export default Input;
