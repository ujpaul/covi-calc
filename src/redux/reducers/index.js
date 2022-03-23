import {combineReducers} from 'redux';
import {country} from './country';
import {continents} from './continents'

export default combineReducers({
    country,
    continents
});