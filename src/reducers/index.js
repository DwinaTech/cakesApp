import { combineReducers } from 'redux';
import { listOfCakes, favoriteCakes } from './storeApiData';
export default combineReducers({
    listOfCakes,
    favoriteCakes
});