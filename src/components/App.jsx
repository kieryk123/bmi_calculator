import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import Header from './Header/Header.jsx';
import GenderSwitcher from './GenderSwitcher/GenderSwitcher.jsx';
import InputsList from './InputsList/InputsList.jsx';
import Button from './Button/Button.jsx';
import Results from './Results/Results.jsx';

class App extends Component {
    state = {
        resultsVisibility: false
    };

    changeValue = (key, value) => {
        const { setHeight, setWeight, setAge } = this.props;
        if (isNaN(value)) return;
        value = parseFloat(value);
        if (value < 0) value = 0;

        switch (key) {
            case 'height':
                setHeight(value);
                break;
            case 'weight':
                setWeight(value);
                break;
            case 'age':
                setAge(value);
                break;
        }
    }

    changeGender = gender => this.setState({ gender });

    calculateResult = () => {
        const { height, weight, age, gender, setBmi, setResult } = this.props;
        const fieldsAreEmpty = !height || !weight || !age || gender.length === 0;

        if (fieldsAreEmpty) {
            return;
        }

        const bmi = Number((weight / ((height / 100) ** 2))).toFixed(2);
        let result = '';

        if (bmi < 18.5) {
            result = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            result = 'Healthy';
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            result = 'Overweight';
        } else if (bmi >= 30) {
            result = 'Obese';
        }

        setBmi(bmi);
        setResult(result);
        this.hideResults();
    }

    showResults = () => this.setState({ resultsVisibility: false });

    hideResults = () => this.setState({ resultsVisibility: true });

    render() {
        const { resultsVisibility } = this.state;
        const { result, bmi, height, weight, age, resetValues, gender, setGender } = this.props;

        return (
            <div className="app">
                {
                    resultsVisibility &&
                    <Results
                        onClose={this.showResults}
                        results={{ result, bmi }}
                    />
                }
                <Header onBtnClick={resetValues}/>
                <GenderSwitcher
                    gender={gender}
                    onChange={setGender}
                />
                <InputsList
                    onChange={this.changeValue}
                    values={{ height, weight, age }}
                />
                <Button
                    onClick={() => this.calculateResult()}
                    primary
                >Calculate your BMI</Button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setHeight: value => dispatch({ type: 'SET_HEIGHT', height: value }),
    setWeight: value => dispatch({ type: 'SET_WEIGHT', weight: value }),
    setAge: value => dispatch({ type: 'SET_AGE', age: value }),
    setGender: value => dispatch({ type: 'SET_GENDER', gender: value }),
    setBmi: value => dispatch({ type: 'SET_BMI', bmi: value }),
    setResult: value => dispatch({ type: 'SET_RESULT', result: value }),
    resetValues: () => dispatch({ type: 'RESET_VALUES' })
})

const mapStateToProps = state => ({
    height: state.height,
    weight: state.weight,
    age: state.age,
    gender: state.gender,
    bmi: state.bmi,
    result: state.result
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
