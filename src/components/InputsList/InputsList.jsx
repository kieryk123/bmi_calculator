import React from 'react';
import Input from '../Input/Input.jsx';

const InputsList = ({ onChange, values }) => {
    const { height, weight, age } = values;

    return (
        <div className="inputs-list">
            <div className="inputs-list__row">
                <div className="inputs-list__row-title">
                    cm
                </div>
                <div className="inputs-list__row-content">
                    <Input
                        value={height}
                        onChange={onChange}
                        type="height"
                    />
                </div>
            </div>
            <div className="inputs-list__row">
                <div className="inputs-list__row-title">
                    kg
                </div>
                <div className="inputs-list__row-content">
                    <Input
                        value={weight}
                        onChange={onChange}
                        type="weight"
                    />
                </div>
            </div>
            <div className="inputs-list__row">
                <div className="inputs-list__row-title">
                    age
                </div>
                <div className="inputs-list__row-content">
                    <Input
                        value={age}
                        onChange={onChange}
                        type="age"
                    />
                </div>
            </div>
        </div>
    );
};

export default InputsList;
