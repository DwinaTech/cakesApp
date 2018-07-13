import { LIST_OF_CAKES } from '../actions/type';

export function listOfCakes(state= [], action = {}) {
    switch(action.type){
        case LIST_OF_CAKES:
        return {
            listOfCakes: action.listOfCakes
        };
        default:
        return state;
    }
}