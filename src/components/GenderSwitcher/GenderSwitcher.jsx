import React from 'react';
import maleIcon from '../../images/male-icon.svg';
import femaleIcon from '../../images/female-icon.svg';

const GenderSwitcher = ({ onChange, gender }) => {
    const genres = Object.freeze({
        FEMALE: 'female',
        MALE: 'male'
    });

    return (
        <div className="gender-switcher">
            {
                Object.values(genres).map(value => (
                    <button
                        key={value}
                        onClick={() => onChange(value)}
                        className={gender === value ? 'gender-switcher__btn gender-switcher__btn--active' : 'gender-switcher__btn'}
                    >
                        <img
                            className="gender-switcher__btn-icon"
                            src={value === genres.MALE ? maleIcon : femaleIcon}
                            alt={`${value} gender`}
                        />
                        <span className="gender-switcher__btn-title">{value}</span>
                    </button>
                ))
            }
        </div>
    );
};


export default GenderSwitcher;
