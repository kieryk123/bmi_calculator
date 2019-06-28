import React from 'react';
import Button from '../Button/Button.jsx';
import closeIcon from '../../images/close-icon.svg';

const Results = ({ results, onClose }) => {
    const { result, bmi } = results;
    
    return (
        <aside className="results">
            <div className="results__head">
                <Button onClick={onClose} square>
                    <img width="28px" height="28px" src={closeIcon} alt=""/>
                </Button>
            </div>
            <h1 className="results__title">You are {result}</h1>
            <p className="results__description">Your BMI is {bmi}</p>
        </aside>
    );
};

export default Results;
