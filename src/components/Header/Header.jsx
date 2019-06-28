import React from 'react';
import Button from '../Button/Button.jsx';
import resetIcon from '../../images/reset-icon.svg';

const Header = ({ onBtnClick }) => {
    return (
        <header className="header">
            <h1 className="header__title">BMI Calculator</h1>
            <Button onClick={onBtnClick} square>
                <img width="28px" height="28px" src={resetIcon} alt=""/>
            </Button>
        </header>
    );
};

export default Header;
