import React from 'react';

const Button = ({ children, onClick, icon, primary, square }) => {
    if (primary) {
        return (
            <button
                onClick={onClick}
                className="btn btn--primary"
            >
                {children}
            </button>
        );
    } else if (square) {
        return (
            <button
                onClick={onClick}
                className="btn btn--square"
            >
                {icon}
            </button>
        );
    }
};

export default Button;
