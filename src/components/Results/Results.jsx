import React from 'react';
import Button from '../Button/Button.jsx';

const Results = ({ results, onClose }) => {
    return (
        <aside className="results">
            <div className="results__head">
                <Button
                    onClick={onClose}
                    square
                    icon={
                        <img
                            width="28px"
                            height="28px"
                            src={require('../../images/close-icon.svg')} alt=""
                        />
                    }
                />
            </div>
            <h1 className="results__title">You are {results.result}</h1>
            <p className="results__description">Your BMI is {results.bmi}</p>
        </aside>
    );
};

export default Results;
