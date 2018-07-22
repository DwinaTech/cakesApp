import { LIST_OF_CAKES, FAVORITE_CAKES } from '../actions/type';

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

export function favoriteCakes(state = [], action = {}) {
    switch (action.type) {
        case FAVORITE_CAKES:
            return {
                favoriteCakes: action.favoriteCakes
            }
        default:
            return state;
    }
}