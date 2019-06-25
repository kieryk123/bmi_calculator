import React, { Component } from 'react';

const GenderSwitcher = ({ onChange, gender }) => {
    return (
        <div className="gender-switcher">
            <button
                onClick={() => onChange('male')}
                className={gender === 'male' ? 'gender-switcher__btn gender-switcher__btn--active' : 'gender-switcher__btn'}
            >
                <img
                    className="gender-switcher__btn-icon"
                    src={require('../../images/male-icon.svg')}
                    alt=""
                />
                <span className="gender-switcher__btn-title">Male</span>
            </button>
            <button
                onClick={() => onChange('female')}
                className={gender === 'female' ? 'gender-switcher__btn gender-switcher__btn--active' : 'gender-switcher__btn'}
            >
                <img
                    className="gender-switcher__btn-icon"
                    src={require('../../images/female-icon.svg')}
                    alt=""
                />
                <span className="gender-switcher__btn-title">Female</span>
            </button>
        </div>
    );
};


export default GenderSwitcher;
