import React from 'react';
import Button from '../Button/Button.jsx';

const Header = ({ onBtnClick }) => {
    return (
        <header className="header">
            <h1 className="header__title">BMI Calculator</h1>
            <Button
                onClick={onBtnClick}
                square
                icon={<img src={require('../../images/reset-icon.svg')} alt=""/>}
            />
        </header>
    );
};

export default Header;
