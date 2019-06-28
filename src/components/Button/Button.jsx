import React from 'react';

const Button = ({ children, onClick, primary, square }) => {
    return (
        <button
            onClick={onClick}
            className={`btn ${primary ? 'btn--primary' : ''} ${square ? 'btn--square' : ''}`}
        >
            {children}
        </button>
    );
};

export default Button;
