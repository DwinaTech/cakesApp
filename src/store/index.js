import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import toDoApp from '../reducers';

const store = createStore(
    toDoApp, 
    compose(
        applyMiddleware(thunk), 
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;
