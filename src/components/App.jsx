import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import Header from './Header/Header.jsx';
import GenderSwitcher from './GenderSwitcher/GenderSwitcher.jsx';
import InputsList from './InputsList/InputsList.jsx';
import Button from './Button/Button.jsx';
import Results from './Results/Results.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isResultsOpen: false
        };
    }

    changeValue = (key, value) => {
        if (isNaN(value)) return;
        value = parseFloat(value);
        if (value < 0) value = 0;
        if (key === 'height') this.props.setHeight(value);
        if (key === 'weight') this.props.setWeight(value);
        if (key === 'age') this.props.setAge(value);
    }

    changeGender = gender => this.setState({ gender });

    calculateResult = () => {
        const { height, weight, age, gender } = this.props;
        if (height === 0 || weight === 0 || age === 0 || gender === '') return;

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

        this.props.setBmi(bmi);
        this.props.setResult(result);
        this.openResults();
    }

    closeResults = () => this.setState({ isResultsOpen: false });

    openResults = () => this.setState({ isResultsOpen: true });

    render() {
        return (
            <div className="app">
                {
                    this.state.isResultsOpen &&
                    <Results
                        onClose={this.closeResults}
                        results={{
                            result: this.props.result,
                            bmi: this.props.bmi
                        }}
                    />
                }
                <Header onBtnClick={this.props.resetValues}/>
                <GenderSwitcher
                    gender={this.props.gender}
                    onChange={this.props.setGender}
                />
                <InputsList
                    onChange={this.changeValue}
                    values={
                        {
                            height: this.props.height,
                            weight: this.props.weight,
                            age: this.props.age
                        }
                    }
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
