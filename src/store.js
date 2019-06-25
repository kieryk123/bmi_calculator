import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    height: 173,
    weight: 75,
    age: 21,
    gender: 'male',
    bmi: null,
    result: ''
};

const data = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_HEIGHT':
            return {
                ...state,
                height: action.height
            }
        case 'SET_WEIGHT':
            return {
                ...state,
                weight: action.weight
            }
        case 'SET_AGE':
            return {
                ...state,
                age: action.age
            }
        case 'SET_GENDER':
            return {
                ...state,
                gender: action.gender
            }
        case 'SET_BMI':
            return {
                ...state,
                bmi: action.bmi
            }
        case 'SET_RESULT':
            return {
                ...state,
                result: action.result
            }
        case 'RESET_VALUES':
            return {
                height: 0,
                weight: 0,
                age: 0,
                gender: '',
                bmi: null,
                result: ''
            }
        default:
            return state;
    }
}

const store = createStore(data, composeWithDevTools());

export default store;
